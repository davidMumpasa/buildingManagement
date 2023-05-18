@extends('app/app')
@section('title', 'Dashbord | Platform')
@section('main')
    <section class="company">

        <div class="row">
            <div class="col-8">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item active" aria-current="page"><a href="{{ route('dashbord') }}"><i class="fas fa-tachometer"></i> Dashbord</a></li>
                      <li class="breadcrumb-item active" aria-current="page"><i class="fas fa-users"></i> Visitors</li>
                    </ol>
                </nav>            
            </div>
            <div class="col-4">

                <div class="row">
                    <div class="col">
                        <span>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-cloud-download"></i> Download Format
                                </button>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                  <li><a class="dropdown-item" href="#"><i class="fas fa-file-excel"></i> Excel</a></li>
                                </ul>
                              </div>
                        </span>
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
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Cell No</th>
                            <th scope="col">Address </th>
                            <th scope="col">Postal </th>
                            <th scope="col">Location </th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                            @foreach ($visitor as $item)
                                <tr>
                                    <th scope="row">{{ $item->visitor_id }}</th>
                                    <td>{{ $item->visitor_name }}</td>
                                    <td>{{ $item->visitor_surname }}</td>
                                    <td>{{ $item->visitor_email }}</td>
                                    <td>{{ $item->visitor_cell }}</td>
                                    <td>{{ $item->visitor_address }}</td>
                                    <td>{{ $item->visitor_postal_code }}</td>
                                    <td> 
                                        @if ($item->visitor_access == 'Active')
                                            <i class="fas fa-check-circle text-success"></i> {{ $item->visitor_access }}
                                        @else
                                            <i class="fas fa-exclamation-circle"></i> {{ $item->visitor_access }}
                                        @endif
                                    </td>
                                    <td><a class="btn btn-secondary" href="{{ route('visit',['id'=>$item->visitor_id]) }}"><i class="fas fa-user"></i> Update</a></td>
                                    <td><a class="btn btn-danger" href="{{ route('delete_emp',['emp_id'=>$item->visitor_id]) }}"><i class="fas fa-trash"></i> Delete</a></td>
                                </tr>
                            @endforeach
                        </tbody>
                      </table>
                  </div>
                </div>
            </div>
        </div>
    </section>
@endsection