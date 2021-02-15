<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Facades\App\Helpers\Json;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth()->user();
        $userID = $user['UserID'];

        $user = User::findOrFail($userID);
        $result = compact('user');
        Json::dump($result);
        return view('account', $result);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
       /* $this->validate($request, [
            'email' => ['required', 'string', 'email', 'max:255'],
            'voornaam' => 'required',
            'achternaam' => 'required',
            'postcode' => 'int',
        ]);*/
        $user = User::findOrFail($id);

        $user->Email = $request->email;
        $user->FirstName = $request->voornaam;
        $user->LastName = $request->achternaam;
        $user->Address = $request->adres;
        $user->PostalCode = $request->postcode;
        $user->City = $request->woonplaats;
        $user->save();




        return response()->json([
            'type' => 'success',
            'text' => "Je account is aangepast"
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
