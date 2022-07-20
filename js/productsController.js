//This file is connected to form-item-input (aka Admin page)
class ProductsController {
    constructor(currentId) {
        this.itemsArr = [];
        this.currentId = currentId || 0;
    }

    addItem(name, description, price, url) {
        //every new item/product added to array of items will have id++ increment
        this.currentId++;
        
        const item = {
            id: this.currentId,
            name: name,
            description: description,
            price: price,
            url: url,
        }
        this.itemsArr.push(item)
    }

    about(index) {
        return `ID: ${this.itemsArr[index].id}, Name: ${this.itemsArr[index].name}, Description: ${this.itemsArr[index].description}, Price: ${this.itemsArr[index].price},URL: ${this.itemsArr[index].url}`;
    }

    setLocalStorage(){
        window.localStorage.setItem("products", JSON.stringify(this.itemsArr));     
    }

}
let form = document.getElementById("product-input");
//console.log(form);
let productDisplay = document.getElementById('product-display');

const productList = new ProductsController();

function addProduct(e) {
  e.preventDefault();
  
  let name = form[0].value;
  let description = form[1].value;
  let price = form[2].value;
  let url = form[3].value;

  productList.addItem(name,description, price, url);
  
  //print out array of all items, also add the card to the page
  for(let i=0; i<productList.itemsArr.length; i++) {

    console.log(productList.about(i));
  }

  //add current product list to local storage
  productList.setLocalStorage();
  
}


let submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener('click', addProduct);

let clearBtn = document.getElementById("clear-button");
clearBtn.addEventListener('click', ()=> window.localStorage.clear());
