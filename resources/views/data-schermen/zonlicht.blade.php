@extends('layouts.template')

@section('title', 'Zonlicht')
@section('main')

    @include('data-schermen.datatemplate')



@endsection

@section('script')
    <script>
        $('#zonlichtIcon').addClass("mdc-bottom-navigation__list-item--activated");

    </script>
@endsection
@include('data-schermen.bottom-nav')
