@section('imports')



@endsection
<div class="home" style="padding-bottom: 14vh" id="{{$metingvalue}}">
    <?php
    $counter = 0;
    ?>
    <div class="container">
        <div class="row">

            <div class="mdc-tab-bar" role="tablist">
                <div class="mdc-tab-scroller">
                    <div class="mdc-tab-scroller__scroll-area">
                        <div class="mdc-tab-scroller__scroll-content">
                            @foreach($boxen as $box)
                                <button class="mdc-tab mdc-tab" role="tab" aria-selected="true" tabindex="0">
          <span class="mdc-tab__content">
            <span class="mdc-tab__text-label">{{$box['box']->Name}}</span>
          </span>
                                    <span class="mdc-tab-indicator">
            <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
          </span>
                                    <span class="mdc-tab__ripple"></span>
                                </button>
                            @endforeach


                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row" style="padding-top: 10px">

            @foreach($boxen as $box)

                <div class="content" id="{{$box->BoxID}}">
                    @if(count($box->sensoren)==0)
                        <div class="card">
                            <div class="card-body">Deze box heeft geen meetwaarden</div>
                        </div>

                    @else
                        <div class="row">
                            {{--@if($box->UserTypeID == 1)
                                <iframe
                                    src="https://20.71.209.149:3000/d-solo/k7fNW2PGz/sensoren-metingen-dashboard?orgId=1&refresh=1m&from=1613439927822&to=1613461527822
                                    &var-User_Name=1&var-Box_Admin=All&var-Box_Boer=5&var-Sensor_type={{$box->SensorTypeID}}&var-Unit={{$box->Unit}}
                                        &var-X_Coordinaten=&var-Y_Coordinaten=&var-SensorID=&var-query0=&panelId=2&to=now+1h&theme=light"
                                    width="450" height="250" frameborder="0"></iframe>
                            @else--}}

                                @if($box->SensorIDs->count()>1)
                                    <iframe src="https://20.71.209.149:3000/d-solo/k7fNW2PGz/sensoren-metingen-dashboard?orgId=1&refresh=1m&from=now-4d&to=now%2B1h
                                &var-User_Name=&var-Box_Admin=All&var-Box_Boer={{$box->BoxID}}&var-Sensor_type={{$box->SensorTypeID}}&var-Unit={{$box->Unit}}&var-X_Coordinaten=
                                &var-Y_Coordinaten=&var-SensorID={{$box->SensorIDs->first()}}&var-query0=&var-SensorID2={{$box->SensorIDs->last()}}&var-SensorIDname=1&panelId=31&theme=light"
                                            width="450" height="250"
                                            frameborder="0"></iframe>
                                @else
                                    <iframe id="locatie" src="https://20.71.209.149:3000/d-solo/k7fNW2PGz/sensoren-metingen-dashboard?orgId=1&refresh=1m&from=now-4d&to=now%2B1h
                                &var-User_Name=&var-Box_Admin=All&var-Box_Boer={{$box->BoxID}}&var-Sensor_type={{$box->SensorTypeID}}&var-Unit={{$box->Unit}}&var-X_Coordinaten=
                                &var-Y_Coordinaten=&var-SensorID={{$box->SensorIDs->first()}}&var-query0=&var-SensorID2=&var-SensorIDname=1&panelId=32&theme=light"
                                            width="450" height="250"
                                            frameborder="0"></iframe>


                                @endif

                                    {{--<iframe src="https://20.71.209.149:3000/d-solo/k7fNW2PGz/sensoren-metingen-dashboard?orgId=1&refresh=1m&var-User_Name=1
                                    &var-Box_Admin=5&var-Box_Boer=5&var-Sensor_type=All&var-Unit={{$box->Unit}}&var-X_Coordinaten=
                                    &var-Y_Coordinaten=
                                    @foreach($box->SensorIDs as $id)
                                        &var-SensorID={{$id}}
                                    @endforeach
                                        &var-query0=&from=1613447838195&to=1613473038195&theme=light&panelId=5"
                                            width="450" height="200" frameborder="0"></iframe>--}}

                               {{-- @endif--}}

                                {{--   <iframe
                                       src="https://20.73.164.205:3000/d-solo/xIkhwMLGk/sensoren-metingen-dashboard?orgId=1&refresh=5s&from=now-5h&to=now&var-User_Name={{auth()->user()->UserTypeID}}&var-Box_Admin=All&var-Box_Boer={{$box->BoxID}}&var-Sensor_type={{$box->SensorTypeID}}&var-Unit={{$box->Unit}}&var-X_Coordinaten=51.0152&var-Y_Coordinaten=4.71502&panelId=41"
                                       frameborder="0"></iframe>--}}
                        </div>


                        <div class="row {{$counter ?? ''}} tablecounter tabelcol{{$box->BoxID}}" id=""
                             style="padding-top: 6vh">
                            {{--                            <div class="mdc-data-table measurementTable">--}}
                            {{--                                <div class="mdc-data-table__table-container">--}}
                            {{--                                    <table class="mdc-data-table__table">--}}
                            {{--                                        <thead>--}}
                            {{--                                        <tr class="mdc-data-table__header-row">--}}
                            {{--                                            <th class="mdc-data-table__header-cell" role="columnheader" scope="col"><i--}}
                            {{--                                                    class="fas fa-arrow-circle-right"></i></th>--}}
                            {{--                                            <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"--}}
                            {{--                                                role="columnheader"--}}
                            {{--                                                scope="col">Waarde--}}
                            {{--                                            </th>--}}
                            {{--                                            <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"--}}
                            {{--                                                role="columnheader"--}}
                            {{--                                                scope="col">Tijdstip--}}
                            {{--                                            </th>--}}

                            {{--                                        </tr>--}}
                            {{--                                        </thead>--}}
                            {{--                                        <tbody class="mdc-data-table__content">--}}


                            {{--                                        @foreach($box->measurements as $measurement)--}}

                            {{--                                            <tr class="mdc-data-table__row">--}}
                            {{--                                                <td class="mdc-data-table__cell ">{!! $measurement->Arrow !!}</td>--}}
                            {{--                                                <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{{$measurement->Value . $measurement->Unit}}  </td>--}}
                            {{--                                                <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{{$measurement->TimeStamp}}</td>--}}


                            {{--                                            </tr>--}}
                            {{--                                        @endforeach--}}

                            {{--                                        </tbody>--}}


                            {{--                                    </table>--}}
                            {{--                                    {{ $box->measurements->onEachSide(1)->links() }}--}}

                            {{--                                </div>--}}
                            {{--                            </div>--}}


                        </div>
                        <?php
                        $counter++;
                        ?>
                    @endif
                </div>

            @endforeach
        </div>


    </div>
</div>

@section('script2')
    <script src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js"></script>

    <script>

        var counter = 0;
        var datatablecoutner = 0;
        $(document).ready(function () {
            var meetingvariable = $(".home").attr('id');


            $.getJSON('/' + meetingvariable).done(data => {
                    console.log(data);


                    $.each(data.boxen, function (key, value) {
                        var boxid = value.BoxID;
                        var waarden = value.sensoren;

                        var sensor = waarden[0];


                        console.log("sensoren");
                        $.each(waarden, function (key, sensoren) {
                            $('.tabelcol' + boxid).append(" <div class='col col-lg-6'>" +
                                "<h4>" + sensoren[0]["sensor"]["Name"] + "</h4>" +
                                "<table id=\"myTable" + boxid + counter + "\" class=\"display\"></table> </div> ")

                            console.log(sensoren[0]);


                            var table = $('#myTable' + boxid + counter).DataTable({
                                responsive: true,
                                scrollX: false,
                                language: {
                                    "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Dutch.json"
                                },
                                "data": sensoren,

                                columns: [
                                    {

                                        "data": null,
                                        "render": function (sensoren) {
                                            return '<div>' + sensoren["Arrow"] + '</div> '
                                        }
                                    },

                                    {
                                        "title": "Datum",
                                        "data": null,
                                        "render": function (sensoren) {
                                            return '<div class="recruiterName" data-id="' + sensoren.MeasurementID + '">' + sensoren.TimeStamp + '</div>'
                                        }
                                    },
                                    {
                                        "title": "Waarden",
                                        "data": null,
                                        "render": function (sensoren) {
                                            return '<div class="recruiterName" data-id="' + sensoren.MeasurementID + '">' + sensoren['Value'] + '</div>'
                                        }
                                    },
                                    {
                                        "title": "unit",
                                        "data": null,
                                        "render": function (sensoren) {
                                            return '<div class="recruiterName" data-id="' + sensoren + '">' + sensoren.Unit + '</div>'
                                        }
                                    }
                                ]


                            });
                            counter++;
                        })


                    });


                }
            )


        });


    </script>



    <script>

        const MDCTabBar = mdc.tabBar.MDCTabBar;
        var tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
        var contentEls = document.querySelectorAll('.content');


        var selectedTab = localStorage.getItem('selectedTab');
        var contentActive = localStorage.getItem('contentActive');
        if (selectedTab) {
            console.log(selectedTab)
            $('#' + selectedTab).addClass('mdc-tab--active');
            console.log('#' + selectedTab + ' span:nth-child(2)');
            $('#' + selectedTab + ' span:nth-child(2)').addClass('mdc-tab-indicator--active');
            $('#' + contentActive).addClass('content--active');
        } else {
            $('.mdc-tab-scroller__scroll-content button').first().addClass('mdc-tab--active');
            $('.mdc-tab-indicator').first().addClass('mdc-tab-indicator--active');
            $('.content').first().addClass('content--active');
        }
        tabBar.listen('MDCTabBar:activated', function (event) {
            // Hide currently-active content
            document.querySelector('.content--active').classList.remove('content--active');
            // Show content for newly-activated tab
            contentEls[event.detail.index].classList.add('content--active');
            localStorage.setItem('selectedTab', $('.mdc-tab--active').attr('id'));
            localStorage.setItem('contentActive', $('.content--active').attr('id'));
        });

    </script>
@endsection

