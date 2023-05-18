@extends('app/app')
@section('title', 'Dashbord | Platform')
@section('main')
    <section class="company">

        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item active" aria-current="page"> <a href="{{ route('employees') }}"> <i class="fas fa-tachometer"></i> Dashbord</a></li>
                      <li class="breadcrumb-item active" aria-current="page"><a><i class="fas fa-user"></i> Employees Access</a></li>
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
                  <div class="card-body">
                    <div class="card-body">

                        <div class="row">
                            <div class="col-sm-12">
                                <table class="table">
                                    <thead>
                                      <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Access Time</th>
                                        <th scope="col">Exit Time</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($employees_all as $item)
                                            <tr>
                                                <th scope="row">{{ $item->employee_id }}</th>
                                                <td><i class="fas fa-arrow-circle-right text-success"></i> {{ $item->created_at->diffForHumans() }}</td>
                                                <td><i class="fas fa-arrow-circle-left text-danger"></i> {{ $item->updated_at->diffForHumans() }}</td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card text-center p-5">
                    {!! $emp_cart->container() !!}
                    {!! $emp_cart->script() !!}
                </div>
            </div>
        </div>
    </section>
@endsection