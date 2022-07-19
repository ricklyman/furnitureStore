//this is connected to products.html

let productDisplay = document.getElementById('product-display');


function addItemCard(item) {
    let newCard = document.createElement('div');
    newCard.innerHTML = 
    `<div class="col mb-4">
    <div class="card h-100">
      
      <img src="${item.url}" class="card-img-top">
      
      <div class="card-body">
        <h5 class="card-title" id="product-name">${item.name}</h5>
        <p class="card-text" id="product-description">${item.description}</p>
        <h5 class="card-title" id="product-price">${item.price}</h5>
        <button type="button" class="btn btn-primary btn-sm" id="add-to-cart-btn">Add to Cart </button>

      </div>
    </div>
  </div>`;
    
    productDisplay.appendChild(newCard);
}

function loadLocalStorage() {

    let productsArr = JSON.parse(window.localStorage.getItem("products"));
    JSON.parse(window.localStorage.getItem('user'));
    console.log(productsArr);

    for(let i=0; i<productsArr.length; i++) {
        
            addItemCard(productsArr[i]);
          }
}

loadLocalStorage();
console.log("Done");


