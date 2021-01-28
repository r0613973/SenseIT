<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Sensor
 * 
 * @property int $SensorID
 * @property character varying $Name
 * @property int $SensorTypeID
 * 
 * @property SensorType $sensor_type
 * @property Collection|Box[] $boxes
 *
 * @package App\Models
 */
class Sensor extends Model
{
	protected $table = 'Sensor';
	protected $primaryKey = 'SensorID';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'SensorID' => 'int',
		'Name' => 'character varying',
		'SensorTypeID' => 'int'
	];

	protected $fillable = [
		'Name',
		'SensorTypeID'
	];

	public function sensor_type()
	{
		return $this->belongsTo(SensorType::class, 'SensorTypeID');
	}

	public function boxes()
	{
		return $this->belongsToMany(Box::class, 'SensorBox', 'SensorID', 'BoxID');
	}
}
