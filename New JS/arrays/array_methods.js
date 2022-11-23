// const todos = ["Eat", "Sleep", "Repeat"];

//push() => adds new element to array 
// arr1.push("thing4")

// pop() => eliminates last element
// console.log(arr1.pop())

// shift() => removes first element
// console.log(arr1.shift())
// arr1.unshift("Manipulated thing1")


// splice() => syntax : (start , numberofelements , new element)
// arr1.splice(1 , 1 , "Manipulated thing2")
// arr1.splice(1,0,"Manipulated thing2")

// console.log(arr1)

// For and forEach : 
// console.log(`You have ${todos.length} todos `)

// todos.forEach((todo , index )=>{
//     console.log(`${index+1} ${todo}`)
// });


// for (count = 0 ;  count <= todos.length-1 ; count ++){
//      console.log(count+1, todos[count])
// }


// Higher order array methods : 

// const Companies = [
//   {name : "CompanyOne", category: "Retail", start: 1981 , end: 2001},
//   {name : "CompanyTwo", category: "Technology", start: 1989 , end: 1997},
//   {name : "CompanyThree", category: "Finance", start: 1980 , end: 2010},
//   {name : "CompanyFour", category: "Auto", start: 1971 , end: 1988},
//   {name : "CompanyFive", category: "Retail", start: 1995 , end: 2012},
//   {name : "CompanySix", category: "Technology", start: 1999 , end: 2008},
//   {name : "CompanySeven", category: "Auto", start: 1995 , end: 2011},
//   {name : "CompanyEight", category: "Finance", start: 1976 , end: 2002},
//   {name : "CompanyNine", category: "Retail", start: 1991 , end: 1998},
// ]

// const ages = [12, 23, 24, 54, 67, 41, 38, 25, 29, 20, 8];


//1. forEach():
    // const lastedLong = Companies.forEach(company => {
    //     if(company.end - company.start > 10){
    //         console.log(company)
    //     };
    // })

// 2.for():
    // for(let i = 0 ; i <= Companies.length ; i++ ){
    //     console.log(Companies[i].category)
    // }

// 3. filter():

    // returning array of age higher than 25:
    // let adultAge =[];
    // for(let i= 0 ; i < ages.length ; i++){
    //     if(ages[i] > 25){
    //         adultAge.push(ages[i]);
    //     }
    // }

    // console.log(adultAge)

    // using filter:
    // const adultAge = ages.filter(age=> age > 25)

    // const CompanyCategory = Companies.filter(function(company) {
    //     if(company.category === "Retail"){
    //         return true
    //     }else{
    //         return false
    //     }
    // })

    // console.log(CompanyCategory)

    // arrow functions:
    // const CompanyCategory = Companies.filter(company => {
    //     if(company.category != "Retail"){
    //         return true
    //     }else{
    //         return false
    //     }
    // })

    // console.log(CompanyCategory)

// 3.Map():

    // const companyName = Companies.map(company => `${company.name}`)
    // console.log(companyName);

    // const agesSqrt = ages.map(age => Math.sqrt(age))
                        //  .map(age => age*2)
    // console.log(agesSqrt)


// 4.Sort():

    // const sortedAge = ages.sort((c1, c2)=> c1 > c2 ? 1 : -1 )
    // console.log(sortedAge)

    // const sortedYear = Companies.sort(function(a,b){
    //     if(a.start > b.start){
    //         return 1
    //     }else{
    //         return -1
    //     }
    // })

    // console.log(sortedYear)

    // const names = ["Andrew", "alex", "Alexander" , "Anna", "Aston", "Ashwin"]

    // smallers letters are always higher in order than capital , so if we try to arrange the words in ascending order capital letters will come first.


    // const namesSort = names.sort( (a,b) => {
    //     if (a.toLowerCase() > b.toLowerCase()){
    //         return 1
    //     }else{
    //         return -1
    //     }
    // });

    // console.log(namesSort)



// 5.reduce():

    // let total = 0;
    // const totalAge = ages.reduce((total , age) => total += age , 0)
    // console.log(totalAge)

    // for(let i=0 ;  i < ages.length ; i++){
    //     total +=ages[i]
    // }
    // console.log(total)

// 6.find():

// const ages = [12, 16, 24, 14, 17, 41, 38, 25, 29, 20, 8]

// const eligibleAge = ages.find(age => age > 18);

// const topicsLearned = ["HTML Basics" , "CSS", "Javascript", "JavaOOPS", "Python"]

// const findTopicsLearned = topicsLearned.find( function(topic){
//     return topic.includes("Java")
// });
// console.log(findTopicsLearned)

// const findTopicsLearned = topicsLearned.find( topic => topic.includes("JavaO"))
// console.log(findTopicsLearned)

//7. Spread operator : 

    // const names = ["Rohith", "peter", "Symonds"];

    // const names2  = ["Millian", "Drake", "Boubon"];

    // const allNames = [...names , ...names2 , "Julia"]

    // console.log(allNames)



   const ages = [10,20,30,32,71,61,120]

   const FilterAge = ages.filter(age => age < 50)

   console.log(FilterAge)