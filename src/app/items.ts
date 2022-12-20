export type Item = {
  id: number
  name: string
  price: number
  category: string
  maker: {name: string, adress: string}
  count: number
  url: string
  isFavo: boolean
  register: boolean
}

export type OrderItem =   {
  id: number
  name: string
  price: number
  category: string
  maker: {name: string, adress: string}
  orderCount: number
  url: string
  isFavo: boolean
  register: boolean
}

export type LogOrderItems = {
  orderItems: OrderItem[]
  order: string
  open: boolean
}

export type Open = {
  isOpen: boolean
  option: string
}

export const items: Item[] = [
  {id: 1, name: 'りんご', price: 120, category: '果物', maker: {name: 'shop1', adress: 'sample1'}, count: 3, url: 'https://media.delishkitchen.tv/article/975/fd3sgtfnxen.jpeg?version=1634782151', isFavo: false, register: true},
  {id: 2, name: 'バナナ', price: 80, category: '果物', maker: {name: 'shop2', adress: 'sample2'}, count: 4, url: '', isFavo: false, register: true},
  {id: 3, name: 'グレープ', price: 300, category: '果物', maker: {name: 'shop3', adress: 'sample2'}, count: 5, url: 'https://www.asahi-kasei.co.jp/saran/assets/images/preservation/fruits/detail/food10_tph00.jpg', isFavo: false, register: true},
  {id: 4, name: 'トマト', price: 150, category: '野菜', maker: {name: 'shop1', adress: 's1'}, count: 3, url: 'https://www.kewpie.co.jp/ingredients/cat_assets/img/vegetable/tomato/photo01.png', isFavo: false, register: false},
  {id: 5, name: 'マンゴー', price: 200, category: '果物', maker: {name: 'shop2', adress: 's2'}, count: 4, url: 'https://media.delishkitchen.tv/article/1508/w422stv2g38.jpeg?version=1647849333', isFavo: false, register: false},
  {id: 6, name: 'アボカド', price: 350, category: 'desert', maker: {name: 'shop3', adress: 's3'}, count: 5, url: 'https://thumb.photo-ac.com/56/5679db06efeb1939a96614b8456c21c6_t.jpeg', isFavo: false, register: false},
  {id: 7, name: 'オレンジ', price: 100, category: '果物', maker: {name: 'shop4', adress: 's4'}, count: 10, url: 'https://media.delishkitchen.tv/article/888/1lnlydqh7at.jpeg?version=1631587866', isFavo: false, register: false},
  {id: 8, name: 'かぼちゃ', price: 400, category: '野菜', maker: {name: 'shop5', adress: 's5'}, count: 6, url: 'https://media.delishkitchen.tv/article/316/skj3kbnmtte.jpeg?version=1597991025', isFavo: false, register: false},
  {id: 9, name: 'レタス', price: 400, category: '野菜', maker: {name: 'shop6', adress: 's6'}, count: 3, url: 'https://www.kewpie.co.jp/ingredients/cat_assets/img/vegetable/lettuce/photo01.png', isFavo: false, register: false},
  {id: 10, name: 'ほうれん草', price: 125, category: '野菜', maker: {name: 'shop7', adress: 's7'}, count: 5, url: 'https://thumb.photo-ac.com/bc/bcd029ae6553350e7d1dc70fad832a4d_t.jpeg', isFavo: false, register: false},
  {id: 11, name: 'パイナップル', price: 600, category: '果物', maker: {name: 'shop8', adress: 's8'}, count: 2, url: 'https://mag.wowma.jp/wp-content/uploads/2022/05/0563-1-1080x720.jpg', isFavo: false, register: false},
  {id: 12, name: '白米', price: 500, category: '野菜', maker: {name: 'shop9', adress: 's9'}, count: 12, url: 'https://m.media-amazon.com/images/I/51w2375N28L._AC_SX679_.jpg', isFavo: false, register: false},
  {id: 13, name: '小麦粉', price: 400, category: '調味料', maker: {name: 'shop10', adress: 's10'}, count: 20, url: 'https://sm.r10s.jp/item/78/4902110320978.jpg', isFavo: false, register: false},
  {id: 14, name: '醤油', price: 350, category: '調味料', maker: {name: 'shop11', adress: 's11'}, count: 32, url: 'https://storage.topvalu.net/assets/contents/images/product/154477/4902121228430_PC_L.jpg', isFavo: false, register: false},
  {id: 15, name: '砂糖', price: 390, category: '調味料', maker: {name: 'shop12', adress: 's12'}, count: 19, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6F52iyUX8pRot6C7RK3bEjh4iSOxCX4PBA&usqp=CAU', isFavo: false, register: false},
  {id: 16, name: '塩', price: 420, category: '調味料', maker: {name: 'shop13', adress: 's13'}, count: 47, url: 'https://sm.r10s.jp/item/12/4902566003012.jpg', isFavo: false, register: false},
  {id: 17, name: 'コショウ', price: 700, category: '調味料', maker: {name: 'shop14', adress: 's14'}, count: 6, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdiA5H587w9rgHAyuGcI9yz-NF56Zy2mXmw&usqp=CAU', isFavo: false, register: false},
  {id: 18, name: 'パセリ', price: 700, category: '調味料', maker: {name: 'shop15', adress: 's15'}, count: 6, url: 'http://www.kagome.co.jp/library/vegeday/img/vegetables/img_parsley_main.jpg', isFavo: false, register: false},
  {id: 19, name: 'オイスターソース', price: 700, category: '調味料', maker: {name: 'shop16', adress: 's16'}, count: 6, url: 'https://thumb.ac-illust.com/00/000096b54de3b748fce836454030c8d5_t.jpeg', isFavo: false, register: false},
  {id: 20, name: 'ケチャップ', price: 700, category: '調味料', maker: {name: 'shop17', adress: 's17'}, count: 6, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH8AG9KJiboRRMs7FaGj6QiNAUAuPuJLU6lA&usqp=CAU', isFavo: false, register: false},
  {id: 21, name: 'マヨネーズ', price: 700, category: '調味料', maker: {name: 'shop18', adress: 's18'}, count: 6, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkV3dse3XIImnwsi3CrOOwczvjqMBuKqUe_A&usqp=CAU', isFavo: false, register: false},
  {id: 22, name: 'じゃがいも', price: 700, category: '野菜', maker: {name: 'shop19', adress: 's19'}, count: 6, url: 'https://thumb.photo-ac.com/53/5305e434bd57b6ecafc5ed18a3895b75_w.jpeg', isFavo: false, register: false},
  {id: 23, name: '人参', price: 700, category: '野菜', maker: {name: 'shop20', adress: 's20'}, count: 6, url: 'https://www.photolibrary.jp/mhd4/img740/450-20191029150237381584.jpg', isFavo: false, register: false},
  {id: 24, name: 'とんかつソース', price: 700, category: '調味料', maker: {name: 'shop21', adress: 's21'}, count: 6, url: 'https://cdn.takeout.epark.jp/images/product/4235/235158/NSbsQjCAvQo9UizoKIrdkHYRuVhcOPHiB8va2Jez.jpeg', isFavo: false, register: false},
  {id: 25, name: 'ジップロック', price: 700, category: '消耗品', maker: {name: 'shop23', adress: 's23'}, count: 6, url: 'https://askul.c.yimg.jp/img/product/3L1/1972317_3L1.jpg', isFavo: false, register: true},
  {id: 26, name: 'ラード油', price: 700, category: '調味料', maker: {name: 'shop22', adress: 's22'}, count: 6, url: 'https://tshop.r10s.jp/takarazima/cabinet/ikou_20100308_001/cyoumiryou/05789787/imgrc0089229129.jpg?fitin=300:300', isFavo: false, register: false},
  {id: 27, name: '調理用スプーン', price: 700, category: '消耗品', maker: {name: 'shop22', adress: 's22'}, count: 6, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzdHxJ_fl5GvXVQfpaZhWrfW6H04PUmcWHA&usqp=CAU', isFavo: false, register: true},
  {id: 28, name: 'おたま', price: 700, category: '消耗品', maker: {name: 'shop22', adress: 's22'}, count: 6, url: 'https://img.my-best.com/contents/5868d52c53bddc7c139341209f6c65af.jpeg?ixlib=rails-4.2.0&q=70&lossless=0&w=1200&h=900&fit=crop&s=ef6ea3b8e989ce16a0eac69bd6e9566b', isFavo: false, register: true},
  {id: 29, name: 'フライパン', price: 700, category: '消耗品', maker: {name: 'shop22', adress: 's22'}, count: 6, url: 'https://askul.c.yimg.jp/img/product/3L1/AU80666_3L1.jpg', isFavo: false, register: true},
  {id: 30, name: 'ミキサー', price: 700, category: '消耗品', maker: {name: 'shop22', adress: 's22'}, count: 6, url: 'https://img.my-best.com/product_content_section/introduction/sections/ceb3407ee9ba6c12a9a156a1a10ba31f.jpeg?ixlib=rails-4.2.0&q=70&lossless=0&w=690&fit=max&s=92fc3b8ade40e92e6d6e9e943c3e1704', isFavo: false, register: true},
  {id: 31, name: '中華鍋', price: 700, category: '消耗品', maker: {name: 'shop22', adress: 's22'}, count: 6, url: 'https://img.my-best.com/contents/a8feb078ef2b11a1bc83dcc3954c1f09.jpeg?ixlib=rails-4.2.0&q=70&lossless=0&w=1200&h=900&fit=crop&s=c63c52db26e2ce1601049cd7b25c00fd', isFavo: false, register: true},
  {id: 32, name: 'ステンレス鍋', price: 700, category: '消耗品', maker: {name: 'shop22', adress: 's22'}, count: 6, url: 'https://ic4-a.wowma.net/mis/gr/135/image.wowma.jp/51681893/i/f/ryouhin-hyakka_ahv8936.jpeg', isFavo: false, register: true},
  {id: 33, name: 'ゴム手袋', price: 700, category: '消耗品', maker: {name: 'shop22', adress: 's22'}, count: 6, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcTO5KG5O3FL9ymUYma3Y4B7UL7Fnb-zJ4wg&usqp=CAU', isFavo: false, register: true},
  {id: 34, name: 'アルコール', price: 700, category: '消耗品', maker: {name: 'shop22', adress: 's22'}, count: 6, url: 'https://prcdn.freetls.fastly.net/release_image/6237/178/6237-178-bb79376f33317a508a3694839782000e-600x600.jpg?format=jpeg&auto=webp&quality=85&width=1950&height=1350&fit=bounds', isFavo: false, register: true},
  {id: 35, name: 'お皿', price: 700, category: '消耗品', maker: {name: 'shop22', adress: 's22'}, count: 6, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6fRu7j1x9JvZbGFg1IvWTY38VXtLpgbaxYQ&usqp=CAU', isFavo: false, register: true},
  {id: 36, name: '茶碗', price: 700, category: '消耗品', maker: {name: 'shop22', adress: 's22'}, count: 6, url: 'https://p1-e6eeae93.imageflux.jp/c!/w=800,h=800,a=2/ebiyashop/d01adc65e560024558aa.jpeg', isFavo: false, register: true},
  {id: 37, name: '除菌スプレー', price: 700, category: '消耗品', maker: {name: 'shop22', adress: 's22'}, count: 6, url: 'https://tshop.r10s.jp/sokutei/cabinet/05733969/kaedejp_vs-jk-001.jpg?fitin=720%3A720', isFavo: false, register: true},
]

export const noImageUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX////Ly8vIyMjNzc3a2trU1NT7+/vy8vLg4ODr6+vX19fMzMz09PTu7u7e3t7R0dHl5eW0uPxiAAAETElEQVR4nO2Z65qjKhAAAxoVvOD7P+1yFxI1kxm/czazVX82G5FQ0jSNc7sBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPynrO0X6P7vUf6EVopXSPHZhi8FLZ9uaO5nmM83lMNpg0n+dsMew7+dbNgPi9pr8GsMWyml2VN8Npymqficr01qXdfpVtPFtuU99W25yfaLth+1dVvyFaNHoqGSQq67DZ4N71Lmn8oxPhnpMX3VVknpvxirTXWQcnuYZXeWVYSOUpkR/+u5v2vniIZaCL3fYMfQbjDpc5NiXMaRCDmXbZOhqR7gKDbDTlaZYIkdCdl0sa24xPD+MLIXhnm4ydCOaLGtusF+KFtvhmLMX66yMFxdUVVeGt2l6S7jY2yEmfrIT6J0qUPllWHWiIY27IY0RLnsG26PsBGFoasoZA7trWcd72zEt2ZuIxp25cqo2DO0UdbGwQYzs81QU0xWZZhH6nrMvzZJuY75ofT5Sd26dor95SXxPVIutZliv8FepmmXOPBoaNdSm67aS0XzzbARKUq0+5wM7ezbPJ4eyvocSpcZ2mHu73p7hvqWkk0wdBORrq5SFuk0G8rFxHl3jbeIcRlulimCl+dzzIWGB+wbrtEpGPaFoZJlztoMhzVO7iLHbU30vvWYgn7X8Jp1uIOSOoxhz9Clf/dtNsyreK5WdGF4C2usc4k4twkBmsW0GJ8Nm2EJfCuVHhu6GkAfG9pYa3cN+0NDu0JvPoqLvBZSVr7HLlH3T2ccjQmGeT882M++aajcNuVUDgxvIdm8Yzj5Ky5xZsM5Xk6JNhn6PT98toaNZxR1ufRDQxVebtgq4sgwJJtnQ3VoaLe4xjl1m2E0chnV/0Ybw9WWuMokw8vW4dBsUaDS2xs5Hxoql16ec6k6yKWDb9Zrd3My7OzczcoyxA7KTKOT4VW5dChKyix4ZuiTTdoPt0Km3tIqQ3uH8btiMnS/E8vZMFNDcfNdmEsNF7/u5gfBU8NJCh1GfitqcS12d3zfbo4mydBsRXW4q9xqYt10leES191cC54aummPz0fngmUS1bqpDd2hYt4MO7d/dJ4Y553MPqkquMhw2dZdJXhu6E82fuR2cuJhx4iqwH0wVGG40bAMaBOu6LRo5nTiuCbTFK+FpaleEZ8bzvlsZ3uQrVLudFcN6MEwEg1NMT3R1uYe2QxqveesYCv5u4mUp5a3DKtZe3jffWrozudx5G04uQpZH6STYbNjWGbgELGWafQdiaIm+PkJeF2O33bvGQ46j3bSOsVkr91I9EPdMWvtA3HR1eHMf6u0LjpedKxNV/c+pBnSpVZvnFfQJ4bDe4Yfxr9huLy3Dj8Ml2mmk7/N/J43wofMn2/4BT7b8PXfgD/ccBmb13y0IQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAj/kDuk4loESEngUAAAAASUVORK5CYII='
