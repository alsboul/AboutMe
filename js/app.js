'use strict'
function getName(){
var name = prompt('Hello can you tell me your name please');
alert(name + ' Welcome To my page ');
alert('Please answer my qustion with yes or no!');
}
getName();
function getQus1(){
var qus1 = prompt('do you guess my age is 23?');
if (qus1 === 'yes' || qus1 === 'y' ) {
    qus1 = qus1.toUpperCase();
    alert('Oh you are my man');
    var point=0
    point++;
}
else {
    alert('You need to know more about me');
}
}
getQus1();
//console.log('your answer is =', qus1);
function getQus2(){
var qus2 = prompt('Do you think my favourite color is green? ');
if (qus2 === 'no' || qus2 === 'n') {
    qus2 = qus2.toUpperCase();
    alert('Nice guessing');
    point++;
}
else {
    alert(' Sorry this is not my favourite color');
    
}
}
getQus2();
//console.log('your answer is =', qus2);
function getQus3(){
var qus3 = prompt(' Are my actions guided by love');
if (qus3 === 'yes' || qus3 === 'y' ) {
    qus3 = qus3.toUpperCase();
    alert('Thats right');
    point++;
}
else {
    alert('You need to be careful about your answer');
}
}
getQus3();
//console.log('your answer is =', qus3);

var qus4 = prompt(' Do you think i love mansef?');
if (qus4 === 'yes' || qus4 === 'y' ) {
    qus4 = qus4.toUpperCase();
    alert('You are my frined');
    point++;
}
else {
    alert('try again my frinde');
}
//console.log('your answer is =', qus4);

var qus5 = prompt(' Do you think i love pc games?');
if (qus5 === 'yes' || qus5 === 'y' ) {
    qus5 = qus5.toUpperCase();
    alert('You are my lovely man');
    point++
}
else {
    alert('No man who dose not love pc games');
}
//console.log('your answer is =', qus5);
alert('Are you redy to guss number from 1 to 10?')
for(var num=0; num<=3; num++){
    var qus6 = prompt('guess what the number in my mind?');
    if(qus6 == 3){
        alert('thats right');
        num=3;
    }
    else if (qus6 < 3){
        alert('too low');
    }
    else if (qus6 > 3){
        alert('too high');
    }   

}
   alert('the answer is 3');
   point++
   var contry = ["rome","paris","london","barcelona"];
   var flag=0;
   for(var i=0; i<4 ; i++)
{
    var qus7 = prompt('guess what is my favourite contry to vist');
    
    
    for(var j =0; j<4; j++)
    {if(qus7 == contry[j]){
        
        alert('right,you are my man');
        j=5;
        flag=10;
        point++
    }

    }
    if (flag == 10)
    {i=10;}
    else {
   alert('try again');}
   


 }
 alert('your score is ' +point+ ' out of 7')
   
alert(contry);
alert('Thank you for answer my qustion and welcome to my page again ' + name);

