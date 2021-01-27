<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Measurement extends Model
{
    public function sensorbox()
    {
        return $this->belongsTo('App\SensorBox')->withDefault();
    }
}
