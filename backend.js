// Fresh From Farm — Supabase backend bridge
let ffSupabase = null;
let ffUser = null;

async function initBackend() {
  if (!window.FF_CONFIG || window.FF_CONFIG.SUPABASE_URL.startsWith("PASTE_")) return false;
  ffSupabase = window.supabase.createClient(
    window.FF_CONFIG.SUPABASE_URL,
    window.FF_CONFIG.SUPABASE_ANON_KEY
  );
  const { data } = await ffSupabase.auth.getSession();
  ffUser = data.session?.user || null;
  ffSupabase.auth.onAuthStateChange((_event, session) => {
    ffUser = session?.user || null;
    updateAuthButton();
  });
  return true;
}

function updateAuthButton() {
  const btn = document.querySelector(".actions button:first-child");
  if (btn) btn.textContent = ffUser ? "👤 Account" : "👤 Login";
}

async function backendSignUp(email, password, name) {
  if (!ffSupabase) return { error: { message: "Backend configured नहीं है" } };
  const result = await ffSupabase.auth.signUp({ email, password, options:{ data:{ full_name:name } }});
  if (!result.error && result.data.user) {
    await ffSupabase.from("profiles").upsert({
      id: result.data.user.id, full_name:name
    });
  }
  return result;
}

async function backendSignIn(email, password) {
  if (!ffSupabase) return { error: { message: "Backend configured नहीं है" } };
  return await ffSupabase.auth.signInWithPassword({ email, password });
}

async function backendSignOut() {
  if (ffSupabase) await ffSupabase.auth.signOut();
}

async function uploadPostMedia(file) {
  if (!ffSupabase || !ffUser || !file) return null;
  const ext = file.name.split(".").pop();
  const path = `${ffUser.id}/${crypto.randomUUID()}.${ext}`;
  const { error } = await ffSupabase.storage.from("media").upload(path, file, { upsert:false });
  if (error) throw error;
  const { data } = ffSupabase.storage.from("media").getPublicUrl(path);
  return data.publicUrl;
}

async function savePostToBackend(text, mediaUrl) {
  if (!ffSupabase || !ffUser) return null;
  const { data, error } = await ffSupabase.from("posts").insert({
    user_id: ffUser.id, caption:text, media_url:mediaUrl
  }).select().single();
  if (error) throw error;
  return data;
}

async function loadBackendPosts() {
  if (!ffSupabase) return null;
  const { data, error } = await ffSupabase
    .from("posts")
    .select("id,caption,media_url,created_at,profiles(full_name)")
    .order("created_at",{ascending:false}).limit(50);
  if (error) return null;
  return data;
}

async function saveOrderToBackend(order) {
  if (!ffSupabase || !ffUser) return null;
  const { data, error } = await ffSupabase.from("orders").insert({
    user_id:ffUser.id, customer_name:order.name, phone:order.phone,
    address:order.address, total:order.total, status:"pending"
  }).select().single();
  if (error) throw error;
  return data;
}

initBackend().then(()=>updateAuthButton());
