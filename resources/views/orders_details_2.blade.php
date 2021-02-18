<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>تفاصيل الطلب</title>
    <link rel = "icon" href ="{{'assets/img/logo.svg'}}" type = "image/x-icon">

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{'assets/css/all.min.css'}}"><!-- font awesome-->
    <link rel="stylesheet" type="text/css" href="{{'assets/css/bootstrap.min.css'}}"><!-- bootstrap-->
    <link rel="stylesheet" type="text/css" href="{{'assets/css/normlaize.css'}}">
    <link href="https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/css/intlTelInput.css">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="{{'assets/css/owl.carousel.min.css'}}">
    <link rel="stylesheet" type="text/css" href="{{'assets/css/owl.theme.default.css'}}">
    <link rel="stylesheet" type="text/css" href="{{'assets/css/style.css'}}"><!-- main style -->
    <link rel="stylesheet" type="text/css" href="{{'assets/css/responsive.css'}}"><!-- responsive style -->

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<div id="app">

    <main class="">
        <header_login_section></header_login_section>
        <orders_details_2></orders_details_2>
    </main>
    <footer_section></footer_section>
</div>

<script src="{{asset('js/app.js')}}"></script>
<script src="assets/js/jquery-2.1.4.min.js"></script><!-- main JQuery -->
<script src="assets/js/bootstrap.min.js"></script><!-- bootstrap js -->
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/intlTelInput.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.0/js/bootstrap.min.js"></script>
<script src="assets/js/tilt.jquery.min.js"></script>
<script src="assets/js/owl.carousel.js"></script>
<script src="assets/js/main.js"></script><!-- main js file -->
</body>

</html>
