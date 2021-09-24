<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Регистрация</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
    <div class="container mt-4">
        <h3 class="text-center">Регистрация</h3>
        <form action="/api/v1/auth/register" method="post">
            <div class="form-group">
                <label for="Email">Email</label>
                <input type="email" name="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="alex@domain.com">
            </div>

            <div class="form-group">
                <label for="name">Логин</label>
                <input type="text" name="name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Alex">
            </div>
            <div class="form-group">
                <label for="password">Пароль</label>
                <input type="password" name="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="passwordConfirmation">Повтор пароля</label>
                <input type="password" name="password_confirmation" class="form-control" id="passwordConfirmation" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary">Войти</button>
        </form>
    </div>
</body>
</html>