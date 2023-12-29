// Lesson & Exercise on Fetching API Data

// fetch = Function used for making HTTP requests to fetch resources, (JSON style data,
//       images, files) 
//        Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs
//        to retrieve and send data asychnronously over the web.
//        ex: fetch(url, {options})
//        fetch(url, {method: "GET"})
//        fetch(url, {method: "PUT"})
//        fetch(url, {method: "POST"})
//        fetch(url, {method: "DELETE"})

// [1]
// Stawdard fetch response
// within 200 range = ok
// fetch("https://pokeapi.co/api/v2/pokemon/charizard")

//     // then statements (3 types in total)
//     // 1) // .then(response => console.log(response)) --> check the response on console
//     // 2) // .then(response => response.json()) // convert the response to json format
//     // 3)
//     .then(response => {
//         if(!response.ok) {
//             throw Error("Could not fetch resources.");
//         }
//         return response.json();
//     }) // convert the response to json format

//     // .then(data => console.log(data)) // check the data on console
//     .then(data => console.log(data.id)) // check the data's id on console.. output: 6


//     .catch(error => console.log(error));  // catch any errors


// [2]
// 404 error example
// fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
//     .then(response => {
//         if(!response.ok) {
//             throw Error("Could not fetch resources.");
//         }
//         return response.json();
//     }) // convert the response to json format

//     .then(data => console.log(data.id)) // check the data's id on console.. output: 6
//     .catch(error => console.log(error));  // catch any errors



// [3]
// Calling data
// fetchData();

// // Create a function to fetch data from the API using try catch exception handling

// // What is async?
// // The async keyword in JavaScript is used to define an asynchronous function. 
// // An asynchronous function is a function that can pause its execution at any point and
// // resume it later, allowing other code to run in the meantime.

// async function fetchData(){
//     try{
//         // Use the 'await' keyword to pause the execution of the function until the fetch 
//         // request is complete
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/mewtwo");
        
//         // Check if the response is not okay (status code outside the 200 range)
//         if(!response.ok) {
//             throw Error("Could not fetch resources.");
//         }

//         // Use the 'await' keyword to pause the execution of the function 
//         // until the response is converted to JSON format
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.error(error);
//     }
// }


// [4] 
// Fetching Data from API Website Implementation

async function fetchData(){
    try{
        // Get the pokemon name from the input field
        const pokemonName = document.getElementById("myPokemon").value.toLowerCase(); 
        
        // Use backtick for the fetch URL to insert the pokemon name variable
        // ${pokemonName} --> this is called string interpolation, it allows us to insert
        // a variable into a string. In this case we call pokemonName variable to get the
        // pokemon name from the input field.
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        // Check if the response is not okay (status code outside the 200 range)
        if(!response.ok) {
            throw Error("Could not fetch resources.");
        }

        // Use the 'await' keyword to pause the execution of the function 
        // until the response is converted to JSON format
        const data = await response.json();

        // Get pokemon sprite (sprite is a 2D image in game. ex: pokemon image)
        const pokemonSprite = data.sprites.front_default;

        // Get the image element from the HTML page
        const pokeImg = document.getElementById("pokeImg");

        // Set the image element's src attribute to the pokemon sprite
        pokeImg.src = pokemonSprite;

        // Display the image element on the page
        pokeImg.style.display = "block";

        // console.log(data); // check the data on console available or not.
    }
    catch(error){
        console.error(error);
    }
}