@extends('app/app')
@section('title', 'Dashbord | Platform')
@section('main')
    <section class="dasbord">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page"><i class="fas fa-tachometer"></i> Dashbord</li>
        </ol>
      </nav>
        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                  {!! $chart->container() !!}
                </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="text-center">
                    <br>
                    <br>
                    <i class="fas fa-users fa-5x"></i>
                    <br>
                    <br>
                    <br>
                    <ol class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">Employees</div>
                            55
                          </div>
                          <span class="badge bg-dark rounded-pill">building access</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">Visitors</div>
                            10
                          </div>
                          <span class="badge bg-dark rounded-pill">building access</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                              <div class="fw-bold">Others</div>
                              0
                            </div>
                            <span class="badge bg-dark rounded-pill">building access</span>
                        </li>
                    </ol>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                  <div class="text-center">
                    <br>
                    <br>
                    <i class="fas fa-shield fa-5x"></i>
                    <br>
                    <br>
                    <br>
                    <ol class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">Login</div>
                            Root
                          </div>
                          <span class="badge bg-dark rounded-pill">access</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">Admin</div>
                            Admin
                          </div>
                          <span class="badge bg-dark rounded-pill">name</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                              <div class="fw-bold">Admin</div>
                              Mohale
                            </div>
                            <span class="badge bg-dark rounded-pill">surname</span>
                        </li>
                      </ol>
                  </div>
                </div>
            </div>
        </div>
    </section>
    {!! $chart->script() !!}
@endsection