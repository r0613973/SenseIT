@extends('layouts.template' , ['nav' => '1'])

@section('main')
    <body class="shrine-login">
    <section class="header">
        <img  class="shrine-logo" src="./images/sense-it.svg" alt="sense it logo">
        <h1>SENSE IT</h1>
    </section>

    <form action="home.html">
        <label class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--filled username">
            <i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading">person</i>
            <span class="mdc-text-field__ripple"></span>
            <input type="text" class="mdc-text-field__input" aria-labelledby="username-label" name="username" required>
            <span class="mdc-floating-label" id="username-label">Username</span>
            <span class="mdc-line-ripple"></span>
        </label>
        <label class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--filled password">
            <i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading">vpn_key</i>
            <span class="mdc-text-field__ripple"></span>
            <input type="password" class="mdc-text-field__input" aria-labelledby="password-label" name="password" required>
            <span class="mdc-floating-label" id="password-label">Wachtwoord</span>
            <span class="mdc-line-ripple"></span>
        </label>
        <div class="button-container">
            <button type="button" class="mdc-button cancel" onclick="location.href='../home'">
                <div class="mdc-button__ripple"></div>
                <span class="mdc-button__label">
                    Cancel
                </span>
            </button>
            <button class="mdc-button mdc-button--raised next">
                <div class="mdc-button__ripple"></div>
                <span class="mdc-button__label">
                    Login
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
