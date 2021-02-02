@component('mail::message')
# Registratie

Beste {{ $name }},

Je account is correct aangemaakt op senseit.test.
Je kan je nu aanmelden met je login.

@component('mail::button', ['url' => 'senseit.test/login'])
Inloggen
@endcomponent

Bedankt,<br>
{{ config('app.name') }}
@endcomponent
