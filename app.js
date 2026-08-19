const products=[
{id:1,name:"Organic Mansoori Rice",cat:"Organic Food",price:50,unit:"1 kg",icon:"🍚"},
{id:2,name:"Fresh Organic Vegetables",cat:"Organic Vegetables",price:80,unit:"1 kg",icon:"🥬"},
{id:3,name:"Natural Humic",cat:"Farm Inputs",price:299,unit:"1 litre",icon:"🧴"},
{id:4,name:"Cow Dung Ash",cat:"Farm Inputs",price:149,unit:"1 kg",icon:"🌱"},
{id:5,name:"FFJ Fermented Fruit Juice",cat:"Farm Inputs",price:199,unit:"1 litre",icon:"🍎"},
{id:6,name:"Fresh Potato",cat:"Organic Vegetables",price:40,unit:"1 kg",icon:"🥔"},
{id:7,name:"Organic Cauliflower",cat:"Organic Vegetables",price:60,unit:"1 kg",icon:"🥦"},
{id:8,name:"Trichoderma Bio Input",cat:"Farm Inputs",price:249,unit:"500 g",icon:"🧫"}];

let cart=JSON.parse(localStorage.getItem("ff_cart")||"[]");
let posts=JSON.parse(localStorage.getItem("ff_posts")||"null")||[
{user:"Fresh From Farm",avatar:"🌾",time:"आज",img:"🥬",text:"आज की ताज़ा organic सब्ज़ियाँ खेत से तैयार हैं। सीधे घर तक ऑर्डर करें।",likes:24},
{user:"Kisan मित्र",avatar:"👨‍🌾",time:"कल",img:"🌾",text:"मेरी खेती में natural inputs का इस्तेमाल। आप भी अपनी खेती की तस्वीर शेयर करें।",likes:17}
];
let orders=JSON.parse(localStorage.getItem("ff_orders")||"[]");

