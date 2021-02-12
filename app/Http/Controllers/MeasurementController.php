<?php

namespace App\Http\Controllers;

use App\Models\BoxUser;
use App\Models\Measurement;
use Facades\App\Helpers\Json;
use http\Message\Body;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class MeasurementController extends Controller
{
    public function temperatuur()
    {

        $boxen = $this->ophalendata(5, 4);
        $result = compact('boxen');

        Json::dump($result);


        return view('data-schermen.temperatuur', $result);
    }
    public function bodemTemperatuur()
    {
        $boxen = $this->ophalendata(5, 7);
        $result = compact('boxen');
        Json::dump($result);
        return view('data-schermen.bodemTemperatuur', $result);
    }




    public function temperatuurmetingen()
    {
        $boxen = $this->ophalendata(5, 4);
        $result = compact('boxen');
        Json::dump($result);
        return $result;
    }

    public function luchtvochtigheid()
    {
        $boxen = $this->ophalendata(5, 3);
        $result = compact('boxen');
        Json::dump($result);

        return view('data-schermen.luchtvochtigheid', $result);
    }

    public function bodemvochtigheid()
    {
        $boxen = $this->ophalendata(5, 8);
        $result = compact('boxen');
        Json::dump($result);

        return view('data-schermen.bodemvochtigheid', $result);
    }

    public function zonlicht()
    {
        //TODO Juiste sensor toevoegen
        $boxen = $this->ophalendata(5, 1);
        $result = compact('boxen');
        Json::dump($result);

        return view('data-schermen.zonlicht', $result);
    }

    public function luchtkwaliteit()
    {
        //TODO Juiste sensor toevoegen
        $boxen = $this->ophalendata(5, 5);

        $result = compact('boxen' );
        Json::dump($result);

        return view('data-schermen.luchtkwaliteit', $result );
    }

    public function ophalenBoxen()
    {

    }


    public function ophalendata($boxID, $SensorTypeID)
    {
        $user = auth()->user();
        $userID = $user['UserID'];
        if ($user->UserTypeID == 1 || $user->UserTypeID == 2) {
            $boxen = BoxUser::orderby('BoxID')->distinct('BoxID')->with('Box')->get();
        } else {
            $boxen = BoxUser::where('BoxUser.UserID', '=', $userID)->orderby('BoxID')->with('Box')->get();
        }

        foreach ($boxen as $box) {
            $box->SensorTypeID = $SensorTypeID;


            $box['measurements'] = Measurement::orderBy('TimeStamp', 'desc')
                ->join('Sensor', 'Measurement.SensorID', '=', "Sensor.SensorID")
                ->join('SensorType', 'Sensor.SensorTypeID', '=', 'SensorType.SensorTypeID')
                ->where('Measurement.BoxID', 'like', $box->BoxID)
                ->where('SensorType.SensorTypeID', 'like', $SensorTypeID)
                ->paginate(1000)->onEachSide(2);

            $unit= '%';
            $vorigewaarde = 0;
            foreach ($box['measurements'] as $measurement) {
                if ($measurement->Value >= $vorigewaarde) {
                    $measurement->Arrow = '<i class="fas fa-arrow-circle-down"></i>';
                } else {
                    $measurement->Arrow = '<i class="fas fa-arrow-circle-up"></i>';
                }
                $measurement->TimeStamp =Str::substr($measurement->TimeStamp, 0, 19);
                $unit =$measurement->Unit;
                $vorigewaarde = $measurement->Value;
            }
            $box->Unit = $unit;

        }


        return $boxen;
    }
    public function tokenQry()
    {
        $token = session('token');

        return response() ->json(
            [
                'token' => $token
            ]
        ) ;
    }
    public function maprequeset($boxid)
    {
            $url = "https://vitotestapi20210125111558.azurewebsites.net/api/SigFox/DB/".$boxid;
        $response = Http::withHeaders([
            'Ocp-Apim-Subscription-Key' => 'a9c9a5b87e2447dba2330ed7ce88efe3'
        ])
            ->post($url);
        return $response;
    }
    public function sateliet()
    {
        $boxen = $this->ophalendata(5, 5);

        $result = compact('boxen' );
        Json::dump($result);

        return view('data-schermen.sateliet', $result );

    }
    public function Datatablestest()
    {    $boxen = $this->ophalendata(5, 5);

        $result = compact('boxen' );

        return $result;
    }


}
