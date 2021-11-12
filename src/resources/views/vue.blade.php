<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../css/app.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css">

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
    <div class="layout">
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
    </div>

</div>
<script src="../js/app.js"></script>

<script>
    window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
        }, 500);
    }

    window.addEventListener('scroll', function() {
        navbarResize()
    });
    window.addEventListener('resize', function() {
        navbarResize()
    });

    function navbarResize(){
        let nav = document.getElementsByClassName("navigation")[0];

        if(document.documentElement.clientWidth > 575){
            nav.style.top = pageYOffset + "px";
            nav.style.height = "100vh";
        }
        else{
            nav.style.top = "calc(100vh - 4rem)";
            nav.style.height = "4rem";
            nav.overflow = 'hidden'
        }
    }

</script>
</body>
</html>