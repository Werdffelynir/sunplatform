@extends('layouts.app')

@section('content')
    <app-component
        csrf-token="{{ csrf_token() }}"
        user-data=" {{ json_encode($user) }}"
    />
@endsection
