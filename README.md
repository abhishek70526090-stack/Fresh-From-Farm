<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Farm Fresh Potatoes - Fresh From Farm</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600&amp;family=Plus+Jakarta+Sans:wght@600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-tint": "#3b6934",
                        "background": "#f8faf8",
                        "error": "#ba1a1a",
                        "outline-variant": "#c2c9bb",
                        "error-container": "#ffdad6",
                        "surface-container-high": "#e6e9e7",
                        "surface-container-lowest": "#ffffff",
                        "secondary-fixed": "#94f990",
                        "primary-fixed-dim": "#a1d494",
                        "tertiary": "#4b3600",
                        "surface-variant": "#e1e3e1",
                        "on-background": "#191c1b",
                        "surface-container": "#eceeec",
                        "on-surface-variant": "#42493e",
                        "on-error-container": "#93000a",
                        "outline": "#72796e",
                        "on-error": "#ffffff",
                        "on-secondary": "#ffffff",
                        "on-surface": "#191c1b",
                        "surface-container-low": "#f2f4f2",
                        "on-tertiary-container": "#f6b900",
                        "on-primary": "#ffffff",
                        "primary": "#154212",
                        "on-primary-fixed": "#002201",
                        "secondary": "#006e1c",
                        "surface": "#f8faf8",
                        "surface-bright": "#f8faf8",
                        "primary-fixed": "#bcf0ae",
                        "on-tertiary-fixed-variant": "#5b4300",
                        "inverse-surface": "#2e3130",
                        "on-secondary-fixed": "#002204",
                        "inverse-on-surface": "#eff1ef",
                        "on-tertiary-fixed": "#261a00",
                        "tertiary-fixed-dim": "#fabd00",
                        "tertiary-container": "#674c00",
                        "on-secondary-fixed-variant": "#005313",
                        "on-primary-container": "#9dd090",
                        "secondary-container": "#91f78e",
                        "on-primary-fixed-variant": "#23501e",
                        "on-tertiary": "#ffffff",
                        "inverse-primary": "#a1d494",
                        "primary-container": "#2d5a27",
                        "on-secondary-container": "#00731e",
                        "secondary-fixed-dim": "#78dc77",
                        "surface-dim": "#d8dad9",
                        "tertiary-fixed": "#ffdf9e",
                        "surface-container-highest": "#e1e3e1"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "sm": "8px",
                        "md": "16px",
                        "lg": "24px",
                        "margin-mobile": "20px",
                        "xl": "32px",
                        "gutter": "16px",
                        "unit": "4px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "headline-lg-mobile": ["Plus Jakarta Sans"],
                        "body-lg": ["Be Vietnam Pro"],
                        "label-sm": ["Be Vietnam Pro"],
                        "label-md": ["Be Vietnam Pro"],
                        "headline-md": ["Plus Jakarta Sans"],
                        "headline-lg": ["Plus Jakarta Sans"],
                        "headline-xl": ["Plus Jakarta Sans"],
                        "body-md": ["Be Vietnam Pro"]
                    },
                    "fontSize": {
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }]
                    }
                }
            }
        }
    </script>
<style>
        .texture-bg {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E");
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md texture-bg min-h-screen flex flex-col">
<!-- TopNavBar -->
<header class="w-full top-0 sticky bg-surface/80 backdrop-blur-md shadow-sm z-50">
<div class="flex justify-between items-center px-lg py-md max-w-7xl mx-auto">
<div class="flex items-center gap-md">
<img alt="Fresh From Farm" class="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1WIKEygshjrWT9XLfYtKMX6TMXTd7wpiLnL6t5EaeZuQNPhFnmx1Vz76HJPzPkytySTrf01s_2m-IL29SHlIFqdECCOjVZ4rVB-QTd3ke-v9BrgHMBtiAY5yVNDeUwqQyk2i5_oT4JtAHetFUyS0Y9pemtvcFCKc1a3w5Mt9axNj1lVWqk389d5YdSCeceKfXv6997iyeWXXqNrm3ESyuKIyrbPB1BmAOW_uPl1rIvFwvWAAZG2cnAd8DcE"/>
<span class="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary hidden md:block">Fresh From Farm</span>
</div>
<nav class="hidden md:flex items-center gap-lg font-body-md text-body-md">
<a class="text-primary dark:text-primary-fixed-dim border-b-2 border-primary pb-1 transition-all active:scale-95" href="#">Marketplace</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200 active:scale-95" href="#">Bulk Orders</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200 active:scale-95" href="#">Farm Stories</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200 active:scale-95" href="#">About Us</a>
</nav>
<div class="flex items-center gap-md text-primary dark:text-primary-fixed-dim">
<button class="p-xs hover:bg-surface-variant rounded-full transition-colors">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">shopping_cart</span>
</button>
<button class="p-xs hover:bg-surface-variant rounded-full transition-colors">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">account_circle</span>
</button>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-grow max-w-7xl mx-auto px-margin-mobile md:px-lg py-xl w-full">
<!-- Breadcrumbs -->
<nav class="text-on-surface-variant font-label-sm text-label-sm mb-lg flex items-center gap-xs">
<a class="hover:text-primary transition-colors" href="#">Marketplace</a>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<a class="hover:text-primary transition-colors" href="#">Vegetables</a>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<a class="hover:text-primary transition-colors" href="#">Root</a>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<span class="text-primary font-bold">Farm Fresh Potatoes</span>
</nav>
<div class="grid grid-cols-1 md:grid-cols-12 gap-xl">
<!-- Image Gallery Bento -->
<div class="md:col-span-7 flex flex-col gap-sm">
<div class="w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm relative">
<img class="w-full h-full object-cover" data-alt="A beautifully composed, high-resolution photograph of freshly harvested, earth-dusted organic rustic potatoes overflowing from a woven wicker basket. The setting is a sunlit rustic wooden table in a well-lit barn or modern farmhouse kitchen. The lighting is natural, warm, and highly professional, creating soft shadows that emphasize the tactile, organic texture of the potato skin. The mood is wholesome, premium, and connected to nature. The overall color palette features earthy browns, warm sunlight yellows, and subtle hints of deep forest green in the slightly blurred background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtFG2XyE1fCIZf84sqqkRYVQbI3eVzeenr3enzcNQnMrDsUfn8OvOA0avI9aqOmgOhJNuoaITu2X7SVw4fx_i5Ik4QXGKWUL04LuGwF0J6c5wbBwh97qWyTOwTQlutSZboKJ5EHEj4Di0Cx77-9o0E9kXMhLwDCak9jljooAX2iAUdLWRSa62eUDaPPU6jMK5SSRpwWCK7l4a0b5-cj8M41k_NJxICtNo1BtQG3lZX4Fd_jZGNtzDRZA"/>
<!-- Badges -->
<div class="absolute top-md left-md flex gap-sm">
<span class="bg-secondary text-on-secondary px-md py-xs rounded-full font-label-sm text-label-sm shadow-sm flex items-center gap-xs">
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">eco</span>
                            Organic
                        </span>
<span class="bg-tertiary-fixed-dim text-on-tertiary-fixed px-md py-xs rounded-full font-label-sm text-label-sm shadow-sm">
                            Locally Grown
                        </span>
</div>
</div>
<!-- Thumbnails -->
<div class="grid grid-cols-4 gap-sm">
<div class="aspect-square rounded-lg overflow-hidden bg-surface-container-lowest border-2 border-primary cursor-pointer">
<img class="w-full h-full object-cover" data-alt="Close-up macro shot of the earthy texture of rustic farm fresh potatoes sitting on a clean wooden surface, natural warm lighting emphasizing freshness and premium organic quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPMRU1_16I0jBHITdl3KTI9ktwacmFw-UfUhE50N5yHSAKR6Wb_ks2jq02MtuKdjA1O0h12lnvc8oMGzpvwyL-NYMtGrw1bnwNCbUOawUEO1phfzE4dgmx6JcwLklLPpm1de3CnSqXUOODxd1VoPJDNjaIun4DQughdw1qARJX0HiV03nEKg_E4ajdrqsqVr1FKAH3F7vn0JEpJaHjbvsYjdmACuAbIl4apMlyZVSpyGzi7tMDteAv-Q"/>
</div>
<div class="aspect-square rounded-lg overflow-hidden bg-surface-container-lowest border-2 border-transparent hover:border-outline-variant cursor-pointer transition-colors">
<img class="w-full h-full object-cover" data-alt="A handful of freshly washed rustic potatoes held by farmer's hands, set against a blurred background of green fields. Bright, optimistic natural lighting, premium agricultural aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB04TjeFWlUWQEBD1r3us-enA8arkglpMYBIgnmEuR6V8YfKW3n_x8yDRDtWISetGVH7OnHfjEkFG2UbzQ28rNguMhEONbhKOLQsv2YOpfmvNz0xA1OGeWNKDhrFepN675Kl-PiU2GFJwYT1K88yGWFc-9Rtf_IooWQ5Blfiejy3-dEGZYsg7f9pKkOoFw57C7W3T-0C6pMFHOChyZeRBxo8OTXAuMp3qoTxJ0p0Eo3oRufOscBbUcKFQ"/>
</div>
<div class="aspect-square rounded-lg overflow-hidden bg-surface-container-lowest border-2 border-transparent hover:border-outline-variant cursor-pointer transition-colors">
<img class="w-full h-full object-cover" data-alt="Sliced raw rustic potatoes on a premium cutting board, next to fresh herbs like rosemary. Culinary prep setting, clean bright natural lighting, modern high-end kitchen aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXs_Hl6RbQ5zV5G8Qyd2mKcLfQBbS94bxBevKk0y9DX3IUeFTCC5NPQiWyjzAHvR6wG63cjp_88syiuB2YjP1cA-xVzmsWmo7MfGA9mRBEYPOqgOmwi6jICOcLOQ4flXZ9aCzJRbJabn6SIgORXDdCjCw2LXn6H8pEjOST0RJrA0-oaZG_p8Ct6EKbY4M4W1m7UvAniqDsKJ1mYI20U343UyA_B1TZnGZzjjpIvU4xc7Y6ayc5N16elQ"/>
</div>
<div class="aspect-square rounded-lg overflow-hidden bg-surface-container-lowest border-2 border-transparent hover:border-outline-variant cursor-pointer transition-colors">
<img class="w-full h-full object-cover" data-alt="A rustic burlap sack filled with organic potatoes sitting on a sunlit wooden porch, evoking an authentic farm-to-table origin story. Warm natural tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD00aFf6vvHSiZAEa47dB30nuTMzUEO0_EIjt2DrcV03JBbOz_Z75bgYLM9jx_NZf7wEEBKRfY2m2EpPMWvpDdC58ioUGbp2uFRsgqX2IWJ1y_CJwg2HLgw3xBAlE3GYdE7-1qNwDbkKnqxwAxVSx222hghuGbM9oqDrOmD66HQQDDwFjugP2DburbqoDLpRSoYF_gyFbvTt_ISW07yAs4fiVRsIIeE4W59V2J2OKbVv92KYGAdmhVq6w"/>
</div>
</div>
</div>
<!-- Product Details -->
<div class="md:col-span-5 flex flex-col gap-lg sticky top-32 h-fit">
<!-- Header -->
<div class="flex flex-col gap-sm">
<div class="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md">
<span class="material-symbols-outlined text-[20px] text-tertiary-fixed-dim" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="text-on-surface font-bold">4.8</span>
<span class="underline cursor-pointer hover:text-primary">(124 reviews)</span>
</div>
<h1 class="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface">Farm Fresh Potatoes</h1>
<div class="flex items-baseline gap-sm">
<span class="font-headline-lg text-headline-md md:text-headline-lg text-primary">$3.80</span>
<span class="font-body-md text-body-md text-on-surface-variant">/ kg</span>
</div>
</div>
<hr class="border-outline-variant/30"/>
<!-- Origin & Shipping -->
<div class="flex flex-col gap-md">
<div class="flex items-center gap-md p-md bg-surface-container-low rounded-lg border border-outline-variant/20">
<div class="bg-primary-container text-on-primary-container p-sm rounded-full">
<span class="material-symbols-outlined">local_shipping</span>
</div>
<div>
<p class="font-label-md text-label-md text-on-surface">Ships fresh tomorrow morning</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Order by 6 PM for next-day harvest.</p>
</div>
</div>
</div>
<!-- Weight Selection -->
<div class="flex flex-col gap-sm">
<label class="font-label-md text-label-md text-on-surface">Select Weight</label>
<div class="grid grid-cols-3 gap-sm">
<button class="py-md px-sm rounded-lg border-2 border-outline-variant bg-surface-container-lowest text-on-surface font-label-md hover:border-primary transition-colors focus:outline-none">
                            1 kg
                        </button>
<button class="py-md px-sm rounded-lg border-2 border-outline-variant bg-surface-container-lowest text-on-surface font-label-md hover:border-primary transition-colors focus:outline-none">
                            2 kg
                        </button>
<button class="relative py-md px-sm rounded-lg border-2 border-primary bg-primary/5 text-primary font-label-md transition-colors focus:outline-none">
                            5 kg
                            <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-tertiary-fixed-dim text-on-tertiary-fixed text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">Save 15%</span>
</button>
</div>
</div>
<!-- Actions -->
<div class="flex gap-md mt-sm items-center">
<!-- Quantity -->
<div class="flex items-center border border-outline-variant rounded-lg h-12 bg-surface-container-lowest">
<button class="px-md h-full text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[20px]">remove</span>
</button>
<span class="font-label-md text-label-md w-8 text-center">1</span>
<button class="px-md h-full text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[20px]">add</span>
</button>
</div>
<!-- Add to Cart -->
<button class="flex-1 h-12 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-sm active:scale-[0.98]">
<span class="material-symbols-outlined text-[20px]">shopping_cart</span>
                        Add to Cart
                    </button>
</div>
<!-- Description -->
<div class="mt-md flex flex-col gap-sm">
<h3 class="font-label-md text-label-md text-on-surface">About this harvest</h3>
<p class="font-body-md text-body-md text-on-surface-variant">
                        Our premium rustic potatoes are grown in rich, nutrient-dense organic soil. Hand-harvested for maximum freshness, they boast a robust, earthy flavor perfect for roasting, mashing, or hearty stews. Free from synthetic pesticides, they bring true field-to-table authenticity to your culinary creations.
                    </p>
</div>
<!-- Farmer Profile Mini -->
<div class="mt-sm p-md bg-surface-container rounded-lg border border-outline-variant/30 flex items-center gap-md">
<div class="w-12 h-12 rounded-full overflow-hidden bg-surface-variant">
<img class="w-full h-full object-cover" data-alt="Portrait of an authentic, friendly local farmer in a field, wearing a sun hat and durable farming clothes. Warm sunlight, high quality corporate modern agricultural portrait style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8_vKLgBLKuHOmQrGweONk8c8CJ6hRcdFKo-NSq7WkcV9KF_v4eP7wyeue5TBTufKBJ_YjZ5i0Iwz5ZmOMQAR8pvINzVncpPI2BXRJMJTiCaRB32cjL1kAikLjxPa1lt9d6GQymX-MFnGsL5ium7NVUMvWpF5b8Kv8i3RCzwtO18M4gG2GYfdOXNY1ODMB8A5nm1HU8mNLNw_GwA0ZoxPhVzlpoPU-Aq-AVEkBfw6Lzqfr10CuQtVZOA"/>
</div>
<div class="flex-1">
<p class="font-label-md text-label-md text-on-surface flex items-center gap-xs">
                            Grown by Miller Farms
                            <span class="material-symbols-outlined text-[16px] text-primary" style="font-variation-settings: 'FILL' 1;">verified</span>
</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">30 miles away • Lancaster Valley</p>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="w-full mt-xl bg-surface-container-highest dark:bg-surface-container-lowest">
<div class="flex flex-col md:flex-row justify-between items-start gap-lg px-lg py-xl max-w-7xl mx-auto">
<div class="flex flex-col gap-md">
<span class="font-headline-md text-headline-md text-primary">Fresh From Farm</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">© 2024 Fresh From Farm. Rooted in Transparency.</span>
</div>
<div class="flex flex-col md:flex-row gap-lg font-label-md text-label-md">
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Sustainability Report</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Farmer Support</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Contact Us</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Privacy Policy</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Terms of Service</a>
</div>
</div>
</footer>
</body></html><!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Farm Fresh Potatoes - Fresh From Farm</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600&amp;family=Plus+Jakarta+Sans:wght@600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "tertiary": "#4b3600",
                        "on-tertiary-fixed-variant": "#5b4300",
                        "inverse-on-surface": "#eff1ef",
                        "on-surface-variant": "#42493e",
                        "on-primary": "#ffffff",
                        "surface-tint": "#3b6934",
                        "background": "#f8faf8",
                        "outline-variant": "#c2c9bb",
                        "inverse-primary": "#a1d494",
                        "on-tertiary-fixed": "#261a00",
                        "surface-bright": "#f8faf8",
                        "on-secondary-fixed-variant": "#005313",
                        "primary": "#154212",
                        "on-primary-fixed": "#002201",
                        "surface-container-highest": "#e1e3e1",
                        "tertiary-container": "#674c00",
                        "surface-container-lowest": "#ffffff",
                        "primary-fixed-dim": "#a1d494",
                        "on-error-container": "#93000a",
                        "secondary-container": "#91f78e",
                        "primary-fixed": "#bcf0ae",
                        "outline": "#72796e",
                        "secondary-fixed-dim": "#78dc77",
                        "on-background": "#191c1b",
                        "on-secondary-container": "#00731e",
                        "surface-dim": "#d8dad9",
                        "surface-container-low": "#f2f4f2",
                        "on-secondary": "#ffffff",
                        "secondary": "#006e1c",
                        "on-primary-fixed-variant": "#23501e",
                        "on-tertiary": "#ffffff",
                        "on-tertiary-container": "#f6b900",
                        "tertiary-fixed": "#ffdf9e",
                        "error-container": "#ffdad6",
                        "inverse-surface": "#2e3130",
                        "tertiary-fixed-dim": "#fabd00",
                        "error": "#ba1a1a",
                        "surface-variant": "#e1e3e1",
                        "primary-container": "#2d5a27",
                        "on-surface": "#191c1b",
                        "on-secondary-fixed": "#002204",
                        "on-error": "#ffffff",
                        "surface": "#f8faf8",
                        "secondary-fixed": "#94f990",
                        "surface-container-high": "#e6e9e7",
                        "on-primary-container": "#9dd090",
                        "surface-container": "#eceeec"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "xs": "4px",
                        "sm": "8px",
                        "unit": "4px",
                        "md": "16px",
                        "xl": "32px",
                        "margin-mobile": "20px",
                        "gutter": "16px",
                        "lg": "24px"
                    },
                    "fontFamily": {
                        "headline-xl": ["Plus Jakarta Sans"],
                        "headline-md": ["Plus Jakarta Sans"],
                        "body-md": ["Be Vietnam Pro"],
                        "headline-lg-mobile": ["Plus Jakarta Sans"],
                        "label-sm": ["Be Vietnam Pro"],
                        "headline-lg": ["Plus Jakarta Sans"],
                        "label-md": ["Be Vietnam Pro"],
                        "body-lg": ["Be Vietnam Pro"]
                    },
                    "fontSize": {
                        "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .icon-fill {
            font-variation-settings: 'FILL' 1;
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md min-h-screen flex flex-col">
<!-- TopNavBar -->
<header class="bg-surface dark:bg-surface-dim w-full top-0 sticky bg-surface/80 backdrop-blur-md shadow-sm z-50">
<div class="flex justify-between items-center px-lg py-md max-w-7xl mx-auto">
<div class="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary">
                Fresh From Farm
            </div>
<nav class="hidden md:flex gap-lg">
<a class="text-primary dark:text-primary-fixed-dim border-b-2 border-primary pb-1 font-body-md text-body-md transition-all active:scale-95" href="#">Marketplace</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md transition-all active:scale-95" href="#">Bulk Orders</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md transition-all active:scale-95" href="#">Farm Stories</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md transition-all active:scale-95" href="#">About Us</a>
</nav>
<div class="flex items-center gap-md text-primary dark:text-primary-fixed-dim">
<button class="hover:text-primary transition-colors duration-200 active:scale-95">
<span class="material-symbols-outlined">shopping_cart</span>
</button>
<button class="hover:text-primary transition-colors duration-200 active:scale-95">
<span class="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
</header>
<main class="flex-grow">
<!-- Product Hero Section -->
<section class="max-w-7xl mx-auto px-margin-mobile md:px-lg py-xl">
<div class="grid grid-cols-1 md:grid-cols-2 gap-xl">
<!-- Image Gallery -->
<div class="space-y-md">
<div class="relative w-full aspect-square rounded-xl overflow-hidden shadow-sm">
<img class="object-cover w-full h-full" data-alt="Close up shot of fresh, earthy potatoes covered in a light dusting of soil, resting in a woven wooden basket. The lighting is natural, bright, and warm, highlighting the organic texture and premium quality of the farm produce. The setting implies a rustic, high-end farmer's market aesthetic, with a soft cream white background and vibrant green leaf accents subtly blurred in the background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnm2AzPyBcnYuEyfwos7YZz5DU2fC5eq301ROaoTBdz1BiUX-XxC1e-hkiKkd7Edmxo6UsPAtfu9jeEqqMhZO64haKFJOx_2aI0aW9JoWW9ThxP3JmlOTwJ6VDIizoaV53oK-hvK3U-RS4XBuggYNsUy8yWmRXcdr4revLJ8AQ4IzeBQXgNyMnmw6o80Y3JQ8YDHVNsIvDtB0lCzGdU2zx8GlAQViB5iNjLSecI0ebvX2sbHtcNmRpLw"/>
<div class="absolute top-md right-md bg-tertiary-fixed-dim text-on-tertiary-container px-md py-xs rounded-full font-label-sm text-label-sm shadow-sm">
                            Organic Certified
                        </div>
</div>
<div class="grid grid-cols-3 gap-md h-24">
<div class="rounded-lg overflow-hidden shadow-sm cursor-pointer border-2 border-primary">
<img class="object-cover w-full h-full" data-alt="A macro shot focusing on the rough, textured skin of a freshly harvested potato. Warm, natural sunlight filters across the surface, emphasizing its organic imperfections. High-quality corporate organic style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1oKPFh3obPS7TlBaWS5dX6bFqSxdxtW36nN2nppGY8t-I6TuvGVrk7EOYEP-xu5kKPPtApiD3jFLtvCuKM8oMrPfhw3ps1tsMz7Ovviix0a9YZCMs1DBANm0jeVZND3nswlNw3MV0i3GbjSLY6t28Gi0YYTQ0Mh03BXIFjDv81gtbvgZdIdxQExhPItR1dV6m64-bQL8FDMb6QWYgWV0V457HGeaeb9j7sv--glZFN9Qq7v8KIkTrJA"/>
</div>
<div class="rounded-lg overflow-hidden shadow-sm cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<img class="object-cover w-full h-full" data-alt="A pair of hands gently holding a cluster of raw potatoes over rich, dark soil in a sunlit field. The hands are slightly weathered, conveying a sense of hard work and connection to the earth. Vibrant, fresh, and wholesome aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBttxWBmM9HiTC4gYzJNubqVTPOJ_pdOjfFmJrU6Txk37BS0v2D8J66J9RmrF98lnbJvVRRU2fjXZLXHGh-zpAGc37V330R3PQHG8xySjduQj1Dzcqkg6C5Ak8kClIU191WUeVb1xakTL_2VdUbPodCLUloBNRCwg1OGx5HK1D-nbaC_JLY6MXRv09Ec_wkIOg6JOa-1dVWdhipk-Nas0MFtRjj9KxR4p1TabJ2ltjH0de89v-tNyffGA"/>
</div>
<div class="rounded-lg overflow-hidden shadow-sm cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<img class="object-cover w-full h-full" data-alt="A clean, minimalist composition showing sliced raw potatoes on a smooth white surface next to a sprig of fresh rosemary. The lighting is high-key and modern, emphasizing the crisp interior and freshness of the vegetable." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE4lZmW6bbFQx2ztqFvuKkwPim6osD_3tU4-ZFgqTSHEddRpefcnohSVjK_vtZCBC9zRnNOhkjdrFPZNEQJg2QZ63lFWb23Wf6c-Bswd56BaIWcFsPqyOoBi4dn09LTGl6lTPSSpFc6p7_ErZ0RX8VFuxaOcAl_29ZX7rVJSLnupBBoe2Or4BL0jdAnmvFLb6YBHHn8sc5h4uaeqi71PBy2XUMdVChJGAUqhwGnc1rcJrU0idqKiDRbw"/>
</div>
</div>
</div>
<!-- Product Details -->
<div class="flex flex-col justify-center">
<div class="mb-sm">
<span class="inline-flex items-center gap-xs text-secondary font-label-sm text-label-sm">
<span class="material-symbols-outlined icon-fill text-lg">local_florist</span>
                            Green Valley Farms
                        </span>
</div>
<h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-sm">Farm Fresh Potatoes</h1>
<div class="flex items-center gap-sm mb-md">
<div class="flex text-tertiary-fixed-dim">
<span class="material-symbols-outlined icon-fill">star</span>
<span class="material-symbols-outlined icon-fill">star</span>
<span class="material-symbols-outlined icon-fill">star</span>
<span class="material-symbols-outlined icon-fill">star</span>
<span class="material-symbols-outlined icon-fill">star_half</span>
</div>
<span class="font-label-md text-label-md text-on-surface-variant">4.8 (124 reviews)</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-xl">
                        Earthy, versatile, and harvested at the peak of perfection. Our Farm Fresh Potatoes are grown organically in rich, loamy soil, ensuring a robust flavor and perfect texture for roasting, mashing, or baking. Directly from the fields of Green Valley Farms to your table.
                    </p>
<!-- Selection -->
<div class="mb-xl">
<h3 class="font-label-md text-label-md text-on-surface mb-md">Select Weight</h3>
<div class="flex gap-md">
<button class="flex-1 py-sm px-md rounded-lg border border-primary bg-primary-fixed text-on-primary-container font-label-md text-label-md text-center transition-all">
                                1kg
                            </button>
<button class="flex-1 py-sm px-md rounded-lg border border-outline-variant text-on-surface-variant hover:border-outline font-label-md text-label-md text-center transition-all">
                                2kg
                            </button>
<button class="flex-1 py-sm px-md rounded-lg border border-outline-variant text-on-surface-variant hover:border-outline font-label-md text-label-md text-center transition-all relative">
                                5kg
                                <span class="absolute -top-2 -right-2 bg-secondary text-on-secondary text-[10px] px-2 py-0.5 rounded-full font-bold">SAVE 15%</span>
</button>
</div>
</div>
<!-- Price & Action -->
<div class="flex items-end justify-between mb-lg pt-md border-t border-surface-variant">
<div>
<span class="font-label-sm text-label-sm text-on-surface-variant line-through block mb-xs">$4.50</span>
<span class="font-headline-md text-headline-md text-primary block">$3.80</span>
</div>
<div class="flex items-center gap-md">
<div class="flex items-center border border-outline-variant rounded-lg bg-surface h-12">
<button class="px-md text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">remove</span></button>
<span class="font-body-md text-body-md w-8 text-center">1</span>
<button class="px-md text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">add</span></button>
</div>
</div>
</div>
<button class="w-full bg-primary text-on-primary py-md rounded-lg font-label-md text-label-md flex items-center justify-center gap-sm hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm h-12">
<span class="material-symbols-outlined">shopping_cart</span>
                        Add to Cart
                    </button>
<div class="mt-md flex items-center justify-center gap-sm text-on-surface-variant font-label-sm text-label-sm">
<span class="material-symbols-outlined text-secondary">local_shipping</span>
                        Ships fresh tomorrow morning
                    </div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-highest dark:bg-surface-container-lowest w-full mt-xl py-xl">
<div class="flex flex-col md:flex-row justify-between items-start gap-lg px-lg max-w-7xl mx-auto">
<div class="space-y-sm">
<div class="font-headline-md text-headline-md text-primary">
                    Fresh From Farm
                </div>
<p class="font-label-md text-label-md text-on-surface-variant">
                    © 2024 Fresh From Farm. Rooted in Transparency.
                </p>
</div>
<div class="flex flex-wrap gap-md font-label-md text-label-md">
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Sustainability Report</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Farmer Support</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Contact Us</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Privacy Policy</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Terms of Service</a>
</div>
</div>
</footer>
</body></html><!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Fresh From Farm - Marketplace</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&amp;family=Be+Vietnam+Pro:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "secondary-fixed-dim": "#78dc77",
                        "on-error": "#ffffff",
                        "surface-container-low": "#f2f4f2",
                        "outline": "#72796e",
                        "on-primary-fixed": "#002201",
                        "on-tertiary-container": "#f6b900",
                        "on-surface-variant": "#42493e",
                        "on-background": "#191c1b",
                        "primary-fixed": "#bcf0ae",
                        "on-secondary": "#ffffff",
                        "error": "#ba1a1a",
                        "background": "#f8faf8",
                        "tertiary-fixed": "#ffdf9e",
                        "secondary-container": "#91f78e",
                        "primary-fixed-dim": "#a1d494",
                        "on-tertiary": "#ffffff",
                        "on-surface": "#191c1b",
                        "surface-bright": "#f8faf8",
                        "on-tertiary-fixed-variant": "#5b4300",
                        "surface-container-highest": "#e1e3e1",
                        "inverse-surface": "#2e3130",
                        "surface-tint": "#3b6934",
                        "on-primary-container": "#9dd090",
                        "primary": "#154212",
                        "primary-container": "#2d5a27",
                        "inverse-primary": "#a1d494",
                        "on-primary": "#ffffff",
                        "on-tertiary-fixed": "#261a00",
                        "secondary": "#006e1c",
                        "on-secondary-container": "#00731e",
                        "surface-dim": "#d8dad9",
                        "surface-variant": "#e1e3e1",
                        "on-primary-fixed-variant": "#23501e",
                        "tertiary-fixed-dim": "#fabd00",
                        "surface-container-lowest": "#ffffff",
                        "tertiary": "#4b3600",
                        "inverse-on-surface": "#eff1ef",
                        "surface-container": "#eceeec",
                        "outline-variant": "#c2c9bb",
                        "on-secondary-fixed": "#002204",
                        "surface": "#f8faf8",
                        "surface-container-high": "#e6e9e7",
                        "tertiary-container": "#674c00",
                        "error-container": "#ffdad6",
                        "on-error-container": "#93000a",
                        "secondary-fixed": "#94f990",
                        "on-secondary-fixed-variant": "#005313"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "md": "16px",
                        "unit": "4px",
                        "xl": "32px",
                        "lg": "24px",
                        "gutter": "16px",
                        "xs": "4px",
                        "margin-mobile": "20px",
                        "sm": "8px"
                    },
                    "fontFamily": {
                        "headline-lg-mobile": ["Plus Jakarta Sans"],
                        "body-md": ["Be Vietnam Pro"],
                        "headline-md": ["Plus Jakarta Sans"],
                        "label-md": ["Be Vietnam Pro"],
                        "headline-lg": ["Plus Jakarta Sans"],
                        "label-sm": ["Be Vietnam Pro"],
                        "body-lg": ["Be Vietnam Pro"],
                        "headline-xl": ["Plus Jakarta Sans"]
                    },
                    "fontSize": {
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
                    }
                }
            }
        }
    </script>
