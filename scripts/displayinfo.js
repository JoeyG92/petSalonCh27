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
    pets:[
        {//first pet
            name:"Scooby",
            age:50,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            ownerName:"Shaggy",
            contactPhone:"888-888-8888"
        },
        {
            name:"Scarlett",
            age:1,
            gender:"Female",
            breed:"Lancashire",
            service:"Nail Trim",
            ownerName:"Joey",
            contactPhone:"888-888-8889" 
        },
        {
            name:"Mike Hat",
            age:10,
            gender:"Male",
            breed:"German Shephard",
            service:"Wash",
            ownerName:"Mike",
            contactPhone:"888-888-8887"
        }
    ]
}
console.log(petSalon.address.zip);
console.log(petSalon.pets.length);
console.log(petSalon.pets[0].service);
function displaySalonInfo(){
    document.getElementById("footer-info").innerHTML=`Welcome ${petSalon.name} in ${petSalon.address.city}`;
}
function displayPetNames(){

}