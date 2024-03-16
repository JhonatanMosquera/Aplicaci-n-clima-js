let api_key = '3f1a55fc76905f3ae1509ad34bbff549'
let diferenciaKevin = 273.15


document.getElementById('botonBusqueda').addEventListener('click',()=>{

    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad)
    {
        fetchDatoClima(ciudad)
    }
})

function fetchDatoClima(ciudad){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    
    const divDatos = document.getElementById('datosClima')
    divDatos.innerHTML = ''

    const nombreCiudad = data.name
    const NombrePais = data.sys.country
    const temperaturaCiudad = data.main.temp
    const humedaciudad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon
    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${nombreCiudad}, ${NombrePais} `

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperaturaCiudad-diferenciaKevin)}°C`

    const humedadInfo = document.createElement('img')
    humedadInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png `

    const iconoInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es de ${humedaciudad} `

    const descripcionInfo = document.createElement('p')
     descripcionInfo.textContent = `La descripcion meteorológica es: ${descripcion}`

    divDatos.appendChild(ciudadTitulo)
    divDatos.appendChild(temperaturaInfo)
    divDatos.appendChild(humedadInfo)
    divDatos.appendChild(humedadInfo)
    divDatos.appendChild(descripcionInfo)
}




//descripcion  ------------------------nice
//la ciudad siempre es la misma ------nide
// al lado de la ciudad que aparesca el pais
//aparesca la humedada
