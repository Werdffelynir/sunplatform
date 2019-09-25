@extends('layouts.app')

@section('content')
<div id="login" class="container">

    <login-component csrf-token="{{ csrf_token() }}" />

</div>
@endsection
