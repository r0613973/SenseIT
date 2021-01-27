<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sensor extends Model
{
    public function sensortype()
    {
        return $this->belongsTo('App\SensorType')->withDefault();   // an order belongs to a user
    }



}
