@extends('layouts.template')

@section('main')

        <ul class="mdc-image-list product-list">
            <li class="mdc-image-list__item">
                <img class="mdc-image-list__image" src="assets/weave-keyring.jpg">
                <div class="mdc-image-list__supporting">
                    <span class="mdc-image-list__label">Weave keyring</span>
                </div>
            </li>
        </ul>





@endsection
@section('script')
    <script>
       const MDCList= mdc.list.MDCList;
       new MDCList(document.querySelector('.mdc-list'));

    </script>
@endsection