function money(n){return "₹"+n}
function renderProducts(target="products"){
 const cat=document.getElementById("category")?.value||"all", q=(document.getElementById("searchInput")?.value||"").toLowerCase();
 const list=products.filter(p=>(cat==="all"||p.cat===cat)&&(!q||p.name.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q)));
 const html=list.map(p=>`<div class="card"><div class="pic">${p.icon}</div><div class="cardBody"><span class="tag">${p.cat}</span><h3>${p.name}</h3><div class="price">${money(p.price)} <small>/ ${p.unit}</small></div><button class="add" onclick="addCart(${p.id})">🛒 Cart में डालें</button></div></div>`).join("");
 document.getElementById(target).innerHTML=html||"<p>कोई product नहीं मिला।</p>";
}
function renderHome(){renderProducts("homeProducts")}
function addCart(id){cart.push(id);localStorage.setItem("ff_cart",JSON.stringify(cart));updateCart();toast("Product cart में जोड़ दिया गया");}
function updateCart(){document.getElementById("cartCount").textContent=cart.length}
function showPage(id,btn){
 document.querySelectorAll(".page").forEach(x=>x.classList.add("hidden"));document.getElementById(id).classList.remove("hidden");
 document.querySelectorAll(".nav button").forEach(x=>x.classList.remove("active"));if(btn)btn.classList.add("active");
 if(id==="shop")renderProducts();if(id==="home")renderHome();if(id==="social")renderFeed();if(id==="orders")renderOrders();scrollTo({top:0,behavior:"smooth"});
}
function searchAll(){showPage("shop");renderProducts()}
function renderFeed(){
 document.getElementById("feed").innerHTML=posts.map((p,i)=>`<article class="post"><div class="postHead"><div class="avatar">${p.avatar}</div><div><b>${p.user}</b><br><small>${p.time}</small></div></div><div class="postImg">${p.img}</div><div class="postText">${p.text}</div><div class="postActions"><button onclick="likePost(${i})">❤️ ${p.likes}</button><button onclick="commentPost(${i})">💬 Comment</button><button onclick="sharePost()">↗ Share</button></div></article>`).join("");
}
function likePost(i){posts[i].likes++;savePosts();renderFeed()}
function commentPost(i){const c=prompt("अपना comment लिखें:");if(c)toast("Comment जोड़ दिया गया (demo)")}
function sharePost(){navigator.clipboard?.writeText(location.href);toast("Post link copy हो गया")}
function savePosts(){localStorage.setItem("ff_posts",JSON.stringify(posts))}
function openCreatePost(){openModal(`<h2>Create Post</h2><label>आपका नाम</label><input id="puser" placeholder="किसान / ग्राहक नाम"><label>Photo/Video (demo)</label><input type="file" accept="image/*,video/*"><label>Caption</label><textarea id="pcaption" rows="4" placeholder="आज खेत में..."></textarea><button class="primary" onclick="createPost()">Post Publish करें</button>`)}
function createPost(){const u=document.getElementById("puser").value||"Fresh Farmer";const t=document.getElementById("pcaption").value||"मेरी आज की farm update 🌱";posts.unshift({user:u,avatar:"👨‍🌾",time:"अभी",img:"🌱",text:t,likes:0});savePosts();closeModal();showPage("social");renderFeed();toast("Post publish हो गया")}
function openSell(){openModal(`<h2>🌾 Sell Product</h2><p>यह seller form बाद में database से जुड़ेगा। अभी product request demo में save होगी।</p><label>Product name</label><input placeholder="जैसे Organic Tomato"><label>Price</label><input type="number" placeholder="₹"><label>Details</label><textarea placeholder="Product की जानकारी"></textarea><button class="primary" onclick="closeModal();toast('Product request submit हो गई')">Submit for Approval</button>`)}
function showCart(){
 const rows=cart.map((id,i)=>{const p=products.find(x=>x.id===id);return `<div class="order"><b>${p.icon} ${p.name}</b><br>${money(p.price)} / ${p.unit} <button onclick="removeCart(${i})">✕</button></div>`}).join("");
 const total=cart.reduce((s,id)=>s+products.find(p=>p.id===id).price,0);
 openModal(`<h2>🛒 आपका Cart</h2>${rows||"<p>Cart खाली है।</p>"}<hr><h3>Total: ${money(total)}</h3>${cart.length?'<button class="primary" onclick="checkout()">Checkout</button>':""}`)
}
function removeCart(i){cart.splice(i,1);localStorage.setItem("ff_cart",JSON.stringify(cart));updateCart();showCart()}
function checkout(){openModal(`<h2>📦 Checkout</h2><label>नाम</label><input id="cname" placeholder="आपका नाम"><label>मोबाइल</label><input id="cphone" placeholder="10 digit mobile"><label>पूरा पता</label><textarea id="caddress" rows="3" placeholder="Delivery address"></textarea><label>Payment</label><select id="pay"><option>Cash on Delivery</option><option>UPI (Gateway जोड़ना बाकी)</option></select><button class="primary" onclick="placeOrder()">Order Place करें</button>`)}
function placeOrder(){const name=document.getElementById("cname").value,phone=document.getElementById("cphone").value,address=document.getElementById("caddress").value;if(!name||!phone||!address){toast("कृपया सभी details भरें");return}const total=cart.reduce((s,id)=>s+products.find(p=>p.id===id).price,0);orders.unshift({id:"FF"+Date.now().toString().slice(-6),name,phone,address,total,status:"Pending"});localStorage.setItem("ff_orders",JSON.stringify(orders));cart=[];localStorage.setItem("ff_cart","[]");updateCart();closeModal();showPage("orders");renderOrders();toast("Order successfully place हो गया")}
function renderOrders(){document.getElementById("ordersList").innerHTML=orders.length?orders.map(o=>`<div class="order"><b>Order #${o.id}</b><br>Total: ${money(o.total)}<br>Customer: ${o.name}<br>Status: <strong>${o.status}</strong></div>`).join(""):"<p>अभी कोई order नहीं है।</p>"}
function openAuth(){openModal(`<h2>👤 Login / Sign Up</h2><label>Mobile / Email</label><input placeholder="Mobile या email"><label>Password</label><input type="password" placeholder="Password"><button class="primary" onclick="closeModal();toast('Demo login successful')">Continue</button><p><small>Real login के लिए Firebase/Supabase backend जोड़ना होगा।</small></p>`)}
function openModal(html){document.getElementById("modalContent").innerHTML=html;document.getElementById("modal").classList.remove("hidden")}
function closeModal(){document.getElementById("modal").classList.add("hidden")}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.style.display="block";setTimeout(()=>t.style.display="none",2200)}
renderHome();renderProducts();renderFeed();updateCart();
