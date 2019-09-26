@extends('layouts.app')

@section('content')
    <div id="auth" class="container">
{{--        @csrf--}}
{{--        <passport-clients-component></passport-clients-component>--}}
{{--        <passport-authorized-clients-component></passport-authorized-clients-component>--}}
{{--        <passport-personal-access-tokens-component></passport-personal-access-tokens-component>--}}

        <register-component csrf-token="{{ csrf_token() }}" />
    </div>
@endsection
