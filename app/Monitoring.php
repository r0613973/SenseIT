<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Monitoring extends Model
{
    public function box()
    {
        return $this->belongsTo('App\Box')->withDefault();   // an order belongs to a user
    }

}
