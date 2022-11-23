//RegularExpressions
    
    // let re ;

    // re=/Hello/;

    // console.log(re);

    // console.log(re.source);

///exec(); returns results as a array or null

    // const result = re.exec("hello world");

    // console.log(result)

//returns null if there is no match

    // const result = re.exec("Rohith world");

    // console.log(result)

//test() =>  returns true / false

    // const test = re.test("hello");
    // const test = re.test("world");
    // console.log(test)

//match() =>  same as exec() 

    // const str = "Hello World!!";
    // const test = str.match(re);

    // console.log(test);

//search() =>  returns the index 

    //  const search = "Hello World!!";
    //  const test = search.search(re);

    //  console.log(test);

//replace() => return an new string with some or all matches of a pattern

    // const str = "Hello World!!";
    // const test = str.replace(re , "Rohith");

    // console.log(test);

//Regular Expressions [part - 2]

    let re ;
    re=/hello/;

    //Literal characters
        re = /hello/i; //case insensitive

    //Metacharcters 
        re = /^h/i ;      //string must start with
        re = /World$/i;   //string must end with
        re = /h.llo/i;    //matches any character
        re = /h*llo/i;    //matches 0 or multiple character
        re = /gre?a?y/i;  //OPTIONAL Character  

    //Character sets
     //1.Brackets - []
        re = /gr[ea]y/i;  //MUST BE "a" or "e"
        re = /gr[EA]y/i;  //MUST BE "A" or "E"
        re = /[^gf]rey/i;  //MUST be ANYTHING EXCEPT g or f
        re = /[A-Z]rey/; //matches any UPPERCASE LETTERS
        re = /[a-z]rey/; //matches any LOWERCASE LETTERS
        re = /[A-Z a-z]rey/; //matches any LETTERS
        re = /[0-9]rey/;   //matches any digits

      //2.Curly Braces - {}
        re = /he{3}llo/i;  // Character must occur {n} times
        re = /he{2,4}llo/i; //Character can occur{n - m} times
        re = /he{3,}llo/i;  // Character must occur alteast{n} times
    
    //Short hand Charactersets 
        re = /\w/;  //word character - alphanum or _ [atleast 1]
        re = /\w+/; //word character - alphanum or _ [more than 1] 
        re = /\W/;  //NON WORD CHARACTER
        //similarly /\d/ and /\d+/ for digits
 


        const str = "$";
        const results = re.exec(str);
        console.group(results); 

        function toCheck(re ,str) {
            if(re.test(str)){
            console.log(`${re.source} matches with ${str}`);
            }else{
                console.log(`${re.source} does not match with ${str}`);
            }
        }

        toCheck(re ,str);