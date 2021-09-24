<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Завершение регистрации</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
    <div class="container mt-4">
        <h3 class="text-center">Завершение регистрации</h3>
        <div class="alert alert-primary" role="alert">
            <p class="text-center">Для завершения регистрации Вам необходимо заполнить поля ниже!</p>
        </div>
{{--        <form action="{{route('social.registration.completion')}}" method="post">--}}
        <form action="http://dev.yukidub.fun/auth/complete" method="post">
            @csrf

            @if(empty($user->email))
                <div class="form-group">
                    <label for="Email">Email</label>
                    <input type="email" name="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="alex@domain.com" required>
                </div>
            @else
                <div class="form-group">
                    <label for="Email">Email</label>
                    <input type="email" name="email" class="form-control" id="Email" aria-describedby="emailHelp" value="{{$user->email}}" readonly>
                </div>
            @endif

            @if(empty($user->name))
                <div class="form-group">
                    <label for="name">Логин</label>
                    <input type="text" name="name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Alex" required>
                </div>
            @else
                <div class="form-group">
                    <label for="name">Логин</label>
                    <input type="text" name="name" class="form-control" id="name" aria-describedby="emailHelp" value="{{$user->name}}" readonly>
                </div>
            @endif

            <div class="form-group">
                <label for="password">Пароль</label>
                <div class="input-group has-validation">
                    <input type="password" name="password" class="form-control" id="password" placeholder="Password" required>
                    <div class="invalid-feedback">
                        Поле с паролем не может быть пустым
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="passwordConfirmation">Повтор пароля</label>
                <input type="password" name="password_confirmation" class="form-control" id="passwordConfirmation" placeholder="Password" required>
            </div>

            <input type="hidden" name="_token" value="{{ csrf_token() }}" />
            <input type="hidden" name="access_token" value="{{ $access_token }}" />
            <input type="hidden" name="refresh_token" value="{{ $refresh_token }}" />
            <input type="hidden" name="token_type" value="{{ $token_type }}" />
            <input type="hidden" name="expires_in" value="{{ $expires_in }}" />

            <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
        </form>
    </div>
</body>
</html>