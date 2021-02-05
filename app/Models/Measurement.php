<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/*
 * Class Measurement
 *
 * @property int $MeasurementID
 * @property int $BoxID
 * @property int $SensorID
 * @property character varying|null $Value
 * @property timestamp without time zone $TimeStamp
 *
 * @property SensorBox $sensor_box
 *
 * @package App\Models
 */
class Measurement extends Model
{
	protected $table = 'Measurement';
	protected $primaryKey = 'MeasurementID';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'MeasurementID' => 'int',
		'BoxID' => 'int',
		'SensorID' => 'int',
		'Value' => 'character varying',
		'TimeStamp' => 'timestamp without time zone'
	];

	protected $fillable = [
		'BoxID',
		'SensorID',
		'Value',
		'TimeStamp'
	];

	public function sensor_box()
	{
		return $this->belongsTo(SensorBox::class, 'BoxID');
					/*->where('SensorBox.BoxID', '=', 'Measurement.BoxID')
					->where('SensorBox.SensorID', '=', 'Measurement.BoxID')
					->where('SensorBox.BoxID', '=', 'Measurement.SensorID')
					->where('SensorBox.SensorID', '=', 'Measurement.SensorID');*/
	}
}
