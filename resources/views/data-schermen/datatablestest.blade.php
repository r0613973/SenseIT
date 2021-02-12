@extends('layouts.template')

@section('title', 'Luchtkwaliteit')
@section('imports')
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.23/css/jquery.dataTables.min.css">



@endsection
@section('main')
<div class="container">
    <div class="row" >
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


            var table = $('#myTable').DataTable({
                responsive: true,
                scrollX: false,
                language: {
                    "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Dutch.json"
                },
                "ajax": {
                    "url": "/datatable",
                    "type": "GET",
                    "dataSrc": function (json) {
                        data_response = json;
                        console.log(json);
                        console.log(json.boxen[4].measurements.data);
                        return json.boxen[4].measurements.data;
                    }
                },
                columns: [
                    {
                        "data": null,
                        "render": function (data) {
                            return '<div class="recruiterName" data-id="' + data + '">' + data.Value + '</div>'
                        }
                    }
                ]


            });
        });


        $('#luchtkwaliteitIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
    @yield('script2')
@endsection
@include('data-schermen.bottom-nav')
