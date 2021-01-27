<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SensorBox extends Model
{
    public function box()
    {
        return $this->belongsTo('App\Box')->withDefault();   // an order belongs to a user
    }

    public function sensor()
    {
        return $this->belongsTo('App\Sensor')->withDefault();   // an order belongs to a user
    }

    public function measurements()
    {
        return $this->hasMany('App\Measurement');
    }

}
