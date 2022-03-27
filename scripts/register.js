let x=0;
function Pet(name,age,gender,breed,service,ownerName,phoneNumber){
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petBreed=breed;
    this.petService=service;
    this.petOwnerName=ownerName;
    this.phoneNumber=phoneNumber;
    this.id=x++;
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

function displayPetsTable(){
    let row="";
    for(let i=0;i<petSalon.pets.length;i++){
        //create the template
        row+=`
        <tr id="${petSalon.pets[i].id}">
            <td><b> Name:</b> ${petSalon.pets[i].petName}</td>
            <td><b> Age:</b> ${petSalon.pets[i].petAge}</td>
            <td><b> Gender:</b> ${petSalon.pets[i].petGender}</td>
            <td><button onclick="deletePet(${petSalon.pets[i].id});">Delete</button></td>
        </tr>
        `;
    }
    document.getElementById("petTable").innerHTML=row;
}
function deletePet(petId){
    console.log("Delete pet ", petId);
    //travel the array to search the petId
    for(let i=0; i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(pet.id==petId){
            deleteIndex=i;
            console.log("I found the pet ...", deleteIndex);
        }
    }
    //remove pet from the array
    petSalon.pets.splice(deleteIndex,1);
    //remove the pet from html
    document.getElementById(petId).remove();
}
function searchPet(){
    let searchString=document.getElementById("txtSearch").value;
    console.log(searchString);
    for(let i=0; i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(pet.petName.toLowerCase()==searchString.toLowerCase() ||
            pet.petGender.toLowerCase()==searchString.toLowerCase() ){
            console.log("I found it");
            document.getElementById(pet.id).classList.add(`bg-color`);
        }
        else{
            document.getElementById(pet.id).classList.remove("bg-color");
        }
    }
}
function init(){
    //create some pets
    let scooby = new Pet("Scooby",50,"Male");
    let scrappy = new Pet("Scrappy",40,"Male");
    petSalon.pets.push(scooby,scrappy);
    //displayPets();
    displayPetsTable();
}
window.onload=init;