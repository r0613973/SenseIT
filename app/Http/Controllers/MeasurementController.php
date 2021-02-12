<?php

namespace App\Http\Controllers;

use App\Models\BoxUser;
use App\Models\Measurement;
use App\Models\Sensor;
use App\Models\SensorBox;
use Facades\App\Helpers\Json;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class MeasurementController extends Controller
{
    public function temperatuur()
    {

        $boxen = $this->ophalendata(4);
        $result = compact('boxen');

        Json::dump($result);
        return view('data-schermen.temperatuur', $result);
    }

    public function bodemTemperatuur()
    {
        $boxen = $this->ophalendata(7);
        $result = compact('boxen');
        Json::dump($result);
        return view('data-schermen.bodemTemperatuur', $result);
    }

    public function luchtvochtigheid()
    {
        $boxen = $this->ophalendata(3);
        $result = compact('boxen');
        Json::dump($result);

        return view('data-schermen.luchtvochtigheid', $result);
    }

    public function bodemvochtigheid()
    {
        $boxen = $this->ophalendata(8);
        $result = compact('boxen');
        Json::dump($result);

        return view('data-schermen.bodemvochtigheid', $result);
    }

    public function zonlicht()
    {
        //TODO Juiste sensor toevoegen
        $boxen = $this->ophalendata(1);
        $result = compact('boxen');
        Json::dump($result);

        return view('data-schermen.zonlicht', $result);
    }

    public function luchtkwaliteit()
    {
        //TODO Juiste sensor toevoegen
        $boxen = $this->ophalendata(5);

        $result = compact('boxen');
        Json::dump($result);

        return view('data-schermen.luchtkwaliteit', $result);
    }

    public function sateliet()
    {
        $boxen = $this->ophalendata(5);

        $result = compact('boxen');
        Json::dump($result);

        return view('data-schermen.sateliet', $result);

    }

    public function overzicht()
    {
        $user = auth()->user();
        $userID = $user['UserID'];
        if ($user->UserTypeID == 1 || $user->UserTypeID == 2) {
            $boxen = BoxUser::orderby('BoxID')->distinct('BoxID')->with('Box')->get();
        } else {
            $boxen = BoxUser::where('BoxUser.UserID', '=', $userID)->orderby('BoxID')->with('Box')->get();
        }

        foreach ($boxen as $box) {
            $box['temperatuur'] = $this->ophalenLaatsteWaardePerSensor($box->BoxID, 4);
            $box['bodemtemperatuur'] = $this->ophalenLaatsteWaardePerSensor($box->BoxID, 7);
            $box['luchtvochtigheid'] = $this->ophalenLaatsteWaardePerSensor($box->BoxID, 3);
            $box['bodemvochtigheid'] = $this->ophalenLaatsteWaardePerSensor($box->BoxID, 8);
            $box['zonlicht'] = $this->ophalenLaatsteWaardePerSensor($box->BoxID, 1);
            $box['luchtkaliteit'] = $this->ophalenLaatsteWaardePerSensor($box->BoxID, 5);
        }

        $result = compact('boxen');
        Json::dump($result);

        return view('data-schermen.overzicht', $result);

    }

    public function ophalenLaatsteWaardePerSensor($BoxID, $SensorTypeID)
    {
        return Measurement::orderBy('TimeStamp', 'desc')
            ->join('Sensor', 'Measurement.SensorID', '=', "Sensor.SensorID")
            ->join('SensorType', 'Sensor.SensorTypeID', '=', 'SensorType.SensorTypeID')
            ->where('Measurement.BoxID', 'like', $BoxID)
            ->where('SensorType.SensorTypeID', 'like', $SensorTypeID)->first();

    }

    public function ophalendata($SensorTypeID)
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


            $sensorIDs = SensorBox::join('Sensor', 'SensorBox.SensorID', '=', "Sensor.SensorID")
                ->join('SensorType', 'Sensor.SensorTypeID', '=', 'SensorType.SensorTypeID')
                ->where('SensorBox.BoxID', '=', $box->BoxID)
                ->where('SensorType.SensorTypeID', '=', $SensorTypeID)
                ->pluck("Sensor.SensorID");

            /*$result = compact('sensorIDs');
            Json::dump($result);*/

            /*foreach ($sensorIDs as $sensorID ){
                $box->= Measurement::orderBy('TimeStamp', 'desc')
                    ->join('Sensor', 'Measurement.SensorID', '=', "Sensor.SensorID")
                    ->join('SensorType', 'Sensor.SensorTypeID', '=', 'SensorType.SensorTypeID')
                    ->where('Measurement.BoxID', 'like', $box->BoxID)
                    ->where('Sensor.SensorID', 'like', $sensorID)
                   ->paginate(3)->onEachSide(2) ;;
            }*/

            $box['sensoren2'] = Measurement::orderBy('TimeStamp', 'desc')
                ->join('Sensor', 'Measurement.SensorID', '=', "Sensor.SensorID")
                ->join('SensorType', 'Sensor.SensorTypeID', '=', 'SensorType.SensorTypeID')
                ->where('Measurement.BoxID', 'like', $box->BoxID)
                ->where('SensorType.SensorTypeID', 'like', $SensorTypeID)
                ->paginate(10);


            $box['sensoren'] = $box['sensoren2']->groupBy('SensorID');


            $unit = '%';
            $vorigewaarde = 0 ; /*$box['sensoren']->first()->first();*/
            foreach ($box['sensoren'] as $sensor) {
                  $sensor->first()->sensor = Sensor::findOrFail( $sensor->first()->SensorID);
                foreach ($sensor as $measurement) {
                    if ($measurement->Value == $vorigewaarde) {
                        $measurement->Arrow = '<i class="fas fa-arrow-circle-right"></i>';
                    } else if ($measurement->Value > $vorigewaarde) {
                        $measurement->Arrow = '<i class="fas fa-arrow-circle-up"></i>';
                    } else {
                        $measurement->Arrow = '<i class="fas fa-arrow-circle-down"></i>';
                    }
                    $measurement->TimeStamp = Str::substr($measurement->TimeStamp, 0, 19);
                    $unit = $measurement->Unit;
                    $vorigewaarde = $measurement->Value;
                }
            }
            $box->Unit = $unit;

        }


        return $boxen;
    }

    public function tokenQry()
    {
        $token = session('token');

        return response()->json(
            [
                'token' => $token
            ]
        );
    }

    public function maprequeset($boxid)
    {
        $url = "https://vitotestapi20210125111558.azurewebsites.net/api/SigFox/DB/" . $boxid;
        $response = Http::withHeaders([
            'Ocp-Apim-Subscription-Key' => 'a9c9a5b87e2447dba2330ed7ce88efe3'
        ])
            ->post($url);
        return $response;
    }


}
