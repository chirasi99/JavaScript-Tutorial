// ------------------------------------------Question 01 ---------------------------------------------------

document.getElementById("b1").onclick = function(){
    var name = document.getElementById("fname1").value ;
    var hometown = document.getElementById("htown").value;
    alert("Hello, I am " + name +  ", from " + hometown);
}

// ---------------------------------------------------------------------------------------------------------



// ------------------------------------------Question 02 ---------------------------------------------------

document.getElementById("b2").onclick = function(){
    var currtime = document.getElementById("nowtime").value ;
    var day = new Date();
    var hours = day.getHours();
    var minutes = day.getMinutes();
    var am_pm = hours >= 12 ? "pm" : "am";
    var normalH = am_pm === "pm" ? hours % 12 : hours ;
    
    document.getElementById("time").innerHTML = "Now the time is " + currtime;
    var remainMinutes = 60 - minutes === 60 ? 0 : 60 - minutes
    if(remainMinutes == 0){
        var remainHours = 24 - hours; 
    }
    else {
        remainHours = 24 - hours - 1
    }
    document.getElementById("b2").innerHTML = "Remains " + remainHours + "hours more..."
}

// ---------------------------------------------------------------------------------------------------------



// ------------------------------------------Question 03 ---------------------------------------------------

document.getElementById("b3").onclick = function(){
    var username = document.getElementById("fname2").value ;
    var currentdate = new Date();
    var bday = document.getElementById("bdy").value;
    var birthday = new Date(bday)

    var age = currentdate.getFullYear()- birthday.getFullYear();
    var month = currentdate.getMonth()- birthday.getMonth();

    if(month < 0 || (month === 0 && currentdate.getDate() < birthday.getDate())){
        age -=1;
    }
    
    alert("Hello, I am " + username +  ", I'm " + age + " years old.");
}

// ---------------------------------------------------------------------------------------------------------



// ------------------------------------------Question 04 ---------------------------------------------------

document.getElementById("b4").onclick = function(){
    var width = document.getElementById("wid").value ;
    var height = document.getElementById("hei").value;
    var calculatearea = width * height
    document.getElementById("area").innerHTML="Area of the rectangle is " + calculatearea + "cm²";

}

// ---------------------------------------------------------------------------------------------------------




// ------------------------------------------Question 05 ---------------------------------------------------

document.getElementById("b5").onclick = function(){
    b5.style.background = "rgb(46, 135, 171)"
}// ---------------------------------------------------------------------------------------------------------




// ------------------------------------------Question 06 ---------------------------------------------------

document.getElementById("b6").onclick = function(){
    var num = document.getElementById("insert").value ;
    var squareroot = Math.sqrt(num);
    alert("The square root of " + num +  " is " + squareroot);

}

// ---------------------------------------------------------------------------------------------------------




// ------------------------------------------Question 07 ---------------------------------------------------

function enable(id) {
    for (var i = 1; i < 5 ; i++){
        document.getElementById("check" + i).disabled = true
    }
    document.getElementById(id).ariaDisabled=false;
}

// ---------------------------------------------------------------------------------------------------------



// ------------------------------------------Question 08 ---------------------------------------------------

document.getElementById("b8").onclick = function(){
    const amountofnum = document.getElementById("amount").value ;
    const percentval = 0.20*amountofnum;
    const total = parseInt(percentval) + parseInt(amountofnum);
    document.getElementById("para1").innerHTML = "20% of values : " + percentval ;
    document.getElementById("para2").innerHTML = "Total amount : " + amountofnum + " + " + percentval + " = " + total;
}

// ---------------------------------------------------------------------------------------------------------



// ------------------------------------------Question 09 ---------------------------------------------------

document.getElementById("button4").onclick = function(){
    var subject = document.getElementById("sub").value ;
    var marksforsubject = document.getElementById("mark").value;
    if(marksforsubject>=50){
        document.getElementById("para3").innerHTML="Great! Keep it up... You are really good at " + subject + " subject";
    }
    else{
        document.getElementById("para3").innerHTML="Sorry! You have to work hard for " + subject + " subject";
    }
}

// ---------------------------------------------------------------------------------------------------------



// ------------------------------------------Question 10 ---------------------------------------------------

document.getElementById("btnAC").onclick = function(){
     document.getElementById("result").value = "";
    }

    function display(value) {
        document.getElementById("result").value += value;
    }

    function calculations() {
        var val1 = document.getElementById("result").value;
        var val2 = eval(val1);
        document.getElementById("result").value = val2;
    }

// ---------------------------------------------------------------------------------------------------------
