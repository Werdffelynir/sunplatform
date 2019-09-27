@extends('layouts.app')

@section('content')

    @if($component)
        <app-component component="{{$component}}" csrf="{{csrf_token()}}"/>
    @endif

@endsection
