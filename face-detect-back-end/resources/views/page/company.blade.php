@extends('app/app')
@section('title', 'Dashbord | Platform')
@section('main')
    <section class="company">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page"><i class="fas fa-tachometer"></i> Dashbord</li>
          <li class="breadcrumb-item active" aria-current="page"><a href=""><i class="fas fa-building"></i> Companys</a></li>
        </ol>
      </nav>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Company</th>
                            <th scope="col">Manager</th>
                            <th scope="col">Office number</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>Thornton</td>
                            <td><a class="btn btn-secondary" href="">Update</a></td>
                            <td><a class="btn btn-danger" href="">Delete</a></td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
                </div>
            </div>
        </div>
    </section>
@endsection