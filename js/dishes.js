var dishes = [
    {
        type: 'Первые блюда',
        name: 'Борщ',
        calorie: 61.6,
        protein: 3.8,
        fat: 2.9,
        carbo: 5.4,
        img: 'img/borsch.jpg',
        component: ['Свекла', 'Морковь', 'Лук репчатый', 'Картофель', 'Свинина', 'Томатная паста', 'Масло подсолнечное']
    },
    {
        type: 'Первые блюда',
        name: 'Суп гороховый',
        calorie: 54.3,
        protein: 2.2,
        fat: 3,
        carbo: 5,
        img: 'img/gorohoviy.jpg',
        component: ['Морковь', 'Лук репчатый', 'Картофель', 'Свинина', 'Горох', 'Масло подсолнечное']
    },
    {
        type: 'Первые блюда',
        name: 'Суп грибной',
        calorie: 50.9,
        protein: 0.8,
        fat: 3.4,
        carbo: 4.6,
        img: 'img/gribnoy.jpg',
        component: ['Морковь', 'Лук репчатый', 'Картофель', 'Грибы', 'Масло подсолнечное']
    },
    {
        type: 'Первые блюда',
        name: 'Суп куриный с вермишелью',
        calorie: 59.7,
        protein: 4.5,
        fat: 3.3,
        carbo: 3.1,
        img: 'img/kuriniy.jpg',
        component: ['Морковь', 'Лук репчатый', 'Картофель', 'Курица', 'Вермишель', 'Масло подсолнечное']
    },
    {
        type: 'Первые блюда',
        name: 'Рассольник',
        calorie: 40.4,
        protein: 0.9,
        fat: 1.6,
        carbo: 5.9,
        img: 'img/rassolnik.jpg',
        component: ['Морковь', 'Лук репчатый', 'Картофель', 'Курица', 'Рис', 'Огрурец соленый', 'Масло подсолнечное']
    },
    {
        type: 'Первые блюда',
        name: 'Суп молочный с вермишелью',
        calorie: 64.6,
        protein: 2.8,
        fat: 2.7,
        carbo: 7.7,
        img: 'img/molochiny.jpg',
        component: ['Молоко', 'Вермишель', 'Сахар', 'Масло сливочное']
    },
    {
        type: 'Первые блюда',
        name: 'Суп сырный',
        calorie: 93.4,
        protein: 4.7,
        fat: 6.9,
        carbo: 3.2,
        img: 'img/sirniy.jpg',
        component: ['Молоко', 'Сыр плавленный', 'Картофель', 'Лук репчатый', 'Масло сливочное']
    },
    {
        type: 'Первые блюда',
        name: 'Уха',
        calorie: 66.7,
        protein: 8.5,
        fat: 1.9,
        carbo: 4.3,
        img: 'img/uha.jpg',
        component: ['Рыба', 'Морковь', 'Картофель', 'Лук репчатый', 'Масло сливочное']
    },
    {
        type: 'Первые блюда',
        name: 'Щи из кислой капусты',
        calorie: 37.2,
        protein: 2,
        fat: 2.8,
        carbo: 1,
        img: 'img/schi.jpg',
        component: ['Капуста квашеная', 'Морковь', 'Картофель', 'Лук репчатый', 'Курица', 'Масло подсолнечное']
    },
    {
        type: 'Первые блюда',
        name: 'Суп харчо',
        calorie: 43.9,
        protein: 2.2,
        fat: 2.1,
        carbo: 4.3,
        img: 'img/harcho.jpg',
        component: ['Рис', 'Морковь', 'Картофель', 'Лук репчатый', 'Свинина', 'Масло подсолнечное', 'Томатная паста']
    },
    {
        type: 'Вторые блюда',
        name: 'Каша гречневая',
        calorie: 98.7,
        protein: 3.6,
        fat: 2.2,
        carbo: 17.1,
        img: 'img/grecka.jpg',
        component: ['Крупа гречневая', 'Масло сливочное']
    },
    {
        type: 'Вторые блюда',
        name: 'Каша манная',
        calorie: 162.1,
        protein: 5.3,
        fat: 6,
        carbo: 23.2,
        img: 'img/manka.jpg',
        component: ['Крупа манная', 'Масло сливочное']
    },
    {
        type: 'Вторые блюда',
        name: 'Каша ячневая',
        calorie: 48.6,
        protein: 1.8,
        fat: 1,
        carbo: 8.7,
        img: 'img/yachka.jpg',
        component: ['Крупа ячневая', 'Масло сливочное']
    },
    {
        type: 'Вторые блюда',
        name: 'Котлеты свинные',
        calorie: 438.2,
        protein: 29,
        fat: 35.8,
        carbo: 0.4,
        img: 'img/kotleti.jpg',
        component: ['Свинина', 'Лук репчатый', 'Молоко', 'Мука', 'Масло подсолнечное']
    },
    {
        type: 'Вторые блюда',
        name: 'Жаркое из свинины',
        calorie: 233.2,
        protein: 10.6,
        fat: 20.8,
        carbo: 0.7,
        img: 'img/zharkoe.jpg',
        component: ['Свинина', 'Лук репчатый', 'Морковь', 'Картофель', 'Масло подсолнечное', 'Масло подсолнечное', 'Томатная паста', 'Чеснок']
    },
    {
        type: 'Вторые блюда',
        name: 'Рыба жаренная в тесте',
        calorie: 227,
        protein: 15.4,
        fat: 12.3,
        carbo: 14.7,
        img: 'img/riba.jpg',
        component: ['Рыба', 'Яйца', 'Мука', 'Масло подсолнечное']
    },
    {
        type: 'Вторые блюда',
        name: 'Яичница глазунья',
        calorie: 240.8,
        protein: 15.9,
        fat: 19.3,
        carbo: 1,
        img: 'img/glazunia.jpg',
        component: ['Яйца', 'Масло подсолнечное']
    },
    {
        type: 'Вторые блюда',
        name: 'Омлет',
        calorie: 221.8,
        protein: 12.2,
        fat: 18.4,
        carbo: 1.9,
        img: 'img/omlet.jpg',
        component: ['Яйца', 'Мука', 'Молоко', 'Масло подсолнечное']
    },
    {
        type: 'Вторые блюда',
        name: 'Картофель молодой в сметане',
        calorie: 161.6,
        protein: 2.1,
        fat: 14,
        carbo: 7.2,
        img: 'img/molodoy.jpg',
        component: ['Картофель', 'Сметана', 'Укроп']
    },
    {
        type: 'Вторые блюда',
        name: 'Картофель жареный',
        calorie: 203.3,
        protein: 3.7,
        fat: 10.6,
        carbo: 4.8,
        img: 'img/zareniy.jpg',
        component: ['Картофель', 'Масло подсолнечное', 'Лук репчатый']
    },
    {
        type: 'Вторые блюда',
        name: 'Картофельное пюре',
        calorie: 81.7,
        protein: 2.1,
        fat: 4.6,
        carbo: 8.5,
        img: 'img/pure.jpg',
        component: ['Картофель', 'Масло сливочное', 'Молоко']
    },
    {
        type: 'Салаты',
        name: 'Салат из моркови и капусты',
        calorie: 140.7,
        protein: 1.7,
        fat: 11,
        carbo: 9.2,
        img: 'img/salat_kap.jpg',
        component: ['Капуста', 'Масло подсолнечное', 'Морковь']
    },
    {
        type: 'Салаты',
        name: 'Салат из помидоров и огурцов',
        calorie: 130,
        protein: 2,
        fat: 10,
        carbo: 8.3,
        img: 'img/salat_og.jpg',
        component: ['Огурец', 'Помидор', 'Масло подсолнечное', 'Лук репчатый']
    },
    {
        type: 'Салаты',
        name: 'Салат из свеклы и чернослива',
        calorie: 117.7,
        protein: 1.7,
        fat: 8.8,
        carbo: 8.5,
        img: 'img/salat_bur.jpg',
        component: ['Свекла', 'Чернослив', 'Орехи грецкие', 'Сметана']
    },
    {
        type: 'Десерты',
        name: 'Блины',
        calorie: 218,
        protein: 9.3,
        fat: 8.7,
        carbo: 27.2,
        img: 'img/blini.jpg',
        component: ['Молоко', 'Мука', 'Яйца', 'Масло подсолнечное']
    },
    {
        type: 'Десерты',
        name: 'Желе из сливок',
        calorie: 218,
        protein: 9.3,
        fat: 8.7,
        carbo: 27.2,
        img: 'img/zhele.jpg',
        component: ['Сливки', 'Яйца', 'Сахар', 'Желатин']
    },
    {
        type: 'Десерты',
        name: 'Сырники',
        calorie: 248,
        protein: 9.6,
        fat: 14.1,
        carbo: 22.1,
        img: 'img/sirniki.jpg',
        component: ['Творог', 'Яйца', 'Сахар', 'Мука']
    },
    {
        type: 'Напитки',
        name: 'Кисель молочный',
        calorie: 33.5,
        protein: 0.9,
        fat: 1,
        carbo: 5.5,
        img: 'img/kisel.jpg',
        component: ['Сахар', 'Молоко', 'Крахмал', 'Ванилин']
    },
    {
        type: 'Напитки',
        name: 'Компот из вишни',
        calorie: 53.5,
        protein: 0.3,
        fat: 0.05,
        carbo: 13.7,
        img: 'img/kompot.jpg',
        component: ['Сахар', 'Вишня']
    },
    {
        type: 'Напитки',
        name: 'Чай с лимоном',
        calorie: 41.4,
        protein: 0.2,
        fat: 0.05,
        carbo: 5.5,
        img: 'img/chai_lim.jpg',
        component: ['Сахар', 'Лимон', 'Чай']
    },
    {
        type: 'Напитки',
        name: 'Чай с молоком',
        calorie: 52.5,
        protein: 0.9,
        fat: 0.8,
        carbo: 10.5,
        img: 'img/chai_mol.jpg',
        component: ['Сахар', 'Молоко', 'Чай']
    }

];
