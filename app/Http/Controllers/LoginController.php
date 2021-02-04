<?php

namespace App\Http\Controllers;


use App\Models\User;
use Facades\App\Helpers\Json;


use http\Message\Body;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Throwable;
use View;


class LoginController extends Controller
{
    public function Login(Request $request)
    {
//        $string = '{"firstName":"string","lastName":"string","email":"'.Request('Email').'","password":"'.Request('password').'","address":"string","postalCode":"string","city":"string","userTypeID":0,"userType":{"userTypeID":0,"userTypeName":"string"},"token":"string"}';
        $string = '{"email":"' . Request('Email') . '","password":"' . Request('password') . '"}';
        $request->flash();

        $response = Http::withHeaders([
            'Ocp-Apim-Subscription-Key' => 'a9c9a5b87e2447dba2330ed7ce88efe3',
            'Content-Type' => 'application/json',
            /* 'dataType' => 'json'*/
        ])->withBody($string, 'application/json')
            ->post('https://vitoapi.azure-api.net/api/User/authenticate');
       // dd($response -> json()['token']);

        session(['token'=> $response->json()['token']]);


        if (count(($response->json())) > 2) {
            $id = $response->json()['userID'];
            $user = User::findOrFail($id);

            Auth::login($user);

            if (auth()->user()) {
                return redirect('home');
            }
        }

        session()->flash('error', 'De login gegevens zijn niet correct.');
        return back();
    }


    public function logout()
    {
        Auth::logout();

        return redirect('login');
    }
}

