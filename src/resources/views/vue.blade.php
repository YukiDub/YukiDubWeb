<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/../css/app.css">

    <title>YukiDub - главная</title>
</head>
<body>
<div id="app">
    <div class="preloader">
        <div class="preloader__row">
            <div class="preloader__item"></div>
            <div class="preloader__item"></div>
        </div>
    </div>
    <main class="layout">
        <nav-bar></nav-bar>
        <div class="wrapper">
            <page-header login={{false}}></page-header>
            <div class="container mt-4 mb-5">
                <transition name="slide-fade">
                    <router-view></router-view>
                </transition>
            </div>
            <footer-component></footer-component>
        </div>
    </main>
    <div class="modals">
        <modal-wrappers>
        </modal-wrappers>
    </div>
</div>
<script src="/../js/app.js"></script>

<script>
    window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
        }, 500);
    }

    let vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        let vh = window.innerHeight;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

</script>
</body>
</html>