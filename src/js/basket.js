

let basketBtn = document.querySelector('.header__links-basket');
let basketContent = document.querySelector('.basket');
let basketList = document.querySelector('.basket__cards');
let totalBasket = document.querySelectorAll('.total');
let percentBasket = document.querySelector('.percent');
export let basketData = [];

if (localStorage.getItem('basket') !== null) {
    basketData = JSON.parse(localStorage.getItem('basket'));
}


const setLocalStorage = () => {
    localStorage.setItem('basket', JSON.stringify(basketData));
};

export const addBasket = (product) => {
    emptyBasket()
    basketData = [
        ...basketData,
       product
    ];
    setLocalStorage()
}

export const deleteBasket = (item, id) => {
    basketData = basketData.filter((el) => el.id !== +item.dataset.id);
    if (
        item.classList.contains('removeCartInBasket') &&
        !basketData.length
    ) {
        basketContent.classList.remove('show')
    }
    setLocalStorage()
}

export const getBasket = () => {
    emptyBasket()
    basketList.innerHTML = ''
    basketData.forEach((item) => {
        basketList.innerHTML += `
            <div class="basket__card">
                <img src="${item.images}" alt="${item.title}" class="basket__card-img">
                <h3 class="basket__card__name">${item.title}</h3>
                <span class="basket__card__sum">${item.price} руб.</span>
                <img data-id="${item.id}" src="./src/icons/X.svg" alt="" class="basket__card__X removeCart removeCartInBasket">
              </div>
            </div>    
`
    });

    Array.from(totalBasket).forEach((item) => {
        item.textContent = basketData.reduce((acc, rec) => {
            return acc + +rec.price;
        }, 0);
    });

    percentBasket.textContent =
        (basketData.reduce((acc, rec) => {
                return acc + +rec.price;
            }, 0) /
            100) *
        5;
};

getBasket();

function emptyBasket(){
    if(!basketData.length){
        basketContent.innerHTML = 
        `
        <div class="basketContent">
        <div>
        <h2 style="padding-top: 10px;" class="basket__title">Корзина</h2>
        </div>
        <div class="basket__bottom">
        <img class="emptyBasket-img" src="./src/images/image 8.png" alt="">
        <div class="basket__text">
        <h4 style="font-size: 16px;" class="basket__titlecheat">Корзина пустая</h4>
        </div>
        <div class="emptyBasket__text">
        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
        </div>
        <button onclick="location.reload()" style="cursor: pointer" class="emptyBasket__btn"> <-- Вернуться назад</button>
        </div></div>
        `
    }
}

basketBtn.addEventListener('click', () => basketContent.classList.add('show'));
document.querySelector('.basket').addEventListener('click', (e) => {
    if (e.target.classList.contains('basket')) {
        basketContent.classList.remove('show');
    }
});
