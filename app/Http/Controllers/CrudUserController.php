<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserType;
use Facades\App\Helpers\Json;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Log;

class CrudUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('data-schermen.user_overview');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $userTypes = UserType::all();
        $result = compact('userTypes');
        Json::dump($result);
        return view('data-schermen.create_new_user', $result);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'voornaam' => 'required',
            'achternaam' => 'required',
            'wachtwoord' => 'required',
            'usertype' => 'required',
            'email' => 'required',
            'adres' => 'required',
            'postcode' => 'required',
            'stad' => 'required'
        ]);


        $user = new User();
        $user->firstName = $request->voornaam;
        $user->lastName = $request->achternaam;
        $user->password = $request->wachtwoord;
        $user->userTypeID = $request->usertype;
        $user->email = $request->email;
        $user->address = $request->adres;
        $user->postalCode = $request->postcode;
        $user->city = $request->stad;

        Log::error($user);

        $response = Http::withHeaders([
            'Ocp-Apim-Subscription-Key' => 'a9c9a5b87e2447dba2330ed7ce88efe3'
        ])
            ->post('https://vitoapi.azure-api.net/api/User', [
                $user
            ]);


        return response()->json([
            'type' => 'success',
            'text' => "De user <b>$user->FirstName $user->LastName </b> is toegevoegd."
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::where('UserID', 'like', $id)->first();
        $userTypes = UserType::all();
        $result = compact('user', 'userTypes');

        return view('data-schermen.update_user', $result);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        $this->validate($request, [
            'voornaam' => 'required',
            'achternaam' => 'required',
            'email' => 'required',
            'adres' => 'required',
            'postcode' => 'required',
            'stad' => 'required',
            'usertype' => 'required'
        ]);


        $user->FirstName = $request->voornaam;
        $user->LastName = $request->achternaam;
        $user->Email = $request->email;
        $user->Address = $request->adres;
        $user->PostalCode = $request->postcode;
        $user->City = $request->stad;
        $user->UserTypeID = $request->usertype;
        $user->save();

        return response()->json([
            'type' => 'success',
            'text' => "De box <b>$user->LastName $user->FirstName</b> is geüpdatet."
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return response()->json([
            'type' => 'success',
            'text' => "De user <b$user->FirstName $user->LastName</b> is verwijderd.",
        ]);
    }

    public function qryUsers()
    {
        $users = User::orderBy('UserTypeID', 'DESC')
            ->get();
        return $users;
    }
}
