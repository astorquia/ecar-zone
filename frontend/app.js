const ENDPOINTS = {
    BASE: 'http://localhost:3000/',
    ESTACIONES: 'estaciones',
    VALORACIONES: 'valoraciones',
}

function getEstaciones(){
    const HTTP = new XMLHttpRequest();  // Es una clase nativa de javascript que permite realizar
                                    // peticiones http
    HTTP.open("GET", ENDPOINTS.BASE + ENDPOINTS.ESTACIONES);
    HTTP.send();
    HTTP.onreadystatechange = (e) => {
        if (HTTP.readyState == 4 && HTTP.status == 200) {
            const response = JSON.parse(HTTP.responseText);
            console.log(HTTP.responseText);
        }
    }
}
