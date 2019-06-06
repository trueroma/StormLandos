import { connect } from '../Services/simple-service.js';

const template =
    `
<style>
/*@import url('https://fonts.googleapis.com/css?family=Arimo:400,700&display=swap');*/
/*@import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC|Arimo:400,700|Montserrat+Alternates:700&display=swap');*/
@import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,700&display=swap');
:host {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
.services {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85vw;
    height: 65vh;
    margin: auto;
    /*font-family: 'Arimo', sans-serif;*/
    font-family: 'Montserrat Alternates', sans-serif;
    color: #fff;
}
.wrapper {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
#photo {
    width: 100%;
}
#header {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 1.5vh;
}
.underline {
    width: 9.5vw;
    height: 3px;
    background-color: #fff;
    margin: auto;
}
#text {
    font-size: 1.25rem;
    letter-spacing: 0.2em;
    line-height: 1.5;
    padding: 0 1vw;
    margin: 1.5vh;
}    
.bot {
    margin: 12vh 0 2vh;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
}
.change {
    font-size: 2rem;
    width: 33%;
    display: flex;
    justify-content: center;
}
#first, #sec, #third {
    cursor: pointer;
}
#sec, #third {
    opacity: 0.4;
}
</style>
    <div class="services">
        <div class="wrapper">
            <img src="des.png" alt="" id="photo">
        </div>
        
        <div class="wrapper">
            <h2 id="header">Дизайн макет</h2>
            <div class="underline"></div>
            <p id="text">Около половины пользователей
                оценивают сайт по его внешним качествам,
                правильный дизайн более вероятно
                превратит визит сайта в лид</p>
        </div>
    </div>
    
    <div class="bot">
        <div class="change">
            <div id="first">Дизайн</div>
        </div>
        <div class="change">
            <div  id="sec">Вёрстка</div>
        </div>
        <div class="change">
            <div  id="third">Всё лучшее сразу</div>
        </div>
    </div>
`

export class SimpleComp extends HTMLElement
{
    connectedCallback()
    {
        this.shadow_root = this.attachShadow({mode: 'open'});
        this.shadow_root.innerHTML = template;

        const
            photo = this.shadow_root.getElementById('photo'),
            header = this.shadow_root.getElementById('header'),
            text = this.shadow_root.getElementById('text'),
            but = {
                first: this.shadow_root.getElementById('first'),
                sec: this.shadow_root.getElementById('sec'),
                third: this.shadow_root.getElementById('third'),
                },
            con = connect();

        but.first.addEventListener('click', () => con.first(photo, header, text, but));
        but.sec.addEventListener('click', () => con.sec(photo, header, text, but));
        but.third.addEventListener('click', () => con.third(photo, header, text, but));

        console.log('connected');
    }

    disconnectedCallback()
    {
        console.log('disconnected');
    }
}