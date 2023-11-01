function doTheThing() {

    const city = document.querySelector(".input-box").value

    const key = 'd91044eff0ad7c815c9be5d8a0ea0a8f' 

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`

    fetch(url)
    .then(response => {
        if (response.status === 200) {
        return response.json(); 
        } else {
        throw new Error('haha did not work');
        }
    })
    .then(data => {
        document.querySelector('.data').innerHTML = `
        
        Name: ${data.name} <br>
        coordinates => latitude: ${data.coord.lat} longitude: ${data.coord.lon} country: ${data.sys.country } <br>
        temperature => feels like: ${data.main.feels_like} real: ${data.main.temp} 
        temp max: ${data.main.temp_max} temp min: ${data.main.temp_min}

        `

        
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}