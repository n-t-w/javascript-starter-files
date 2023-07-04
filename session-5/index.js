function getGrade(total_mark){

    let grade = "Ungraded"

    if (total_mark > 90){
        grade = "A+";
    }
    else if (total_mark > 80 && total_mark <=90){
        grade = "A";
    }
    else if (total_mark > 70 && total_mark <=80){
        grade = "B";
    }
    else if (total_mark > 60 && total_mark <=70){
        grade = "C";
    }
    else if (total_mark > 50 && total_mark <=60){
        grade = "D";
    }
    else if (total_mark > 40 && total_mark <=50){
        grade = "E";
    }
    else if (total_mark > 80 && total_mark <=90){
        grade = "F";
    }    
    else grade = "Fail"
    
    console.log("Your grade is: " + grade)

};

getGrade(85);
getGrade(75);
getGrade(28);