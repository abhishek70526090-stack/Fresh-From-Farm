# Fresh From Farm 2.0 — E-commerce + Social

यह version GitHub Pages पर frontend के साथ Supabase backend जोड़ने के लिए तैयार है।

## Real features के लिए Supabase setup

### 1. Project
Supabase में नया project बनाइए।

### 2. Authentication
Authentication → Providers में Email/Password enable करें।

### 3. Storage
Storage में `media` नाम का bucket बनाइए। Public media के लिए public bucket इस्तेमाल कर सकते हैं; बेहतर security के लिए private bucket + signed URLs लगाएँ।

### 4. Tables
इन tables को बनाइए:
- `profiles`: id (uuid, PK), full_name, avatar_url, bio, created_at
- `products`: id, seller_id, name, category, price, unit, image_url, stock, created_at
- `posts`: id, user_id, caption, media_url, created_at
- `comments`: id, post_id, user_id, text, created_at
- `likes`: post_id, user_id, created_at (post_id + user_id unique)
- `follows`: follower_id, following_id, created_at (pair unique)
- `orders`: id, user_id, customer_name, phone, address, total, status, created_at
- `order_items`: id, order_id, product_id, quantity, price

### 5. Row Level Security
RLS जरूर enable करें। User को केवल अपना profile/order manage करने दें; public posts/products read हो सकते हैं। Seller केवल अपने products edit/delete करे।

### 6. Config
`config.js` में अपना Supabase URL और anon/publishable key डालें।

**Service role key कभी भी GitHub या browser code में न डालें।**

### 7. GitHub Pages
सभी files repository में upload करें:
- index.html
- style.css
- app.js
- backend.js
- config.js

## अभी क्या जुड़ा है
- Supabase client
- Login session detection
- Sign-up/sign-in functions
- Media upload helper
- Post save/load helpers
- Order save helper

## अगला production चरण
इसके बाद UI को इन backend functions से जोड़ना है:
1. Real signup/login screen
2. Real profile/follow system
3. Real photo/video posts
4. Real likes/comments
5. Seller dashboard
6. Admin approval
7. Real-time chat/notifications
8. Razorpay/other payment gateway via a secure server/edge function
9. Order status tracking

Payment gateway के secret keys कभी frontend में नहीं रखें।