<style>
        .texture-overlay {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E");
            pointer-events: none;
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md min-h-screen flex flex-col relative">
<div class="absolute inset-0 texture-overlay z-0 fixed"></div>
<!-- Top Navigation Bar -->
<header class="w-full top-0 sticky bg-surface/80 backdrop-blur-md shadow-sm z-50">
<div class="flex justify-between items-center px-lg py-md max-w-7xl mx-auto">
<a class="flex items-center gap-sm" href="index.html">
<img alt="Fresh From Farm Logo" class="h-8 w-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMwJox8utxjOB226C8OtlkR2LYV2mE6CkUSHKGuv9stSfhZwB4RKmp0xzVo7WiFZzevJzUo3O3w8o6biRPRcxj4lPs2DPaMkYEpIc7B2hvE-drzUNABhvoh4sV5_LOwcPemNP62egWiVUX4hQlEL4Thhsb2RioTOrGRLepsQasacPne7GXuGlKITdY-QRI1GBErjtqIOHz_KELRjwanvzqHwpsmH4JGLMv36WgPYH0hCc3Ei-ZM8WJqZ97nWhKBQgxvO4"/>
<span class="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary">Fresh From Farm</span>
</a>
<nav class="hidden md:flex gap-lg items-center">
<a class="font-body-md text-body-md text-primary dark:text-primary-fixed-dim border-b-2 border-primary pb-1 transition-all active:scale-95" href="marketplace.html">Marketplace</a>
<a class="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200 transition-all active:scale-95" href="#">Bulk Orders</a>
<a class="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200 transition-all active:scale-95" href="#">Farm Stories</a>
<a class="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200 transition-all active:scale-95" href="about.html">About Us</a>
</nav>
<div class="flex items-center gap-sm">
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors active:scale-95">
<span class="material-symbols-outlined">shopping_cart</span>
</button>
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors active:scale-95">
<span class="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
</header>
<main class="flex-grow max-w-7xl mx-auto w-full px-margin-mobile md:px-lg py-xl relative z-10">
<!-- Breadcrumbs -->
<nav aria-label="Breadcrumb" class="flex text-on-surface-variant font-label-md mb-xl">
<ol class="inline-flex items-center space-x-1 md:space-x-3">
<li class="inline-flex items-center">
<a class="inline-flex items-center hover:text-primary transition-colors" href="index.html">
                        Home
                    </a>
</li>
<li>
<div class="flex items-center">
<span class="material-symbols-outlined text-sm mx-1">chevron_right</span>
<span class="text-primary font-bold ml-1 md:ml-2">Marketplace</span>
</div>
</li>
</ol>
</nav>
<div class="flex flex-col md:flex-row gap-xl">
<!-- Sidebar -->
<aside class="w-full md:w-64 flex-shrink-0">
<div class="bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-outline-variant/30 sticky top-[100px]">
<h2 class="font-headline-md text-headline-md text-primary mb-md">Filters</h2>
<!-- Categories -->
<div class="mb-lg">
<h3 class="font-label-md text-label-md text-on-surface mb-sm">Categories</h3>
<ul class="space-y-2 font-body-md text-body-md text-on-surface-variant">
<li><label class="flex items-center gap-2 cursor-pointer hover:text-primary"><input checked="" class="rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/> Vegetables</label></li>
<li><label class="flex items-center gap-2 cursor-pointer hover:text-primary"><input class="rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/> Fruits</label></li>
<li><label class="flex items-center gap-2 cursor-pointer hover:text-primary"><input class="rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/> Grains</label></li>
<li><label class="flex items-center gap-2 cursor-pointer hover:text-primary"><input class="rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/> Dairy</label></li>
<li><label class="flex items-center gap-2 cursor-pointer hover:text-primary"><input class="rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/> Organic Staples</label></li>
</ul>
</div>
<hr class="border-outline-variant/30 my-md"/>
<!-- Price Range -->
<div class="mb-lg">
<h3 class="font-label-md text-label-md text-on-surface mb-sm">Price Range</h3>
<input class="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" value="50"/>
<div class="flex justify-between text-label-sm text-on-surface-variant mt-2">
<span>$0</span>
<span>$100+</span>
</div>
</div>
<hr class="border-outline-variant/30 my-md"/>
<!-- Farm Origin -->
<div class="mb-lg">
<h3 class="font-label-md text-label-md text-on-surface mb-sm">Farm Origin</h3>
<ul class="space-y-2 font-body-md text-body-md text-on-surface-variant">
<li><label class="flex items-center gap-2 cursor-pointer hover:text-primary"><input class="rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/> Sunrise Organics</label></li>
<li><label class="flex items-center gap-2 cursor-pointer hover:text-primary"><input class="rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/> Green Valley</label></li>
<li><label class="flex items-center gap-2 cursor-pointer hover:text-primary"><input class="rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/> Happy Cow Dairy</label></li>
</ul>
</div>
</div>
</aside>
<!-- Main Content -->
<div class="flex-grow">
<!-- Sorting & View -->
<div class="flex flex-col sm:flex-row justify-between items-center mb-lg bg-surface-container-lowest p-sm rounded-lg shadow-sm border border-outline-variant/30 gap-sm">
<div class="flex items-center gap-2">
<span class="font-label-md text-label-md text-on-surface-variant">Sort by:</span>
<select class="bg-transparent border-none font-body-md text-body-md text-primary focus:ring-0 cursor-pointer">
<option>Popularity</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
<option>Newest</option>
</select>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<button class="p-1 hover:text-primary transition-colors text-primary"><span class="material-symbols-outlined">grid_view</span></button>
<button class="p-1 hover:text-primary transition-colors"><span class="material-symbols-outlined">view_list</span></button>
</div>
</div>
<!-- Product Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
<!-- Product Card 1 -->
<div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(21,66,18,0.1)] group hover:-translate-y-1 transition-all duration-300 relative border border-outline-variant/20 flex flex-col h-full">
<div class="absolute top-sm right-sm z-10 flex gap-2">
<span class="bg-secondary-fixed-dim text-on-primary-fixed font-label-sm px-2 py-1 rounded-full">Organic</span>
</div>
<div class="relative h-48 w-full bg-surface-container overflow-hidden">
<div class="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="A close-up shot of vibrant, ripe organic heirloom tomatoes resting in a rustic wooden crate. The lighting is soft and natural, evoking a sunny morning at a high-end farmer's market. The tomatoes feature deep reds, yellows, and purples, standing out against the clean white background aesthetic. The overall mood is fresh, healthy, and premium." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUppYvQoJZA_FsGQEGakN1fpXBiZyWwqpz3go3kHdo65zKxzYxojMfdRF1SIASuR0UzLjtT2Exw1S00EfBDu8rja9Qbl-lwsiKBFTgBhScNGFCJo1hmngiksFm7pevuRrdnSr-mA9fHaVizQIH-5hgfLl47pkbCi-OLMVKmjtByOyWu-AegMtRQLw9yiF8VjYKl2z8-xF57hOHDa7VD3n1DhnGx-ddbBFOIoWsLVDkzMPAhjW23M01NQ')"></div>
<button class="absolute bottom-sm right-sm bg-surface/80 backdrop-blur p-2 rounded-full text-on-surface hover:text-error transition-colors shadow-sm">
<span class="material-symbols-outlined text-[20px]">favorite</span>
</button>
</div>
<div class="p-md flex flex-col flex-grow">
<div class="flex justify-between items-start mb-1">
<h3 class="font-headline-md text-[18px] text-on-surface font-semibold leading-tight">Organic Heirloom Tomatoes</h3>
</div>
<p class="font-label-sm text-on-surface-variant flex items-center gap-1 mb-md">
<span class="material-symbols-outlined text-[14px]">location_on</span>
                                Sunrise Organics
                            </p>
<div class="mt-auto flex justify-between items-center">
<span class="font-body-lg text-primary font-bold">$4.99 <span class="text-sm font-normal text-on-surface-variant">/ kg</span></span>
<button class="bg-primary-container text-on-primary rounded-lg px-4 py-2 font-label-md hover:bg-primary transition-colors flex items-center gap-2">
                                    Add <span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>
</button>
</div>
</div>
</div>
<!-- Product Card 2 -->
<div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(21,66,18,0.1)] group hover:-translate-y-1 transition-all duration-300 relative border border-outline-variant/20 flex flex-col h-full">
<div class="relative h-48 w-full bg-surface-container overflow-hidden">
<div class="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="Freshly harvested potatoes covered in a light dusting of rich, dark soil, presented in a minimal white bowl. The composition is clean and modern, emphasizing the raw, organic nature of the produce. Gentle, diffused light highlights the textures of the potatoes and the earth. The aesthetic aligns with a premium, farm-to-table corporate design." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD7mj48yGZGMUXxFzdiF5V0WLJ2bJb4sireEce7_vJnsqpLvHplspneJ3a4FyeKSyjbemwmnqnh6tEy-n0snXzY053o7GiOIsWPvzAkiOnCv8piJDWRbppeXWQKtHm7yCVfqTeGMgvq16vFaxzccdmniO6om6K0LPJRE1Zcc3qWWsJxxT8zaRB72DiMPvZ6F1htqncxIMIKZQfWOQ_kBBUDj_j41_1by0hwv0qFwow0VLGW1ucxFbdfJQ')"></div>
<button class="absolute bottom-sm right-sm bg-surface/80 backdrop-blur p-2 rounded-full text-on-surface hover:text-error transition-colors shadow-sm">
<span class="material-symbols-outlined text-[20px]">favorite</span>
</button>
</div>
<div class="p-md flex flex-col flex-grow">
<div class="flex justify-between items-start mb-1">
<h3 class="font-headline-md text-[18px] text-on-surface font-semibold leading-tight">Farm Fresh Potatoes</h3>
</div>
<p class="font-label-sm text-on-surface-variant flex items-center gap-1 mb-md">
<span class="material-symbols-outlined text-[14px]">location_on</span>
                                Green Valley Farms
                            </p>
<div class="mt-auto flex justify-between items-center">
<span class="font-body-lg text-primary font-bold">$2.50 <span class="text-sm font-normal text-on-surface-variant">/ kg</span></span>
<button class="bg-primary-container text-on-primary rounded-lg px-4 py-2 font-label-md hover:bg-primary transition-colors flex items-center gap-2">
                                    Add <span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>
</button>
</div>
</div>
</div>
<!-- Product Card 3 -->
<div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(21,66,18,0.1)] group hover:-translate-y-1 transition-all duration-300 relative border border-outline-variant/20 flex flex-col h-full">
<div class="absolute top-sm right-sm z-10 flex gap-2">
<span class="bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-sm px-2 py-1 rounded-full">New</span>
</div>
<div class="relative h-48 w-full bg-surface-container overflow-hidden">
<div class="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="A beautifully arranged bunch of crisp, leafy greens including kale and spinach, resting on a clean, light-colored surface with subtle organic texture. The bright green hues of the vegetables pop against the minimalist background. The lighting is crisp and bright, suggesting absolute freshness and high quality. The image feels professional yet grounded in nature." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcsOkkEKqZWmY91lFtgR_c0zz2GlI6SefnpzL9jBN3MXsUD6gMI9Zz_19dR7m5Tg44LNFTFSSkv5v-N3p7TxriPnyOXe78tD_GVZl2XfUVsxfch4iJjZp4o0a0uQgSHNdK5mAVBhnnxBDW4PVNlal9cOOZ4F9WDeLyaWXpTNa6kXPIPFy68jWExOVG3Z0dVVcFltbgIUF2m37JJ11uJsQUBpLLHf63WwmKIRPapeXGK0iByPPrGw50Kg')"></div>
<button class="absolute bottom-sm right-sm bg-surface/80 backdrop-blur p-2 rounded-full text-on-surface hover:text-error transition-colors shadow-sm">
<span class="material-symbols-outlined text-[20px]">favorite</span>
</button>
</div>
<div class="p-md flex flex-col flex-grow">
<div class="flex justify-between items-start mb-1">
<h3 class="font-headline-md text-[18px] text-on-surface font-semibold leading-tight">Crisp Leafy Greens Blend</h3>
</div>
<p class="font-label-sm text-on-surface-variant flex items-center gap-1 mb-md">
<span class="material-symbols-outlined text-[14px]">location_on</span>
                                Sunrise Organics
                            </p>
<div class="mt-auto flex justify-between items-center">
<span class="font-body-lg text-primary font-bold">$3.20 <span class="text-sm font-normal text-on-surface-variant">/ bunch</span></span>
<button class="bg-primary-container text-on-primary rounded-lg px-4 py-2 font-label-md hover:bg-primary transition-colors flex items-center gap-2">
                                    Add <span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="w-full mt-xl bg-surface-container-highest dark:bg-surface-container-lowest z-10 relative">
