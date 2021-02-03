<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <!--<link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">

    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css">


   {{--     bootstrap is nodig voor de pagination links--}}
    <link rel="stylesheet" href="css/bootstrap.min.css">

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
    <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>

</head>


@if($nav ?? '' !=  '' )

@else

    @include('shared.navigation')

    <body class="">

    <!--<div class="shrine-body">-->
        <main class="{{--mdc-top-app-bar--fixed-adjust--}}">
            <div class="container">
                <div class="mdc-layout-grid">
                    <div class="mdc-layout-gird__inner">
            @endif

            @yield('main', 'Page under construction ...')

            @if($nav ?? '' !=  '' )

            @else
                    </div>
                </div></div>
            @yield('bottom-nav')
        </main>

    @endif

    {{--  Footer  --}}

    <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
    <script src="{{mix('js/app.js')}}"></script>

    <script>
        const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
        const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));
        topAppBar.listen('MDCTopAppBar:nav', () => {
            drawer.open = !drawer.open;
        });

        const MDCdataTable = mdc.dataTable.MDCDataTable;


        const MDCMenu = mdc.menu.MDCMenu;
        const menu = new MDCMenu(document.querySelector('.mdc-menu'));
        menu.open = false;

        function openMenu() {
            menu.open = !menu.open;

        }

        document.querySelector('#menu-button').addEventListener("click", openMenu);
        const MDCtooltip = mdc.Tooltip.MDCTooltip;
        const tooltip = new MDCTooltip(document.querySelector('.mdc-tooltip'));
        const list = mdc.list.MDCList.attachTo(document.querySelector('.mdc-list'));
    </script>

    @yield('script')
    </body>
</html>
