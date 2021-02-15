@extends('layouts.template')

@section('main')

    <div class="home">

        <div class="container">
            <h2>Overzicht van uw gekoppelde boxen</h2>
            <div class="mdc-tab-bar" role="tablist">
                <div class="mdc-tab-scroller">
                    <div class="mdc-tab-scroller__scroll-area">
                        <div class="mdc-tab-scroller__scroll-content">
                            @foreach($boxen as $box)
                                <button class="mdc-tab mdc-tab" role="tab" aria-selected="true" tabindex="0">
          <span class="mdc-tab__content">
            <span class="mdc-tab__text-label">{{$box->box->Name}}</span>
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


            <div class="mdc-layout-grid__cell">
                @foreach($boxen as $box)
                    <div class="content">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{{$box->Box->Name}}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Mac Address: {{$box->Box->MacAddress}}</h6>
                                <p class="card-text">{{$box->Box->Comment}}</p>
                                <div class="form-check form-switch" style="margin-left: 20px">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled"
                                           {{$box->Box->Active ? 'checked' : ''}} disabled>
                                    <label class="form-check-label"
                                           for="flexSwitchCheckCheckedDisabled">{{$box->Box->Active ? 'De box is actief' : 'De box is niet actief'}}</label>
                                </div>
                                <ul class="list-group ">
                                    @foreach($box->Sensoren  as $sensor)
                                        <div class="list-group-item list-group-item-action">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">{{$sensor->Name}} {{$sensor->Unit}}</h5>
                                            </div>
                                            <p class="mb-1">{{$sensor->sensor->Name}}</p>
                                        </div>
                                    @endforeach
                                </ul>


                                <iframe
                                    src="http://20.73.164.205:3000/d-solo/xIkhwMLGk/sensoren-metingen-dashboard?orgId=1&var-Box_Admin=All&var-Box_Boer={{$box->BoxID}}&from=1611734741265&to=1612339541265&panelId=7"
                                    height="200" frameborder="0">

                                </iframe>
                                @if($box->BoxID == 5 )
                                    <iframe
                                        src="http://20.73.164.205:3000/d-solo/xIkhwMLGk/sensoren-metingen-dashboard?var-Box_Admin=All&var-Box_Boer={{$box->BoxID}}&var-X_Coordinaten=51.0152&var-Y_Coordinaten=4.71502&refresh=5m&from=1611446516245&to=1612656116245&orgId=1&panelId=9"
                                        height="200" frameborder="0">

                                    </iframe>
                                    <iframe
                                        src="http://20.73.164.205:3000/d-solo/xIkhwMLGk/sensoren-metingen-dashboard?var-Box_Admin=All&var-Box_Boer=5&var-X_Coordinaten=51.0152&var-Y_Coordinaten=4.71502&refresh=5m&from=1611446516245&to=1612656116245&orgId=1&panelId=11"
                                        height="200" frameborder="0">

                                    </iframe>
                                @endif
                            </div>
                            <div class="card-footer">

                                <small class="text-muted">Laatste update: {{$box->Snapshot->TimeStamp ?? "Geen Snapshot gevonden voor deze box"}}</small>

                            </div>
                        </div>
                    </div>
                @endforeach
            </div>

        </div>

    </div>



@endsection
@section('script')
    <script>

        $('.mdc-tab-scroller__scroll-content button').first().addClass('mdc-tab--active');
        $('.mdc-tab-indicator').first().addClass('mdc-tab-indicator--active');
        $('.content').first().addClass('content--active');
        const MDCList = mdc.list.MDCList;
        new MDCList(document.querySelector('.mdc-list'));
        /*
                const MCDRipple = mdc.ripple.MDCRipple;


                const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
                const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
                    return new MDCRipple(el);
                });*/


        const MDCTabBar = mdc.tabBar.MDCTabBar;
        var tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
        var contentEls = document.querySelectorAll('.content');
        tabBar.listen('MDCTabBar:activated', function (event) {
            // Hide currently-active content
            document.querySelector('.content--active').classList.remove('content--active');
            // Show content for newly-activated tab
            contentEls[event.detail.index].classList.add('content--active');
        });
        console.log("Test");


    </script>

@endsection
