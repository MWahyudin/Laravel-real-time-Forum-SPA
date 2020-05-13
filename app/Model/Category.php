<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use illuminate\Support\Str;

class Category extends Model
{
    protected $fillable = ['name', 'slug'];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($category) {
            $category->slug = str::slug($category->name);
        });

    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function getPathAttribute()
    {
        return asset("api/question/$this->slug");
    }

}