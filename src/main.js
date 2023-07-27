document.addEventListener('DOMContentLoaded', () =>{
    const body = document.querySelector('body');
    const display = document.querySelector('.display');
    const quokka = new Quokka(display);
    
    const quokkaGif = new QuokkaGif(display);
    quokkaGif.cycleQuokka();

   

    button.addEventListener('click', () =>{
        
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
    const messageCache2 = document.getElementById('information2');
    const messageCache3 = document.getElementById('information3');
    
    let curr = document.createElement('div');
    messageCache.appendChild(curr);
    curr.innerText = "Name: " + data[0].name;

    curr = document.createElement('div');
    messageCache.appendChild(curr);
    curr.innerText = "Prey: " + data[0].characteristics.prey;


    curr = document.createElement('div');
    messageCache.appendChild(curr);
    curr.innerText = "Predators: " + data[0].characteristics.predators;

    curr = document.createElement('div');
    messageCache.appendChild(curr);
    curr.innerText = "Features: " + data[0].characteristics.most_distinctive_feature;


    let curr2 = document.createElement('div');
    messageCache2.appendChild(curr2);
    curr2.innerText = "Top Speed: " + data[0].characteristics.top_speed;

    curr2 = document.createElement('div');
    messageCache2.appendChild(curr2);
    curr2.innerText = "Weight: " + data[0].characteristics.weight;


    curr2 = document.createElement('div');
    messageCache2.appendChild(curr2);
    curr2.innerText = "Size: " + data[0].characteristics.length;

    curr2 = document.createElement('div');
    messageCache2.appendChild(curr2);
    curr2.innerText = "Home: " + data[0].characteristics.location;


    let curr3 = document.createElement('div');
    messageCache3.appendChild(curr3);
    curr3.innerText = "Scientific Name: " + data[0].taxonomy.scientific_name;

    curr3 = document.createElement('div');
    messageCache3.appendChild(curr3);
    curr3.innerText = "Group Behavior: " + data[0].characteristics.group_behavior;


    curr3 = document.createElement('div');
    messageCache3.appendChild(curr3);
    curr3.innerText = "Baby Name: " + data[0].characteristics.name_of_young;

    curr3 = document.createElement('div');
    messageCache3.appendChild(curr3);
    curr3.innerText = "Slogan: " + data[0].characteristics.slogan;
    

    //const fullData = data[0];
    //fullData[characteristics];

    // const characteristics = information.characteristics;
    // const prey = characteristics.prey;
   
    //curr.innerText = "Name: " + fullData.name;

    //curr.innerText = "Prey: " + fullData.characteristics.prey;
    
    //curr.innerText = "Prey: " + fullData.characteristics.prey;

}
