<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class UserType
 * 
 * @property int $UserTypeID
 * @property character varying $UserTypeName
 * 
 * @property Collection|User[] $users
 *
 * @package App\Models
 */
class UserType extends Model
{
	protected $table = 'UserType';
	protected $primaryKey = 'UserTypeID';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'UserTypeID' => 'int',
		'UserTypeName' => 'character varying'
	];

	protected $fillable = [
		'UserTypeName'
	];

	public function users()
	{
		return $this->hasMany(User::class, 'UserTypeID');
	}
}
