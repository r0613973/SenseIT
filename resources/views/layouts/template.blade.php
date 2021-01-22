<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <!--<link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">-->

    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css">

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">


    <title>@yield('title', 'The Vinyl Shop')</title>


    <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png">
    <link rel="manifest" href="/images/favicon/site.webmanifest">
    <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#78a5b2">
    <link rel="shortcut icon" href="/images/favicon/favicon.ico">
    <meta name="msapplication-TileColor" content="#2b5797">
    <meta name="msapplication-config" content="/images/favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">


</head>
<body class="home">
@if($nav ?? '' !=  '' )

@else
    @include('shared.navigation')

@endif

<div class="shrine-body">



    @yield('main', 'Page under construction ...')



</div>
{{--  Footer  --}}

<script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="{{mix('js/app.js')}}"></script>
    @yield('script')


</body>
</html>
