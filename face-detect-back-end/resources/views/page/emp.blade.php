@extends('app/app')
@section('title', 'Dashbord | Platform')
@section('main')
    <section class="company">
        <Script>
            var img_data = 'test';
        </Script>
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item active" aria-current="page"><i class="fas fa-tachometer"></i> Dashbord</li>
                      <li class="breadcrumb-item active" aria-current="page"><a href="{{ route('employees') }}"><i class="fas fa-user"></i> Employees</a></li>
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
                        <div class="row">
                            <div class="col-7">
                                <form class="emp_form" action="{{ route('update_emp',['emp_id'=>$data->employee_id]) }}" method="POST">
                                    @csrf
                                    <div class="row">
                                        <div class="col">
                                           <input class="form-control" value="{{ $data->employee_name}}" placeholder="Name" name="name" type="text">
                                           @error('name')
                                                <p class="text-danger"><i class="fas fa-times"></i> {{ $message }} </p>
                                           @enderror
                                        </div>
                                        <div class="col">   
                                            <input class="form-control" value="{{ $data->employee_surname}}" placeholder="Surname" name="surname" type="text">
                                            @error('surname')
                                                <p class="text-danger"><i class="fas fa-times"></i> {{ $message }} </p>
                                            @enderror 
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-8">
                                            <input class="form-control" value="{{ $data->employee_email}}" placeholder="Email" name="email" type="text">
                                            @error('email')
                                                <p class="text-danger"><i class="fas fa-times"></i> {{ $message }} </p>
                                            @enderror
                                        </div>
                                        <div class="col">
                                            <input class="form-control" value="{{ $data->employee_password}}" placeholder="Password" name="password" type="password">
                                            @error('password')
                                                <p class="text-danger"><i class="fas fa-times"></i> {{ $message }} </p>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-7">
                                            <input class="form-control" value="{{ $data->employee_id_number}}" placeholder="ID Number" name="id" type="text">
                                            @error('id')
                                                <p class="text-danger"><i class="fas fa-times"></i> {{ $message }} </p>
                                            @enderror
                                        </div>
                                        <div class="col">
                                            <input class="form-control" value="{{ $data->employee_cell}}" placeholder="Cell No" name="cell" type="text">
                                            @error('cell')
                                                <p class="text-danger"><i class="fas fa-times"></i> {{ $message }} </p>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-8">
                                            <input class="form-control" value="{{ $data->employee_address}}" placeholder="Name" name="address" type="text">
                                            @error('address')
                                                <p class="text-danger"><i class="fas fa-times"></i> {{ $message }} </p>
                                            @enderror
                                        </div>
                                        <div class="col">
                                            <input class="form-control" value="{{ $data->employee_postal_code}}" placeholder="Surname" name="code" type="text">
                                            @error('code')
                                                <p class="text-danger"><i class="fas fa-times"></i> {{ $message }} </p>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <select class="form-control form-select" aria-label="Default select example" name="emp_access" required>
                                                <option selected>Access | {{  $data->employee_access }}</option>
            
                                                @if ($data->employee_access != 'Active')
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
                            <div class="col-5 pt-5">
                                <div class="camera">
                                    <video id="video">Video stream not available.</video>
                                </div>
                                <div><button class="btn" id="startbutton">Take photo</button></div>
                                <canvas id="canvas"></canvas>
                            </div>
                        </div>
                  </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card text-center">

                    <div class="contentarea pt-5">
                        <div class="output">
                            <img id="photo" alt="The screen capture will appear in this box.">
                            <form action="{{ route('pictureAdd') }}" method="POST">
                                @csrf
                                <button class="btn" type="submit" name="img" id="img_data">Save Picture</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            <script>
                /* JS comes here */
                (function() {
            
                    var width = 320; // We will scale the photo width to this
                    var height = 0; // This will be computed based on the input stream
            
                    var streaming = false;
            
                    var video = null;
                    var canvas = null;
                    var photo = null;
                    var startbutton = null;
            
                    function startup() {
                        video = document.getElementById('video');
                        canvas = document.getElementById('canvas');
                        photo = document.getElementById('photo');
                        startbutton = document.getElementById('startbutton');
            
                        navigator.mediaDevices.getUserMedia({
                                video: true,
                                audio: false
                            })
                            .then(function(stream) {
                                video.srcObject = stream;
                                video.play();
                            })
                            .catch(function(err) {
                                console.log("An error occurred: " + err);
                            });
            
                        video.addEventListener('canplay', function(ev) {
                            if (!streaming) {
                                height = video.videoHeight / (video.videoWidth / width);
            
                                if (isNaN(height)) {
                                    height = width / (4 / 3);
                                }
            
                                video.setAttribute('width', width);
                                video.setAttribute('height', height);
                                canvas.setAttribute('width', width);
                                canvas.setAttribute('height', height);
                                streaming = true;
                            }
                        }, false);
            
                        startbutton.addEventListener('click', function(ev) {
                            takepicture();
                            ev.preventDefault();
                        }, false);
            
                        clearphoto();
                    }
            
                    function clearphoto() {
                        var context = canvas.getContext('2d');
                        context.fillStyle = "#AAA";
                        context.fillRect(0, 0, canvas.width, canvas.height);
            
                        var data = canvas.toDataURL('image/png');
                        photo.setAttribute('src', data);
                    }
            
                    function takepicture(e) {
                        var context = canvas.getContext('2d');
                        if (width && height) {
                            canvas.width = width;
                            canvas.height = height;
                            context.drawImage(video, 0, 0, width, height);
            
                            var data = canvas.toDataURL('image/png');

                            document.getElementById('img_data').value = data;

                            photo.setAttribute('src', data);

                        } else {
                            clearphoto();
                        
                        }
                    }
            
                    window.addEventListener('load', startup, false);
                  
                })();
            </script>
        </div>
    </section>
@endsection