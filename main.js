document.addEventListener('DOMContentLoaded', () =>{
    const body = document.querySelector('body');
    const display = document.querySelector('.display');
    const quokka = new Quokka(display);

    body.addEventListener('click', () =>{
        
        quokka.changeQuokka()});

    let getDataPromise = fetch('https://api.api-ninjas.com/v1/animals?name=Quokka',{ 
    method: "GET",
    headers: {
        "X-Api-Key":'9/wOeB8TGvTtHVjgc6d/6w==Q4pg70OMDZXcxQaZ'}
    })
    getDataPromise = getDataPromise.then(data => data.json());
    getDataPromise.then(data => populateInformation(data));
});

function populateInformation(data){
    const messageCache = document.getElementById('information');
    let curr = document.createElement('div');
    messageCache.appendChild(curr);
    const informationArray = data[0];
    // const characteristics = information.characteristics;
    // const prey = characteristics.prey;

    curr.innerText = data[0];
}
