let itemClick = document.querySelectorAll(".admin__item");
let adminInfo = document.querySelectorAll(".admin__info");

for (let i = 0; i < itemClick.length; i++) {
    itemClick[i].addEventListener("click", (e) => {
        let itemClickChildren = e.target.parentElement.children;
        if (itemClick[i].textContent === 'Products') {
            getDataProducts();
        } else if (itemClick[i].textContent === 'Users') {
            getDataUsers()
        }
        for (let j = 0; j < itemClickChildren.length; j++) {
            itemClickChildren[j].classList.remove("admin__item-active");
        }
        itemClick[i].classList.add("admin__item-active");
        let adminInfoChildren = adminInfo;
        for (let t = 0; t < adminInfoChildren.length; t++) {
            adminInfoChildren[t].classList.remove("admin__info-active")
        }
        adminInfo[i].classList.add("admin__info-active");
    })
}
let shoes = document.querySelector('.shoes');

const getDataProducts = () => {
    shoes.innerHTML = '';
    fetch('http://localhost:8080/shoes')
        .then((res) => res.json())
        .then((res) => {
            res.forEach((item) => {
                shoes.innerHTML +=
                    `
                  <tr class="admin__table-desc">
                    <td class="admin__table-info">${item.id}</td>
                    <td class="admin__table-info">${item.title}</td>
                    <td class="admin__table-info">${item.price}</td>
                    <td class="admin__table-info">${item.gender}</td>
                    <td class="admin__table-info">${item.brand}</td>
                    <td class="admin__table-info">${item.category}</td>
                    <td class="admin__table-info"><button class="admin__table-btn add">Change</button></td>
                    <td class="admin__table-info"><button data-id="${item.id}" class="admin__table-btn remove remove_admin">Remove</button></td>
                </tr>
                  `
            })

            let removeBtns = document.querySelectorAll('.remove_admin')

            Array.from(removeBtns).forEach((item) => {
                item.addEventListener('click', () => {
                    fetch(`http://localhost:8080/shoes/${item.dataset.id}`, {
                        method: 'DELETE'
                    }).then(() => getDataProducts())
                        .catch(() => alert('Не удалось удалить'))
                })
            })


        })
};


let getUsers = document.querySelector('.users')
let overlay = document.querySelector('.overlay')

const getDataUsers = () => {
    getUsers.innerHTML = '';
    fetch('http://localhost:8080/users')
        .then((res) => res.json())
        .then((res) => {
            res.forEach((item) => {
                getUsers.innerHTML +=
                    `
                     <tr class="admin__table-desc">
                     <td class="admin__table-info">${item.id}</td>
                     <td class="admin__table-info">${item.email}</td>
                     <td class="admin__table-info">${item.login}</td>
                     <td class="admin__table-info">3 orders</td>
                     <td class="admin__table-info"><button data-id="${item.id}" class="admin__table-btn change_user add">Change</button></td>
                     <td class="admin__table-info"><button class="admin__table-btn remove">Ban User</button></td>
                     </tr>
                  `
            })
            let changeUser = document.querySelectorAll('.change_user')
            Array.from(changeUser).forEach((item) => {
                item.addEventListener('click', (e) => {
                    overlay.style.display = 'flex'
                })
            })
            overlay.addEventListener('click', (e) => {
                if (e.target.className === 'overlay') {
                    overlay.style.display = 'none'
                }
            })
        })
};


