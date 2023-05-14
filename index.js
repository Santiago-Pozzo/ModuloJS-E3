const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

//-----------------Constantes---------------------------
const form = document.querySelector(".formPizza");
const boxCard = document.querySelector(".resultBox");


//-----------------Funciones----------------------------
    //Validar entrada
    const isValid = (input) => {
      if (input >= 1 && input <= pizzas.length) {
        return true;
      } else {
        return false;
      }
      //ACLARACION PARA LA CORRECCIÓN: El input de tipo number (que se solicitó en la consinga) no permite ingresar otros caracteres y tira una alerta si ingresamos numeros que no sean enteros, por lo que no fue necesario agregar otras validaciones y sus respectivos mensajes de error  
    }

    //Funcion generadora de la tarjeta de error
    const generarError = () => {
      boxCard.innerHTML = `
        <div class="errorBox" id="errorBox">
          <h3 class="errorBox__title">Error!</h3>
          <p class="errorBox__message">Debe ingresar un número entero entre 1 y ${pizzas.length}</p>
        </div>   
      `
    }

    //Función Generadora de la tarjeta de la pizza
    const generarCard = (input) => {
      let i = input - 1;
      boxCard.innerHTML = `
        <div class="pizzaCard">
          <h3 class="pizzaCard__title">${pizzas[i].nombre}</h3>
          <img src="${pizzas[i].imagen}" alt="imagen de la ${pizzas[i].nombre}" class="pizzaCard__img">
          
          <div class="pizzacard__info">
            <p class="info__description">Los ingresientes de esta variedad son: ${pizzas[i].ingredientes}</p>
            <p class="info__price">Precio: $${pizzas[i].precio}</p>
          </div>
        </div>    
      `
    }


      const getValue = (e) => {
        e.preventDefault();
        inputNumber = document.querySelector("#input").value.trim();
        if (isValid(inputNumber)){
            generarCard(inputNumber);
            document.querySelector(".errorBox").classList.add("hiden");
            
        } else {
            generarError();
            document.querySelector(".pizzaCard").classList.add("hiden");
        }
      }


//-----------------Init----------------------------------
function init() {
  form.addEventListener("submit", getValue);
} 

init();



