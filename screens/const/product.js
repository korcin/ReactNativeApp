const product = [
    { 
        id: 1,
        category: 'Konsola',
        name: 'Xbox Series X',
        price: '2799.00',
        like: true,
        img: require('../../assets/prod/prod1.png'),
        about:
        'Xbox Series X to obecnie najszybsza i najpotężniejsza konsola Xbox w historii.',
    },

    {
        id: 2,
        category: 'Konsola',
        name: 'PlayStation 5',
        price: '4399.00',
        like: false,
        img: require('../../assets/prod/prod2.png'),
        about:
        'Ultraszybki dysk SSD zapewnia błyskawiczne czasy ładowania, a efekty dotykowe, adaptacyjne efekty „Trigger” oraz dźwięk 3D wciągną Cię w realistyczny świat niesamowitych gier nowej generacji na PlayStation.',
    },

    {
        id: 3,
        category: 'Komputer',
        name:'G4M3R HERO',
        like: false,
        price: '7450.00',
        img: require('../../assets/prod/prod3.png'),
        about:
        'Potężna jednostka napędzana procesorem Intel Core i5-11400F, kartą graficzną NVIDIA GeForce RTX 3060 oraz pamięcią RAM 16 GB (DDR4, 3600MHz)',
    },

    {
        id: 4,
        category: 'Komputer',
        name: 'G4M3R ELITE',
        price: '10 800.00',
        like: true,
        img: require('../../assets/prod/prod3.png'),
        about:
        'Jednostka mająca na pokładzie procesor Intel Core i5-12600K, kartę graficzną NVIDIA GeForce RTX 3070 oraz pamięć RAM 16 GB (DDR4, 3600 MHz)',
    },

    {
        id: 5,
        category: 'Telefon',
        name:'Xiaomi POCO X3 PRO',
        price: '1199.00',
        like: true,
        img: require('../../assets/prod/prod4.png'),
        about:
        'Genialna sylwetka oraz ogromny ekran to nowy Xiaomi POCO X3 PRO 8/256 GB czarny. Otwórz się na nowe doznania w swojej ulubionej grze i nigdy nie zwalniaj, a efekt smużenia nigdy nie zagości. Matryca ma odświeżanie 120 Hz oraz wielkość 6,67 cala dzięki temu każda akcja będzie płynna.',
    },

    {
        id: 6,
        category: 'Telefon',
        name:'Apple iPhone 13 Pro',
        price: '8199.00',
        like: false,
        img: require('../../assets/prod/prod5.png'),
        about:
        'Decydując się na nowy Apple iPhone 13 Pro Max 1 TB Silver, decydujesz się na nieograniczone możliwości i najlepsze funkcje. W końcu to smartfon z najszybszym procesorem A15 Bionic. Teraz możesz bez żadnych przeszkód obsługiwać najbardziej wymagające aplikacje.',
    },

    {
        id: 7,
        category: 'Telewizor',
        name:'Philips 58PUS7855',
        price: '1999.00',
        like: false,
        img: require('../../assets/prod/prod6.png'),
        about:
        'Wejdź w nowy wymiar oglądania. Telewizor Philips 58PUS7855 Smart TV ma wbudowaną funkcję Alexa, dzięki której możesz sterować głosem. Technologia Ambilight dba o nastrój podczas oglądania filmów, słuchania muzyki i grania w gry.',
    },

    {
        id: 8,
        category: 'Telewizor',
        name: 'LG OLED83C11LA',
        price: '23 999.00',
        like: true,
        img: require('../../assets/prod/prod7.png'),
        about:
        'Pozwól, by samoświecące piksele telewizora LG OLED83C11LA rozświetliły Twój świat. 83-calowy ekran stanie się portalem, który przeniesie Cię w centrum interaktywnej rozrywki.',
    },
];

export default product;