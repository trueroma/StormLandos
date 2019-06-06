import { SimpleComp } from './Components/web-comp.js';

customElements.define('web-comp', SimpleComp);

const init = () => {

    // doc connections
    const
        sect = document.querySelectorAll('section'),
        line = document.querySelectorAll('.line'),
        stick = document.querySelectorAll('.stick'),
        scr = document.querySelectorAll('.scr');


    // useful
    let pos_Scr = 1;

    // functions for using inside functions #inseption
    const
        toFirst = () => {
            for (let i = 0; i < sect.length; i++) {
                sect[i].style.transform = 'translateY(0)';
                console.log(sect[i].style.transform);
            }
            stick[0].style.backgroundColor = '#ffffff';
            stick[1].style.backgroundColor = '#aeaeae';
            stick[2].style.backgroundColor = '#aeaeae';
            pos_Scr = 1;
        },
        toSecond = () => {
            for (let i = 0; i < sect.length; i++) {
                sect[i].style.transform = 'translateY(-100%)';
                console.log(sect[i].style.transform);
            }
            stick[0].style.backgroundColor = '#aeaeae';
            stick[1].style.backgroundColor = '#ffffff';
            stick[2].style.backgroundColor = '#aeaeae';
            pos_Scr = 2;
        },
        toThird = () => {
            for (let i = 0; i < sect.length; i++) {
                sect[i].style.transform = 'translateY(-200%)';
                console.log(sect[i].style.transform);
            }
            stick[0].style.backgroundColor = '#aeaeae';
            stick[1].style.backgroundColor = '#aeaeae';
            stick[2].style.backgroundColor = '#ffffff';
            pos_Scr = 3;
        };

    // functions
    const
        scrollDat = e => {
            let direction = e.deltaY;
            if (pos_Scr === 1) {
                if (direction > 0) {
                    document.removeEventListener('wheel', scrollDat);
                    console.log('down');
                    toSecond();
                    setTimeout( () => {
                        document.addEventListener('wheel', scrollDat);
                    }, 1200 );
                } else {
                    console.log('up');
                }
            } else if (pos_Scr === 2) {
                if (direction > 0) {
                    document.removeEventListener('wheel', scrollDat);
                    console.log('down');
                    toThird();
                    setTimeout( () => {
                        document.addEventListener('wheel', scrollDat);
                    }, 1200 );
                } else {
                    document.removeEventListener('wheel', scrollDat);
                    console.log('up');
                    toFirst();
                    setTimeout( () => {
                        document.addEventListener('wheel', scrollDat);
                    }, 1200 );
                }
            } else if (pos_Scr === 3) {
                if (direction > 0) {
                    console.log('down');
                } else {
                    document.removeEventListener('wheel', scrollDat);
                    console.log('up');
                    toSecond();
                    setTimeout( () => {
                        document.addEventListener('wheel', scrollDat);
                        }, 1200 );
                    }
                }
            },
        butScroll = i => {
            if ( i === 1 ) {
                toFirst();
            } else if ( i === 2 ) {
                toSecond();
            } else if ( i === 3 ) {
                toThird();
            }
        };

    for (let i = 0; i < line.length; i++) {
        line[i].addEventListener('click', () => butScroll(i + 1));
    }
    for (let i = 0; i < scr.length - 1; i++) {
        scr[i].addEventListener('click', () => butScroll(i + 2));
    }

    document.addEventListener('wheel', scrollDat);

    stick[0].style.backgroundColor = '#fff';

    // very temporary
    alert('Прошу заметить, страница полностью не готова, в частности третий экран и кнопки навигации');
}

document.addEventListener('DOMContentLoaded', init);