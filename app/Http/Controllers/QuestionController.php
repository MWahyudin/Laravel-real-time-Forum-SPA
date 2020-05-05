<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestionResource;
use App\Model\Question;
use App\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;

class QuestionController extends Controller
{
    public function index()
    {
     return QuestionResource::collection(Question::latest()->get());
    }

    
    public function store(Request $request)
    {
        // auth()->user()->question()->create($request->all());
     $data = Question::create($request->all());
        return response("berhasil dibuat", response::HTTP_CREATED);
    }

   
    public function show(Question $question)
    {
        return new QuestionResource($question);
    }

    public function edit(Question $question)
    {
        return New QuestionResource($question);
    }


    // public function update(Request $request, Question $question)
    // {
    //     $question->update($request->all());
    //     return response('Updated', Response::HTTP_ACCEPTED);
    // }
  
    public function update(Question $question,Request $request)
    {
       
       $question->update($request->all());
       return response("berhasil diupdate", response::HTTP_CREATED);
     
     
    }
    public function destroy(Question $question)
    {
        $question->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}