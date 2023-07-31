
let botonPpl =document.getElementById("boton1"); // boton de browser
let title = document.getElementById("title");// tituo de info de colores
let arco = document.getElementById("arco");
let sofa = document.getElementById("imgSofa");
let boton_colores = document.getElementsByClassName("color-fill");// cada boton de color 
let colorText = document.getElementById("color-text");// color del titulo del lado izquierdo


boton_colores[0].onclick=()=>{  // primer boton
    title.innerText = "Organge Furniture";
    arco.style.border = "48px solid #8E6841"
    sofa.src = "img/sofa-naranja.png";
    colorText.style.color="#8E6841";
    boton1.style.backgroundColor="#8E6841";

    // arco.style.background="black";
    // boton.style.background="blue";
    // nose.style.width=`${randomNumber()}vh`
}

boton_colores[1].onclick=()=>{  // segundo boton
    title.innerText = "Green Furniture";
    arco.style.border = "48px solid #585934"
    sofa.src = "img/sofa.png";
    colorText.style.color="#585934";
}

boton_colores[2].onclick=()=>{  // tercer boton
    title.innerText = "Purple Furniture";
    arco.style.border = "48px solid #50418E"
    sofa.src = "img/sofa-piel.png";
    colorText.style.color="#50418E";
}


boton_colores[3].onclick=()=>{  // cuarto boton
    title.innerText = "Gray Furniture";
    arco.style.border = "48px solid #000000"
    sofa.src = "img/sofa-negro.png";
    colorText.style.color="#000000";
}

