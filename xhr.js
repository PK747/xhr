const getCountries = () => {
//creating the request object
const xhr = new XMLHttpRequest();
//reading the data
//Method, URL
xhr.open("GET", "https://restcountries.com/v3.1/all"); //opens the url with get request method
xhr.send(); //sends the request object

xhr.responseType = "json" //data format

//to print the data on console,
xhr.onload = () => {
    const countries = xhr.response;
    const countrynames = countries.map((country) => country.name.common);

    // var spac = countries.filter((cn) => cn.name.common == "Colombia");
    var spac1 = countries.filter((cn) => cn.languages.spa == "Spanish");
    // const spac = countries.reduce((spa1,ctr) => spa1.languages == "spa:Spanish" ? spa1 : "query failed" );


    const onecplus = countries.filter((coun) => coun.population >= 10000000);

    
    console.log("Full Data", countries, countrynames);

    console.log("Spanish Speaking countries", spac);
    
    console.log("1c plus population", onecplus);
    
    };
};

getCountries();

