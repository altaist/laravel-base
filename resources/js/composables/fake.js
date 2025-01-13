import { useShop } from './shop'


export const initFakeShop = () => {

    const shop = useShop();
    shop.initShop()
    const data = shop.shopData;
    data.value.catalogs.main = catalog1;
    shop.updateLocal();

}


const catalog1 = [
    {
        id: 1,
        user_id: 0,
        title: 'Платье ZARA',
        description: 'Платье для выпускного. Отличное качество, почти новое',
        place: 'Москва',
        img: 'item3.jpg',
        stars: 3,
        categories: [0,3,5],
        collections: [0,4],
        price: 1500
    },
    {
        id: 2,
        user_id: 0,
        title: 'Мужская рубашка',
        description: 'Рубашка б/у, но красивая',
        place: 'Москва',
        img: 'item1.jpg',
        stars: 5,
        categories: [0,3,5],
        collections: [0,4],
        price: 200
    },
    {
        id: 3,
        user_id: 0,
        title: 'Шляпа',
        description: 'Мужская шляпа прямо из Европы. Эксклюзив!',
        place: 'Москва',
        img: 'item2.jpg',
        stars: 5,
        categories: [0,3,5],
        collections: [0,4],
        price: 400
    },
    {
        id: 4,
        user_id: 0,
        title: 'Эксклюзивные туфли',
        description: 'Натуральная кожа, отличное качество',
        place: 'Москва',
        img: 'item6.jpg',
        stars: 5,
        categories: [0,3,5],
        collections: [0,4],
        price: 1100
    },
    {
        id: 5,
        user_id: 0,
        title: 'Уникальные брюки',
        description: 'Отличный вариант для выпускного',
        place: 'Химки',
        img: 'item5.jpg',
        stars: 5,
        categories: [0,3,5],
        collections: [0,4],
        price: 800
    }
]

