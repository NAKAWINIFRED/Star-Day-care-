let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active');
})
let products = [
    {
       id: 1,
       name: 'Cow Girl doll',
       image: '/assets/cowgirldoll.png',
       price: 12000
    },
    {
        id: 2,
        name: 'Woody action figure',
        image: '/assets/woody.png',
        price: 22000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '/assets/descargagratis.png',
        price: 22000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '/assets/buzzlightyear.png',
        price: 22000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '/assets/bopeep.png',
        price: 2200
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '/assets/weewonderfuls.png',
        price: 2200
    },
];
let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
           <img src = "${value.image}"/>
           <div class="title">${value.name}</div>
           <div class = "price">${value.price.toLocaleString()}</div>
           <button onclick="addToCard(${key})">Sell</button>
        
        `;
        list.appendChild(newDiv);
    

    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
       totalPrice = totalPrice + value.price;
       count = count + value.quantity;

       if(value != null){
        let newDiv = document.createElement('li');
        newDiv.innerHTML = `
             <div><img src="${value.image}"/></div>
             <div>${value.name}</div>
             <div>${value.price.toLocaleString()}</div>
             <div>${value.quantity}</div>
             <div>
                 <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                 <div class="count">${value.quantity}</div>
                 <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>

             </div>    

        `;
        listCard.appendChild(newDiv);
       }
    })
    total.innerHTML = totalPrice.toLocaleString();
    quantity.innerText = count;
}
