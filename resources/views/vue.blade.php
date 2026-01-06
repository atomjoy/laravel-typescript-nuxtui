<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scrollbar_thin">

<head>
	<meta charset="utf-8">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="cache-control" content="private, max-age=604800, immutable">

	<!-- Robots -->
	<meta name="robots" content="noindex, nofollow">

	<!-- Seo -->
	<title></title>
	<meta name="description" content="">
	<meta name="keywords" content="">
	<link rel="canonical" href="https://example.com/" />

	<!-- Favicon -->
	<link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
	<link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
	<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
	<link rel="icon" type="image/png" sizes="192x192" href="/favicon/favicon-192x192.png">

	<!-- Logo -->
	<link rel="preload" href="/default/avatar.webp" as="image" type="image/webp" />
	<link rel="preload" href="/default/logo/logo-light.png" as="image" type="image/png" />
	<link rel="preload" href="/default/logo/logo-dark.png" as="image" type="image/png" />

	<!-- Css, links -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

	<!-- Splide slider -->
	{{-- <script src=" https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js "></script>
	<link href=" https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css " rel="stylesheet"> --}}

	<!-- OpenGraph -->
	<meta property="og:url" content="https://example.com" />
	<meta property="og:locale" content="pl_PL" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Example.com" />
	<meta property="og:title" content="Laravel Vue" />
	<meta property="og:description" content="Page description." />
	<meta property="og:image" content="https://example.com/default/logo/logo.png" />
	<meta property="og:image:width" content="512" />
	<meta property="og:image:height" content="512" />

	<meta name="geo.position" content="51.017850;21.904640" />
	<meta name="geo.placename" content="City" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@username" />
	<meta name="twitter:title" content="Laravel Vue" />
	<meta name="twitter:description" content="Page description." />
	<meta name="twitter:image" content="https://example.com/default/logo/logo.png" />
	<meta name="twitter:image:alt" content="Example.com" />

	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G_CODE_HERE"></script>
	<script>
		window.dataLayer = window.dataLayer || []
        function gtag() {
            dataLayer.push(arguments)
        }
        // Force all
        gtag('consent', 'default', {
            ad_user_data: 'granted',
            ad_personalization: 'granted',
            ad_storage: 'granted',
            analytics_storage: 'granted',
            // 'wait_for_update': 500,
        })
        gtag('js', new Date())
        gtag('config', 'G_CODE_HERE')
	</script>

	{{-- With tailwind --}}
	@vite(['resources/css/app.css', 'resources/js/app.ts'])

	{{-- Without tailwind --}}
	{{-- @vite(['resources/js/app.ts']) --}}
</head>

<body>
	<div id="app" class="isolate"></div>
</body>

</html>