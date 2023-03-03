// selecting dom element

const btn = document.querySelector("#boton");
const tabla = document.querySelector('#tab');

// adding event listener to button
btn.addEventListener("click", fetchHandler);

// selecting loading div
const loader = document.querySelector("#wait");

// showing loading
function displayLoading() {
    loader.classList.add("display");
    btn.disabled = true;
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
   
}

// dummy url


function fetchHandler(event) {
    displayLoading();
    //const url = `http://localhost:8080/api/customers`;
    const url = `https://ch22-ecommerce.up.railway.app/api/customers`;
    fetch(url)
    .then( response => {
        console.log("Status" + response.status);
       
        return  response.json();
        
    })
   
    .then( data => {
        setTimeout (()=>{
        console.log(data);
       imprimir =  JSON.stringify(data);
       //imprimir =  data.data;
       console.log(Object.keys(data[0]));
       console.log("hasta aqwui");
       
       hideLoading();
       
       
       let head = tabla.insertRow();
        console.log("a ver");
       let columnas = Object.keys(data[0]);
       columnas.forEach(column =>{
        //let row = document.getElementsByTagName("tr")
        head.insertCell().outerHTML = `<th>${column}</th>`;
        
       })
       
        data.forEach((element) => {
          //  console.log(element)
          let head = tabla.insertRow();
            Object.values(element).forEach((prop,indx) =>{
                
                console.log(indx)
                if(indx == 4 ){
                    head.insertCell().outerHTML = `<td> <img src='${prop}'/></td>`;
                }
                else{
                    head.insertCell().outerHTML = `<td>${prop}</td>`;
                }

            })
        }); {

        };

       
    },10
    );}
    
    
    )
    .catch(error => console.log(error));
    /* setTimeout(()=>{
        console.log("borrar")
        tabla.innerHTML = "";
        btn.disabled = false;
    },7000) */
}
