//object-prototype
//person-prototype

// function Person(firstName , lastName , dob) {
//     this.firstName = firstName;
//     this.lastName = lastName; 
//     this.birthday = new Date(dob);
        // this.calculateAge= function() {
        //     const diff = Date.now() - this.birthday.getTime();
        //     const newDate = new Date(diff);
        //     return Math.abs(newDate.getUTCFullYear()-1970);
    //}
//}

//calculateAge as a prototype
        // Person.prototype.calculateAge = function(){
        //     this.birthday = new Date(dob);
        //     this.calculateAge= function() {
        //         const diff = Date.now() - this.birthday.getTime();
        //         const newDate = new Date(diff);
        //         return Math.abs(newDate.getUTCFullYear()-1970);
        //     }
        // }


// const Rohith  = new Person ("Rohith","Suresh","10-3-2000");

// console.log(Rohith);

//object.create method
 
const PersonPrototype = {
     greeting : function(){
         return (`Hello There ${this.firstName} ${this.lastName}`);
     },
     namesChange: function(newLastName){
         this.lastName = newLastName;
     }
}

const Rohith =  Object.create(PersonPrototype)
Rohith.firstName = "Rohith";
Rohith.lastName  = "Suresh";
Rohith.age = "19";

Rohith.namesChange("Kumar");

console.log(Rohith.greeting());

