const getUsersfetch =  (page = 1) => {

    const url = `https://reqres.in/api/users?page=${page}`;

    fetch(url)
        .then( response => {
            console.log("Status" + response.status);
            return  response.json();
        })

        .then( data => {
            console.log(data.data);
           imprimir =  JSON.stringify(data.data);
           //imprimir =  data.data;

            return valor;
        })
        .catch(error => console.log(error));
};
console.log("sdad");
let imprimir;
getUsersfetch();

new Promise((resolve, reject) => {
    setTimeout( ()=> {
        console.log(`Asíncrono - Pásele en ${imprimir}`) }, 2000);
})


console.log("valor");
