<?php /** @noinspection Annotator */

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Location
 *
 * @property int $LocationID
 * @property int $BoxUserID
 * @property float $Longitude
 * @property float $Latitude
 * @property timestamp without time zone|null $StartDate
 * @property timestamp without time zone|null $EndDate
 *
 * @property BoxUser $box_user
 *
 * @package App\Models
 */
class Location extends Model
{
	protected $table = 'Location';
	protected $primaryKey = 'LocationID';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'LocationID' => 'int',
		'BoxUserID' => 'int',
		'Longitude' => 'float',
		'Latitude' => 'float',
		'StartDate' => 'timestamp without time zone',
		'EndDate' => 'timestamp without time zone'
	];

	protected $fillable = [
		'BoxUserID',
		'Longitude',
		'Latitude',
		'StartDate',
		'EndDate'
	];

	public function box_user()
	{
		return $this->belongsTo(BoxUser::class, 'BoxUserID');
	}
}
