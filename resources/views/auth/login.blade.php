@extends('layouts.app')

@section('content')
<div id="auth" class="container">

    <login-component csrf-token="{{ csrf_token() }}" />

</div>
@endsection
