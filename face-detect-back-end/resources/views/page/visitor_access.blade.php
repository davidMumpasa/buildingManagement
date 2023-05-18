@extends('app/app')
@section('title', 'Dashbord | Platform')
@section('main')
    <section class="company">

        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item active" aria-current="page"><i class="fas fa-tachometer"></i> Dashbord</li>
                      <li class="breadcrumb-item active" aria-current="page"><a href="{{ route('employees') }}"><i class="fas fa-user"></i> Visitor Access</a></li>
                    </ol>
                </nav>            
            </div>
            <div class="col">
                <span>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-filter"></i> Dropdown button
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                          <li><a class="dropdown-item" href="#">-----------</a></li>
                          <li><a class="dropdown-item" href="#">-----------</a></li>
                          <li><a class="dropdown-item" href="#">-----------</a></li>
                        </ul>
                      </div>
                </span>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-8">
                <div class="card">

                    aa
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card text-center p-5">
                    {!! $visit_cart->container() !!}
                    {!! $visit_cart->script() !!}
                </div>
            </div>
        </div>
    </section>
@endsection