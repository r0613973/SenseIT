@extends('layouts.template' , ['nav' => '1'])

@section('main')
    <body class="shrine-login">
    <section class="header">
        <img class="shrine-logo" src="./images/sense-it.svg" alt="sense it logo">
        <h1>SENSE IT</h1>
    </section>

    <form onSubmit="return checkPassword(this)" method="POST" action="{{ route('registreer.post') }}">
        @csrf
        <label class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--filled email">
            <i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading">email</i>
            <span class="mdc-text-field__ripple"></span>
            <input type="email" class="mdc-text-field__input" aria-labelledby="email-label" name="email" id="email"
                   required>
            <span class="mdc-floating-label" id="email-label">Email</span>
            <span class="mdc-line-ripple"></span>
        </label>
        <label class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--filled firstName">
            <i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading">person</i>
            <span class="mdc-text-field__ripple"></span>
            <input type="text" class="mdc-text-field__input" aria-labelledby="firstName-label" id="firstName"
                   name="firstName" required>
            <span class="mdc-floating-label" id="firstName-label">Voornaam</span>
            <span class="mdc-line-ripple"></span>
        </label>
        <label class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--filled lastName">
            <i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading">person</i>
            <span class="mdc-text-field__ripple"></span>
            <input type="text" class="mdc-text-field__input" aria-labelledby="lastName-label" name="lastName"
                   id="lastName" required>
            <span class="mdc-floating-label" id="lastName-label">Achternaam</span>
            <span class="mdc-line-ripple"></span>
        </label>
        <label class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--filled password">
            <i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading">vpn_key</i>
            <span class="mdc-text-field__ripple"></span>
            <input type="password" class="mdc-text-field__input" aria-labelledby="password-label" name="password"
                   id="password" minlength="8" required>
            <span class="mdc-floating-label" id="password-label">Wachtwoord (minstens 8 tekens)</span>
            <span class="mdc-line-ripple"></span>
        </label>
        <label class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--filled password1">
            <i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading">vpn_key</i>
            <span class="mdc-text-field__ripple"></span>
            <input type="password" class="mdc-text-field__input" aria-labelledby="confirm_password" name="password1"
                   id="password1" minlength="8" required>
            <span class="mdc-floating-label" id="confirm_password">Vul je wachtwoord nog een keer in</span>
            <span class="mdc-line-ripple"></span>
        </label>
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
    @endsection
    @section('script')
        <script>

            $('#test').click(function () {

                console.log('click');
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });

                $.ajax({
                    type: "POST",
                    url: "{{ route('registreer.post') }}",
                    headers: {'Ocp-Apim-Subscription-Key': 'a9c9a5b87e2447dba2330ed7ce88efe3',
                        "Access-Control-Allow-Origin":"*",
                    },
                });

            });


        </script>
        <script>
            const MDCTextField = mdc.textField.MDCTextField;
            const MDCRipple = mdc.ripple.MDCRipple;
            const firstName = new MDCTextField(document.querySelector('.firstName'));
            const lastName = new MDCTextField(document.querySelector('.lastName'));
            const email = new MDCTextField(document.querySelector('.email'));
            const password = new MDCTextField(document.querySelector('.password'));
            const password1 = new MDCTextField(document.querySelector('.password1'));
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
