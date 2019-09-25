@extends('layouts.app')

@section('content')
    <app-component />
    
    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
        @csrf
    </form>
@endsection
