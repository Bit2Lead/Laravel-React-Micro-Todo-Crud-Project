<?php

namespace App\Http\Controllers;

use Request;
use DB;

class NotesController extends Controller
{
    public function insertdata()
    {
        $data = Request::all();
        DB::table('notes')->insert($data);
        return response()->json($data);
    }

    public function fetchdata()
    {
        $data = DB::table('notes')->get();
        return response()->json($data);
    }

    public function editdata($id)
    {
        $data = DB::table('notes')->where('id', $id)->first();
        return response()->json($data);   
    }

    public function updatedata($id)
    {
        $request = Request::all();
        DB::table('notes')->where('id', $id)->update($request);
        return response()->json("updated!");
    }

    public function deletedata($id)
    {
        DB::table('notes')->where('id', $id)->delete();
        return response()->json("deleted!");
    }
}
