//constructors in javascript - Person constructor

        function Person(name){
            this.name = name;
        }

        //console.log(this);//initiating this keyword in globsl scope makes it a window object

        // this.alert(123)

        // const Rohith = new Person("Rohith");
        // const Ravi = new Person("Ravi");

        // console.log(Rohith); //console the name
        // console.log(Ravi)

//adding more objects
        // function Person(name,dob,height){
        //     this.name = name;
        //     this.age = new Date(dob);
        //     this.height= height;
        // }

        // const Rohith = new Person("Rohith","10-3-2000","180cm");

        // console.log(Rohith);

//calculating birthday
         function Person(name , dob){
             this.name = name;
             this.age = new Date(dob);
             this.calculateAge= function(){
                 const diff =Date.now() - this.age
                 const getage = new Date(diff);
                 return Math.abs(getage.getUTCFullYear()-1970);
             }
         }

         const Rohith = new Person("Rohith","10-3-2000");

          console.log(Rohith.calculateAge());