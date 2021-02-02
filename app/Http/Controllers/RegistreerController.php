<?php

namespace App\Http\Controllers;


use App\Mail\RegisterMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use View;

class RegistreerController extends Controller
{
    public function Post(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'FirstName' => ['required', 'string', 'max:255'],
            'LastName' => ['required', 'string', 'max:255'],
            'Email' => ['required', 'string', 'email', 'max:255' ,/*'unique:user'*/],
            'Password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
       //TODO De validator nog correct laten werken
       /* if ($validator->fails()) {
            return redirect('/register')
                ->withErrors($validator)
                ->withInput();
        }*/

        $response = Http::withHeaders([
            'Ocp-Apim-Subscription-Key' => 'a9c9a5b87e2447dba2330ed7ce88efe3'
        ])
            ->post('https://vitoapi.azure-api.net/api/User', [
                'LastName' => Request('lastName'),
                'FirstName' =>Request('firstName'),
                'Email' => Request('email'),
                'Password' =>Request('password'),
                'UserTypeID' => 3,
            ]);
        $emailAddress = Request('email');
        $name = Request('firstName');
        $email = new RegisterMail($emailAddress, $name);
        Mail::to($emailAddress)->send($email);


        return Redirect('login');
    }
}
