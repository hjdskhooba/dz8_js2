
export let favoriteData = [

]


if (localStorage.getItem('favorite') !== null) {
    favoriteData = JSON.parse(localStorage.getItem('favorite'));
}

export const addFavorite = (product) => {
    favoriteData = [...favoriteData, product]
    console.log(favoriteData)
}

export const deleteFavorite = (id) => {
    favoriteData = favoriteData.filter((item) => item.id !== +id)
}

export const setLocalStorageFavorite = () => {
    localStorage.setItem('favorite', JSON.stringify(favoriteData));
}

