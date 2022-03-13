//create an obj literal for the pet salon
const petSalon={
    name:"The Fashion Pet",
    address:{
        street:"Ave University",
        number:"262",
        zip:"22115",
        city:"Tijuana",
        state:"B.C."
    },
    workingHours:{
        open:"9:00 am",
        close:"5:00 pm"
    },//Create pets array
    pets:[]
}
//console.log(petSalon.address.zip);
//console.log(petSalon.pets.length);
//console.log(petSalon.pets[0].service);
function displaySalonInfo(){
    document.getElementById("footer-info").innerHTML=`Welcome to ${petSalon.name} in ${petSalon.address.city}`;
};
function displayPetNames(){
    document.getElementById("petNames1").innerHTML=`<p><b>Pet Name:</b> ${petSalon.pets[0].name}</p>`;
    document.getElementById("petNames2").innerHTML=`<p><b>Pet Name:</b> ${petSalon.pets[1].name}</p>`;
    document.getElementById("petNames3").innerHTML=`<p><b>Pet Name:</b> ${petSalon.pets[2].name}</p>`;
};
function displayPets(){
    //travel the array

    //create the template

    //display the tmp on the html
}