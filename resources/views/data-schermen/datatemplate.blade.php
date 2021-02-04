<div class="home">
<div class="container">
    <div class="row">

        <div class="mdc-tab-bar" role="tablist">
            <div class="mdc-tab-scroller">
                <div class="mdc-tab-scroller__scroll-area">
                    <div class="mdc-tab-scroller__scroll-content">
                        @foreach($boxen as $box)
                            <button class="mdc-tab mdc-tab" role="tab" aria-selected="true" tabindex="0">
          <span class="mdc-tab__content">
            <span class="mdc-tab__text-label">Box iD: {{$box->BoxID}}</span>
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

<div class="row">
            @foreach($boxen as $box)
                <div class="content" id="{{$box->BoxID}}">
                    @if(count($box->measurements)==0)
                        <div class="card">
                            <div class="card-body">Deze box heeft geen meetwaarden</div>
                        </div>

                    @else
                        <div class="row">
                        <div class="mdc-data-table">
                            <div class="mdc-data-table__table-container">
                                {{ $box->measurements->onEachSide(1)->links() }}
                                <table class="mdc-data-table__table">
                                    <thead>
                                    <tr class="mdc-data-table__header-row">
                                        <th class="mdc-data-table__header-cell" role="columnheader" scope="col"><i
                                                class="fas fa-arrow-circle-right"></i></th>
                                        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                                            role="columnheader"
                                            scope="col">Waarde
                                        </th>
                                        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                                            role="columnheader"
                                            scope="col">Tijdstip
                                        </th>

                                    </tr>
                                    </thead>
                                    <tbody class="mdc-data-table__content">


                                    @foreach($box->measurements as $measurement)
                                        @section('test')
                                            {{$SensorTypeID= $measurement->SensorTypeID}}
                                        @endsection
                                        <tr class="mdc-data-table__row">
                                            <td class="mdc-data-table__cell ">{!! $measurement->Arrow !!}</td>
                                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{{$measurement->Value . $measurement->Unit}}  </td>
                                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{{$measurement->TimeStamp}}</td>


                                        </tr>
                                    @endforeach

                                    </tbody>

                                </table>

                            </div>
                        </div>
                        </div>
                    @endif
                    <div class="row">
                        <iframe src="http://20.73.164.205:3000/d-solo/xIkhwMLGk/sensoren-metingen-dashboard?orgId=1&refresh=5s&var-User_Name=1&var-Box_Admin=All&var-Box_Boer={{$box->BoxID}}&var-Sensor_type={{$SensorTypeID}}&var-X_Coordinaten=51.0152&var-Y_Coordinaten=4.71502&from=1611843390409&to=1612448190409&panelId=39" width="450" height="500" frameborder="0">

                        </iframe>
                    </div>
                </div>
            @endforeach
</div>


</div></div>

@section('script2')
    <script>
        const MDCTabBar = mdc.tabBar.MDCTabBar;
        var tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
        var contentEls = document.querySelectorAll('.content');
        tabBar.listen('MDCTabBar:activated', function (event) {
            // Hide currently-active content
            document.querySelector('.content--active').classList.remove('content--active');
            // Show content for newly-activated tab
            contentEls[event.detail.index].classList.add('content--active');
            localStorage.setItem('selectedTab', $('.mdc-tab--active').attr('id'));
            localStorage.setItem('contentActive', $('.content--active').attr('id'));
        });

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

    </script>
@endsection

