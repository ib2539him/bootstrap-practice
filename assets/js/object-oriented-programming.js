const obj = {}

obj.name = 'anisul islam'
obj.playlist = "Code ABC";
console.log(obj)

class Computer{
    constructor(name, model) {
            this.name = name;
            this.model = model;
    }

}

const Dell = new Computer('Dell', 'Dk125')
console.log(Dell)

console.log(Array.prototype)


const mainIMg = document.querySelector(".mainImg");

const smallImg = document.querySelectorAll('.store');


smallImg[0].onclick = function () {
    mainIMg.src=smallImg[0].src;
}

smallImg[1].onclick = function () {
  mainIMg.src = smallImg[1].src;
};

smallImg[2].onclick = function () {
  mainIMg.src = smallImg[2].src;
};



// construction function
function Person(name,email,country){
  this.name = name;
  this.email = email;
  this.country = country;
  this.fullInfo = function () {
    return `My name is ${this.name} my email Address is : ${this.email} and i live in ${this.country}`
  }
}

const Ibrahim = new Person('Ibrahim Khalil', "khalilmdIbrahim438@gmail.com", "Bangladesh")

Person.prototype.info = 'Goaldanga Bazar Assasuni sathira'
console.dir(Person)

console.log(Ibrahim)
