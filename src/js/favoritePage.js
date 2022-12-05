import {getBasket} from "./basket.js";
import {viewContent} from "./viewContent.js";
import {favoriteData} from "./favorite.js";


let row = document.querySelector('.basket__main-mainContent-assort')
let rowEmpty = document.querySelector('.basket__main-mainContent-assort-empty')


const getFavorites = () => {
    row.innerHTML = ''
    viewContent(favoriteData, row,getFavorites)

    if (!favoriteData.length) {
        rowEmpty.style.display = 'block'
    } else {
        rowEmpty.style.display = 'none'
    }

    getBasket();
}

getFavorites()





