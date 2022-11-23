// this => this is the object that executes the current function.

      //1.  // if the function is a method in the object it refers to object itself

        // example : 

        // var employees = {
        //     employeeName : "Employee1",
        //     employeeID : 123,
        //     employeeSallary : 12000,
        
        //     sameEmployee : function(){
        //         console.log(this.employeeName) //same as console.log(employees.employeeName) outside the object  //o/p : Employee1
        //     }
        //   }


        // console.log(employees.employeeName) //o/p "Employee1"
        // employees.sameEmployee()
        // employees.employeeAge()

      //2. if the function outside the object i.e a normal function, it refers to the the window object/ global variable .

      // 1. example:
    
        // var employees = {
        //     employeeName : "Employee1",
        //     employeeID : 123,
        //     employeeSallary : 12000, 
        //     consoled : function(){
        //         console.log(this.employeeName) //consolelogs the name as it inside the object
        //     }
        //  }
        // console.log(this.employeeName) //o/p => undefined as it is outside the object
        // console.log(this) //o/p {} in terminal and window obj in console
        // employees.consoled().

    // 2.example : 

        var employees = {
            employeeName : "Employee1",
            employeeID : 123,
            employeeSallary : 12000
        }

        console.log(employees.employeeSallary)
        // console.log(this === Window) //in browsers we get true


        function f1(){
            return this
        }

        console.log(f1() === globalThis)
     
        // function ep(employeeSallary){
        //     this.employeeSallary = employeeSallary
        //     console.log(this) //global object
        // }

        // const e = new ep(18000) //Creates a entirely new object

