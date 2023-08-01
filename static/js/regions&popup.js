
window.onload = function(){

    const continentSelect = document.getElementById("continent_input");
    const countrySelect = document.getElementById("country_input");
    const citySelect = document.getElementById("city_input");

    
    var last_continent_lng = "14.437800";
    var last_continent_lat = "50.075539";

    flaskApiHost = "http://127.0.0.1:5000"

    continentSelect.addEventListener("change", function (){
        var continent = continentSelect.value;


        switch(continent){
            case "Europe":
                map.flyTo({
                    center: [14.437800, 50.075539], zoom: 3
                });
                break;
            case "Asia":
                map.flyTo({
                    center: [116.407394, 39.904202], zoom: 3
                });
                break;
            case "North America":
                map.flyTo({
                    center: [-98.484245, 39.011902], zoom: 3
                });
                break;
            case "South America":
                map.flyTo({
                    center: [-57.575928, -25.263741], zoom: 3
                });
                break;
            case "Oceania":
                map.flyTo({
                    center: [121.183957, -1.728888], zoom: 3
                });
                break;
            case "Africa":
                map.flyTo({
                    center: [20.043211, 5.439168], zoom: 3
                });
                break;
            case "none":
                map.flyTo({
                    center: [14.437800, 50.075539], zoom: 2
                });
        }


        var url = '/get_countries?continents="'+continent+'"';
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.responseType = 'json';
        var countries;
        var cities_in_continent;

        xhr.onload = function() {
        
                
            var status = xhr.status;
            if (status == 200) {
                myresponse = xhr.response;
                console.log(myresponse);
                
                countries = xhr.response['data'];
                console.log(countries );

            } else {
                console.log(status);
                console.log(xhr.response);
            }
        };
        xhr.send(JSON.stringify({"function": "continent", "data":[continent]})); //country_input.value

    });

    countrySelect.addEventListener("change", function (){

        
    });

    citySelect.addEventListener("change", function (){

        var city = citySelect.value;

        switch(city){
            case "Berlin":
                map.flyTo({
                    center: [13.4050, 52.5200], zoom: 9
                });
                break;
            case "Brno":
                map.flyTo({
                    center: [16.6068, 49.1951], zoom: 8
                });
                break;
            case "Busan":
                map.flyTo({
                    center: [129.0689, 35.210], zoom: 8
                });
                break;
            
            case "Frankfurt":
                map.flyTo({
                    center: [8.6821, 50.1109], zoom: 8
                });
                break;
            case "Geneva":
                map.flyTo({
                    center: [6.1432, 46.2044], zoom: 8
                });
                break;
            case "Incheon":
                map.flyTo({
                    center: [126.7052, 37.4563], zoom: 8
                });
                break;
            case "Kyoto":
                map.flyTo({
                    center: [135.7681, 35.0116], zoom: 8
                });
                break;
            case "Lyon":
                map.flyTo({
                    center: [ 4.8357, 45.7640], zoom: 8
                });
                break;
            case "Marseille":
                map.flyTo({
                    center: [5.3698, 43.2965], zoom: 8
                });
                break;
            case "Munich":
                map.flyTo({
                    center: [11.5820, 48.1351], zoom: 8
                });
                break;
            case "Osaka":
                map.flyTo({
                    center: [135.5023, 34.6937], zoom: 8
                });
                break;
            case "Ostrava":
                map.flyTo({
                    center: [ 18.2625, 49.8209], zoom: 8
                });
                break;
            case "Prague":
                map.flyTo({
                    center: [ 14.4378,  50.0755], zoom: 8
                });
                break;
            case "Seoul":
                map.flyTo({
                    center: [126.9918, 37.5519], zoom: 8
                });
                break;
            case "Singapore":
                map.flyTo({
                    center: [103.8198, 1.3521], zoom: 8
                });
                break;
            case "Tokyo":
                map.flyTo({
                    center: [ 139.6503, 35.6762], zoom: 8
                });
                break;
            case "none":
                map.flyTo({
                    center: [14.437800, 50.075539], zoom: 2
                });
        }
    });






    const popup_button = document.getElementById("popup_btn");

    popup_button.addEventListener("click", function (){

        document.getElementById("nocode_popup").style.display = "";
    });

    const close_btn = document.getElementById("close");

    close_btn.addEventListener("click", function (){

        document.getElementById("nocode_popup").style.display = "none";
    });

}
    