<div class="flex flex-col md:flex-row justify-between items-start gap-lg px-lg py-xl max-w-7xl mx-auto">
<div class="flex flex-col gap-sm">
<span class="font-headline-md text-headline-md text-primary">Fresh From Farm</span>
<p class="font-label-md text-label-md text-on-surface-variant">© 2024 Fresh From Farm. Rooted in Transparency.</p>
</div>
<nav class="flex flex-wrap gap-x-lg gap-y-sm font-label-md text-label-md">
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Sustainability Report</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Farmer Support</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Contact Us</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Privacy Policy</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Terms of Service</a>
</nav>
</div>
</footer>
</body></html><!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Contact Us - Fresh From Farm</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600&amp;family=Plus+Jakarta+Sans:wght@600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "on-surface": "#191c1b",
                      "primary-fixed-dim": "#a1d494",
                      "on-secondary": "#ffffff",
                      "tertiary-fixed": "#ffdf9e",
                      "on-error": "#ffffff",
                      "on-secondary-container": "#00731e",
                      "outline-variant": "#c2c9bb",
                      "inverse-primary": "#a1d494",
                      "secondary-container": "#91f78e",
                      "on-primary-fixed": "#002201",
                      "on-primary-container": "#9dd090",
                      "secondary-fixed-dim": "#78dc77",
                      "tertiary-fixed-dim": "#fabd00",
                      "on-tertiary-fixed": "#261a00",
                      "surface-container-lowest": "#ffffff",
                      "on-secondary-fixed": "#002204",
                      "surface-container-high": "#e6e9e7",
                      "primary": "#154212",
                      "surface-tint": "#3b6934",
                      "primary-fixed": "#bcf0ae",
                      "surface-bright": "#f8faf8",
                      "on-background": "#191c1b",
                      "surface-container": "#eceeec",
                      "inverse-on-surface": "#eff1ef",
                      "on-surface-variant": "#42493e",
                      "on-primary-fixed-variant": "#23501e",
                      "on-secondary-fixed-variant": "#005313",
                      "outline": "#72796e",
                      "secondary": "#006e1c",
                      "primary-container": "#2d5a27",
                      "on-tertiary-fixed-variant": "#5b4300",
                      "surface-container-low": "#f2f4f2",
                      "on-primary": "#ffffff",
                      "error-container": "#ffdad6",
                      "surface-dim": "#d8dad9",
                      "surface": "#f8faf8",
                      "tertiary-container": "#674c00",
                      "inverse-surface": "#2e3130",
                      "on-tertiary-container": "#f6b900",
                      "surface-variant": "#e1e3e1",
                      "error": "#ba1a1a",
                      "on-tertiary": "#ffffff",
                      "surface-container-highest": "#e1e3e1",
                      "tertiary": "#4b3600",
                      "background": "#f8faf8",
                      "secondary-fixed": "#94f990",
                      "on-error-container": "#93000a"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "xl": "32px",
                      "md": "16px",
                      "sm": "8px",
                      "xs": "4px",
                      "lg": "24px",
                      "unit": "4px",
                      "gutter": "16px",
                      "margin-mobile": "20px"
              },
              "fontFamily": {
                      "label-md": ["Be Vietnam Pro"],
                      "label-sm": ["Be Vietnam Pro"],
                      "body-lg": ["Be Vietnam Pro"],
                      "headline-lg": ["Plus Jakarta Sans"],
                      "headline-md": ["Plus Jakarta Sans"],
                      "headline-xl": ["Plus Jakarta Sans"],
                      "headline-lg-mobile": ["Plus Jakarta Sans"],
                      "body-md": ["Be Vietnam Pro"]
              },
              "fontSize": {
                      "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600"}],
                      "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
                      "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                      "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                      "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                      "headline-xl": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                      "headline-lg-mobile": ["28px", {"lineHeight": "36px", "fontWeight": "700"}],
                      "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}]
              }
            }
          }
        }
    </script>
<style>
        .texture-bg {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
        }
        .soft-shadow {
            box-shadow: 0 4px 20px -2px rgba(21, 66, 18, 0.08);
        }
        .form-input-focus:focus {
            border-color: #2d5a27;
            box-shadow: 0 0 0 1px #2d5a27;
        }
    </style>
</head>
<body class="bg-surface text-on-surface font-body-md texture-bg min-h-screen flex flex-col">
<!-- TopNavBar Component -->
<nav class="bg-surface dark:bg-surface-dim font-body-md text-body-md w-full top-0 sticky bg-surface/80 backdrop-blur-md shadow-sm z-50">
<div class="flex justify-between items-center px-lg py-md max-w-7xl mx-auto">
<div class="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary cursor-pointer transition-all active:scale-95">
                Fresh From Farm
            </div>
<div class="hidden md:flex gap-lg">
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200" href="#">Marketplace</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200" href="#">Bulk Orders</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200" href="#">Farm Stories</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200" href="#">About Us</a>
<!-- Active state logic fallback, no direct match for Contact, so keeping all inactive or About Us as closest. Making Contact separate. -->
<a class="text-primary dark:text-primary-fixed-dim border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-200" href="#">Contact Us</a>
</div>
<div class="flex items-center gap-md text-primary dark:text-primary-fixed-dim">
<button class="transition-all active:scale-95 p-2 rounded-full hover:bg-surface-variant">
<span class="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
</button>
<button class="transition-all active:scale-95 p-2 rounded-full hover:bg-surface-variant">
<span class="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</nav>
<!-- Main Content Canvas -->
<main class="flex-grow w-full max-w-7xl mx-auto px-margin-mobile md:px-lg py-xl flex flex-col gap-xl">
<!-- Hero Section -->
<section class="text-center max-w-3xl mx-auto py-xl">
<h1 class="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary mb-md">Get in Touch</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">
                We're rooted in community support. Whether you have questions about our organic practices, need help with a bulk order, or just want to say hello, our farm team is here for you.
            </p>
</section>
<!-- Bento Grid Contact Section -->
<section class="grid grid-cols-1 lg:grid-cols-12 gap-lg relative">
<!-- Contact Form (Left) -->
<div class="lg:col-span-7 bg-surface-container-lowest rounded-xl p-lg soft-shadow border border-surface-variant">
<h2 class="font-headline-md text-headline-md text-primary mb-lg">Send us a Message</h2>
<form class="flex flex-col gap-md">
<div class="grid grid-cols-1 md:grid-cols-2 gap-md">
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface-variant" for="name">Full Name</label>
<input class="rounded-DEFAULT border-outline-variant bg-surface-container-lowest text-on-surface p-3 font-body-md form-input-focus transition-colors" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface-variant" for="email">Email Address</label>
<input class="rounded-DEFAULT border-outline-variant bg-surface-container-lowest text-on-surface p-3 font-body-md form-input-focus transition-colors" id="email" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface-variant" for="subject">Subject</label>
<select class="rounded-DEFAULT border-outline-variant bg-surface-container-lowest text-on-surface p-3 font-body-md form-input-focus transition-colors" id="subject">
<option>General Inquiry</option>
<option>Bulk Order Support</option>
<option>Delivery Issue</option>
<option>Farm Tour Booking</option>
</select>
</div>
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface-variant" for="message">Your Message</label>
<textarea class="rounded-DEFAULT border-outline-variant bg-surface-container-lowest text-on-surface p-3 font-body-md form-input-focus transition-colors resize-none" id="message" placeholder="How can we help you today?" rows="5"></textarea>
</div>
<button class="mt-sm bg-primary-container text-on-primary-container font-label-md text-label-md py-3 px-6 rounded-lg hover:bg-primary hover:text-on-primary transition-colors duration-200 self-start flex items-center gap-sm active:scale-95" type="button">
<span>Send Message</span>
<span class="material-symbols-outlined text-[18px]" data-icon="send">send</span>
</button>
</form>
</div>
<!-- Contact Info & Map (Right) -->
<div class="lg:col-span-5 flex flex-col gap-lg">
<!-- Info Card -->
<div class="bg-primary text-on-primary rounded-xl p-lg soft-shadow flex flex-col gap-md relative overflow-hidden">
<!-- Decorative subtle texture/shape -->
<div class="absolute -bottom-10 -right-10 opacity-10">
<span class="material-symbols-outlined text-[120px]" data-icon="local_florist">local_florist</span>
</div>
<h3 class="font-headline-md text-headline-md mb-sm relative z-10">Farm Details</h3>
<div class="flex items-start gap-md relative z-10">
<div class="bg-primary-container/30 p-2 rounded-full mt-1">
<span class="material-symbols-outlined text-primary-fixed" data-icon="location_on">location_on</span>
</div>
<div>
<p class="font-label-md text-label-md text-primary-fixed mb-1">Office Address</p>
<p class="font-body-md text-body-md">123 Heritage Valley Road<br/>Greenbelt County, CA 90210</p>
</div>
</div>
<div class="flex items-start gap-md relative z-10">
<div class="bg-primary-container/30 p-2 rounded-full mt-1">
<span class="material-symbols-outlined text-primary-fixed" data-icon="call">call</span>
</div>
<div>
<p class="font-label-md text-label-md text-primary-fixed mb-1">Phone Number</p>
<p class="font-body-md text-body-md hover:text-primary-fixed-dim transition-colors cursor-pointer">705-260-9099</p>
</div>
</div>
<div class="flex items-start gap-md relative z-10">
<div class="bg-primary-container/30 p-2 rounded-full mt-1">
<span class="material-symbols-outlined text-primary-fixed" data-icon="mail">mail</span>
</div>
<div>
<p class="font-label-md text-label-md text-primary-fixed mb-1">Email Address</p>
<p class="font-body-md text-body-md hover:text-primary-fixed-dim transition-colors cursor-pointer">support@freshfromfarm.com</p>
</div>
</div>
</div>
<!-- Map Placeholder Card -->
<div class="bg-surface-container-lowest rounded-xl p-sm soft-shadow border border-surface-variant flex-grow min-h-[250px] relative overflow-hidden group">
<img class="absolute inset-0 w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-700" data-alt="A highly detailed overhead map view of a lush, green agricultural valley in California. The map style is modern, bright, and slightly stylized, highlighting winding dirt roads, vibrant green crop circles, and a small farmhouse cluster. The aesthetic is clean and premium, consistent with a high-end organic farm brand." data-location="Greenbelt County, CA" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9mOLGeqaQ3os37FOVuOEAYA50htlMILEMfZSF4R7XlNhL2vcgYPmBBJrVPlJGh1VmeHSm71K34MgX0r5c4knfzY-dym7M2_rdmkEWm4AHvdDRuOaPHyRdNGdZS-s4XghRFI1buFMOxQxgwdrHvJ0FHAbwEuSH9vG2s5mmU-iJt-iNXu0it7gLUekmS23fzswRk8Fa7ksfe06GgAMWzi2-izVYQv4hMnzOnykgIx4BDWzjD_wDH4psWg"/>
<div class="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between shadow-sm">
<span class="font-label-md text-label-md text-on-surface">Visit our Farm Store</span>
<button class="text-primary hover:text-secondary transition-colors">
<span class="material-symbols-outlined" data-icon="directions">directions</span>
</button>
</div>
</div>
</div>
</section>
<!-- FAQ Section (Asymmetric layout) -->
<section class="mt-xl py-xl border-t border-surface-variant">
<div class="grid grid-cols-1 md:grid-cols-3 gap-lg">
<div class="md:col-span-1">
<h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-md">Frequently Asked Questions</h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-lg">
                        Find quick answers to common queries about our produce, delivery schedules, and farming methods.
                    </p>
</div>
<div class="md:col-span-2 flex flex-col gap-md">
<!-- FAQ Item 1 -->
<div class="bg-surface-container-lowest rounded-lg p-md border border-surface-variant cursor-pointer hover:shadow-sm transition-all group">
<div class="flex justify-between items-center mb-sm">
<h4 class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">What are your delivery timings?</h4>
<span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="expand_more">expand_more</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant">
                            We deliver fresh produce directly to your door every Tuesday and Friday between 8:00 AM and 6:00 PM. You'll receive an ETA notification on the day of delivery.
                        </p>
</div>
<!-- FAQ Item 2 -->
<div class="bg-surface-container-lowest rounded-lg p-md border border-surface-variant cursor-pointer hover:shadow-sm transition-all group">
<div class="flex justify-between items-center mb-sm">
<h4 class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Are all your products certified organic?</h4>
<span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="expand_more">expand_more</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant hidden">
                            Yes, all produce grown on our main farm holds USDA Organic certification. For partner farms in our marketplace, we require strict adherence to chemical-free growing practices.
                        </p>
</div>
<!-- FAQ Item 3 -->
<div class="bg-surface-container-lowest rounded-lg p-md border border-surface-variant cursor-pointer hover:shadow-sm transition-all group">
<div class="flex justify-between items-center mb-sm">
<h4 class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Can I visit the farm?</h4>
<span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="expand_more">expand_more</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant hidden">
                            Absolutely! We host guided farm tours on the first Saturday of every month. Please use the contact form above to book a spot in advance.
                        </p>
</div>
</div>
</div>
</section>
</main>
<!-- Footer Component -->
<footer class="bg-surface-container-highest dark:bg-surface-container-lowest font-label-md text-label-md w-full mt-xl flat no shadows cursor-pointer">
<div class="flex flex-col md:flex-row justify-between items-start gap-lg px-lg py-xl max-w-7xl mx-auto">
<div class="flex flex-col gap-sm">
<span class="font-headline-md text-headline-md text-primary">Fresh From Farm</span>
<span class="text-on-surface-variant dark:text-on-surface font-body-md">© 2024 Fresh From Farm. Rooted in Transparency.</span>
</div>
<div class="flex flex-wrap gap-md">
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary transition-colors" href="#">Sustainability Report</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary transition-colors" href="#">Farmer Support</a>
<a class="text-secondary dark:text-secondary-fixed font-bold hover:underline hover:text-primary transition-colors" href="#">Contact Us</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>
<script>
        // Simple JS for FAQ toggling
        document.addEventListener('DOMContentLoaded', () => {
            const faqs = document.querySelectorAll('.group');
            faqs.forEach(faq => {
                faq.addEventListener('click', () => {
                    const p = faq.querySelector('p');
                    const icon = faq.querySelector('.material-symbols-outlined');
                    
                    if (p.classList.contains('hidden')) {
                        p.classList.remove('hidden');
                        icon.textContent = 'expand_less';
                    } else {
                        // Only close if it's not the first one (just to show one open by default)
                        p.classList.add('hidden');
                        icon.textContent = 'expand_more';
                    }
                });
            });
        });
    </script>
</body></html><!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Fresh From Farm - Shopping Cart</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&amp;family=Be+Vietnam+Pro:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "tertiary": "#4b3600",
                      "on-tertiary-fixed-variant": "#5b4300",
                      "inverse-on-surface": "#eff1ef",
                      "on-surface-variant": "#42493e",
                      "on-primary": "#ffffff",
                      "surface-tint": "#3b6934",
                      "background": "#f8faf8",
                      "outline-variant": "#c2c9bb",
                      "inverse-primary": "#a1d494",
                      "on-tertiary-fixed": "#261a00",
                      "surface-bright": "#f8faf8",
                      "on-secondary-fixed-variant": "#005313",
                      "primary": "#154212",
                      "on-primary-fixed": "#002201",
                      "surface-container-highest": "#e1e3e1",
                      "tertiary-container": "#674c00",
                      "surface-container-lowest": "#ffffff",
                      "primary-fixed-dim": "#a1d494",
                      "on-error-container": "#93000a",
                      "secondary-container": "#91f78e",
                      "primary-fixed": "#bcf0ae",
                      "outline": "#72796e",
                      "secondary-fixed-dim": "#78dc77",
                      "on-background": "#191c1b",
                      "on-secondary-container": "#00731e",
                      "surface-dim": "#d8dad9",
                      "surface-container-low": "#f2f4f2",
                      "on-secondary": "#ffffff",
                      "secondary": "#006e1c",
                      "on-primary-fixed-variant": "#23501e",
                      "on-tertiary": "#ffffff",
                      "on-tertiary-container": "#f6b900",
                      "tertiary-fixed": "#ffdf9e",
                      "error-container": "#ffdad6",
                      "inverse-surface": "#2e3130",
                      "tertiary-fixed-dim": "#fabd00",
                      "error": "#ba1a1a",
                      "surface-variant": "#e1e3e1",
                      "primary-container": "#2d5a27",
                      "on-surface": "#191c1b",
                      "on-secondary-fixed": "#002204",
                      "on-error": "#ffffff",
                      "surface": "#f8faf8",
                      "secondary-fixed": "#94f990",
                      "surface-container-high": "#e6e9e7",
                      "on-primary-container": "#9dd090",
                      "surface-container": "#eceeec"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "xs": "4px",
                      "sm": "8px",
                      "unit": "4px",
                      "md": "16px",
                      "xl": "32px",
                      "margin-mobile": "20px",
                      "gutter": "16px",
                      "lg": "24px"
              },
              "fontFamily": {
                      "headline-xl": ["Plus Jakarta Sans"],
                      "headline-md": ["Plus Jakarta Sans"],
                      "body-md": ["Be Vietnam Pro"],
                      "headline-lg-mobile": ["Plus Jakarta Sans"],
                      "label-sm": ["Be Vietnam Pro"],
                      "headline-lg": ["Plus Jakarta Sans"],
                      "label-md": ["Be Vietnam Pro"],
                      "body-lg": ["Be Vietnam Pro"]
              },
              "fontSize": {
                      "headline-xl": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                      "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                      "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                      "headline-lg-mobile": ["28px", {"lineHeight": "36px", "fontWeight": "700"}],
                      "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
                      "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                      "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600"}],
                      "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}]
              }
            },
          },
        }
    </script>
<style>
        body {
            background-color: theme('colors.background');
            color: theme('colors.on-background');
        }
        .organic-shadow {
            box-shadow: 0 4px 20px rgba(21, 66, 18, 0.08);
        }
    </style>
