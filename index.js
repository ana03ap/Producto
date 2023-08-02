
let botonPpl =document.getElementById("boton1"); // boton de browser
let title = document.getElementById("title");// tituo de info de colores
let arco = document.getElementById("arco");
let sofa = document.getElementById("imgSofa");
let boton_colores = document.getElementsByClassName("color-fill");// cada boton de color 
let colorText = document.getElementById("color-text");// color del titulo del lado izquierdo
let colorBorder =  document.getElementsByClassName("color-border");
// let ij = document.getElementById("ij");// color del titulo del lado izquierdo

// const he = (x)=>{
//     console.log("hello " + x);
// }


//RESETEAR TODOS BORDES

function border (){

    colorBorder[0].style.border = "1px solid transparent";
    colorBorder[1].style.border = "1px solid transparent";
    colorBorder[2].style.border = "1px solid transparent";
    colorBorder[3].style.border = "1px solid transparent";
    

}

//crear la funcion para cambiar los colores y pasarlos parametros 
function btnColores (color,hexColor,src, numArray){
    border ();
    title.innerText =  `${color} Furniture`;
    arco.style.border = `48px solid ${hexColor} `;
    sofa.src = src;
    colorText.style.color =hexColor;
    colorBorder[numArray].style.border = "1px solid black";  
    
}

// llamar las funciones para cada uno de los botones 
boton_colores[0].onclick= () => btnColores("Orange", "#8E6841", "img/sofa-naranja.png", 0); // primer boton
boton_colores[1].onclick= () => btnColores("Green", "#585934", "img/sofa.png", 1); // segundo boton
boton_colores[2].onclick= () => btnColores("Purple", "#50418E", "img/sofa-piel.png", 2); // tercer boton
boton_colores[3].onclick= () => btnColores("Gray", "#000000", "img/sofa-negro.png", 3); // cuatro boton




// boton_colores[0].onclick=()=>{  // primer boton
//     title.innerText = "Orange Furniture";
//     arco.style.border = "48px solid #8E6841"
//     sofa.src = "img/sofa-naranja.png";
//     colorText.style.color="#8E6841";
//     boton1.style.backgroundColor="#8E6841";
//     colorBorder[0].style.border = "1px solid black"
//     // arco.style.background="black";
//     // boton.style.background="blue";
//     // nose.style.width=`${randomNumber()}vh`
// }

