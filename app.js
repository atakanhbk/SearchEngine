const inputSearchText = document.getElementsByClassName("input-text")[0];
const inputSearchButton = document.getElementsByClassName("input-button")[0];

function AddEventListener() {
  inputSearchButton.addEventListener("click", ClickedInputButton);
}

function ClickedInputButton() {
  RequestTest();
}

function RequestTest() {
   
    const xhr = new XMLHttpRequest();
    var url = "https://dev-hry582eugf1n53r.api.raw-labs.com/json-programming-heroes";

    xhr.open("GET",url,true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          
            const response = JSON.parse(xhr.responseText);
         
          } else {
            console.error('HTTP request failed with status:', xhr.status);
          }
    }

    xhr.send();
}
AddEventListener();
