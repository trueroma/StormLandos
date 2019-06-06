const
    heados = {
        des: `Дизайн макет`,
        build: `Вёрстка по вашему макету`,
        both: `Пакет дизайн + вёрстка`,
    },
    textos = {
        des: `Около половины пользователей
            оценивают сайт по его внешним качествам,
            правильный дизайн более вероятно
            превратит визит сайта в лид`,
        build: `От качества постройки зависит почти всё,
            от стабильности работы до удобства
            внесения изменений в будущем`,
        both: `Создание сайта полностью с нуля,
            разработка концепции сайта в зависимости от
            направления компании и подстроимся
            под целевую аудиторию`,
    };

export const connect = () => {
    return {
        first: (photo, header, text, but) => {
            photo.src = '../StormLandos/des.png';
            photo.transform = 'translateX(0)';
            header.innerHTML = heados.des;
            text.innerHTML = textos.des;
            but.first.style.opacity = `1`;
            but.sec.style.opacity = but.third.style.opacity = `0.4`;
        },
        sec: (photo, header, text, but) => {
            photo.src = '../StormLandos/hands.png';
            photo.transform = 'translateX(0)';
            header.innerHTML = heados.build;
            text.innerHTML = textos.build;
            but.sec.style.opacity = `1`;
            but.first.style.opacity = but.third.style.opacity = `0.4`;
        },
        third: (photo, header, text, but) => {
            photo.src = '../StormLandos/both.png';
            photo.transform = 'translateX(0)';
            header.innerHTML = heados.both;
            text.innerHTML = textos.both;
            but.third.style.opacity = `1`;
            but.sec.style.opacity = but.first.style.opacity = `0.4`;
        },
    }
}