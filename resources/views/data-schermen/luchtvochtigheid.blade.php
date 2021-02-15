@extends('layouts.template')

@section('title', 'Luchtvochtigheid')
@section('main')
    <div class="mdc-layout-grid__cell" style="padding-bottom: 15vh">
        @include('data-schermen.datatemplate', ['metingvalue' => 'luchtvochtigheidmetingen'])
    </div>

@endsection
@section('script')
    <script>

        $('#luchtvochtigheidIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
    @yield('script2')
@endsection
@include('data-schermen.bottom-nav')
