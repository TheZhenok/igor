let jwt = localStorage.getItem("jwt");
console.log(localStorage);
let xhr = new XMLHttpRequest();
xhr.open("GET", "localhost:8000/api/v1/auths", true);
xhr.setRequestHeader("Access-Control-Allow-Origin", "localhost:5500")
xhr.setRequestHeader("Authorization", `Usr ${jwt}`)
xhr.responseType = "json";

xhr.onload = () => {
    if (xhr.status == 200) {
        document.querySelector("#name").innerHTML = xhr.response;
    }
    else {
        document.querySelector("#name").innerHTML = 'Error';
    }
};
xhr.send();