@extends('layouts.template' , ['nav' => '1'])

@section('main')
    <body class="shrine-login">
    <section class="header">
        <img  class="shrine-logo" src="./images/sense-it.svg" alt="sense it logo">
        <h1>SENSE IT</h1>
    </section>

    <form action="home.html">
        <label class="mdc-text-field mdc-text-field--filled username">
            <span class="mdc-text-field__ripple"></span>
            <input type="text" class="mdc-text-field__input" aria-labelledby="username-label" name="username">
            <span class="mdc-floating-label" id="username-label">Username</span>
            <span class="mdc-line-ripple"></span>
        </label>
        <label class="mdc-text-field mdc-text-field--filled password">
            <span class="mdc-text-field__ripple"></span>
            <input type="password" class="mdc-text-field__input" aria-labelledby="password-label" name="password">
            <span class="mdc-floating-label" id="password-label">Password</span>
            <span class="mdc-line-ripple"></span>
        </label>
        <div class="button-container">
            <button type="button" class="mdc-button cancel">
                <div class="mdc-button__ripple"></div>
                <span class="mdc-button__label">
      Cancel
    </span>
            </button>
            <button class="mdc-button mdc-button--raised next">
                <div class="mdc-button__ripple"></div>
                <span class="mdc-button__label">
      Next
    </span>
            </button>
        </div>


    </form>




@endsection
@section('script')
    <script>
    const MDCTextField = mdc.textField.MDCTextField;
    const MDCRipple =  mdc.ripple.MDCRipple;
    const username = new MDCTextField(document.querySelector('.username'));
    const password = new MDCTextField(document.querySelector('.password'));
    new MDCRipple(document.querySelector('.cancel'));
    new MDCRipple(document.querySelector('.next'));

    </script>
@endsection
