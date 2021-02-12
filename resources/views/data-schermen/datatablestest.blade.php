@extends('layouts.template')

@section('title', 'Luchtkwaliteit')
@section('imports')
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.23/css/jquery.dataTables.min.css">



@endsection
@section('main')
<div class="container">
    <div class="row">
        <div class="col">
            <table id="myTable" class="display">

            </table>
        </div>
    </div>
</div>

@endsection
@section('script')
    <script src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js"></script>
    <script>
        var sensordata;
        $(document).ready( function () {

            $('#myTable').DataTable({
                data: "{{url('/datatable')}}",
                    "columns": [


                    ]

                }
            );



            $.getJSON('/datatable').done(dataset=>{
                console.log("test morty we need to test")
                console.log(dataset.boxen[0]);
                console.log(dataset);





            });




        } );


        $('#luchtkwaliteitIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
    @yield('script2')
@endsection
@include('data-schermen.bottom-nav')
