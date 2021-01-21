@extends('layouts.template')

@section('main')
    <h1>SenseIT</h1>

    <p>Wees welgekomen</p>
    <button class="mdc-button foo-button">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">Button</span>
    </button>

    <script>
        mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
    </script>

@endsection
