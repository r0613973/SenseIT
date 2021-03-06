@extends('layouts.template')

@section('title', 'BodemTemperatuur')
@section('main')

    <div class="mdc-layout-grid__cell" style="padding-bottom: 15vh">
        @include('data-schermen.datatemplate', ['metingvalue' => 'bodemvochtigheidmetingen'])
    </div>




@endsection
@section('bottom-nav')
    @include('data-schermen.bottom-nav')
@endsection
@section('script')
    <script>
        $('#bodemvochtigheidIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
    @yield('script2')



@endsection