</head>
<body class="min-h-screen flex flex-col font-body-md antialiased">
<!-- TopNavBar -->
<header class="w-full top-0 sticky bg-surface/80 backdrop-blur-md shadow-sm z-50">
<div class="flex justify-between items-center px-lg py-md max-w-7xl mx-auto">
<div class="flex items-center gap-xl">
<a class="font-headline-md text-headline-md font-bold text-primary" href="/"><img alt="Fresh From Farm Logo" class="h-8 w-auto" src="https://lh3.googleusercontent.com/aida/AEtjO1WIKEygshjrWT9XLfYtKMX6TMXTd7wpiLnL6t5EaeZuQNPhFnmx1Vz76HJPzPkytySTrf01s_2m-IL29SHlIFqdECCOjVZ4rVB-QTd3ke-v9BrgHMBtiAY5yVNDeUwqQyk2i5_oT4JtAHetFUyS0Y9pemtvcFCKc1a3w5Mt9axNj1lVWqk389d5YdSCeceKfXv6997iyeWXXqNrm3ESyuKIyrbPB1BmAOW_uPl1rIvFwvWAAZG2cnAd8DcE"/></a>
<nav class="hidden md:flex gap-lg">
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Marketplace</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Bulk Orders</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Farm Stories</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">About Us</a>
</nav>
</div>
<div class="flex items-center gap-md">
<button class="text-primary hover:text-primary transition-all active:scale-95 flex items-center justify-center p-sm rounded-full bg-surface-container-low">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">shopping_cart</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-all active:scale-95">
<span class="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-grow max-w-7xl mx-auto w-full px-margin-mobile md:px-lg py-xl">
<div class="mb-xl">
<h1 class="font-headline-xl text-headline-xl text-on-background">Your Cart</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mt-sm">Review your fresh harvest selections before checkout.</p>
</div>
<div class="flex flex-col lg:flex-row gap-xl">
<!-- Cart Items -->
<div class="w-full lg:w-2/3 flex flex-col gap-md">
<!-- Item 1: Potatoes -->
<div class="bg-surface-container-lowest rounded-xl organic-shadow p-md flex flex-col sm:flex-row items-start sm:items-center gap-md relative overflow-hidden group">
<div class="w-24 h-24 rounded-lg bg-surface-container-low flex-shrink-0 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A close up shot of freshly harvested russet potatoes resting in a wooden crate, still slightly dusted with dark, rich soil. Shot in a bright, natural daylight setting that highlights the texture of the potato skin. The scene conveys a rustic, premium organic farm aesthetic suitable for a high-end farmers market." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwP13HzarGFzM984sx5RhA9veOGKZ-UtGVVcJZ9LdgVmH2Bs9ZZOHinyzmUhuXEtOBC1R1_P-TOGxE6q0Op9ewUfSTnrYwjkovdElF-thr7DgivkZrz0qfq6Ccx5YwylX5sNx3b5CjSUhikChczvLjNxvRYtjZT6W-mGyxzBUsaeRXKQS5Qn-WqMQ7yslrVJ94UGDGb324dAJK03KLO5V8-WOdUm-Xuw2ikF8UtnTobVeKiVWpuoaAEg"/>
</div>
<div class="flex-grow flex flex-col gap-xs w-full">
<div class="flex justify-between items-start w-full">
<div>
<h3 class="font-headline-md text-headline-md text-on-surface">Organic Russet Potatoes</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Farm: Green Acres, CA</p>
</div>
<span class="font-headline-md text-headline-md text-primary">$4.50</span>
</div>
<div class="flex justify-between items-end mt-sm w-full">
<div class="flex items-center gap-xs bg-surface-container rounded-lg p-xs">
<button class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-variant rounded-md transition-colors"><span class="material-symbols-outlined">remove</span></button>
<span class="font-label-md text-label-md w-8 text-center">2 lbs</span>
<button class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-variant rounded-md transition-colors"><span class="material-symbols-outlined">add</span></button>
</div>
<button class="text-error hover:text-on-error-container transition-colors p-sm rounded-md opacity-0 group-hover:opacity-100 flex items-center gap-xs">
<span class="material-symbols-outlined text-[20px]">delete</span>
<span class="font-label-sm text-label-sm hidden sm:inline">Remove</span>
</button>
</div>
</div>
</div>
<!-- Item 2: Tomatoes -->
<div class="bg-surface-container-lowest rounded-xl organic-shadow p-md flex flex-col sm:flex-row items-start sm:items-center gap-md relative overflow-hidden group">
<div class="w-24 h-24 rounded-lg bg-surface-container-low flex-shrink-0 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Vibrant, dew-kissed heirloom tomatoes in various shades of deep red and subtle green, arranged neatly on a clean white surface. Soft, diffused lighting enhances their natural gloss and organic shapes. The aesthetic is clean, premium, and emphasizes freshness and high-quality agricultural produce." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaaBQENLQjzcqOQqIchG2atBC5uHQxnoi8WuV6ilKU-W5EU7A5YyjDe7jsa1myfcSUmJ6R0chs1VKAUwuB21VbY4Bq8VATrAWd4GIv8xtXNE-TIxC2Z0nT1-pxxD9rSxVl1Z3TOpafwlUS0VYixrPhqv0KDZLbADqeE8gOAlP6_bfxGltlH59cfypSyqu48a82o3puk7Ihy1oGr941lTb6FijLrWPubq-G7xnZ0BUX-Wqu-ll4TUTfLQ"/>
</div>
<div class="flex-grow flex flex-col gap-xs w-full">
<div class="flex justify-between items-start w-full">
<div>
<div class="flex items-center gap-sm">
<h3 class="font-headline-md text-headline-md text-on-surface">Heirloom Tomatoes</h3>
<span class="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded-full font-label-sm text-label-sm">Bestseller</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant">Farm: Sunny Valley Organic</p>
</div>
<span class="font-headline-md text-headline-md text-primary">$6.00</span>
</div>
<div class="flex justify-between items-end mt-sm w-full">
<div class="flex items-center gap-xs bg-surface-container rounded-lg p-xs">
<button class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-variant rounded-md transition-colors"><span class="material-symbols-outlined">remove</span></button>
<span class="font-label-md text-label-md w-8 text-center">1 lb</span>
<button class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-variant rounded-md transition-colors"><span class="material-symbols-outlined">add</span></button>
</div>
<button class="text-error hover:text-on-error-container transition-colors p-sm rounded-md opacity-0 group-hover:opacity-100 flex items-center gap-xs">
<span class="material-symbols-outlined text-[20px]">delete</span>
<span class="font-label-sm text-label-sm hidden sm:inline">Remove</span>
</button>
</div>
</div>
</div>
<!-- Item 3: Spinach -->
<div class="bg-surface-container-lowest rounded-xl organic-shadow p-md flex flex-col sm:flex-row items-start sm:items-center gap-md relative overflow-hidden group">
<div class="w-24 h-24 rounded-lg bg-surface-container-low flex-shrink-0 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A crisp, healthy bunch of fresh organic spinach leaves bundled together with a simple twine. The leaves are deep emerald green, shot from a top-down perspective on a light, slightly textured natural background. The overall look is clean, modern, and communicates vibrant health and farm-to-table freshness." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf8ztiM3v9-0NQrgG0rsLK45xKHc8tI4zBR5f5V3Y9gC0ZDFQyjxUDZcUg4QUk5jdNT5PAyzExp5WE4GHYRMN0zPCcgWa-Gwkj_eTASWdBlVAaDV4vrgO6JrNSvTpjKpU_j76EA7AgErIKqkyo5TtaO0AeTvZBWTvzojTE042ozd4unV5rKoNINbmRaKYTrwwFFicNYgnUBnmR2Rl24eR1Qr4fuvIFvA4MCXAElfK1gOOqKKD07FQs6A"/>
</div>
<div class="flex-grow flex flex-col gap-xs w-full">
<div class="flex justify-between items-start w-full">
<div>
<h3 class="font-headline-md text-headline-md text-on-surface">Baby Spinach</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Farm: Local Roots</p>
</div>
<span class="font-headline-md text-headline-md text-primary">$3.50</span>
</div>
<div class="flex justify-between items-end mt-sm w-full">
<div class="flex items-center gap-xs bg-surface-container rounded-lg p-xs">
<button class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-variant rounded-md transition-colors"><span class="material-symbols-outlined">remove</span></button>
<span class="font-label-md text-label-md w-8 text-center">2 bch</span>
<button class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-variant rounded-md transition-colors"><span class="material-symbols-outlined">add</span></button>
</div>
<button class="text-error hover:text-on-error-container transition-colors p-sm rounded-md opacity-0 group-hover:opacity-100 flex items-center gap-xs">
<span class="material-symbols-outlined text-[20px]">delete</span>
<span class="font-label-sm text-label-sm hidden sm:inline">Remove</span>
</button>
</div>
</div>
</div>
<!-- Delivery Estimate Section -->
<div class="mt-xl bg-surface-container-low rounded-xl p-lg flex flex-col gap-md">
<div class="flex items-center gap-sm text-primary">
<span class="material-symbols-outlined">local_shipping</span>
<h3 class="font-headline-md text-headline-md">Delivery Estimates</h3>
</div>
<div class="flex flex-col sm:flex-row gap-md">
<div class="flex-grow">
<label class="font-label-md text-label-md text-on-surface-variant mb-xs block">Zip Code</label>
<input class="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-sm font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow h-[48px]" placeholder="Enter zip code" type="text"/>
</div>
<button class="sm:self-end h-[48px] px-lg bg-secondary text-on-secondary font-label-md text-label-md rounded-lg hover:bg-on-secondary-container transition-colors">Calculate</button>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mt-sm">Estimated delivery based on our weekly farm routes to your area.</p>
</div>
</div>
<!-- Order Summary Sidebar -->
<div class="w-full lg:w-1/3">
<div class="bg-surface-container-lowest rounded-xl organic-shadow p-lg sticky top-[100px] flex flex-col gap-lg">
<h2 class="font-headline-md text-headline-md text-on-surface border-b border-surface-variant pb-sm">Order Summary</h2>
<div class="flex flex-col gap-sm">
<div class="flex justify-between font-body-md text-on-surface-variant">
<span>Subtotal (5 items)</span>
<span>$22.00</span>
</div>
<div class="flex justify-between font-body-md text-on-surface-variant">
<span>Delivery</span>
<span>Calculated at checkout</span>
</div>
<div class="flex justify-between font-body-md text-on-surface-variant">
<span>Taxes</span>
<span>$1.76</span>
</div>
</div>
<div class="border-t border-surface-variant pt-sm flex justify-between items-center">
<span class="font-headline-md text-headline-md text-on-surface">Total</span>
<span class="font-headline-md text-headline-md text-primary">$23.76</span>
</div>
<div class="flex flex-col gap-xs mt-sm">
<label class="font-label-md text-label-md text-on-surface-variant flex items-center gap-xs cursor-pointer">
<input class="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
<span>This is a gift</span>
</label>
<div class="mt-xs hidden" id="gift-message-container">
<textarea class="w-full bg-surface-container-low border border-outline-variant rounded-lg p-sm font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow resize-none h-24" placeholder="Add a personal note..."></textarea>
</div>
</div>
<button class="w-full h-[48px] bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-container transition-colors mt-sm flex items-center justify-center gap-sm">
                        Proceed to Checkout
                        <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
<div class="flex items-center justify-center gap-xs text-on-surface-variant mt-xs">
<span class="material-symbols-outlined text-[16px]">lock</span>
<span class="font-label-sm text-label-sm">Secure Checkout</span>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="w-full mt-xl bg-surface-container-highest">
<div class="flex flex-col md:flex-row justify-between items-start gap-lg px-lg py-xl max-w-7xl mx-auto">
<div class="flex flex-col gap-sm">
<img alt="Fresh From Farm Logo" class="h-8 w-auto" src="https://lh3.googleusercontent.com/aida/AEtjO1WIKEygshjrWT9XLfYtKMX6TMXTd7wpiLnL6t5EaeZuQNPhFnmx1Vz76HJPzPkytySTrf01s_2m-IL29SHlIFqdECCOjVZ4rVB-QTd3ke-v9BrgHMBtiAY5yVNDeUwqQyk2i5_oT4JtAHetFUyS0Y9pemtvcFCKc1a3w5Mt9axNj1lVWqk389d5YdSCeceKfXv6997iyeWXXqNrm3ESyuKIyrbPB1BmAOW_uPl1rIvFwvWAAZG2cnAd8DcE"/>
<span class="font-body-md text-on-surface-variant">© 2024 Fresh From Farm. Rooted in Transparency.</span>
</div>
<div class="flex flex-wrap gap-md">
<a class="text-on-surface-variant font-label-md text-label-md hover:underline hover:text-primary cursor-pointer" href="#">Sustainability Report</a>
<a class="text-on-surface-variant font-label-md text-label-md hover:underline hover:text-primary cursor-pointer" href="#">Farmer Support</a>
<a class="text-on-surface-variant font-label-md text-label-md hover:underline hover:text-primary cursor-pointer" href="#">Contact Us</a>
<a class="text-on-surface-variant font-label-md text-label-md hover:underline hover:text-primary cursor-pointer" href="#">Privacy Policy</a>
<a class="text-on-surface-variant font-label-md text-label-md hover:underline hover:text-primary cursor-pointer" href="#">Terms of Service</a>
</div>
</div>
</footer>
<script>
        // Simple interaction for gift message toggle
        const giftCheckbox = document.querySelector('input[type="checkbox"]');
        const giftMessageContainer = document.getElementById('gift-message-container');

        if(giftCheckbox && giftMessageContainer) {
            giftCheckbox.addEventListener('change', function() {
                if(this.checked) {
                    giftMessageContainer.classList.remove('hidden');
                } else {
                    giftMessageContainer.classList.add('hidden');
                }
            });
        }
    </script>
</body></html><!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>About Us | Fresh From Farm</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600&amp;family=Plus+Jakarta+Sans:wght@600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "inverse-surface": "#2e3130",
                        "on-surface-variant": "#42493e",
                        "surface-bright": "#f8faf8",
                        "surface-container-high": "#e6e9e7",
                        "primary": "#154212",
                        "on-error-container": "#93000a",
                        "on-primary-fixed-variant": "#23501e",
                        "surface-container-lowest": "#ffffff",
                        "secondary-container": "#91f78e",
                        "on-background": "#191c1b",
                        "on-tertiary-fixed-variant": "#5b4300",
                        "on-tertiary-fixed": "#261a00",
                        "inverse-primary": "#a1d494",
                        "surface-container": "#eceeec",
                        "on-surface": "#191c1b",
                        "secondary-fixed": "#94f990",
                        "surface-variant": "#e1e3e1",
                        "primary-container": "#2d5a27",
                        "on-primary-container": "#9dd090",
                        "tertiary-container": "#674c00",
                        "background": "#f8faf8",
                        "primary-fixed-dim": "#a1d494",
                        "on-secondary-fixed-variant": "#005313",
                        "tertiary-fixed": "#ffdf9e",
                        "primary-fixed": "#bcf0ae",
                        "surface-container-highest": "#e1e3e1",
                        "tertiary-fixed-dim": "#fabd00",
                        "secondary-fixed-dim": "#78dc77",
                        "on-primary-fixed": "#002201",
                        "surface-tint": "#3b6934",
                        "error": "#ba1a1a",
                        "surface-container-low": "#f2f4f2",
                        "on-tertiary": "#ffffff",
                        "error-container": "#ffdad6",
                        "on-secondary-container": "#00731e",
                        "outline": "#72796e",
                        "secondary": "#006e1c",
                        "on-secondary-fixed": "#002204",
                        "on-primary": "#ffffff",
                        "inverse-on-surface": "#eff1ef",
                        "on-error": "#ffffff",
                        "on-tertiary-container": "#f6b900",
                        "outline-variant": "#c2c9bb",
                        "on-secondary": "#ffffff",
                        "surface-dim": "#d8dad9",
                        "surface": "#f8faf8",
                        "tertiary": "#4b3600"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "sm": "8px",
                        "margin-mobile": "20px",
                        "gutter": "16px",
                        "md": "16px",
                        "xs": "4px",
                        "unit": "4px",
                        "lg": "24px",
                        "xl": "32px"
                    },
                    "fontFamily": {
                        "body-md": ["Be Vietnam Pro"],
                        "headline-lg-mobile": ["Plus Jakarta Sans"],
                        "label-sm": ["Be Vietnam Pro"],
                        "label-md": ["Be Vietnam Pro"],
                        "headline-md": ["Plus Jakarta Sans"],
                        "headline-lg": ["Plus Jakarta Sans"],
                        "headline-xl": ["Plus Jakarta Sans"],
                        "body-lg": ["Be Vietnam Pro"]
                    },
                    "fontSize": {
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }]
                    }
                }
            }
        }
    </script>
<style>
        .texture-overlay {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
            pointer-events: none;
        }
    </style>
</head>
<body class="bg-surface text-on-surface font-body-md relative overflow-x-hidden">
<div class="texture-overlay fixed inset-0 z-0"></div>
<!-- TopNavBar -->
<nav class="w-full top-0 sticky bg-surface/80 backdrop-blur-md shadow-sm z-50">
<div class="flex justify-between items-center px-lg py-md max-w-7xl mx-auto">
<div class="flex items-center gap-sm">
<img alt="Fresh From Farm" class="h-10 w-10 rounded-md object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1WIKEygshjrWT9XLfYtKMX6TMXTd7wpiLnL6t5EaeZuQNPhFnmx1Vz76HJPzPkytySTrf01s_2m-IL29SHlIFqdECCOjVZ4rVB-QTd3ke-v9BrgHMBtiAY5yVNDeUwqQyk2i5_oT4JtAHetFUyS0Y9pemtvcFCKc1a3w5Mt9axNj1lVWqk389d5YdSCeceKfXv6997iyeWXXqNrm3ESyuKIyrbPB1BmAOW_uPl1rIvFwvWAAZG2cnAd8DcE"/>
<span class="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary hidden sm:block">Fresh From Farm</span>
</div>
<div class="hidden md:flex gap-lg font-body-md text-body-md">
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Marketplace</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Bulk Orders</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Farm Stories</a>
<a class="text-primary border-b-2 border-primary pb-1 transition-all active:scale-95" href="#">About Us</a>
</div>
<div class="flex items-center gap-md">
<button class="text-on-surface-variant hover:text-primary transition-colors duration-200">
<span class="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-colors duration-200">
<span class="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</nav>
<!-- Main Content Canvas -->
<main class="relative z-10 pb-xl">
<!-- Hero Section -->
<section class="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-primary-container">
<div class="absolute inset-0 bg-cover bg-center w-full h-full mix-blend-overlay opacity-60" data-alt="A sweeping, breathtaking landscape photography shot of a vibrant organic farm at sunrise. The golden hour light casts long, warm shadows across neatly planted rows of crops. The aesthetic is high-end, earthy, and aspirational, utilizing deep greens (like #2d5a27) and warm sunlight hues. Morning mist clings to the distant hills, conveying freshness, trust, and connection to nature." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAu1DFEmTA4DcNTRES4tz4ZVrr-2LG7ktVQG7aOWV8em_jFS92gZU_CVKGaewLtW-coj54KdhuTuiuuhcJZMqMK1xITS23CJYdo2_2rtpMHgJmDSvyFIAUv1HMnv2IpPwWH2JTfjuEqkHWdnUsnNtxW3XEGDETOREoL15INBsf0bPbtcYH9oNtuFdJ7HgfEg7zb8zm4hculdgd0Ihdbcf2Z5_ZoJc8SxU6RFI9xmWktEIlnk3V5d5i7Yg')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
<div class="relative z-10 text-center px-margin-mobile text-on-primary">
<h1 class="font-headline-xl text-headline-xl md:font-headline-xl md:text-headline-xl mb-sm font-bold tracking-tight">Our Journey: Rooted in Trust</h1>
<p class="font-body-lg text-body-lg max-w-2xl mx-auto text-primary-fixed">Bridging the gap between traditional agricultural heritage and modern convenience.</p>
</div>
</section>
<div class="max-w-7xl mx-auto px-margin-mobile md:px-lg space-y-[96px] mt-xl">
<!-- Mission & Vision (Bento Grid Style) -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-md">
<div class="md:col-span-2 bg-surface-container-lowest rounded-xl p-xl shadow-sm border border-outline-variant/30 flex flex-col justify-center">
<div class="h-12 w-12 bg-secondary-container rounded-full flex items-center justify-center mb-md">
<span class="material-symbols-outlined text-on-secondary-container" data-icon="eco" data-weight="fill" style="font-variation-settings: 'FILL' 1;">eco</span>
</div>
<h2 class="font-headline-lg text-headline-lg mb-sm text-primary">Commitment to Organic</h2>
<p class="font-body-md text-body-md text-on-surface-variant">We believe that true nourishment starts from the soil. Our mission is to provide produce that is free from harmful chemicals, grown using sustainable practices that enrich the earth rather than deplete it. Every harvest is a testament to our dedication to organic integrity and consumer health.</p>
</div>
<div class="bg-primary rounded-xl p-xl shadow-sm text-on-primary flex flex-col justify-center relative overflow-hidden">
<div class="absolute -right-10 -top-10 opacity-10">
<span class="material-symbols-outlined text-[120px]" data-icon="handshake" data-weight="fill" style="font-variation-settings: 'FILL' 1;">handshake</span>
</div>
<div class="h-12 w-12 bg-primary-fixed-dim/20 rounded-full flex items-center justify-center mb-md relative z-10">
<span class="material-symbols-outlined text-primary-fixed" data-icon="agriculture">agriculture</span>
</div>
<h2 class="font-headline-md text-headline-md mb-sm text-primary-fixed relative z-10">Direct Connection</h2>
<p class="font-body-md text-body-md text-primary-fixed-dim relative z-10">Fostering a transparent, direct line from the hands that plant the seeds to the families that enjoy the harvest, ensuring fair compensation and ultimate freshness.</p>
</div>
</section>
<!-- Our Story -->
<section class="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
<div class="order-2 md:order-1 space-y-md">
<h2 class="font-headline-xl text-headline-xl text-primary">Bridging Heritage &amp; Modernity</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">What started as a small cooperative of passionate local growers has blossomed into a movement. We recognized a growing disconnect between urban consumers and the source of their food. </p>
<p class="font-body-md text-body-md text-on-surface-variant">By leveraging modern logistics while staunchly defending traditional, earth-friendly farming methods, we deliver the authenticity of a high-end farmer's market straight to your door. It's about bringing the tactile, vibrant reality of the farm into the contemporary kitchen.</p>
<button class="mt-sm bg-primary text-on-primary font-label-md text-label-md px-lg py-sm rounded-lg hover:bg-primary-container transition-colors min-h-[48px]">Read the Full Story</button>
</div>
<div class="order-1 md:order-2">
<div class="relative rounded-xl overflow-hidden shadow-md aspect-square md:aspect-[4/3] bg-surface-variant">
<img class="object-cover w-full h-full" data-alt="A beautifully composed, high-resolution lifestyle photograph showing a modern family unboxing fresh, vibrant organic vegetables in a sleek, brightly lit contemporary kitchen. The vegetables (bright reds, deep greens) pop against the clean, minimalist kitchen setting. The image should convey warmth, health, modern convenience, and the tangible connection to agricultural heritage. Lighting is natural, soft, and inviting, aligning with a premium organic brand aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkLYe8gim_pYcC7G_Fkp-0zvtdPLw8MSHM1OEg8MtIsmBjWveNajrACqXXMBH2q3yySKNjy3F5f4QX9BVYaThWeq0s7FRPaIcr39gNFzBpFiJgKovn29q-oesu-_9OZ2twfHDP4y_tlXfNdI0t6akUmBVSvhvTQyQqP9CXesNn0de1eHkHJ3ig8dTi8v5Sikqr-mC3WikQSaBe-P4SRcL-6INkEcpZSHUzJwClWBc-gSliERWlr1X6Aw"/>
</div>
</div>
</section>
</div>
</main>
<!-- Footer -->
<footer class="w-full mt-xl bg-surface-container-highest dark:bg-surface-container-lowest">
<div class="flex flex-col md:flex-row justify-between items-start gap-lg px-lg py-xl max-w-7xl mx-auto">
<div>
<span class="font-headline-md text-headline-md text-primary block mb-sm">Fresh From Farm</span>
<p class="font-label-md text-label-md text-on-surface-variant">© 2024 Fresh From Farm. Rooted in Transparency.</p>
</div>
<div class="flex flex-col md:flex-row gap-lg font-label-md text-label-md">
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer min-h-[48px] flex items-center" href="#">Sustainability Report</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer min-h-[48px] flex items-center" href="#">Farmer Support</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer min-h-[48px] flex items-center" href="#">Contact Us</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer min-h-[48px] flex items-center" href="#">Privacy Policy</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer min-h-[48px] flex items-center" href="#">Terms of Service</a>
</div>
</div>
</footer>
</body></html><!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Checkout - Fresh From Farm</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600&amp;family=Plus+Jakarta+Sans:wght@600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "inverse-primary": "#a1d494",
                        "on-primary": "#ffffff",
                        "secondary-container": "#91f78e",
                        "background": "#f8faf8",
                        "primary-fixed": "#bcf0ae",
                        "tertiary-container": "#674c00",
                        "tertiary": "#4b3600",
                        "secondary": "#006e1c",
                        "surface": "#f8faf8",
                        "on-primary-fixed-variant": "#23501e",
                        "surface-container-high": "#e6e9e7",
                        "error-container": "#ffdad6",
                        "surface-container-highest": "#e1e3e1",
                        "surface-container": "#eceeec",
                        "surface-bright": "#f8faf8",
                        "on-error-container": "#93000a",
                        "on-tertiary-fixed-variant": "#5b4300",
                        "on-primary-container": "#9dd090",
                        "secondary-fixed": "#94f990",
                        "inverse-surface": "#2e3130",
                        "outline": "#72796e",
                        "on-tertiary": "#ffffff",
                        "on-secondary": "#ffffff",
                        "surface-container-lowest": "#ffffff",
                        "on-background": "#191c1b",
                        "on-secondary-fixed": "#002204",
                        "inverse-on-surface": "#eff1ef",
                        "surface-dim": "#d8dad9",
                        "on-primary-fixed": "#002201",
                        "on-secondary-container": "#00731e",
                        "tertiary-fixed-dim": "#fabd00",
                        "secondary-fixed-dim": "#78dc77",
                        "on-surface": "#191c1b",
                        "primary-fixed-dim": "#a1d494",
                        "primary": "#154212",
                        "surface-tint": "#3b6934",
                        "on-surface-variant": "#42493e",
                        "tertiary-fixed": "#ffdf9e",
                        "surface-container-low": "#f2f4f2",
                        "outline-variant": "#c2c9bb",
                        "on-secondary-fixed-variant": "#005313",
                        "on-error": "#ffffff",
                        "primary-container": "#2d5a27",
                        "on-tertiary-fixed": "#261a00",
                        "error": "#ba1a1a",
                        "on-tertiary-container": "#f6b900",
                        "surface-variant": "#e1e3e1"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "lg": "24px",
                        "margin-mobile": "20px",
                        "xl": "32px",
                        "gutter": "16px",
                        "sm": "8px",
                        "unit": "4px",
                        "xs": "4px",
                        "md": "16px"
                    },
                    "fontFamily": {
                        "body-lg": ["Be Vietnam Pro"],
                        "headline-lg": ["Plus Jakarta Sans"],
                        "body-md": ["Be Vietnam Pro"],
                        "headline-lg-mobile": ["Plus Jakarta Sans"],
                        "headline-xl": ["Plus Jakarta Sans"],
                        "label-md": ["Be Vietnam Pro"],
                        "label-sm": ["Be Vietnam Pro"],
                        "headline-md": ["Plus Jakarta Sans"]
                    },
                    "fontSize": {
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }],
                        "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }]
                    }
                }
            }
        }
    </script>
