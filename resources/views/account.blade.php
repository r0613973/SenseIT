@extends('layouts.template')
@section('main')
    <div class="home">
        <div class="mdc-layout-grid__cell">

            <form onSubmit="return checkPassword(this)" method="POST" action="{{ route('registreer.post') }}">
                @csrf
                <div class="mdc-layout-grid__cell">
                    <label class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--filled email">
                        <i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading">email</i>
                        <span class="mdc-text-field__ripple"></span>
                        <input type="email" class="mdc-text-field__input" aria-labelledby="email-label" name="Email"
                               id="Email"
                               required>
                        <span class="mdc-floating-label" id="email-label">Email</span>
                        <span class="mdc-line-ripple"></span>
                    </label>
                </div>
                <div class="mdc-layout-grid__cell">
                    <label class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--filled firstName">
                        <i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading">person</i>
                        <span class="mdc-text-field__ripple"></span>
                        <input type="text" class="mdc-text-field__input" aria-labelledby="firstName-label"
                               id="firstName"
                               name="firstName" required>
                        <span class="mdc-floating-label" id="firstName-label">Voornaam</span>
                        <span class="mdc-line-ripple"></span>
                    </label></div>
                <div class="mdc-layout-grid__cell">
                    <label class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--filled lastName ">
                        <i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading">person</i>
                        <span class="mdc-text-field__ripple"></span>
                        <input type="text" class="mdc-text-field__input" aria-labelledby="lastName-label"
                               name="lastName"
                               id="lastName" required>
                        <span class="mdc-floating-label" id="lastName-label">Achternaam</span>
                        <span class="mdc-line-ripple"></span>
                    </label></div>
                <div class="mdc-layout-grid__cell">
                    <label class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--filled address">
                        <i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading">home</i>
                        <span class="mdc-text-field__ripple"></span>
                        <input type="text" class="mdc-text-field__input" aria-labelledby="address-label" name="address"
                               id="address" required>
                        <span class="mdc-floating-label" id="address-label">Adres</span>
                        <span class="mdc-line-ripple"></span>
                    </label>
                </div>
                <div class="mdc-layout-grid__cell">
                    <label class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--filled city">
                        <i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading">home</i>
                        <span class="mdc-text-field__ripple"></span>
                        <input type="text" class="mdc-text-field__input" aria-labelledby="city-label" name="city"
                               id="city" required>
                        <span class="mdc-floating-label" id="city-label">Woonplaats</span>
                        <span class="mdc-line-ripple"></span>
                    </label></div>
                <div class="mdc-layout-grid__cell">
                    <label class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--filled postcode">
                        <i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading">local_post_office</i>
                        <span class="mdc-text-field__ripple"></span>
                        <input type="text" class="mdc-text-field__input" aria-labelledby="postcode-label"
                               name="postcode"
                               id="postcode" required>
                        <span class="mdc-floating-label" id="postcode-label">Postcode</span>
                        <span class="mdc-line-ripple"></span>
                    </label>
                </div>
                <input id="UserTypeID" name="UserTypeID" value="1" hidden>
                <div class="button-container">
                    <button type="button" class="mdc-button cancel" onclick="location.href='../login'">
                        <div class="mdc-button__ripple"></div>
                        <span class="mdc-button__label">
                    Ik heb al een account
                </span>
                    </button>
                    <button type="submit" class="mdc-button mdc-button--raised next">
                        {{ __('Registreer') }}
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('script')

    <script>
        const MDCTextField = mdc.textField.MDCTextField;
        const MDCRipple = mdc.ripple.MDCRipple;
        const firstName = new MDCTextField(document.querySelector('.firstName'));
        const lastName = new MDCTextField(document.querySelector('.lastName'));
        const email = new MDCTextField(document.querySelector('.email'));
        const email = new MDCTextField(document.querySelector('.address'));
        const email = new MDCTextField(document.querySelector('.city'));
        const email = new MDCTextField(document.querySelector('.postcode'));
        new MDCRipple(document.querySelector('.cancel'));
        new MDCRipple(document.querySelector('.next'));

        //Function to check if passwords match
        function checkPassword(form) {
            password_original = form.password.value;
            password_check = form.password1.value;

            // If Not same return False.
            if (password_original !== password_check) {
                alert("\nWachtwoorden komen niet overeen. Heb je wel 2 keer hetzelfde wachtwoord ingegeven? Check op spelfouten!")
                return false;
            } else {
                post();
            }
        }
    </script>
@endsection

