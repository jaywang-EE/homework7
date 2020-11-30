var APIKey = "ff19f63a9c42e3960bd5a160f1f0c27f";

function isNumber(n) { 
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n); 
} 

function gettingJSON(){
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location;

    // Your code here.
    location = document.getElementById("location").value.trim();
    let city = location.split(",")[0].trim()
    let type = (isNumber(city))?"zip":"q";
    if (location == "") {
        location = "Ann Arbor";
    }
    
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let fomat;

    // Your code here.
    format = (document.getElementById("fahrenheit").checked)?"imperial":"metric";

    console.log("Format is :" + format);

    //set the query  
    let query;
    // Your code here.  
    query = "https://api.openweathermap.org/data/2.5/weather?" + type + "=" + location + "&appid=" + APIKey + "&units=" + format;

    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.
    // fetch(query)
    // .then((resp) => resp.json())
    // .then(function(data) {
    //     // let data
    //     // <p>The temperature in <span id = "loc"></span> is currently <span id = "temp"></span>.</p>
    //     // document.getElementById("loc").innerHTML = data.main.name;
    //     // console.log(data.main.temp)
    //     // console.log(data.weather[0].description)
    //     // console.log(data.main.name)
    // })
    // .catch(function(error) {
    //     console.log(error);
    // });

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        // console.log("JSON");
        // console.log(json);
        loc = json.name;

        let weather = json.weather[0];
        temp = json.main.temp + " with " + weather.description;
        tempImg = "http://openweathermap.org/img/wn/" + weather.icon + ".png";
        
        document.getElementById("forecast").style.display = "block";

        document.getElementById("loc").innerHTML = loc;

        document.getElementById("temp").innerHTML = temp;
        
        document.getElementById("tempImg").src = tempImg;
        document.getElementById("tempImg").alt = weather.description;
    });
}


