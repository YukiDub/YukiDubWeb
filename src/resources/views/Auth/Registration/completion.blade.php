<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Завершение регистрации</title>
</head>
<body>
<div class="container mt-4">
    <h3 class="text-center">Завершение регистрации</h3>
    <div class="alert alert-primary" role="alert">
        <p class="text-center">Для завершения регистрации Вам необходимо заполнить поля ниже!</p>
    </div>

    <form class="row g-3 needs-validation" novalidate>
        @csrf

        <div class="col-12 position-relative">
            <label for="name" class="form-label">Имя пользователя</label>
            <div class="input-group has-validation">
                <input type="text" class="form-control" minlength="4" maxlength="255" name="name" id="name" aria-describedby="namePrepend" required @if($user->name) value="{{$user->name}}" readonly @endif>
                <div class="invalid-tooltip">
                    Минимальная длинна: 4 символа
                </div>
            </div>
        </div>

        <div class="col-12 position-relative">
            <label for="email" class="form-label">Email</label>
            <div class="input-group has-validation">
                <input type="text" class="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" name="email" id="email" aria-describedby="emailPrepend" required @if($user->email) value="{{$user->email}}" readonly @endif>
                <div class="invalid-tooltip" id="email-invalid-field">
                    Введенные данные не похожи на почту
                </div>
            </div>
        </div>

        <div class="col-6 position-relative">
            <label for="password" class="form-label">Пароль</label>
            <div class="input-group has-validation">
                <input type="password" class="form-control" min="8" name="password" id="password" aria-describedby="passwordPrepend" required>
                <div class="invalid-tooltip">
                    Минимальная длинна: 8 символов
                </div>
            </div>
        </div>

        <div class="col-6 position-relative">
            <label for="passwordСonfirmation" class="form-label">Повтор пароля</label>
            <div class="input-group has-validation">
                <input type="password" class="form-control" min="8" name="password_confirmation" id="passwordСonfirmation" aria-describedby="passwordСonfirmationPrepend" required>
                <div class="invalid-tooltip">
                    Пароли должны совпадать
                </div>
            </div>
        </div>

        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
        <input type="hidden" name="access_token" value="{{ $access_token }}" />
        <input type="hidden" name="refresh_token" value="{{ $refresh_token }}" />
        <input type="hidden" name="token_type" value="{{ $token_type }}" />
        <input type="hidden" name="expires_in" value="{{ $expires_in }}" />

        <div class="col-12">
            <button class="btn btn-primary" type="submit">Зарегистрироваться</button>
        </div>
    </form>
</div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

<script>
        (function () {
        'use strict'

        let forms = document.querySelectorAll('.needs-validation')

        let password = document.getElementById('password');
        let password_confirmation = document.getElementById('passwordСonfirmation');
        let name = document.getElementById('name');
        let email = document.getElementById('email');

        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                }

                if(password.value != password_confirmation.value){
                    password_confirmation.classList.add('is-invalid')

                    event.preventDefault()
                    event.stopPropagation()
                }

                if(!chek('username/' + name.value)){
                    name.classList.add('is-invalid')

                    event.preventDefault()
                    event.stopPropagation()
                }

                if(!chek('email/' + email.value)){
                    email.classList.add('is-invalid')

                    event.preventDefault()
                    event.stopPropagation()
                }


                form.classList.add('was-validated')
            }, false)
            })
        })()

        function chek(path){
            fetch('http://dev.yukidub.fun/auth/complete/chek/' + path)
              .then((response) => {
                let data = response.json();
                return data['status']
              })
              .then((data) => {
                  return false;
                  console.log(data);
              });
        }
    </script>

</body>
</html>