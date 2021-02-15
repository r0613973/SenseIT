@extends('layouts.template')
@section("imports")

@endsection
@section('title', 'Zonlicht')
@section('main')

    <div class="mdc-layout-grid__cell" style="padding-bottom: 15vh">
                @include('data-schermen.datatemplate', ['metingvalue' => 'zonlichtmetingen'])
    </div>



@endsection

@section('script')
    <script>
        $('#zonlichtIcon').addClass("mdc-bottom-navigation__list-item--activated");

    </script>
    @yield('script2')
@endsection
@include('data-schermen.bottom-nav')
