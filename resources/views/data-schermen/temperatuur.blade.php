@extends('layouts.template')

@section('main')

    <h1>Temperatuur</h1>


    @include('data-schermen.bottom-nav')
@endsection
@section('script')
    <script>

        $('#temperatuurIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
@endsection
