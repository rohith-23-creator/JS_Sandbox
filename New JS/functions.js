let studentGrade = (studentMarks , maxMark) =>{

    let percent = ((studentMarks / maxMark) * 100)

    if(percent >= 90){
        console.log(`Congratulations you have got ${percent} percentage , your grade is A `)
    }else if(percent >= 80){
        console.log(`You have got ${percent} percentage , your grade is B`)
    }else if(percent >= 70){
        console.log(`You have got ${percent} percentage , your grade is c`)
    }else {
        console.log(`Sorry  you failed the test, your got ${percent} percentage`)
    }
}

studentGrade(3,20)