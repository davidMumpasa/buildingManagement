@extends('app/app')
@section('title', 'Login | Platform')
@section('main')
    <section class="login">
        <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-body">
                    <div class="text-center fa-5x">
                        <i class="fas fa-shield"></i>
                        <h2 class="pb-4">Admin Dashbord</h2>
                    </div>
                    <form method="POST" action="{{ route('adminLogin') }}">
                        @csrf
                        <input placeholder="Email" type="email" name="email" class="form-control" required>
                        <input placeholder="Password" type="password" name="password" class="form-control" required>
                        <button class="btn btn-dark" name="btnSubmit" type="submit">Login</button>
                    </form>
                    {{-- <img src="{{ asset('lables/Chris/1.png')}}" /> --}}
                </div>
              </div>
            </div>
        </div>
    </section>
@endsection