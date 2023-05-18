@if (isset(session('admin')->admin_name))
  <nav class="navbar navbar-expand-lg navbar-dark p-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="{{ route('dashbord') }}">Access <i class="fas fa-shield fa-1x"></i> Control</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" @if (isset($nav_dash) == true)
            style="color: red !important;"
            @endif  aria-current="page" href="{{ route('dashbord') }}"><i class="fas fa-tachometer"></i> Dashbord</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ route('company') }}"><i class="fas fa-building"></i> Companys</a>
          </li>
          <li class="nav-item">
            @if (isset($nav_emp))
              <a class="nav-link" style="color: red !important;"><i class="fas fa-users"></i> Employees</a>
            @else
              <a class="nav-link" href="{{ route('employees') }}"><i class="fas fa-users"></i> Employees</a>
            @endif
          </li>
          <li class="nav-item">
            @if (isset($nav_visitor))
              <a class="nav-link" style="color: red !important;" href="{{ route('visitor') }}"><i class="fas fa-user"></i> Visitors</a>
            @else
              <a class="nav-link" href="{{ route('visitor') }}"><i class="fas fa-user"></i> Visitors</a>
            @endif
          </li>
          <li class="nav-item">
            <div class="dropdown">
              @if (isset($nav_emp_access))
                <a class="nav-link dropdown-toggle" style="color: red !important;" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fas fa-lock"></i> Access Building
                </a>
              @else
                <a class="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fas fa-lock"></i> Access Building
                </a>
              @endif

              <ul class="dropdown-menu p-4" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="{{ route('emp_access') }}"><i class="fas fa-users"></i> Employee Access </a></li>
                <li><a class="dropdown-item" href="{{ route('visit_access') }}"><i class="fas fa-user"></i> Visitors Access</a></li>
              </ul>
            </div>
          </li>
        </ul>
        <span class="navbar-text">
          <a class="nav_links" href=""><i class="fas fa-user"></i>{{ substr(session('admin')->admin_name, 0, 1) . ' ' . session('admin')->admin_surname }}</a>
          <a class="nav_links p-2 bg-danger" style="border-radius: 100px; width: 100px !important;" href="{{ route('logout') }}"><i class="fas fa-sign-in"></i> Log-Out</a>
        </span>
      </div>
    </div>
  </nav>
  <div class="sub_line_d">
    
  </div>
@endif