<style>
        body { font-family: 'Be Vietnam Pro', sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Plus Jakarta Sans', sans-serif; }
        
        /* Tactical subtle texture overlay */
        .texture-bg {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 50;
            opacity: 0.15;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* Material Symbols Fill override */
        .material-symbols-outlined[data-weight="fill"] {
            font-variation-settings: 'FILL' 1;
        }

        /* Custom Radio & Checkbox Styles to match brand */
        .form-radio:checked, .form-checkbox:checked {
            background-image: none;
            background-color: theme('colors.primary');
            border-color: theme('colors.primary');
        }
        .form-radio:checked {
            background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
        }
    </style>
</head>
<body class="bg-background text-on-background antialiased relative min-h-screen flex flex-col">
<div class="texture-bg"></div>
<!-- Navigation Suppressed: Linear/Transactional Intent (Checkout) -->
<!-- We are intentionally hiding the TopNavBar and Footer shells per the "Semantic Shell Mandate" rule for linear flows. -->
<!-- Minimal Header for Checkout Context -->
<header class="w-full bg-surface shadow-sm sticky top-0 z-40 h-16 flex items-center px-margin-mobile md:px-xl">
<div class="max-w-7xl mx-auto w-full flex items-center justify-between">
<div class="font-headline-md text-headline-md font-bold text-primary flex items-center gap-sm">
<span class="material-symbols-outlined text-secondary" data-weight="fill">eco</span>
                Fresh From Farm
            </div>
<div class="flex items-center gap-sm text-on-surface-variant font-label-md text-label-md">
<span class="material-symbols-outlined">lock</span>
                Secure Checkout
            </div>
</div>
</header>
<main class="flex-grow max-w-7xl mx-auto w-full px-margin-mobile md:px-xl py-xl grid grid-cols-1 lg:grid-cols-12 gap-xl relative z-10">
<!-- Left Section: Forms (col span 7 or 8) -->
<section class="lg:col-span-7 xl:col-span-8 flex flex-col gap-xl">
<div class="flex items-center gap-sm mb-sm">
<a class="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-xs font-label-sm text-label-sm" href="#">
<span class="material-symbols-outlined text-sm">arrow_back</span>
                    Return to Cart
                </a>
</div>
<h1 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-lg">Checkout</h1>
<!-- Delivery Address Card -->
<div class="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-lg md:p-xl">
<h2 class="font-headline-md text-headline-md text-on-surface mb-lg flex items-center gap-sm pb-md border-b border-outline-variant/30">
<span class="material-symbols-outlined text-secondary">local_shipping</span>
                    Delivery Address
                </h2>
<form class="grid grid-cols-1 md:grid-cols-2 gap-md">
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface-variant" for="firstName">First Name</label>
<input class="h-12 px-md bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all font-body-md text-body-md" id="firstName" placeholder="Jane" type="text"/>
</div>
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface-variant" for="lastName">Last Name</label>
<input class="h-12 px-md bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all font-body-md text-body-md" id="lastName" placeholder="Doe" type="text"/>
</div>
<div class="flex flex-col gap-xs md:col-span-2">
<label class="font-label-md text-label-md text-on-surface-variant" for="phone">Phone Number</label>
<input class="h-12 px-md bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all font-body-md text-body-md" id="phone" placeholder="(555) 123-4567" type="tel"/>
</div>
<div class="flex flex-col gap-xs md:col-span-2">
<label class="font-label-md text-label-md text-on-surface-variant" for="address1">Street Address</label>
<input class="h-12 px-md bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all font-body-md text-body-md" id="address1" placeholder="123 Farm Lane, Apt 4B" type="text"/>
</div>
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface-variant" for="city">City</label>
<input class="h-12 px-md bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all font-body-md text-body-md" id="city" placeholder="Portland" type="text"/>
</div>
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface-variant" for="state">State / Province</label>
<select class="h-12 px-md bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all font-body-md text-body-md appearance-none" id="state">
<option>Oregon</option>
<option>Washington</option>
<option>California</option>
</select>
</div>
<div class="md:col-span-2 mt-sm flex items-center gap-sm">
<input class="form-checkbox h-5 w-5 text-primary border-outline-variant rounded focus:ring-primary focus:ring-offset-0 transition-colors" id="saveAddress" type="checkbox"/>
<label class="font-body-md text-body-md text-on-surface-variant cursor-pointer" for="saveAddress">Save this information for next time</label>
</div>
</form>
</div>
<!-- Payment Method Card -->
<div class="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-lg md:p-xl">
<h2 class="font-headline-md text-headline-md text-on-surface mb-lg flex items-center gap-sm pb-md border-b border-outline-variant/30">
<span class="material-symbols-outlined text-secondary">payment</span>
                    Payment Method
                </h2>
<div class="flex flex-col gap-md">
<!-- Credit Card Option -->
<label class="flex flex-col border border-primary bg-primary/5 rounded-lg p-md cursor-pointer transition-all">
<div class="flex items-center justify-between mb-md">
<div class="flex items-center gap-md">
<input checked="" class="form-radio h-5 w-5 text-primary border-outline-variant focus:ring-primary" name="payment_method" type="radio"/>
<span class="font-label-md text-label-md text-on-surface flex items-center gap-xs">
<span class="material-symbols-outlined text-on-surface-variant">credit_card</span>
                                    Credit / Debit Card
                                </span>
</div>
<div class="flex gap-xs">
<!-- Minimal pseudo card icons -->
<div class="w-8 h-5 bg-surface-container-high rounded flex items-center justify-center text-[8px] font-bold text-on-surface-variant">VISA</div>
<div class="w-8 h-5 bg-surface-container-high rounded flex items-center justify-center text-[8px] font-bold text-on-surface-variant">MC</div>
</div>
</div>
<!-- Embedded Form for Card -->
<div class="grid grid-cols-2 gap-md pl-xl ml-xs">
<div class="col-span-2 flex flex-col gap-xs">
<input class="h-12 px-md bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all font-body-md text-body-md" placeholder="Card Number" type="text"/>
</div>
<div class="flex flex-col gap-xs">
<input class="h-12 px-md bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all font-body-md text-body-md" placeholder="MM/YY" type="text"/>
</div>
<div class="flex flex-col gap-xs">
<input class="h-12 px-md bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all font-body-md text-body-md" placeholder="CVV" type="text"/>
</div>
</div>
</label>
<!-- UPI Option -->
<label class="flex flex-col border border-outline-variant rounded-lg p-md cursor-pointer hover:bg-surface-container-low transition-all">
<div class="flex items-center justify-between">
<div class="flex items-center gap-md">
<input class="form-radio h-5 w-5 text-primary border-outline-variant focus:ring-primary" name="payment_method" type="radio"/>
<span class="font-label-md text-label-md text-on-surface flex items-center gap-xs">
<span class="material-symbols-outlined text-on-surface-variant">qr_code_scanner</span>
                                    UPI
                                </span>
</div>
<span class="text-xs text-on-surface-variant">GPay, PhonePe</span>
</div>
</label>
<!-- COD Option -->
<label class="flex flex-col border border-outline-variant rounded-lg p-md cursor-pointer hover:bg-surface-container-low transition-all">
<div class="flex items-center justify-between">
<div class="flex items-center gap-md">
<input class="form-radio h-5 w-5 text-primary border-outline-variant focus:ring-primary" name="payment_method" type="radio"/>
<span class="font-label-md text-label-md text-on-surface flex items-center gap-xs">
<span class="material-symbols-outlined text-on-surface-variant">payments</span>
                                    Cash on Delivery
                                </span>
</div>
</div>
</label>
</div>
</div>
<!-- Desktop Action (Hidden on mobile where order summary action takes over) -->
<div class="hidden lg:block mt-md">
<button class="w-full h-14 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-sm hover:bg-primary-container transition-colors shadow-sm">
<span class="material-symbols-outlined" data-weight="fill">lock</span>
                    Place Order • $42.50
                </button>
<div class="text-center mt-sm flex items-center justify-center gap-sm text-on-surface-variant opacity-70">
<span class="material-symbols-outlined text-sm">verified_user</span>
<span class="font-label-sm text-label-sm">256-bit SSL Secure Checkout</span>
</div>
</div>
</section>
<!-- Right Section: Order Summary (Sticky) -->
<section class="lg:col-span-5 xl:col-span-4 h-max lg:sticky lg:top-24 mb-xl">
<div class="bg-surface-container-lowest rounded-xl shadow-md border border-outline-variant/30 p-lg overflow-hidden relative">
<!-- Decorative top bar indicating receipt -->
<div class="absolute top-0 left-0 right-0 h-1 bg-secondary"></div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-lg flex items-center justify-between">
                    Order Summary
                    <span class="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-full font-label-sm text-label-sm">3 Items</span>
</h3>
<!-- Items List -->
<div class="flex flex-col gap-md mb-lg max-h-[300px] overflow-y-auto pr-sm custom-scrollbar">
<div class="flex items-start gap-md">
<div class="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-surface-container-low border border-outline-variant/20">
<img class="w-full h-full object-cover" data-alt="A macro shot of a bundle of vibrant, dew-covered organic heirloom carrots sitting on a rustic wooden table in a bright, sunlit modern kitchen. The aesthetic is organic premium, high contrast, natural light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Sojx-vwrSMCL8pGO2xjx2KIFRWPS9SjrPkctkuP7wpE1aPfBuPM94plBT4-1WK_Pdf3mJTQOCn5VQSlX1PvmgoHUVoRZ-de8A2L9H3E6rMYLfNowN0ePxXgTWtmBGdCBm5fbKDIt6nILIVoynWQ3C59BluZdYC7CcqzR5YcouW-OpLFe_NYncLDpInrklBsIHK0feMlJnn2pu9JWLFgVnWY9SaVoqbkh9hWOh-dbp6JtaDTfYuNwaw"/>
</div>
<div class="flex-grow flex flex-col pt-xs">
<span class="font-label-md text-label-md text-on-surface line-clamp-1">Heirloom Organic Carrots</span>
<span class="font-body-sm text-label-sm text-on-surface-variant">Qty: 2 • Farm: Willow Creek</span>
</div>
<div class="font-label-md text-label-md text-on-surface pt-xs">$8.00</div>
</div>
<div class="flex items-start gap-md">
<div class="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-surface-container-low border border-outline-variant/20">
<img class="w-full h-full object-cover" data-alt="A top-down view of a small wicker basket filled with fresh, deep green organic kale leaves on a clean white countertop. Soft ambient shadows, natural lighting, high-end farmer's market feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKf1s0akhGkifvTy0rkwPya1SDzPilh3M5yJ-wqDef5NC1eCx5v-Skd1HsBGVIkZk5zhtCaHhg9jctMbCYtCoV5c6_BziRJHp2SwQir8MrWHrLvKpsh2_vmkYEYiypgTUeA5AOZsr2AyvI8Jre8FPkSGhPx6-7HNcg2bm8gZPsCYmM2ovxroec6rHl_AhtlHaDzBW8sQCtSgdLEA4sXZXBSUSQsuARnOGTiOF1XrrkkmHJwXO9PqyE6w"/>
</div>
<div class="flex-grow flex flex-col pt-xs">
<span class="font-label-md text-label-md text-on-surface line-clamp-1">Dinosaur Kale Bunch</span>
<span class="font-body-sm text-label-sm text-on-surface-variant">Qty: 1 • Farm: Green Acres</span>
</div>
<div class="font-label-md text-label-md text-on-surface pt-xs">$4.50</div>
</div>
<div class="flex items-start gap-md">
<div class="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-surface-container-low border border-outline-variant/20">
<img class="w-full h-full object-cover" data-alt="Close up of a premium artisan sourdough bread loaf with a dusting of flour on a cutting board. Warm, inviting lighting, tactile organic texture, high-resolution food photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqB0fL0hMnyy4IPIMekTZ1TCztMUTP4uFtqIhWDm_j6WocIeJOXjhUD8WFPuVOZimK2wOSqswwC61Xj9uxmiUyWRwxuhb_UM7Nric8ufIm4KpQfdXVkJvO4hCW-JXYFboUfW-ZtxfR79YCAtuhLqQg3lEF7yZqWhBnWNIkzPaxbd1pHVIxi5eIXSbq0T0onzPfnanr8u5Ua4ghwr2hEnzQ45H0j_t48KpIaww8CT-Ml86nHF0zcPIekA"/>
</div>
<div class="flex-grow flex flex-col pt-xs">
<span class="font-label-md text-label-md text-on-surface line-clamp-1">Artisan Sourdough Loaf</span>
<span class="font-body-sm text-label-sm text-on-surface-variant">Qty: 1 • Bakery: Stone Mill</span>
</div>
<div class="font-label-md text-label-md text-on-surface pt-xs">$12.00</div>
</div>
</div>
<!-- Promo Code -->
<div class="mb-lg pb-lg border-b border-outline-variant/30 flex gap-sm">
<input class="flex-grow h-12 px-md bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all font-body-md text-body-md uppercase" placeholder="Promo Code" type="text"/>
<button class="h-12 px-md bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-variant transition-colors">Apply</button>
</div>
<!-- Totals -->
<div class="flex flex-col gap-sm mb-lg font-body-md text-body-md text-on-surface-variant">
<div class="flex justify-between">
<span>Subtotal</span>
<span>$24.50</span>
</div>
<div class="flex justify-between">
<span>Shipping</span>
<div class="text-right">
<span class="text-secondary font-label-md">Free</span>
<span class="line-through text-on-surface-variant/50 ml-xs">$5.00</span>
</div>
</div>
<div class="flex justify-between">
<span>Estimated Taxes</span>
<span>$1.96</span>
</div>
</div>
<!-- Grand Total -->
<div class="flex justify-between items-end pt-md border-t border-outline-variant/30 mb-lg">
<span class="font-headline-md text-headline-md text-on-surface">Total</span>
<span class="font-headline-lg text-headline-lg text-primary">$26.46</span>
</div>
<!-- Mobile Action (Mirrors Desktop Action for flow) -->
<div class="lg:hidden">
<button class="w-full h-14 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-sm hover:bg-primary-container transition-colors shadow-sm">
<span class="material-symbols-outlined" data-weight="fill">lock</span>
                        Place Order • $26.46
                    </button>
<div class="text-center mt-sm flex items-center justify-center gap-sm text-on-surface-variant opacity-70">
<span class="material-symbols-outlined text-sm">verified_user</span>
<span class="font-label-sm text-label-sm">Secure Checkout</span>
</div>
</div>
</div>
</section>
</main>
<!-- Suppressed Footer Shell -->
</body></html><!DOCTYPE html>

<html lang="hi"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Fresh From Farm</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&amp;family=Plus+Jakarta+Sans:wght@600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "primary-fixed-dim": "#a1d494",
                        "error-container": "#ffdad6",
                        "primary-container": "#2d5a27",
                        "primary": "#154212",
                        "inverse-on-surface": "#eff1ef",
                        "on-tertiary": "#ffffff",
                        "on-secondary-fixed": "#002204",
                        "outline": "#72796e",
                        "on-primary": "#ffffff",
                        "on-primary-fixed-variant": "#23501e",
                        "outline-variant": "#c2c9bb",
                        "surface-container-lowest": "#ffffff",
                        "tertiary-fixed": "#ffdf9e",
                        "surface-container": "#eceeec",
                        "surface-variant": "#e1e3e1",
                        "surface": "#f8faf8",
                        "surface-tint": "#3b6934",
                        "secondary-fixed-dim": "#78dc77",
                        "on-primary-fixed": "#002201",
                        "on-tertiary-container": "#f6b900",
                        "surface-dim": "#d8dad9",
                        "surface-container-high": "#e6e9e7",
                        "tertiary-fixed-dim": "#fabd00",
                        "on-error": "#ffffff",
                        "on-secondary-fixed-variant": "#005313",
                        "tertiary": "#4b3600",
                        "secondary-container": "#91f78e",
                        "surface-bright": "#f8faf8",
                        "inverse-primary": "#a1d494",
                        "on-primary-container": "#9dd090",
                        "inverse-surface": "#2e3130",
                        "on-tertiary-fixed": "#261a00",
                        "surface-container-low": "#f2f4f2",
                        "on-surface-variant": "#42493e",
                        "on-tertiary-fixed-variant": "#5b4300",
                        "on-surface": "#191c1b",
                        "on-error-container": "#93000a",
                        "on-secondary": "#ffffff",
                        "surface-container-highest": "#e1e3e1",
                        "tertiary-container": "#674c00",
                        "secondary": "#006e1c",
                        "secondary-fixed": "#94f990",
                        "background": "#f8faf8",
                        "on-secondary-container": "#00731e",
                        "primary-fixed": "#bcf0ae",
                        "error": "#ba1a1a",
                        "on-background": "#191c1b"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "margin-mobile": "20px",
                        "lg": "24px",
                        "md": "16px",
                        "unit": "4px",
                        "gutter": "16px",
                        "xs": "4px",
                        "sm": "8px",
                        "xl": "32px"
                    },
                    "fontFamily": {
                        "label-sm": ["Be Vietnam Pro"],
                        "headline-lg": ["Plus Jakarta Sans"],
                        "body-md": ["Be Vietnam Pro"],
                        "body-lg": ["Be Vietnam Pro"],
                        "label-md": ["Be Vietnam Pro"],
                        "headline-md": ["Plus Jakarta Sans"],
                        "headline-xl": ["Plus Jakarta Sans"],
                        "headline-lg-mobile": ["Plus Jakarta Sans"]
                    },
                    "fontSize": {
                        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }]
                    }
                }
            }
        }
    </script>
