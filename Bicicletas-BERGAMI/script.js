//arreglo de productos
let products = {
    data: [
        {
            productName: "Calco Logo 50x50cm",
            category: "Calcomanias",
            price: "500",
            image: "https://www.creativefabrica.com/wp-content/uploads/2020/06/23/Bicycle-bike-cycling-logo-vector-Graphics-4434283-1.jpg"
        },
        {
            productName: "Bicicleta Competitive Wheels",
            category: "competicion",
            price: "60000",
            image: "https://www.sanferbike.com/videostv/wp-content/uploads/2020/05/Orbea-Gain-F30.jpg"
        },
        {
            productName: "Bicicleta Competitive Advance ",
            category: "competicion",
            price: "65000",
            image: "https://www.sanferbike.com/videostv/wp-content/uploads/2020/05/Orbea-Carpe-20.jpg"
        },

        {
            productName: "Bicicleta Mountain Pro XRZ ",
            category: "mountain",
            price: "70000",
            image: "https://www.sanferbike.com/videostv/wp-content/uploads/2020/10/Orbea-LAUFEY-H30-2021-600x400-1.jpg"
        },

    ],
};
//for que recorre y genera los cards en el html

for(let i of products.data) {
  //Card
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");

  //image 
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  //container
  let container = document.createElement("div");
  container.classList.add("container");

  //producto nombre
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName;
  container.appendChild(name);


  //precio
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  //producto boton
  let boton = document.createElement("button")
  boton.classList.add("btn");
  boton.classList.add("btn-danger");
  boton.innerText= "Agregar al Carrito 🛒";
  container.appendChild(boton);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);  
}

//filtrar por categorias funcion
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");

  //Activar boton 
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
     }
  });

  
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
    
}

//filtrar por busqueda
search = () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  
  //To display the cards which match the inputs
  elements.forEach((element, index) => {
    if (element.innerText.toUpperCase().includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
};
  
//Displaying all items initially
window.onload = () => {
    filterProduct("all");
};
  