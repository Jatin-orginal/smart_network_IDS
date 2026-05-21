// Start Monitoring Button Animation

document.getElementById("monitorBtn").addEventListener("click", () => {

    alert("Network Monitoring Started Successfully!");

});


// URL Checker

function checkURL(){

    let url = document.getElementById("urlInput").value;

    fetch('/check_url', {

        method:'POST',

        headers:{
            'Content-Type':'application/json'
        },

        body:JSON.stringify({url:url})

    })

    .then(response => response.json())

    .then(data => {

        let resultDiv = document.getElementById("result");

        resultDiv.innerHTML = `
            <p>Status: <strong>${data.status}</strong></p>
            <p>${data.message}</p>
        `;

        if(data.status === "Unsafe"){
            resultDiv.style.color = "red";
        }
        else{
            resultDiv.style.color = "lightgreen";
        }

    });

}