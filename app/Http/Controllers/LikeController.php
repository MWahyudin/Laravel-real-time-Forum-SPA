<?php

namespace App\Http\Controllers;

use App\Model\Like;
use App\Model\Question;
use App\Model\Reply;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LikeController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('JWT');
    }
    public function like(Reply $reply)
    {
        $reply->like()->create([
        'user_id' => '4'
        ]);

        return response('berhasil like', Response::HTTP_OK);
    }
    
    public function unlike (Reply $reply)
    {
        $reply->like()->where('user_id', '4')->first()->delete();
        return response('berhasil Unlike', Response::HTTP_OK);
    }
}