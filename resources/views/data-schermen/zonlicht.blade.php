@extends('layouts.template')

@section('title', 'Zonlicht')
@section('main')

    @include('data-schermen.datatemplate')



@endsection

@section('script')
    <script>
        $('#zonlichtIcon').addClass("mdc-bottom-navigation__list-item--activated");

    </script>
    @yield('script2')
@endsection
@include('data-schermen.bottom-nav')
