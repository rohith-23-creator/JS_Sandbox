// Object.create() method => It is used to create the new object from the existing prototype methods.

const employeePrototype ={
    // this.ID = ID,
    // this.Salary = Salary,
    // this.shift =shift,
    // this.age = age
    employeeDetails  : function(){
        return `Employee ID ${this.ID} works in ${this.shift} shift gets ${this.Salary} ruppees salary his age is ${this.age}`
    }

}


const employee1 = Object.create(employeePrototype)

// employee1.ID = 12,
// employee1.Salary = 50000,
// employee1.shift = "Morning",
// employee1.age = 40

// console.log(employee1)


employee1.ID = 11,
employee1.Salary = 510000,
employee1.shift = "Morning",
employee1.age = 32
console.log(employee1.employeeDetails())