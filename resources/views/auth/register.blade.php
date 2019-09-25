@extends('layouts.app')

@section('content')
    <div id="auth" class="container">

        <register-component csrf-token="{{ csrf_token() }}" />

    </div>
@endsection
