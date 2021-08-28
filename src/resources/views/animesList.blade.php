<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Аниме</title>
</head>
<body>
    <div class="anime-inner">
        @foreach($animes as $anime)
            <div class="anime-item">
                <img alt="Kaizoku Oujo" src="{{asset('/storage/' . $anime->poster_preview)}}">

                <p>{{$anime->name_ru}} / {{$anime->name_en}}</p>
                <p>Жанры:@foreach($anime->genres as $genre)
                        <a>{{$genre->nameEn}}</a>
                @endforeach
            </div>
        @endforeach
    </div>

    {{$animes->links('vendor.pagination.default')}}


</body>

    <style>

        .anime-inner{
            display: grid;
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 2vw;
        }

        .anime-inner > .anime-item{
            font-size: 1vw;
            padding: .5em;
            text-align: center;
        }

        .pagination > li{
            display: inline; /* Отображать как строчный элемент */
            margin-right: 5px; /* Отступ слева */
            border: 1px solid #000; /* Рамка вокруг текста */
            padding: 3px; /* Поля вокруг текста */
        }
    </style>
</html>