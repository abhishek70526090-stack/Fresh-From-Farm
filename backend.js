let ffSupabase=null, ffUser=null;
async function initBackend(){
 if(!window.FF_CONFIG||window.FF_CONFIG.SUPABASE_URL.startsWith("PASTE_")) return false;
 ffSupabase=window.supabase.createClient(window.FF_CONFIG.SUPABASE_URL,window.FF_CONFIG.SUPABASE_ANON_KEY);
 const {data}=await ffSupabase.auth.getSession(); ffUser=data.session?.user||null;
 ffSupabase.auth.onAuthStateChange((_e,s)=>{ffUser=s?.user||null;updateAuthButton();}); return true;
}
function updateAuthButton(){const b=document.querySelector(".actions button:first-child");if(b)b.textContent=ffUser?"👤 Account":"👤 Login";}
async function backendSignUp(email,password,name){if(!ffSupabase)return {error:{message:"Backend configured नहीं है"}};return await ffSupabase.auth.signUp({email,password,options:{data:{full_name:name}}});}
async function backendSignIn(email,password){if(!ffSupabase)return {error:{message:"Backend configured नहीं है"}};return await ffSupabase.auth.signInWithPassword({email,password});}
async function saveOrderToBackend(order){
 if(!ffSupabase)return {data:null,error:new Error("Backend configured नहीं है")};
 const {data:auth}=await ffSupabase.auth.getUser(); const uid=auth.user?.id||null;
 if(!uid)return {data:null,error:new Error("Please login before placing an online order")};
 const {data,error}=await ffSupabase.from("orders").insert({user_id:uid,customer_name:order.name,phone:order.phone,address:order.address,total:order.total,status:"pending",payment_method:order.payment||"COD"}).select().single();
 return {data,error};
}
initBackend().then(updateAuthButton);
