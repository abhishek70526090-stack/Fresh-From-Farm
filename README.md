# Fresh From Farm — Order Email Package

Based on the current Fresh From Farm GitHub repository. The current site stores demo orders in localStorage; this package adds the backend path needed to save an order to Supabase and email the owner when an order is created.

## Setup
1. Create a Supabase project.
2. Run `database/schema.sql` in Supabase SQL Editor.
3. In `config.js`, enter your Supabase URL and anon/publishable key.
4. Deploy `supabase/functions/order-email` as a Supabase Edge Function.
5. Set Edge Function secrets: `RESEND_API_KEY` and `ORDER_EMAIL_TO=Abhishek70526090@gmail.com`.
6. Create a Supabase Database Webhook for `public.orders` INSERT that calls the `order-email` Edge Function.
7. Replace the files in the GitHub repository with the package files and enable GitHub Pages.

IMPORTANT: Never put a Supabase service-role key or email API key in browser JavaScript.
