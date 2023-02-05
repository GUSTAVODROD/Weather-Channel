let input= document.querySelector("input")

let button= document.querySelector("button")

let container= document.querySelector(".container")

let city= document.getElementById("ciudad")

let temp= document.getElementById("temperatura")

let imagen= document.querySelector("img")

let descripcion= document.getElementById("descripcion")




button.addEventListener("click",function(){

    let ciudad=input.value

    filtroCiudad(ciudad)
  
})
/* para activar con ENTER
input.addEventListener("keydown", function(e){
    
    let ciudad=input.value

    if(e.keycode==13){
        
        filtroCiudad(ciudad)

         
         
        s
    }

})
*/
function cargarCiudad(ciudad){
 
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=en`, function(data){

        console.log(data)
        container.style.visibility = "visible"

        city.textContent= data.name

        temp.innerHTML= data.main.temp+'<sup>°C</sup>'

        imagen.src= `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        descripcion.textContent= data.weather[0].description

        input.value=""

    }
    ).fail(function(){
        alert("City not found.")

        input.value=""

    }
    )

}

function filtroCiudad(ciudad){

    if(ciudad===""){
        alert("You must enter the name of a city, respecting capital letters".)

    }else{
        let arreglo= ciudad.split(" ")
        ciudad= arreglo.join("%20")
       
        cargarCiudad(ciudad)
       
    }

}