<style>
        body { background-color: #f8faf8; }
        .glass-panel {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
    </style>
</head>
<body class="text-on-background font-body-md antialiased min-h-screen flex flex-col">
<!-- TopNavBar -->
<nav class="bg-surface w-full top-0 sticky bg-surface/80 backdrop-blur-md shadow-sm z-50">
<div class="flex justify-between items-center px-lg py-md max-w-7xl mx-auto">
<a class="font-headline-md text-headline-md font-bold text-primary flex items-center gap-sm" href="#">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">eco</span>
                Fresh From Farm
            </a>
<div class="hidden md:flex items-center gap-lg">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Marketplace</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Bulk Orders</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Farm Stories</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">About Us</a>
</div>
<div class="flex items-center gap-md">
<button class="text-primary transition-all active:scale-95 hover:text-primary transition-colors duration-200 flex items-center justify-center p-sm rounded-full">
<span class="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
</button>
<button class="text-primary transition-all active:scale-95 hover:text-primary transition-colors duration-200 flex items-center justify-center p-sm rounded-full">
<span class="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</nav>
<main class="flex-grow">
<!-- Hero Section -->
<section class="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
<div class="absolute inset-0 bg-cover bg-center w-full h-full object-cover" data-alt="A sweeping, sun-drenched wide shot of a lush, vibrant organic farm field at golden hour. The lighting is warm and bright, creating a premium, modern agricultural aesthetic. Rows of healthy green crops stretch into the distance under a clear blue sky. High-resolution, professional photography." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfhHuVeRKnnycLzcPok98OuPCuInq0t89m6q6Zq7pIyoV6dBWp8GWf3Ph6S3OqzQnUf2diLDL6cBW-GepaWBAF8cSKHNTWgYrIT5s7bRYlRgFPK9E2RT9HwawJniEfEI2_qG27aHAeTEwrwmbspx4kLGk6dyA6ld4EytsppCbfje2Yv0_rLYXMntn7xrnhw8QUGxFkfc5V5MR3E82j3h1WjILE4pw8yAO8tXiS5zkl9oQmzxuqiVdbRQ')"></div>
<div class="absolute inset-0 bg-black/30"></div>
<div class="relative z-10 text-center px-margin-mobile max-w-4xl mx-auto glass-panel p-xl rounded-xl shadow-lg">
<h1 class="font-headline-xl text-headline-xl text-primary mb-md">खेत से सीधा, आपके घर तक</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-2xl mx-auto">किसानों से जुड़ें, शुद्धता अपनाएं और ताज़गी का अनुभव करें।</p>
<div class="flex flex-col sm:flex-row gap-md justify-center">
<button class="bg-primary text-on-primary font-label-md text-label-md px-lg py-md rounded-lg shadow-md hover:bg-primary-container transition-all active:scale-95 h-[48px] flex items-center justify-center">
                        अभी खरीदारी करें
                    </button>
<button class="bg-surface text-primary border-2 border-primary font-label-md text-label-md px-lg py-md rounded-lg shadow-sm hover:bg-surface-container transition-all active:scale-95 h-[48px] flex items-center justify-center">
                        थोक ऑर्डर
                    </button>
</div>
</div>
</section>
<!-- Features Section (Bento Grid) -->
<section class="max-w-7xl mx-auto px-margin-mobile py-xl my-xl">
<div class="grid grid-cols-1 md:grid-cols-3 gap-lg">
<div class="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-surface-variant flex flex-col items-center text-center transition-transform hover:-translate-y-1">
<div class="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mb-md text-primary">
<span class="material-symbols-outlined text-3xl">compost</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary mb-sm">शुद्ध जैविक</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Certified chemical-free produce grown with traditional wisdom and modern care.</p>
</div>
<div class="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-surface-variant flex flex-col items-center text-center transition-transform hover:-translate-y-1">
<div class="w-16 h-16 bg-tertiary-fixed rounded-full flex items-center justify-center mb-md text-tertiary">
<span class="material-symbols-outlined text-3xl">handshake</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary mb-sm">सीधा जुड़ाव</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Connect directly with local farmers, ensuring fair trade and community support.</p>
</div>
<div class="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-surface-variant flex flex-col items-center text-center transition-transform hover:-translate-y-1">
<div class="w-16 h-16 bg-secondary-fixed rounded-full flex items-center justify-center mb-md text-secondary">
<span class="material-symbols-outlined text-3xl">local_shipping</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary mb-sm">तेज़ डिलीवरी</h3>
<p class="font-body-md text-body-md text-on-surface-variant">From the field to your kitchen table within 24 hours to guarantee maximum freshness.</p>
</div>
</div>
</section>
<!-- Trending Products -->
<section class="max-w-7xl mx-auto px-margin-mobile py-xl bg-surface-container-low rounded-xl">
<div class="flex justify-between items-end mb-lg">
<h2 class="font-headline-lg text-headline-lg text-primary">Trending Freshness</h2>
<a class="font-label-md text-label-md text-secondary hover:underline flex items-center gap-xs" href="#">
                    View All Market <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
<!-- Product Card 1 -->
<div class="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-surface-variant group">
<div class="relative h-48 w-full overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Close-up of freshly harvested organic potatoes with rich, dark soil still lightly clinging to their skins, resting in a woven basket. Bright, natural daylight highlighting the earthy textures, set against a blurred green farm background. Modern, clean aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA27ScSLf0OxKxraUyVbvLDIYfkhjCL8Ns-0laBMSrDFh05gqOPxNvXBQ9eQTddjFna6tmC8GUEllCJGl7phL-bADuNWA3PwNW_tHqV1MNQWrfeaDhE9-SxlKNbF0H-g7y6Z0n0sQpODvjhNtymoH-laajqYf4ik0R0rBgCIG9PjaCiwkEbmJSF4hTLVv3xtKC27B0fxCs_bzw1OUVQT6rDIhSywCBUYl9eL7H51AyolytoSEZh3kgnFA"/>
<div class="absolute top-sm right-sm bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-sm text-label-sm px-sm py-xs rounded-full">
                            ₹40/kg
                        </div>
</div>
<div class="p-md flex flex-col gap-sm">
<div class="flex justify-between items-start">
<div>
<h4 class="font-label-md text-label-md text-on-surface">Farm Fresh Potatoes</h4>
<p class="font-label-sm text-label-sm text-on-surface-variant">Rampur Village</p>
</div>
</div>
<button class="mt-sm w-full bg-surface-container border border-outline-variant text-primary font-label-md text-label-md py-sm rounded-lg hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-xs h-[48px]">
<span class="material-symbols-outlined text-sm">add</span> Add to Cart
                        </button>
</div>
</div>
<!-- Product Card 2 -->
<div class="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-surface-variant group">
<div class="relative h-48 w-full overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Vibrant red, ripe organic tomatoes still attached to the vine, glistening with morning dew. The lighting is crisp and natural, emphasizing the bright, juicy colors against a soft green leafy background. Professional food photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEIdb6JgZ2pQoGGZdnnlwgMdupuLn_LujG63VqLAfhgVxbVCxMtDAJJlDU6YrBV6ir5oAsy54UMDYMm9EgIf2tWdiV_YReEgXZ2nQRtrHeYL82c-B6q2n6TPIm65FvV2tiZCeuqdgjz_hJU8Pg1gUep2xpB1nkcqre2OMDD4_L5aQISHOk-unaE9U-jFjvob3QWnjjVhAJVYvumsYJHqKUgJQByBjd2ibzufAYG01fukvS7vvbpmS78g"/>
<div class="absolute top-sm right-sm bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-sm text-label-sm px-sm py-xs rounded-full">
                            ₹60/kg
                        </div>
</div>
<div class="p-md flex flex-col gap-sm">
<div class="flex justify-between items-start">
<div>
<h4 class="font-label-md text-label-md text-on-surface">Vine Tomatoes</h4>
<p class="font-label-sm text-label-sm text-on-surface-variant">Green Valley Farms</p>
</div>
</div>
<button class="mt-sm w-full bg-surface-container border border-outline-variant text-primary font-label-md text-label-md py-sm rounded-lg hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-xs h-[48px]">
<span class="material-symbols-outlined text-sm">add</span> Add to Cart
                        </button>
</div>
</div>
<!-- Product Card 3 -->
<div class="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-surface-variant group">
<div class="relative h-48 w-full overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="A lush bunch of vibrant green spinach leaves, fresh and crisp, resting on a clean, light-colored wooden table. High-key lighting illuminates the vivid greens, conveying health and freshness in a modern, premium aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgVxjDyTY4Ma_w2k-jboKhs0776opAWh_v6xp58EqQNuNSe3nccD5jVLDu49Aueq29vxGG7yBGOf2CsqysQlLPD8P0E0b9aEqMKTmqVkRSUJbcItMxlMdjNm2SN31QnjF9UtjPjnbBOrNXqW0ZODK9uCiQkSnBTnL4Pco8k6hMSkYblV37nq8fNdmd776Xcu14rfJML3lkxf3_0XFf4w1TaDTQ21zqeW8-7kJFdT9Jqm_ELNKuija0kA"/>
<div class="absolute top-sm right-sm bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-sm text-label-sm px-sm py-xs rounded-full">
                            ₹30/bunch
                        </div>
</div>
<div class="p-md flex flex-col gap-sm">
<div class="flex justify-between items-start">
<div>
<h4 class="font-label-md text-label-md text-on-surface">Organic Spinach</h4>
<p class="font-label-sm text-label-sm text-on-surface-variant">Sunrise Organics</p>
</div>
</div>
<button class="mt-sm w-full bg-surface-container border border-outline-variant text-primary font-label-md text-label-md py-sm rounded-lg hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-xs h-[48px]">
<span class="material-symbols-outlined text-sm">add</span> Add to Cart
                        </button>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-highest w-full mt-xl">
<div class="flex flex-col md:flex-row justify-between items-start gap-lg px-lg py-xl max-w-7xl mx-auto">
<div class="flex flex-col gap-sm">
<span class="font-headline-md text-headline-md text-primary">Fresh From Farm</span>
<p class="font-body-md text-body-md text-on-surface-variant max-w-sm">Bridging the gap between traditional agricultural heritage and modern convenience.</p>
</div>
<div class="flex flex-col gap-md">
<h4 class="font-label-md text-label-md text-on-surface">Links</h4>
<div class="flex flex-col gap-sm">
<a class="font-label-md text-label-md text-on-surface-variant hover:underline hover:text-primary cursor-pointer" href="#">Sustainability Report</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:underline hover:text-primary cursor-pointer" href="#">Farmer Support</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:underline hover:text-primary cursor-pointer" href="#">Contact Us</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:underline hover:text-primary cursor-pointer" href="#">Privacy Policy</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:underline hover:text-primary cursor-pointer" href="#">Terms of Service</a>
</div>
</div>
</div>
<div class="px-lg py-md border-t border-outline-variant max-w-7xl mx-auto text-center md:text-left">
<span class="font-label-sm text-label-sm text-on-surface-variant">© 2024 Fresh From Farm. Rooted in Transparency.</span>
</div>
</footer>
</body></html><!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Refer and Earn - Fresh From Farm</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-background": "#191c1b",
                        "outline-variant": "#c2c9bb",
                        "surface": "#f8faf8",
                        "on-secondary-container": "#00731e",
                        "surface-bright": "#f8faf8",
                        "surface-container-lowest": "#ffffff",
                        "primary-fixed": "#bcf0ae",
                        "primary": "#154212",
                        "tertiary-fixed-dim": "#fabd00",
                        "tertiary-fixed": "#ffdf9e",
                        "on-secondary": "#ffffff",
                        "on-error": "#ffffff",
                        "surface-tint": "#3b6934",
                        "primary-container": "#2d5a27",
                        "surface-container-low": "#f2f4f2",
                        "on-tertiary-fixed": "#261a00",
                        "surface-variant": "#e1e3e1",
                        "surface-container-highest": "#e1e3e1",
                        "on-tertiary-container": "#f6b900",
                        "on-tertiary": "#ffffff",
                        "on-surface": "#191c1b",
                        "on-secondary-fixed": "#002204",
                        "on-surface-variant": "#42493e",
                        "surface-container": "#eceeec",
                        "secondary": "#006e1c",
                        "primary-fixed-dim": "#a1d494",
                        "background": "#f8faf8",
                        "on-primary-fixed": "#002201",
                        "tertiary": "#4b3600",
                        "on-primary-fixed-variant": "#23501e",
                        "on-secondary-fixed-variant": "#005313",
                        "inverse-on-surface": "#eff1ef",
                        "on-tertiary-fixed-variant": "#5b4300",
                        "secondary-fixed-dim": "#78dc77",
                        "on-primary": "#ffffff",
                        "secondary-fixed": "#94f990",
                        "inverse-surface": "#2e3130",
                        "outline": "#72796e",
                        "tertiary-container": "#674c00",
                        "surface-container-high": "#e6e9e7",
                        "surface-dim": "#d8dad9",
                        "secondary-container": "#91f78e",
                        "inverse-primary": "#a1d494",
                        "error-container": "#ffdad6",
                        "on-primary-container": "#9dd090",
                        "error": "#ba1a1a",
                        "on-error-container": "#93000a"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "unit": "4px",
                        "xl": "32px",
                        "margin-mobile": "20px",
                        "xs": "4px",
                        "sm": "8px",
                        "md": "16px",
                        "gutter": "16px",
                        "lg": "24px"
                    },
                    "fontFamily": {
                        "body-md": ["Be Vietnam Pro"],
                        "label-md": ["Be Vietnam Pro"],
                        "headline-lg": ["Plus Jakarta Sans"],
                        "headline-md": ["Plus Jakarta Sans"],
                        "headline-xl": ["Plus Jakarta Sans"],
                        "headline-lg-mobile": ["Plus Jakarta Sans"],
                        "body-lg": ["Be Vietnam Pro"],
                        "label-sm": ["Be Vietnam Pro"]
                    },
                    "fontSize": {
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }]
                    }
                }
            }
        }
    </script>
<style>
        body { background-color: theme('colors.surface'); color: theme('colors.on-surface'); }
        .organic-texture {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
        }
        .soft-shadow { box-shadow: 0 4px 20px -2px rgba(21, 66, 18, 0.08); }
    </style>
</head>
<body class="font-body-md antialiased organic-texture min-h-screen flex flex-col">
<!-- TopNavBar -->
<header class="bg-surface/80 backdrop-blur-md shadow-sm w-full top-0 sticky z-50">
<div class="flex justify-between items-center px-lg py-md max-w-7xl mx-auto">
<div class="flex items-center gap-sm cursor-pointer">
<img alt="Fresh From Farm" class="h-10 w-10 object-contain rounded-md" src="https://lh3.googleusercontent.com/aida/AEtjO1WIKEygshjrWT9XLfYtKMX6TMXTd7wpiLnL6t5EaeZuQNPhFnmx1Vz76HJPzPkytySTrf01s_2m-IL29SHlIFqdECCOjVZ4rVB-QTd3ke-v9BrgHMBtiAY5yVNDeUwqQyk2i5_oT4JtAHetFUyS0Y9pemtvcFCKc1a3w5Mt9axNj1lVWqk389d5YdSCeceKfXv6997iyeWXXqNrm3ESyuKIyrbPB1BmAOW_uPl1rIvFwvWAAZG2cnAd8DcE"/>
<span class="font-headline-md text-headline-md font-bold text-primary">Fresh From Farm</span>
</div>
<nav class="hidden md:flex gap-lg items-center">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Marketplace</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Bulk Orders</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Farm Stories</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">About Us</a>
</nav>
<div class="flex items-center gap-md">
<button aria-label="shopping_cart" class="text-primary hover:text-primary-container transition-colors">
<span class="material-symbols-outlined" data-icon="shopping_cart" style="font-variation-settings: 'FILL' 0;">shopping_cart</span>
</button>
<button aria-label="account_circle" class="text-primary hover:text-primary-container transition-colors">
<span class="material-symbols-outlined" data-icon="account_circle" style="font-variation-settings: 'FILL' 0;">account_circle</span>
</button>
</div>
</div>
</header>
<main class="flex-grow w-full max-w-7xl mx-auto px-lg py-xl space-y-xl">
<!-- Hero Section -->
<section class="bg-surface-container-low rounded-xl overflow-hidden soft-shadow relative">
<div class="absolute inset-0 z-0">
<div class="bg-cover bg-center w-full h-full opacity-20" data-alt="A lush, expansive organic farm at sunrise, soft golden hour light filtering through vibrant green crop leaves. The scene evokes a strong sense of freshness, vitality, and natural abundance, perfectly aligning with a premium, health-conscious organic brand. Warm, inviting atmosphere." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzwzdznppahveR7AgwlWKTR02OliT1PmlQKw-_tqP10XObeOC2mk11DdELZ2h2wK3owN0oqOEtzFiRJ39QV6Muw29Bcix3pEIGTo99XA1bOdOUGOTfBz-EBzp2jyUd0s4ALc76odnu4vgW12mB_CnHI_OfYrWaRmmpIgiDDhCxXBs7pfG4jUcbNKGVeiDHrCtlhvH53Cgj_0XwvjyQokS3oXRYXJSdwHy4VbjAw64pbIrcEx-cj46reA')"></div>
</div>
<div class="relative z-10 py-24 px-8 md:px-16 flex flex-col items-center text-center">
<span class="inline-block bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Refer and Earn</span>
<h1 class="font-headline-xl text-headline-xl text-primary mb-4">Share the Freshness, Earn Rewards</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8">Bring your friends to the farm! When they experience true farm-to-table freshness, we'll reward both of you with wholesome, organic goodness.</p>
</div>
</section>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-xl">
<!-- How it works & Stats Column -->
<div class="lg:col-span-7 flex flex-col gap-xl">
<!-- How it Works Bento -->
<div class="bg-surface-container-lowest rounded-xl p-8 soft-shadow">
<h2 class="font-headline-md text-headline-md text-primary mb-8 border-b border-surface-variant pb-4">How it Works</h2>
<div class="space-y-8">
<div class="flex items-start gap-4">
<div class="bg-primary-container text-on-primary-container h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 font-headline-md">1</div>
<div>
<h3 class="font-label-md text-label-md text-on-surface mb-1">Invite friends</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Share your unique referral code or link with friends who love fresh food.</p>
</div>
</div>
<div class="flex items-start gap-4">
<div class="bg-surface-variant text-on-surface-variant h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 font-headline-md">2</div>
<div>
<h3 class="font-label-md text-label-md text-on-surface mb-1">They make their first purchase</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Your friend gets 10% off their first order of farm-fresh produce.</p>
</div>
</div>
<div class="flex items-start gap-4">
<div class="bg-secondary-container text-on-secondary-container h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 font-headline-md">3</div>
<div>
<h3 class="font-label-md text-label-md text-on-surface mb-1">You get 2kg potatoes free</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Once their order is delivered, we'll add 2kg of premium organic potatoes to your next delivery.</p>
</div>
</div>
</div>
</div>
<!-- My Referral Stats -->
<div class="bg-surface-container-lowest rounded-xl p-8 soft-shadow">
<h2 class="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
<span class="material-symbols-outlined" data-icon="bar_chart">bar_chart</span>
                        My Referral Stats
                    </h2>
<div class="grid grid-cols-2 gap-4">
<div class="bg-surface-container p-6 rounded-lg text-center border border-outline-variant/30">
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Total Invites</p>
<p class="font-headline-xl text-headline-xl text-primary">12</p>
</div>
<div class="bg-surface-container p-6 rounded-lg text-center border border-outline-variant/30">
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Rewards Earned</p>
<p class="font-headline-xl text-headline-xl text-secondary">8kg</p>
<p class="font-label-sm text-label-sm text-secondary mt-1">Potatoes</p>
</div>
</div>
</div>
</div>
<!-- Share Column -->
<div class="lg:col-span-5 flex flex-col gap-xl">
<!-- Share Code Card -->
<div class="bg-primary-container text-on-primary-container rounded-xl p-8 soft-shadow sticky top-32">
<h2 class="font-headline-md text-headline-md mb-2">Your Referral Code</h2>
<p class="font-body-md text-body-md opacity-90 mb-6">Share this code with your friends to start earning rewards today.</p>
<div class="bg-surface-container-lowest rounded-lg p-4 flex items-center justify-between mb-8 border-2 border-primary-fixed-dim/30">
<span class="font-headline-md text-headline-md text-primary font-bold tracking-widest" id="referralCode">FRESHFARM24</span>
<button class="bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded-md hover:bg-on-primary hover:text-primary transition-colors flex items-center gap-2" id="copyBtn" onclick="copyCode()">
<span class="material-symbols-outlined text-[18px]" data-icon="content_copy">content_copy</span>
                            Copy Code
                        </button>
</div>
<p class="font-label-sm text-label-sm opacity-80 mb-4 uppercase tracking-wider text-center">Share via Socials</p>
<div class="grid grid-cols-3 gap-4">
<button class="bg-surface-container-lowest text-primary p-3 rounded-lg flex flex-col items-center gap-2 hover:bg-primary-fixed transition-colors">
<span class="material-symbols-outlined text-[24px]" data-icon="forum">forum</span>
<span class="font-label-sm text-label-sm">WhatsApp</span>
</button>
<button class="bg-surface-container-lowest text-primary p-3 rounded-lg flex flex-col items-center gap-2 hover:bg-primary-fixed transition-colors">
<span class="material-symbols-outlined text-[24px]" data-icon="groups">groups</span>
<span class="font-label-sm text-label-sm">Facebook</span>
</button>
<button class="bg-surface-container-lowest text-primary p-3 rounded-lg flex flex-col items-center gap-2 hover:bg-primary-fixed transition-colors">
<span class="material-symbols-outlined text-[24px]" data-icon="photo_camera">photo_camera</span>
<span class="font-label-sm text-label-sm">Instagram</span>
</button>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-surface-container-highest w-full mt-xl">
<div class="flex flex-col md:flex-row justify-between items-start gap-lg px-lg py-xl max-w-7xl mx-auto">
<div>
<span class="font-headline-md text-headline-md text-primary font-bold block mb-2">Fresh From Farm</span>
<p class="font-label-sm text-label-sm text-on-surface-variant">© 2024 Fresh From Farm. Rooted in Transparency.</p>
</div>
<nav class="flex flex-wrap gap-x-6 gap-y-2">
<a class="font-label-md text-label-md text-on-surface-variant hover:underline hover:text-primary transition-colors cursor-pointer" href="#">Sustainability Report</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:underline hover:text-primary transition-colors cursor-pointer" href="#">Farmer Support</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:underline hover:text-primary transition-colors cursor-pointer" href="#">Contact Us</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:underline hover:text-primary transition-colors cursor-pointer" href="#">Privacy Policy</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:underline hover:text-primary transition-colors cursor-pointer" href="#">Terms of Service</a>
</nav>
</div>
</footer>
<script>
        function copyCode() {
            const code = document.getElementById('referralCode').innerText;
            navigator.clipboard.writeText(code).then(() => {
                const btn = document.getElementById('copyBtn');
                const originalText = btn.innerHTML;
                btn.innerHTML = `<span class="material-symbols-outlined text-[18px]" data-icon="check">check</span> Copied!`;
                btn.classList.add('bg-secondary', 'text-on-secondary');
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.remove('bg-secondary', 'text-on-secondary');
                }, 2000);
            });
        }
    </script>
</body></html><!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Track Order - Fresh From Farm</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&amp;family=Be+Vietnam+Pro:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-fixed": "#261a00",
                        "secondary-container": "#91f78e",
                        "on-primary-fixed-variant": "#23501e",
                        "on-primary": "#ffffff",
                        "primary-fixed-dim": "#a1d494",
                        "on-secondary-container": "#00731e",
                        "error-container": "#ffdad6",
                        "background": "#f8faf8",
                        "on-error": "#ffffff",
                        "on-tertiary": "#ffffff",
                        "tertiary": "#4b3600",
                        "surface-container-low": "#f2f4f2",
                        "surface-container": "#eceeec",
                        "surface": "#f8faf8",
                        "primary-container": "#2d5a27",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-fixed": "#002204",
                        "surface-variant": "#e1e3e1",
                        "inverse-surface": "#2e3130",
                        "primary-fixed": "#bcf0ae",
                        "surface-container-high": "#e6e9e7",
                        "on-primary-fixed": "#002201",
                        "surface-bright": "#f8faf8",
                        "surface-dim": "#d8dad9",
                        "outline-variant": "#c2c9bb",
                        "error": "#ba1a1a",
                        "on-error-container": "#93000a",
                        "tertiary-fixed": "#ffdf9e",
                        "on-tertiary-fixed-variant": "#5b4300",
                        "on-surface-variant": "#42493e",
                        "on-secondary-fixed-variant": "#005313",
                        "inverse-on-surface": "#eff1ef",
                        "surface-tint": "#3b6934",
                        "on-secondary": "#ffffff",
                        "on-surface": "#191c1b",
                        "on-primary-container": "#9dd090",
                        "secondary-fixed-dim": "#78dc77",
                        "tertiary-fixed-dim": "#fabd00",
                        "inverse-primary": "#a1d494",
                        "secondary": "#006e1c",
                        "primary": "#154212",
                        "tertiary-container": "#674c00",
                        "secondary-fixed": "#94f990",
                        "on-tertiary-container": "#f6b900",
                        "outline": "#72796e",
                        "surface-container-highest": "#e1e3e1",
                        "on-background": "#191c1b"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "unit": "4px",
                        "md": "16px",
                        "gutter": "16px",
                        "lg": "24px",
                        "margin-mobile": "20px",
                        "xl": "32px",
                        "sm": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "headline-xl": ["Plus Jakarta Sans"],
                        "label-md": ["Be Vietnam Pro"],
                        "headline-lg": ["Plus Jakarta Sans"],
                        "headline-lg-mobile": ["Plus Jakarta Sans"],
                        "headline-md": ["Plus Jakarta Sans"],
                        "body-lg": ["Be Vietnam Pro"],
                        "body-md": ["Be Vietnam Pro"],
                        "label-sm": ["Be Vietnam Pro"]
                    },
                    "fontSize": {
                        "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }]
                    }
                }
            }
        }
    </script>
