<?php /** @noinspection Annotator */
/** @noinspection ALL */

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Box
 *
 * @property int $BoxID
 * @property character varying $MacAddress
 * @property character varying|null $ConfiguratieString
 * @property character varying $Name
 * @property character varying|null $Comment
 * @property bool|null $Active
 *
 * @property Collection|User[] $users
 * @property Collection|Sensor[] $sensors
 * @property Collection|Monitoring[] $monitorings
 *
 * @package App\Models
 */
class Box extends Model
{
	protected $table = 'Box';
	protected $primaryKey = 'BoxID';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'BoxID' => 'int',
		'MacAddress' => 'character varying',
		'ConfiguratieString' => 'character varying',
		'Name' => 'character varying',
		'Comment' => 'character varying',
		'Active' => 'bool'
	];

	protected $fillable = [
		'MacAddress',
		'ConfiguratieString',
		'Name',
		'Comment',
		'Active'
	];

	public function users()
	{
		return $this->belongsToMany(User::class, 'BoxUser', 'BoxID', 'UserID')
					->withPivot('BoxUserID', 'StartDate', 'EndDate');
	}

	public function sensors()
	{
		return $this->belongsToMany(Sensor::class, 'SensorBox', 'BoxID', 'SensorID');
	}

	public function monitorings()
	{
		return $this->hasMany(Monitoring::class, 'BoxID');
	}
}
