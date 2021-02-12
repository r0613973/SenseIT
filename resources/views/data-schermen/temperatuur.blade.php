@extends('layouts.template')
@section('imports')
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.23/css/jquery.dataTables.min.css">



@endsection

@section('title', 'Temperatuur')
@section('main')





    <div class="mdc-layout-grid__cell" style="padding-bottom: 15vh">


            </div>

    <div class="container">
        <div class="row">


        </div>
        <div class="col">


                @include('data-schermen.datatemplate', ['metingvalue' => 'tempratuurmetingen'])
            </div>

        </div>
    </div>
    </div>



@endsection
@section('bottom-nav')
    @include('data-schermen.bottom-nav')
@endsection
@section('script')
    <script>
        $('#temperatuurIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
    @yield('script2')



@endsection
{{--@include('data-schermen.bottom-nav')--}}
