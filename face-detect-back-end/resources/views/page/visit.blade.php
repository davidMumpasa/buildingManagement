@extends('app/app')
@section('title', 'Dashbord | Platform')
@section('main')
    <section class="company">

        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item active" aria-current="page"><i class="fas fa-tachometer"></i> Dashbord</li>
                      <li class="breadcrumb-item active" aria-current="page"><a href="{{ route('visitor') }}"><i class="fas fa-user"></i> Visitor</a></li>
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
                    <form class="emp_form" action="{{ route('update_emp',['emp_id'=>$data->visitor_id]) }}" method="POST">
                        @csrf
                        <div class="row">
                            <div class="col">
                               <input class="form-control" value="{{ $data->visitor_name}}" placeholder="Name" name="name" type="text">
                               @error('name')
                                    <p class="text-danger"><i class="fas fa-times"></i> {{ $message }} </p>
                               @enderror
                            </div>
                            <div class="col">   
                                <input class="form-control" value="{{ $data->visitor_surname}}" placeholder="Surname" name="surname" type="text">
                                @error('surname')
                                    <p class="text-danger"><i class="fas fa-times"></i> {{ $message }} </p>
                                @enderror 
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <input class="form-control" value="{{ $data->visitor_email}}" placeholder="Email" name="email" type="text">
                                @error('email')
                                    <p class="text-danger"><i class="fas fa-times"></i> {{ $message }} </p>
                                @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-7">
                                <input class="form-control" value="{{ $data->visitor_id_number}}" placeholder="ID Number" name="id" type="text">
                                @error('id')
                                    <p class="text-danger"><i class="fas fa-times"></i> {{ $message }} </p>
                                @enderror
                            </div>
                            <div class="col">
                                <input class="form-control" value="{{ $data->visitor_cell}}" placeholder="Cell No" name="cell" type="text">
                                @error('cell')
                                    <p class="text-danger"><i class="fas fa-times"></i> {{ $message }} </p>
                                @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <input class="form-control" value="{{ $data->visitor_address}}" placeholder="Name" name="address" type="text">
                                @error('address')
                                    <p class="text-danger"><i class="fas fa-times"></i> {{ $message }} </p>
                                @enderror
                            </div>
                            <div class="col">
                                <input class="form-control" value="{{ $data->visitor_postal_code}}" placeholder="Surname" name="code" type="text">
                                @error('code')
                                    <p class="text-danger"><i class="fas fa-times"></i> {{ $message }} </p>
                                @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <select class="form-control form-select" aria-label="Default select example" name="emp_access" required>
                                    <option selected>Access | {{  $data->visitor_access }}</option>

                                    @if ($data->visitor_access != 'Active')
                                        <option value="Active">Access | Active</option>
                                    @else
                                        <option value="Inactive">Access | Inactive</option>
                                    @endif
                                  
                                  </select>
                            </div>
                        </div>
                        <button class="btn-dark w-25 p-2 mt-2" style="border-radius: 20px; !important;"  type="submit">Upate Profile</button>
                    </form>
                  </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card text-center p-5">
                  <div class="card-body">
                   
                    @if ($data->visitor_access == 'Active')
                        <i class="fas fa-user fa-5x text-success"></i>
                        <h5 class="p-3">User Profile | Active</h5>
                    @else
                        <i class="fas fa-user fa-5x"></i>
                        <h5 class="p-3">User Profile | Inactive</h5>
                    @endif

                  </div>
                </div>
            </div>
        </div>
    </section>
@endsection