function Pet(name,age,gender){
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
}

let inputPetName= document.getElementById("txtPetName");
let inputPetAge= document.getElementById("txtPetAge");
let inputPetGender=document.getElementById("txtPetGender");

let scooby = new Pet("Scooby",40,"Male");
let scrappy = new Pet("Scrappy",5,"Male");
petSalon.pets.push(scooby,scrappy)
function register(){
    console.log(inputPetName.value,inputPetAge.value,inputPetGender.value);

    let thePet = new Pet(inputPetName.value,inputPetAge.value,inputPetGender.value);
    console.log(thePet);
}