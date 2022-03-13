function Pet(name,age,gender,breed,service,ownerName,phoneNumber){
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petBreed=breed;
    this.petService=service;
    this.petOwnerName=ownerName;
    this.phoneNumber=phoneNumber;
}

let inputPetName= document.getElementById("txtPetName");
let inputPetAge= document.getElementById("txtPetAge");
let inputPetGender=document.getElementById("txtPetGender");
let inputPetBreed= document.getElementById("txtPetBreed");
let inputPetService=document.getElementById("txtService");
let inputOwnerName=document.getElementById("txtOwnerName");
let inputPhoneNumber=document.getElementById("txtPhoneNumber");

function isValid(aPet){
    //return false when the pet is not valid
    //return true if the pet is valid
    let valid=true;
    //return the error in the console
    if(aPet.petName.length==0){
        valid=false;
        console.log("Invalid name");
    }
    if(aPet.petAge.length==0){
        valid=false;
        console.log("Invalid age");
    }
    if(aPet.petService.length==0){
        valid=false;
        console.log("Invalid service");
    }
    if(aPet.petOwnerName.length==0){
        valid=false;
        console.log("Invalid owner name");
    }
    if(aPet.phoneNumber.length==0){
        valid=false;
        console.log("Invalid phone number")
    }
    //validations
    return valid;
}
function register(){
    console.log(inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetBreed.value,inputPetService.value,inputOwnerName.value,inputPhoneNumber.value);

    let thePet = new Pet(inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetBreed.value,inputPetService.value,inputOwnerName.value,inputPhoneNumber.value);
    console.log(thePet);
    if(isValid(thePet)){
        petSalon.pets.push(thePet);
        displayPets();
    }
}
function displayPets(){
    let tmp="";
    for(let i=0;i<petSalon.pets.length;i++){
        //create the template
        tmp+=`
        <div class="pet">
            <p><b> Name:</b> ${petSalon.pets[i].petName}</p>
            <p><b> Age:</b> ${petSalon.pets[i].petAge}</p>
            <p><b> Gender:</b> ${petSalon.pets[i].petGender}</p>
        </div>
        `;
    }
    document.getElementById("pets").innerHTML=tmp;
    //display the tmp on the html
}

function init(){
    //create some pets
    let scooby = new Pet("Scooby",50,"Male");
    let scrappy = new Pet("Scrappy",40,"Male");
    petSalon.pets.push(scooby,scrappy);
    displayPets();
}
window.onload=init;