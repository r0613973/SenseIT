@extends('layouts.template')

@section('title', 'Luchtkwaliteit')
@section('main')
    <div class="mdc-layout-grid__cell" style="padding-bottom: 15vh">
        @include('data-schermen.datatemplate', ['metingvalue' => 'luchtkwaliteitMeting'])
    </div>


@endsection
@section('script')
    <script>

        $('#luchtkwaliteitIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
    @yield('script2')
@endsection
@include('data-schermen.bottom-nav')
