@extends('layouts.template')

@section('title', 'BodemTemperatuur')
@section('main')

    <div class="mdc-layout-grid__cell" style="padding-bottom: 15vh">

        @include('data-schermen.datatemplate')
    </div>
    <div class="container">
        <div class="row" >


        </div>
        <div class="col" >

        </div>
    </div>
    </div>



@endsection
@section('bottom-nav')
    @include('data-schermen.bottom-nav')
@endsection
@section('script')
    <script>
        $('#bodemTemperatuurIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
    @yield('script2')



@endsection