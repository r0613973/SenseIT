<?php

namespace App\Http\Controllers;

use App\Models\Measurement;
use Facades\App\Helpers\Json;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MeasurementController extends Controller
{
    public function temperatuur()
    {
        $measurements = $this->ophalendata(5, 18);


        $result = compact('measurements' );
        Json::dump($result);


        return view('data-schermen.temperatuur', $result);
    }

    public function luchtvochtigheid()
    {
        $measurements = $this->ophalendata(5, 15);
        $result = compact('measurements');
        Json::dump($result);

        return view('data-schermen.luchtvochtigheid', $result);
    }

    public function zonlicht()
    {
        //TODO Juiste sensor toevoegen
        $measurements = $this->ophalendata(5, -1);
        $result = compact('measurements');
        Json::dump($result);

        return view('data-schermen.zonlicht', $result);
    }

    public function luchtkwaliteit()
    {
        //TODO Juiste sensor toevoegen
        $measurements = $this->ophalendata(5, 14);
        $result = compact('measurements');
        Json::dump($result);

        return view('data-schermen.luchtkwaliteit', $result);
    }


    public function ophalendata($boxID, $SensorID)
    {
        $measurements = Measurement::orderBy('TimeStamp', 'desc')
            ->join('Sensor', 'Measurement.SensorID', '=', "Sensor.SensorID")
            ->join('SensorType', 'Sensor.SensorTypeID', '=', 'SensorType.SensorTypeID')
            ->where('Measurement.BoxID', 'like', $boxID)
            ->where('Measurement.SensorID', 'like', $SensorID)
            ->paginate(10);
        $vorigewaarde = 0;
        foreach ($measurements as $measurement) {
            if ($measurement->Value >= $vorigewaarde) {
                $measurement->Arrow = '<i class="fas fa-arrow-circle-down"></i>';
            } else {
                $measurement->Arrow = '<i class="fas fa-arrow-circle-up"></i>';
            }
            $vorigewaarde = $measurement->Value;
        }

        return $measurements;
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


}