<style>
        .texture-bg {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
        }
        .progress-line-active {
            background: linear-gradient(to right, #2d5a27 50%, #e1e3e1 50%);
            background-size: 200% 100%;
            background-position: right bottom;
            transition: all 1s ease;
        }
        .progress-line-active.filled {
            background-position: left bottom;
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body-md min-h-screen flex flex-col texture-bg">
<!-- TopNavBar -->
<header class="w-full top-0 sticky bg-surface/80 backdrop-blur-md shadow-sm z-50">
<div class="flex justify-between items-center px-lg py-md max-w-7xl mx-auto">
<div class="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary">
                Fresh From Farm
            </div>
<nav class="hidden md:flex gap-lg items-center font-body-md text-body-md">
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200" href="#">Marketplace</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200" href="#">Bulk Orders</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200" href="#">Farm Stories</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200" href="#">About Us</a>
</nav>
<div class="flex items-center gap-md">
<button class="text-on-surface-variant hover:text-primary transition-all active:scale-95">
<span class="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-all active:scale-95">
<span class="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-grow max-w-7xl mx-auto w-full px-margin-mobile md:px-lg py-xl">
<!-- Header Section -->
<div class="text-center mb-xl">
<h1 class="font-headline-xl text-headline-xl text-primary mb-sm">Track Your Fresh Harvest</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Follow your organic produce from our fields directly to your doorstep.</p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-xl">
<!-- Left Column: Tracking Input & Details -->
<div class="lg:col-span-1 flex flex-col gap-lg">
<!-- Tracking Form Card -->
<div class="bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-surface-variant">
<h2 class="font-headline-md text-headline-md text-primary mb-md">Find Your Order</h2>
<form class="flex flex-col gap-md">
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface-variant" for="order-id">Order ID</label>
<input class="h-12 px-md border border-outline-variant rounded-lg bg-surface-container-lowest focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" id="order-id" placeholder="e.g. FFF-89234" type="text"/>
</div>
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface-variant" for="contact-info">Phone Number or Email</label>
<input class="h-12 px-md border border-outline-variant rounded-lg bg-surface-container-lowest focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" id="contact-info" placeholder="Enter details used at checkout" type="text"/>
</div>
<button class="mt-sm h-12 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary transition-colors flex items-center justify-center gap-sm shadow-sm active:scale-95" type="button">
<span class="material-symbols-outlined" data-icon="search">search</span>
                            Track Order
                        </button>
</form>
</div>
<!-- Order Details Summary Card (Simulated Active State) -->
<div class="bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-surface-variant relative overflow-hidden">
<div class="absolute top-0 right-0 bg-tertiary-fixed-dim text-on-tertiary-fixed px-md py-xs rounded-bl-lg font-label-sm text-label-sm shadow-sm">
                        Today by 6:00 PM
                    </div>
<h3 class="font-label-md text-label-md text-on-surface-variant mb-xs">Order Summary</h3>
<p class="font-headline-md text-headline-md text-primary mb-md">#FFF-89234</p>
<div class="flex flex-col gap-sm">
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span class="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
</div>
<div>
<p class="font-label-md text-label-md text-on-surface">Delivery Partner</p>
<p class="font-body-md text-body-md text-on-surface-variant">Green Mile Logistics (Driver: Sam)</p>
</div>
</div>
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="home_pin">home_pin</span>
</div>
<div>
<p class="font-label-md text-label-md text-on-surface">Destination</p>
<p class="font-body-md text-body-md text-on-surface-variant">123 Farmville Road, Cityville</p>
</div>
</div>
</div>
</div>
<!-- Support Section -->
<div class="bg-surface-container-low rounded-xl p-md border border-surface-variant flex items-center justify-between">
<div>
<p class="font-label-md text-label-md text-on-surface">Need help?</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Contact our support team.</p>
</div>
<button class="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-primary hover:bg-surface-variant transition-colors shadow-sm">
<span class="material-symbols-outlined" data-icon="support_agent">support_agent</span>
</button>
</div>
</div>
<!-- Right Column: Visual Stepper -->
<div class="lg:col-span-2 bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-surface-variant flex flex-col">
<h2 class="font-headline-md text-headline-md text-primary mb-xl border-b border-surface-variant pb-sm">Tracking Progress</h2>
<div class="flex-grow flex flex-col justify-center px-md py-lg">
<div class="relative">
<!-- Vertical line for mobile, horizontal for md+ -->
<div class="absolute left-6 top-10 bottom-10 w-0.5 bg-surface-variant md:hidden"></div>
<div class="hidden md:block absolute top-6 left-10 right-10 h-0.5 bg-surface-variant"></div>
<!-- Animated active line -->
<div class="absolute left-6 top-10 w-0.5 bg-primary-container md:hidden" style="height: 60%;"></div>
<div class="hidden md:block absolute top-6 left-10 h-0.5 bg-primary-container transition-all duration-1000 ease-in-out w-[60%]"></div>
<div class="flex flex-col md:flex-row justify-between gap-lg relative z-10">
<!-- Step 1: Placed -->
<div class="flex flex-row md:flex-col items-center gap-md md:gap-sm relative">
<div class="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md z-10 shrink-0">
<span class="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span>
</div>
<div class="md:text-center">
<p class="font-label-md text-label-md text-on-surface">Order Placed</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Aug 12, 08:30 AM</p>
</div>
</div>
<!-- Step 2: Confirmed -->
<div class="flex flex-row md:flex-col items-center gap-md md:gap-sm relative">
<div class="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md z-10 shrink-0">
<span class="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</div>
<div class="md:text-center">
<p class="font-label-md text-label-md text-on-surface">Order Confirmed</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Aug 12, 09:15 AM</p>
</div>
</div>
<!-- Step 3: Harvested -->
<div class="flex flex-row md:flex-col items-center gap-md md:gap-sm relative">
<div class="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md z-10 shrink-0">
<span class="material-symbols-outlined" data-icon="agriculture">agriculture</span>
</div>
<div class="md:text-center">
<p class="font-label-md text-label-md text-on-surface">Harvested &amp; Packed</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Aug 13, 06:00 AM</p>
</div>
</div>
<!-- Step 4: Out for Delivery (Active) -->
<div class="flex flex-row md:flex-col items-center gap-md md:gap-sm relative">
<div class="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container border-2 border-primary-container flex items-center justify-center shadow-lg z-10 shrink-0 animate-pulse">
<span class="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
</div>
<div class="md:text-center">
<p class="font-label-md text-label-md text-primary">Out for Delivery</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Arriving Today</p>
</div>
</div>
<!-- Step 5: Delivered (Pending) -->
<div class="flex flex-row md:flex-col items-center gap-md md:gap-sm relative opacity-50">
<div class="w-12 h-12 rounded-full bg-surface-container-high text-on-surface-variant border border-outline-variant flex items-center justify-center z-10 shrink-0">
<span class="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
</div>
<div class="md:text-center">
<p class="font-label-md text-label-md text-on-surface-variant">Delivered</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Pending</p>
</div>
</div>
</div>
</div>
</div>
<!-- Decorative Background Element -->
<div class="mt-xl mb-lg rounded-xl overflow-hidden border border-surface-variant bg-surface-container-low relative h-64 shadow-sm">
<!-- Map Background Simulation -->
<div class="absolute inset-0 opacity-20 texture-bg bg-primary/10"></div>
<div class="absolute inset-0 flex items-center justify-center">
<svg class="w-full h-full" fill="none" viewbox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
<path class="opacity-40" d="M50 150C100 150 150 50 250 50C300 50 350 100 350 100" stroke="#154212" stroke-dasharray="8 8" stroke-width="2"></path>
</svg>
</div>
<!-- Live Indicator -->
<div class="absolute top-md left-md flex items-center gap-sm bg-surface-container-lowest/90 backdrop-blur-sm px-sm py-xs rounded-full border border-surface-variant shadow-sm z-10">
<div class="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
<span class="font-label-sm text-label-sm text-on-surface">Live Tracking</span>
</div>
<!-- Map Markers -->
<div class="absolute left-[12%] bottom-[20%] flex flex-col items-center">
<div class="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md">
<span class="material-symbols-outlined text-sm">agriculture</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant mt-xs">Farm</span>
</div>
<div class="absolute left-[60%] top-[20%] flex flex-col items-center animate-bounce">
<div class="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container border-2 border-primary-container flex items-center justify-center shadow-lg">
<span class="material-symbols-outlined">local_shipping</span>
</div>
</div>
<div class="absolute right-[10%] bottom-[45%] flex flex-col items-center">
<div class="w-10 h-10 rounded-full bg-surface-container-highest text-primary flex items-center justify-center shadow-md border border-primary/20">
<span class="material-symbols-outlined text-sm">home_pin</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant mt-xs">You</span>
</div>
</div><div class="mt-lg rounded-lg h-32 bg-surface-container overflow-hidden relative border border-surface-variant">
<div class="absolute inset-0 bg-cover bg-center opacity-40" data-alt="A detailed wide shot of a lush, vibrant green organic farm field under a bright morning sun. The lighting is soft and golden, creating a warm, fresh, and inviting agro-modernist aesthetic. The focus is on the rich texture of the soil and the healthy green leaves of the crops, conveying a sense of premium quality and grounded transparency." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCl3t3etCwlCOK4SLZyjDOD1BedIzDpnDcCo9wYdZGTtbPJwE-mkRF_kh2ImTmNGC92YzoZR7wqWC7ZOfVwZw9qc-xTmT6FEepBp1lGra9WuXc4-Mek0A7LN73Z5805b7dR8RymuNTKK5Wr5onV5GGKWfUK57F4Tm3NvvZ5xsLXqUmUZJo_c6bODZf3CCsz3sKbK-2RhoIZra-ULmI-B78q1-sIRDVfc8EPboriLhVQh9bXQFCqPaWLbA')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent"></div>
<div class="absolute bottom-md left-md right-md flex justify-between items-end">
<p class="font-label-md text-label-md text-primary bg-surface-container-lowest/90 px-sm py-xs rounded backdrop-blur-sm">Farm Origin: Sunny Acres</p>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="w-full mt-xl bg-surface-container-highest dark:bg-surface-container-lowest py-xl">
<div class="flex flex-col md:flex-row justify-between items-start gap-lg px-lg max-w-7xl mx-auto">
<div class="flex flex-col gap-sm">
<div class="font-headline-md text-headline-md text-primary">
                    Fresh From Farm
                </div>
<p class="font-body-md text-body-md text-on-surface-variant">© 2024 Fresh From Farm. Rooted in Transparency.</p>
</div>
<nav class="flex flex-col md:flex-row gap-lg font-label-md text-label-md">
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Sustainability Report</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Farmer Support</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Contact Us</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Privacy Policy</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Terms of Service</a>
</nav>
</div>
</footer>
</body></html><!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Order Confirmation - Fresh From Farm</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&amp;family=Be+Vietnam+Pro:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "error": "#ba1a1a",
                        "primary-container": "#2d5a27",
                        "primary": "#154212",
                        "background": "#f8faf8",
                        "outline": "#72796e",
                        "outline-variant": "#c2c9bb",
                        "on-tertiary-fixed-variant": "#5b4300",
                        "surface-dim": "#d8dad9",
                        "on-secondary-fixed-variant": "#005313",
                        "secondary-fixed-dim": "#78dc77",
                        "surface-container-lowest": "#ffffff",
                        "on-surface": "#191c1b",
                        "on-surface-variant": "#42493e",
                        "on-error": "#ffffff",
                        "error-container": "#ffdad6",
                        "surface-tint": "#3b6934",
                        "surface-variant": "#e1e3e1",
                        "surface-container-low": "#f2f4f2",
                        "on-primary-container": "#9dd090",
                        "secondary-container": "#91f78e",
                        "on-secondary-fixed": "#002204",
                        "secondary-fixed": "#94f990",
                        "secondary": "#006e1c",
                        "tertiary-fixed": "#ffdf9e",
                        "on-primary-fixed": "#002201",
                        "primary-fixed-dim": "#a1d494",
                        "inverse-primary": "#a1d494",
                        "on-background": "#191c1b",
                        "on-primary-fixed-variant": "#23501e",
                        "on-tertiary": "#ffffff",
                        "inverse-surface": "#2e3130",
                        "surface-container-high": "#e6e9e7",
                        "surface-container": "#eceeec",
                        "on-tertiary-fixed": "#261a00",
                        "on-secondary": "#ffffff",
                        "on-tertiary-container": "#f6b900",
                        "surface": "#f8faf8",
                        "tertiary-fixed-dim": "#fabd00",
                        "tertiary-container": "#674c00",
                        "on-error-container": "#93000a",
                        "tertiary": "#4b3600",
                        "surface-bright": "#f8faf8",
                        "inverse-on-surface": "#eff1ef",
                        "on-primary": "#ffffff",
                        "on-secondary-container": "#00731e",
                        "primary-fixed": "#bcf0ae",
                        "surface-container-highest": "#e1e3e1"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "xl": "32px",
                        "margin-mobile": "20px",
                        "sm": "8px",
                        "gutter": "16px",
                        "lg": "24px",
                        "md": "16px",
                        "unit": "4px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "body-lg": ["Be Vietnam Pro"],
                        "headline-lg-mobile": ["Plus Jakarta Sans"],
                        "headline-xl": ["Plus Jakarta Sans"],
                        "headline-lg": ["Plus Jakarta Sans"],
                        "label-md": ["Be Vietnam Pro"],
                        "headline-md": ["Plus Jakarta Sans"],
                        "body-md": ["Be Vietnam Pro"],
                        "label-sm": ["Be Vietnam Pro"]
                    },
                    "fontSize": {
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }],
                        "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }]
                    }
                }
            }
        }
    </script>
<style>
        body { background-color: theme('colors.background'); }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .material-symbols-outlined.fill { font-variation-settings: 'FILL' 1; }
        
        /* Organic texture overlay */
        .texture-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.03;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
    </style>
</head>
<body class="font-body-md text-on-surface antialiased min-h-screen flex flex-col">
<div class="texture-overlay"></div>
<!-- MAIN CONTENT - Suppressing navigation shell because it's a linear transactional 'Success' dead-end screen, as per 'The "Destination" Rule' and 'Automatic Suppression' mandate. -->
<main class="flex-grow flex items-center justify-center py-xl px-margin-mobile">
<div class="max-w-3xl w-full">
<div class="bg-surface-container-lowest rounded-xl shadow-sm p-lg md:p-xl border border-surface-variant relative overflow-hidden">
<!-- Subtle decorative background element -->
<div class="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl"></div>
<div class="text-center mb-xl relative z-10">
<div class="inline-flex items-center justify-center w-20 h-20 bg-primary-container rounded-full mb-lg shadow-sm">
<span class="material-symbols-outlined fill text-on-primary-container text-headline-xl">check_circle</span>
</div>
<h1 class="font-headline-lg text-headline-lg text-primary mb-sm">Order Confirmed!</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto">
                        Thank you for supporting local farmers. Your fresh harvest is being prepared.
                    </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xl relative z-10">
<!-- Order Details -->
<div class="bg-surface-container-low rounded-lg p-md border border-surface-variant">
<h2 class="font-label-md text-label-md text-primary uppercase tracking-wider mb-md flex items-center gap-sm">
<span class="material-symbols-outlined text-[18px]">receipt_long</span> Order Details
                        </h2>
<div class="space-y-sm">
<div class="flex justify-between">
<span class="font-body-md text-on-surface-variant">Order ID:</span>
<span class="font-label-md text-on-surface">#FFF-82934</span>
</div>
<div class="flex justify-between">
<span class="font-body-md text-on-surface-variant">Date:</span>
<span class="font-body-md text-on-surface">Oct 24, 2024</span>
</div>
<div class="flex justify-between">
<span class="font-body-md text-on-surface-variant">Total:</span>
<span class="font-label-md text-on-surface">$42.50</span>
</div>
</div>
</div>
<!-- Delivery Estimation -->
<div class="bg-surface-container-low rounded-lg p-md border border-surface-variant">
<h2 class="font-label-md text-label-md text-primary uppercase tracking-wider mb-md flex items-center gap-sm">
<span class="material-symbols-outlined text-[18px]">local_shipping</span> Delivery
                        </h2>
<div class="flex items-start gap-md">
<div class="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-on-tertiary-fixed-variant">calendar_clock</span>
</div>
<div>
<p class="font-label-md text-on-surface">Tomorrow, Oct 25</p>
<p class="font-body-md text-on-surface-variant text-sm">Between 8:00 AM - 11:00 AM</p>
</div>
</div>
</div>
</div>
<!-- Order Summary -->
<div class="mb-xl relative z-10">
<h2 class="font-label-md text-label-md text-primary uppercase tracking-wider mb-md border-b border-surface-variant pb-xs">
                        Items Purchased
                    </h2>
<ul class="space-y-md">
<li class="flex items-center gap-md">
<div class="w-16 h-16 rounded-md overflow-hidden bg-surface-container-high shrink-0 relative">
<img class="object-cover w-full h-full absolute inset-0" data-alt="Close up photography of fresh organic russet potatoes covered in a light dusting of rich dark soil. The lighting is natural and bright, highlighting the earthy textures against a clean white background in a modern light-mode studio setting. The mood is raw, agricultural, and premium." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbKkdJdu5DJSpn5_DTxHVrZCj6lVilEpOYubkUB2lhYn7CYkvqs7Wg9inXhNFGm2UBXh-ACjrAXyJgRFZhSIpVQj1BYd5ZSgHU5RFVKbq-dv03AKHvWgJFx-x1MdE02J-BNQjQSVzMl8R_pcrMXbcLclPYhmzlpOQrkolQn3A6Y44ZqHu6O6qVzwm1WkNFJI33HygF875fbvb5JkYnawXRCro5562xo_R8B2bGbZx4HvLkByKCGZSWuA"/>
</div>
<div class="flex-grow">
<p class="font-label-md text-on-surface">Organic Russet Potatoes</p>
<p class="font-body-md text-on-surface-variant text-sm">2 lbs • Green Valley Farm</p>
</div>
<span class="font-label-md text-on-surface">$6.50</span>
</li>
<li class="flex items-center gap-md">
<div class="w-16 h-16 rounded-md overflow-hidden bg-surface-container-high shrink-0 relative">
<img class="object-cover w-full h-full absolute inset-0" data-alt="Vibrant bunch of freshly picked heirloom carrots in shades of orange, purple, and yellow with lush green leafy tops. Photographed under bright, soft natural studio lighting against a pure white background. The aesthetic is clean, high-end organic, emphasizing vivid natural colors and crisp textures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-o2cxTYDBaTXXG-N8DUzdLXqjbusbMx0i9k_e9dwwBrCb_3u8uj0ofT-z4XwnhxGEZXPS0DTW9TNrMX2kv3KN5yO5PuIf5qHLbBJ7S-bakVOfqXx7GIJ6Mm2vGuSQaotpjRtjpLwns9PTvGsbucygJpJXFGA_9ud3YZ7ndQ-dAAxZNJ9C64VbNARVJZ7g9qt2TRfdqdb_grxv4weKCModz1wmzzKiLjx4JUIiY_P7_3qkQs9CUfOEuA"/>
</div>
<div class="flex-grow">
<p class="font-label-md text-on-surface">Rainbow Heirloom Carrots</p>
<p class="font-body-md text-on-surface-variant text-sm">1 bunch • Sunrise Acres</p>
</div>
<span class="font-label-md text-on-surface">$8.00</span>
</li>
</ul>
</div>
<!-- Actions -->
<div class="flex flex-col sm:flex-row gap-md relative z-10 justify-center mb-lg border-t border-surface-variant pt-xl">
<button class="bg-primary text-on-primary font-label-md py-3 px-lg rounded-lg shadow-sm hover:bg-primary-container hover:text-on-primary-container transition-colors min-h-[48px] flex items-center justify-center gap-sm">
<span class="material-symbols-outlined">location_on</span> Track Order
                    </button>
<button class="bg-surface text-primary border border-primary font-label-md py-3 px-lg rounded-lg hover:bg-surface-container-low transition-colors min-h-[48px] flex items-center justify-center">
                        Continue Shopping
                    </button>
<button class="text-primary font-label-md py-3 px-lg hover:underline decoration-primary transition-all min-h-[48px] flex items-center justify-center">
                        View Receipt
                    </button>
</div>
<!-- Social Sharing -->
<div class="text-center relative z-10">
<p class="font-body-md text-on-surface-variant mb-md text-sm">Share your support for local agriculture</p>
<div class="flex justify-center gap-md">
<button aria-label="Share on WhatsApp" class="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center hover:bg-[#25D366]/20 transition-colors">
<span class="material-symbols-outlined">forum</span>
</button>
<button aria-label="Share on Facebook" class="w-12 h-12 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2]/20 transition-colors">
<span class="material-symbols-outlined">share</span>
</button>
</div>
</div>
</div>
</div>
</main>
</body></html><!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Track Order - Fresh From Farm</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&amp;family=Be+Vietnam+Pro:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-fixed": "#261a00",
                        "secondary-container": "#91f78e",
                        "on-primary-fixed-variant": "#23501e",
                        "on-primary": "#ffffff",
                        "primary-fixed-dim": "#a1d494",
                        "on-secondary-container": "#00731e",
                        "error-container": "#ffdad6",
                        "background": "#f8faf8",
                        "on-error": "#ffffff",
                        "on-tertiary": "#ffffff",
                        "tertiary": "#4b3600",
                        "surface-container-low": "#f2f4f2",
                        "surface-container": "#eceeec",
                        "surface": "#f8faf8",
                        "primary-container": "#2d5a27",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-fixed": "#002204",
                        "surface-variant": "#e1e3e1",
                        "inverse-surface": "#2e3130",
                        "primary-fixed": "#bcf0ae",
                        "surface-container-high": "#e6e9e7",
                        "on-primary-fixed": "#002201",
                        "surface-bright": "#f8faf8",
                        "surface-dim": "#d8dad9",
                        "outline-variant": "#c2c9bb",
                        "error": "#ba1a1a",
                        "on-error-container": "#93000a",
                        "tertiary-fixed": "#ffdf9e",
                        "on-tertiary-fixed-variant": "#5b4300",
                        "on-surface-variant": "#42493e",
                        "on-secondary-fixed-variant": "#005313",
                        "inverse-on-surface": "#eff1ef",
                        "surface-tint": "#3b6934",
                        "on-secondary": "#ffffff",
                        "on-surface": "#191c1b",
                        "on-primary-container": "#9dd090",
                        "secondary-fixed-dim": "#78dc77",
                        "tertiary-fixed-dim": "#fabd00",
                        "inverse-primary": "#a1d494",
                        "secondary": "#006e1c",
                        "primary": "#154212",
                        "tertiary-container": "#674c00",
                        "secondary-fixed": "#94f990",
                        "on-tertiary-container": "#f6b900",
                        "outline": "#72796e",
                        "surface-container-highest": "#e1e3e1",
                        "on-background": "#191c1b"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "unit": "4px",
                        "md": "16px",
                        "gutter": "16px",
                        "lg": "24px",
                        "margin-mobile": "20px",
                        "xl": "32px",
                        "sm": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "headline-xl": ["Plus Jakarta Sans"],
                        "label-md": ["Be Vietnam Pro"],
                        "headline-lg": ["Plus Jakarta Sans"],
                        "headline-lg-mobile": ["Plus Jakarta Sans"],
                        "headline-md": ["Plus Jakarta Sans"],
                        "body-lg": ["Be Vietnam Pro"],
                        "body-md": ["Be Vietnam Pro"],
                        "label-sm": ["Be Vietnam Pro"]
                    },
                    "fontSize": {
                        "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }]
                    }
                }
            }
        }
    </script>
