

//Gombok eltárolása változókba
var dogBtn = document.getElementById("dog-btn"); 
var catBtn = document.getElementById("cat-btn");
//Tároló elemek eltárolása változókba
var dogResult = document.getElementById("dog-result"); 
var catResult = document.getElementById("cat-result"); 

//Kutya és Macska lekéréséhez stzükséges click esemény elkészítése
catBtn.addEventListener("click", getRandomCat);
dogBtn.addEventListener("click", getRandomDog);

//Macska lekéréshez szükséges függvény elkészítése
function getRandomCat(){


    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://thatcopy.pw/catapi/rest/", true);

    xhr.onload = function(){

        if(xhr.status === 200){

            var data = JSON.parse(xhr.responseText);
            console.log(data);

            //Kép létrehozása és eltárolása a megfelelő tárolóelembe
            /*var img = document.createElement("img");
            img.setAttribute("src", data.url);
            catResult.innerHTML = img;
            */
           catResult.innerHTML = `<img src='${data.url}' alt='cat' />`;
        }
    }

    xhr.send();

    
}

//Kutya lekéréshez szükséges függvény elkészítése
function getRandomDog(){


    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://dog.ceo/api/breeds/image/random", true);

    xhr.onload = function(){

        if(xhr.status === 200){

            var data = JSON.parse(xhr.responseText);
            console.log(data);

            //Kép létrehozása és eltárolása a megfelelő tárolóelembe
            /*var img = document.createElement("img");
            img.setAttribute("src", data.url);
            dogResult.innerHTML = img;
            */
           dogResult.innerHTML = `<img src='${data.message}' alt='cat' />`;
        }
    }

    xhr.send();

    
}

