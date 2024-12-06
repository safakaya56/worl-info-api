

const btn = document.getElementById("btnSearch").addEventListener("click", () => {

    const input = document.getElementById("txtSearch");

    const request = new XMLHttpRequest();

    request.open('GET', `https://restcountries.com/v3.1/name/${input.value}`);
    request.send();

    request.onload = () => {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            Getcomment(data);
        }
        else {
            alert("Country not found or incorrect entry!");
            input.value = "";
        }
    }

})


const Getcomment = (data) => {

    const item = document.createElement("div");

    const firstLanguage = Object.values(data[0].languages)[0];
    const currencies = Object.values(data[0].currencies)[0].name;

    item.innerHTML =
        `<div class="card rounded-4 mt-4 shadow-lg">
            <img src="${data[0].flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title" style="text-align: center; font-size:30px" >${data[0].name.common} </h5>
            <ul class="list-group list-group-flush text-align-center">
                <li class="list-group-item"><strong>Languages: </strong> ${firstLanguage} </li>
                <li class="list-group-item"><strong>Population: </strong> ${data[0].population}</li>
                <li class="list-group-item"><strong>Region: </strong> ${data[0].region}</li>
                <li class="list-group-item"><strong>Capital: </strong> ${data[0].capital} </li>
                <li class="list-group-item"><strong>Currencies: </strong> ${currencies} </li>
            </ul>
            </div><strong></strong>
        </div>`;



    const cmntContainer = document.querySelector(".commentContainer");
    cmntContainer.innerHTML = " ";
    cmntContainer.appendChild(item);
}