<style>
        .texture-bg {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
        }
        .progress-line-active {
            background: linear-gradient(to right, #2d5a27 50%, #e1e3e1 50%);
            background-size: 200% 100%;
            background-position: right bottom;
            transition: all 1s ease;
        }
        .progress-line-active.filled {
            background-position: left bottom;
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body-md min-h-screen flex flex-col texture-bg">
<!-- TopNavBar -->
<header class="w-full top-0 sticky bg-surface/80 backdrop-blur-md shadow-sm z-50">
<div class="flex justify-between items-center px-lg py-md max-w-7xl mx-auto">
<div class="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary">
                Fresh From Farm
            </div>
<nav class="hidden md:flex gap-lg items-center font-body-md text-body-md">
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200" href="#">Marketplace</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200" href="#">Bulk Orders</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200" href="#">Farm Stories</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200" href="#">About Us</a>
</nav>
<div class="flex items-center gap-md">
<button class="text-on-surface-variant hover:text-primary transition-all active:scale-95">
<span class="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-all active:scale-95">
<span class="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-grow max-w-7xl mx-auto w-full px-margin-mobile md:px-lg py-xl">
<!-- Header Section -->
<div class="text-center mb-xl">
<h1 class="font-headline-xl text-headline-xl text-primary mb-sm">Track Your Fresh Harvest</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Follow your organic produce from our fields directly to your doorstep.</p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-xl">
<!-- Left Column: Tracking Input & Details -->
<div class="lg:col-span-1 flex flex-col gap-lg">
<!-- Tracking Form Card -->
<div class="bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-surface-variant">
<h2 class="font-headline-md text-headline-md text-primary mb-md">Find Your Order</h2>
<form class="flex flex-col gap-md">
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface-variant" for="order-id">Order ID</label>
<input class="h-12 px-md border border-outline-variant rounded-lg bg-surface-container-lowest focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" id="order-id" placeholder="e.g. FFF-89234" type="text"/>
</div>
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface-variant" for="contact-info">Phone Number or Email</label>
<input class="h-12 px-md border border-outline-variant rounded-lg bg-surface-container-lowest focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" id="contact-info" placeholder="Enter details used at checkout" type="text"/>
</div>
<button class="mt-sm h-12 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary transition-colors flex items-center justify-center gap-sm shadow-sm active:scale-95" type="button">
<span class="material-symbols-outlined" data-icon="search">search</span>
                            Track Order
                        </button>
</form>
</div>
<!-- Order Details Summary Card (Simulated Active State) -->
<div class="bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-surface-variant relative overflow-hidden">
<div class="absolute top-0 right-0 bg-tertiary-fixed-dim text-on-tertiary-fixed px-md py-xs rounded-bl-lg font-label-sm text-label-sm shadow-sm">
                        Today by 6:00 PM
                    </div>
<h3 class="font-label-md text-label-md text-on-surface-variant mb-xs">Order Summary</h3>
<p class="font-headline-md text-headline-md text-primary mb-md">#FFF-89234</p>
<div class="flex flex-col gap-sm">
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span class="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
</div>
<div>
<p class="font-label-md text-label-md text-on-surface">Delivery Partner</p>
<p class="font-body-md text-body-md text-on-surface-variant">Green Mile Logistics (Driver: Sam)</p>
</div>
</div>
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="home_pin">home_pin</span>
</div>
<div>
<p class="font-label-md text-label-md text-on-surface">Destination</p>
<p class="font-body-md text-body-md text-on-surface-variant">123 Farmville Road, Cityville</p>
</div>
</div>
</div>
</div>
<!-- Support Section -->
<div class="bg-surface-container-low rounded-xl p-md border border-surface-variant flex items-center justify-between">
<div>
<p class="font-label-md text-label-md text-on-surface">Need help?</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Contact our support team.</p>
</div>
<button class="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-primary hover:bg-surface-variant transition-colors shadow-sm">
<span class="material-symbols-outlined" data-icon="support_agent">support_agent</span>
</button>
</div>
</div>
<!-- Right Column: Visual Stepper -->
<div class="lg:col-span-2 bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-surface-variant flex flex-col">
<h2 class="font-headline-md text-headline-md text-primary mb-xl border-b border-surface-variant pb-sm">Tracking Progress</h2>
<div class="flex-grow flex flex-col justify-center px-md py-lg">
<div class="relative">
<!-- Vertical line for mobile, horizontal for md+ -->
<div class="absolute left-6 top-10 bottom-10 w-0.5 bg-surface-variant md:hidden"></div>
<div class="hidden md:block absolute top-6 left-10 right-10 h-0.5 bg-surface-variant"></div>
<!-- Animated active line -->
<div class="absolute left-6 top-10 w-0.5 bg-primary-container md:hidden" style="height: 60%;"></div>
<div class="hidden md:block absolute top-6 left-10 h-0.5 bg-primary-container transition-all duration-1000 ease-in-out w-[60%]"></div>
<div class="flex flex-col md:flex-row justify-between gap-lg relative z-10">
<!-- Step 1: Placed -->
<div class="flex flex-row md:flex-col items-center gap-md md:gap-sm relative">
<div class="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md z-10 shrink-0">
<span class="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span>
</div>
<div class="md:text-center">
<p class="font-label-md text-label-md text-on-surface">Order Placed</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Aug 12, 08:30 AM</p>
</div>
</div>
<!-- Step 2: Confirmed -->
<div class="flex flex-row md:flex-col items-center gap-md md:gap-sm relative">
<div class="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md z-10 shrink-0">
<span class="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</div>
<div class="md:text-center">
<p class="font-label-md text-label-md text-on-surface">Order Confirmed</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Aug 12, 09:15 AM</p>
</div>
</div>
<!-- Step 3: Harvested -->
<div class="flex flex-row md:flex-col items-center gap-md md:gap-sm relative">
<div class="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md z-10 shrink-0">
<span class="material-symbols-outlined" data-icon="agriculture">agriculture</span>
</div>
<div class="md:text-center">
<p class="font-label-md text-label-md text-on-surface">Harvested &amp; Packed</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Aug 13, 06:00 AM</p>
</div>
</div>
<!-- Step 4: Out for Delivery (Active) -->
<div class="flex flex-row md:flex-col items-center gap-md md:gap-sm relative">
<div class="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container border-2 border-primary-container flex items-center justify-center shadow-lg z-10 shrink-0 animate-pulse">
<span class="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
</div>
<div class="md:text-center">
<p class="font-label-md text-label-md text-primary">Out for Delivery</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Arriving Today</p>
</div>
</div>
<!-- Step 5: Delivered (Pending) -->
<div class="flex flex-row md:flex-col items-center gap-md md:gap-sm relative opacity-50">
<div class="w-12 h-12 rounded-full bg-surface-container-high text-on-surface-variant border border-outline-variant flex items-center justify-center z-10 shrink-0">
<span class="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
</div>
<div class="md:text-center">
<p class="font-label-md text-label-md text-on-surface-variant">Delivered</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Pending</p>
</div>
</div>
</div>
</div>
</div>
<!-- Decorative Background Element -->
<div class="mt-lg rounded-lg h-32 bg-surface-container overflow-hidden relative border border-surface-variant">
<div class="absolute inset-0 bg-cover bg-center opacity-40" data-alt="A detailed wide shot of a lush, vibrant green organic farm field under a bright morning sun. The lighting is soft and golden, creating a warm, fresh, and inviting agro-modernist aesthetic. The focus is on the rich texture of the soil and the healthy green leaves of the crops, conveying a sense of premium quality and grounded transparency." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCl3t3etCwlCOK4SLZyjDOD1BedIzDpnDcCo9wYdZGTtbPJwE-mkRF_kh2ImTmNGC92YzoZR7wqWC7ZOfVwZw9qc-xTmT6FEepBp1lGra9WuXc4-Mek0A7LN73Z5805b7dR8RymuNTKK5Wr5onV5GGKWfUK57F4Tm3NvvZ5xsLXqUmUZJo_c6bODZf3CCsz3sKbK-2RhoIZra-ULmI-B78q1-sIRDVfc8EPboriLhVQh9bXQFCqPaWLbA')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent"></div>
<div class="absolute bottom-md left-md right-md flex justify-between items-end">
<p class="font-label-md text-label-md text-primary bg-surface-container-lowest/90 px-sm py-xs rounded backdrop-blur-sm">Farm Origin: Sunny Acres</p>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="w-full mt-xl bg-surface-container-highest dark:bg-surface-container-lowest py-xl">
<div class="flex flex-col md:flex-row justify-between items-start gap-lg px-lg max-w-7xl mx-auto">
<div class="flex flex-col gap-sm">
<div class="font-headline-md text-headline-md text-primary">
                    Fresh From Farm
                </div>
<p class="font-body-md text-body-md text-on-surface-variant">© 2024 Fresh From Farm. Rooted in Transparency.</p>
</div>
<nav class="flex flex-col md:flex-row gap-lg font-label-md text-label-md">
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Sustainability Report</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Farmer Support</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Contact Us</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Privacy Policy</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Terms of Service</a>
</nav>
</div>
</footer>
</body></html><!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Track Order - Fresh From Farm</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&amp;family=Be+Vietnam+Pro:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-fixed": "#261a00",
                        "secondary-container": "#91f78e",
                        "on-primary-fixed-variant": "#23501e",
                        "on-primary": "#ffffff",
                        "primary-fixed-dim": "#a1d494",
                        "on-secondary-container": "#00731e",
                        "error-container": "#ffdad6",
                        "background": "#f8faf8",
                        "on-error": "#ffffff",
                        "on-tertiary": "#ffffff",
                        "tertiary": "#4b3600",
                        "surface-container-low": "#f2f4f2",
                        "surface-container": "#eceeec",
                        "surface": "#f8faf8",
                        "primary-container": "#2d5a27",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-fixed": "#002204",
                        "surface-variant": "#e1e3e1",
                        "inverse-surface": "#2e3130",
                        "primary-fixed": "#bcf0ae",
                        "surface-container-high": "#e6e9e7",
                        "on-primary-fixed": "#002201",
                        "surface-bright": "#f8faf8",
                        "surface-dim": "#d8dad9",
                        "outline-variant": "#c2c9bb",
                        "error": "#ba1a1a",
                        "on-error-container": "#93000a",
                        "tertiary-fixed": "#ffdf9e",
                        "on-tertiary-fixed-variant": "#5b4300",
                        "on-surface-variant": "#42493e",
                        "on-secondary-fixed-variant": "#005313",
                        "inverse-on-surface": "#eff1ef",
                        "surface-tint": "#3b6934",
                        "on-secondary": "#ffffff",
                        "on-surface": "#191c1b",
                        "on-primary-container": "#9dd090",
                        "secondary-fixed-dim": "#78dc77",
                        "tertiary-fixed-dim": "#fabd00",
                        "inverse-primary": "#a1d494",
                        "secondary": "#006e1c",
                        "primary": "#154212",
                        "tertiary-container": "#674c00",
                        "secondary-fixed": "#94f990",
                        "on-tertiary-container": "#f6b900",
                        "outline": "#72796e",
                        "surface-container-highest": "#e1e3e1",
                        "on-background": "#191c1b"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "unit": "4px",
                        "md": "16px",
                        "gutter": "16px",
                        "lg": "24px",
                        "margin-mobile": "20px",
                        "xl": "32px",
                        "sm": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "headline-xl": ["Plus Jakarta Sans"],
                        "label-md": ["Be Vietnam Pro"],
                        "headline-lg": ["Plus Jakarta Sans"],
                        "headline-lg-mobile": ["Plus Jakarta Sans"],
                        "headline-md": ["Plus Jakarta Sans"],
                        "body-lg": ["Be Vietnam Pro"],
                        "body-md": ["Be Vietnam Pro"],
                        "label-sm": ["Be Vietnam Pro"]
                    },
                    "fontSize": {
                        "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }]
                    }
                }
            }
        }
    </script>
<style>
        .texture-bg {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
        }
        .progress-line-active {
            background: linear-gradient(to right, #2d5a27 50%, #e1e3e1 50%);
            background-size: 200% 100%;
            background-position: right bottom;
            transition: all 1s ease;
        }
        .progress-line-active.filled {
            background-position: left bottom;
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body-md min-h-screen flex flex-col texture-bg">
<!-- TopNavBar -->
<header class="w-full top-0 sticky bg-surface/80 backdrop-blur-md shadow-sm z-50">
<div class="flex justify-between items-center px-lg py-md max-w-7xl mx-auto">
<div class="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary">
                Fresh From Farm
            </div>
<nav class="hidden md:flex gap-lg items-center font-body-md text-body-md">
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200" href="#">Marketplace</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200" href="#">Bulk Orders</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200" href="#">Farm Stories</a>
<a class="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-200" href="#">About Us</a>
</nav>
<div class="flex items-center gap-md">
<button class="text-on-surface-variant hover:text-primary transition-all active:scale-95">
<span class="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-all active:scale-95">
<span class="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-grow max-w-7xl mx-auto w-full px-margin-mobile md:px-lg py-xl">
<!-- Header Section -->
<div class="text-center mb-xl">
<h1 class="font-headline-xl text-headline-xl text-primary mb-sm">Track Your Fresh Harvest</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Follow your organic produce from our fields directly to your doorstep.</p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-xl">
<!-- Left Column: Tracking Input & Details -->
<div class="lg:col-span-1 flex flex-col gap-lg">
<!-- Tracking Form Card -->
<div class="bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-surface-variant">
<h2 class="font-headline-md text-headline-md text-primary mb-md">Find Your Order</h2>
<form class="flex flex-col gap-md">
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface-variant" for="order-id">Order ID</label>
<input class="h-12 px-md border border-outline-variant rounded-lg bg-surface-container-lowest focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" id="order-id" placeholder="e.g. FFF-89234" type="text"/>
</div>
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface-variant" for="contact-info">Phone Number or Email</label>
<input class="h-12 px-md border border-outline-variant rounded-lg bg-surface-container-lowest focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" id="contact-info" placeholder="Enter details used at checkout" type="text"/>
</div>
<button class="mt-sm h-12 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary transition-colors flex items-center justify-center gap-sm shadow-sm active:scale-95" type="button">
<span class="material-symbols-outlined" data-icon="search">search</span>
                            Track Order
                        </button>
</form>
</div>
<!-- Order Details Summary Card (Simulated Active State) -->
<div class="bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-surface-variant relative overflow-hidden">
<div class="absolute top-0 right-0 bg-tertiary-fixed-dim text-on-tertiary-fixed px-md py-xs rounded-bl-lg font-label-sm text-label-sm shadow-sm">
                        Today by 6:00 PM
                    </div>
<h3 class="font-label-md text-label-md text-on-surface-variant mb-xs">Order Summary</h3>
<p class="font-headline-md text-headline-md text-primary mb-md">#FFF-89234</p>
<div class="flex flex-col gap-sm">
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span class="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
</div>
<div><p class="font-label-md text-label-md text-on-surface">Delivery Partner</p><p class="font-body-md text-body-md text-on-surface-variant">Green Mile Logistics</p><p class="font-body-md text-body-md text-on-surface-variant">Driver: Sam • <a class="hover:text-primary underline" href="tel:+917052609099">+91 70526-09099</a></p><button class="mt-xs flex items-center gap-xs px-sm py-1 rounded border border-outline-variant text-label-sm text-primary hover:bg-surface-variant transition-colors active:scale-95"><span class="material-symbols-outlined text-sm">call</span>Call Driver</button></div>
</div>
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="home_pin">home_pin</span>
</div>
<div>
<p class="font-label-md text-label-md text-on-surface">Destination</p>
<p class="font-body-md text-body-md text-on-surface-variant">123 Farmville Road, Cityville</p>
</div>
</div>
</div>
</div>
<!-- Support Section -->
<div class="bg-surface-container-low rounded-xl p-md border border-surface-variant flex items-center justify-between">
<div>
<p class="font-label-md text-label-md text-on-surface">Need help?</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Contact our support team.</p>
</div>
<button class="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-primary hover:bg-surface-variant transition-colors shadow-sm">
<span class="material-symbols-outlined" data-icon="support_agent">support_agent</span>
</button>
</div>
</div>
<!-- Right Column: Visual Stepper -->
<div class="lg:col-span-2 bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-surface-variant flex flex-col">
<h2 class="font-headline-md text-headline-md text-primary mb-xl border-b border-surface-variant pb-sm">Tracking Progress</h2>
<div class="flex-grow flex flex-col justify-center px-md py-lg">
<div class="relative">
<!-- Vertical line for mobile, horizontal for md+ -->
<div class="absolute left-6 top-10 bottom-10 w-0.5 bg-surface-variant md:hidden"></div>
<div class="hidden md:block absolute top-6 left-10 right-10 h-0.5 bg-surface-variant"></div>
<!-- Animated active line -->
<div class="absolute left-6 top-10 w-0.5 bg-primary-container md:hidden" style="height: 60%;"></div>
<div class="hidden md:block absolute top-6 left-10 h-0.5 bg-primary-container transition-all duration-1000 ease-in-out w-[60%]"></div>
<div class="flex flex-col md:flex-row justify-between gap-lg relative z-10">
<!-- Step 1: Placed -->
<div class="flex flex-row md:flex-col items-center gap-md md:gap-sm relative">
<div class="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md z-10 shrink-0">
<span class="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span>
</div>
<div class="md:text-center">
<p class="font-label-md text-label-md text-on-surface">Order Placed</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Aug 12, 08:30 AM</p>
</div>
</div>
<!-- Step 2: Confirmed -->
<div class="flex flex-row md:flex-col items-center gap-md md:gap-sm relative">
<div class="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md z-10 shrink-0">
<span class="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</div>
<div class="md:text-center">
<p class="font-label-md text-label-md text-on-surface">Order Confirmed</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Aug 12, 09:15 AM</p>
</div>
</div>
<!-- Step 3: Harvested -->
<div class="flex flex-row md:flex-col items-center gap-md md:gap-sm relative">
<div class="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md z-10 shrink-0">
<span class="material-symbols-outlined" data-icon="agriculture">agriculture</span>
</div>
<div class="md:text-center">
<p class="font-label-md text-label-md text-on-surface">Harvested &amp; Packed</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Aug 13, 06:00 AM</p>
</div>
</div>
<!-- Step 4: Out for Delivery (Active) -->
<div class="flex flex-row md:flex-col items-center gap-md md:gap-sm relative">
<div class="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container border-2 border-primary-container flex items-center justify-center shadow-lg z-10 shrink-0 animate-pulse">
<span class="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
</div>
<div class="md:text-center">
<p class="font-label-md text-label-md text-primary">Out for Delivery</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Arriving Today</p>
</div>
</div>
<!-- Step 5: Delivered (Pending) -->
<div class="flex flex-row md:flex-col items-center gap-md md:gap-sm relative opacity-50">
<div class="w-12 h-12 rounded-full bg-surface-container-high text-on-surface-variant border border-outline-variant flex items-center justify-center z-10 shrink-0">
<span class="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
</div>
<div class="md:text-center">
<p class="font-label-md text-label-md text-on-surface-variant">Delivered</p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Pending</p>
</div>
</div>
</div>
</div>
</div>
<!-- Decorative Background Element -->
<div class="mt-xl mb-lg rounded-xl overflow-hidden border border-surface-variant bg-surface-container-low relative h-64 shadow-sm">
<!-- Map Background Simulation -->
<div class="absolute inset-0 opacity-20 texture-bg bg-primary/10"></div>
<div class="absolute inset-0 flex items-center justify-center">
<svg class="w-full h-full" fill="none" viewbox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
<path class="opacity-40" d="M50 150C100 150 150 50 250 50C300 50 350 100 350 100" stroke="#154212" stroke-dasharray="8 8" stroke-width="2"></path>
</svg>
</div>
<!-- Live Indicator -->
<div class="absolute top-md left-md flex items-center gap-sm bg-surface-container-lowest/90 backdrop-blur-sm px-sm py-xs rounded-full border border-surface-variant shadow-sm z-10">
<div class="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
<span class="font-label-sm text-label-sm text-on-surface">Live Tracking</span>
</div>
<!-- Map Markers -->
<div class="absolute left-[12%] bottom-[20%] flex flex-col items-center">
<div class="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md">
<span class="material-symbols-outlined text-sm">agriculture</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant mt-xs">Farm</span>
</div>
<div class="absolute left-[60%] top-[20%] flex flex-col items-center animate-bounce">
<div class="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container border-2 border-primary-container flex items-center justify-center shadow-lg">
<span class="material-symbols-outlined">local_shipping</span>
</div>
</div>
<div class="absolute right-[10%] bottom-[45%] flex flex-col items-center">
<div class="w-10 h-10 rounded-full bg-surface-container-highest text-primary flex items-center justify-center shadow-md border border-primary/20">
<span class="material-symbols-outlined text-sm">home_pin</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant mt-xs">You</span>
</div>
</div><div class="mt-lg rounded-lg h-32 bg-surface-container overflow-hidden relative border border-surface-variant">
<div class="absolute inset-0 bg-cover bg-center opacity-40" data-alt="A detailed wide shot of a lush, vibrant green organic farm field under a bright morning sun. The lighting is soft and golden, creating a warm, fresh, and inviting agro-modernist aesthetic. The focus is on the rich texture of the soil and the healthy green leaves of the crops, conveying a sense of premium quality and grounded transparency." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCl3t3etCwlCOK4SLZyjDOD1BedIzDpnDcCo9wYdZGTtbPJwE-mkRF_kh2ImTmNGC92YzoZR7wqWC7ZOfVwZw9qc-xTmT6FEepBp1lGra9WuXc4-Mek0A7LN73Z5805b7dR8RymuNTKK5Wr5onV5GGKWfUK57F4Tm3NvvZ5xsLXqUmUZJo_c6bODZf3CCsz3sKbK-2RhoIZra-ULmI-B78q1-sIRDVfc8EPboriLhVQh9bXQFCqPaWLbA')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent"></div>
<div class="absolute bottom-md left-md right-md flex justify-between items-end">
<p class="font-label-md text-label-md text-primary bg-surface-container-lowest/90 px-sm py-xs rounded backdrop-blur-sm">Farm Origin: Sunny Acres</p>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="w-full mt-xl bg-surface-container-highest dark:bg-surface-container-lowest py-xl">
<div class="flex flex-col md:flex-row justify-between items-start gap-lg px-lg max-w-7xl mx-auto">
<div class="flex flex-col gap-sm">
<div class="font-headline-md text-headline-md text-primary">
                    Fresh From Farm
                </div>
<p class="font-body-md text-body-md text-on-surface-variant">© 2024 Fresh From Farm. Rooted in Transparency.</p>
</div>
<nav class="flex flex-col md:flex-row gap-lg font-label-md text-label-md">
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Sustainability Report</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Farmer Support</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Contact Us</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Privacy Policy</a>
<a class="text-on-surface-variant dark:text-on-surface hover:underline hover:text-primary cursor-pointer" href="#">Terms of Service</a>
</nav>
</div>
</footer>
</body></html>
