@extends('layouts.template')

@section('main')

    <h1>Locatie</h1>

    {{--<div class="mapouter">
        <div class="gmap_canvas">
            <iframe width="600px" height="100%"
                    id="gmap_canvas"src="https://maps.google.com/maps?q=Berencamperweg%2C%20nijkerk&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no"marginheight="0" marginwidth="0"></iframe>
            <ahref
            ="https://www.embedgooglemap.net/blog/20-off-discount-for-elegant-themes-divi-sale-coupon-code-2019/">elegantthemes</a>
        </div>
        <style>.mapouter {
                position: relative;
                text-align: right;
                height: 500px;
                width: 600px;
            }

            .gmap_canvas {
                overflow: hidden;
                background: none !important;
                height: 500px;
                width: 600px;
            }</style>--}}
    </div>
@endsection
@section('script')
    <script>
        $('#locatieIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
@endsection
@include('data-schermen.bottom-nav')
