<?php $v = time(); ?><!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css?v=<?= $v ?>">
<!--    <link rel="stylesheet" href="stylename.css">-->
    <script src="./main.js?v=<?= $v ?>" type="module"></script>
    <title>Storm</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/png">
</head>
<body>
    <div class="flex-side">
        <div class="side">
            <a href="#" class="line">
                <div class="stick"></div>
            </a>
            <a href="#" class="line">
                <div class="stick"></div>
            </a>
            <a href="#" class="line">
                <div class="stick"></div>
            </a>
        </div>
    </div>

    <div class="src-area">

        <section>
            <div class="header">
                <img src="logo.png" alt="The best logo you could imagine" class="logo">
                <div class="nav">
                    <div class="scr">Услуги</div>
                    <div class="scr">Портфолио</div>
                    <div class="scr">Контакты</div>
                </div>
            </div>
            <div class="offer">
                <div class="wrapper">
                    <h1>создание сайтов</h1>
                    <h2>именно так, как вы этого хотите</h2>
                    <div class="get-started">Начать работу</div>
                </div>
            </div>
        </section>


        <section>
            <div class="headline">
                <h1>Услуги</h1>
            </div>
<!--            <div class="services">-->
<!--                <div class="design">-->
<!--                    <img src="des.png" alt="" class="des-pic">-->
<!--                    <h2>Дизайн макет</h2>-->
<!--                    <div class="underline"></div>-->
<!--                    <p>Около половины пользователей-->
<!--                        оценивают сайт по его внешним качествам,-->
<!--                        правильный дизайн более вероятно-->
<!--                        превратит визит сайта в лид</p>-->
<!--                </div>-->
<!--                <div class="build">-->
<!--                    <img src="hands.png" alt="" class="bl-pic">-->
<!--                    <h2>Вёрстка по вашему макету</h2>-->
<!--                    <div class="underline"></div>-->
<!--                    <p>От качества постройки зависит почти всё,-->
<!--                        от стабильности работы до удобства-->
<!--                        внесения изменений в будущем</p>-->
<!--                </div>-->
<!--                <div class="both">-->
<!--                    <img src="both2.png" alt="" class="both-pic">-->
<!--                    <h2>Пакет дизайн + вёрстка</h2>-->
<!--                    <div class="underline"></div>-->
<!--                    <p>Создание сайта полностью с нуля, разработка-->
<!--                        концепции сайта в зависимости от-->
<!--                        направления компании и подстроимся-->
<!--                        под целевую аудиторию</p>-->
<!--                </div>-->
<!--            </div>-->

            <web-comp></web-comp>
        </section>


        <section>
            <div class="headline">
                <h1>Портфолио</h1>
            </div>
        </section>

    </div>



</body>
</html>