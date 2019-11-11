'use strict'
var name = prompt('Hello can you tell me your name please')
alert(name + ' Welcom To my page ')
alert('Please answer my qustion with yes or no!')

var qus1 = prompt('do you guess my age is 23?')
if (qus1 === 'yes' || qus1 === 'y' ) {
    qus1 = qus1.toUpperCase();
    alert('Oh you are my man')
}
else {
    alert('You need to know more about me')
}
//console.log('your answer is =', qus1)

var qus2 = prompt('Do you think my favourite color is green? ')
if (qus2 === 'no' || qus2 === 'n') {
    qus2 = qus2.toUpperCase();
    alert('Nice guessing')
}
else {
    alert(' Sorry this is not my favourite color')
}
//console.log('your answer is =', qus2)

var qus3 = prompt(' Are my actions guided by love')
if (qus3 === 'yes' || qus3 === 'y' ) {
    qus3 = qus3.toUpperCase();
    alert('Thats right')
}
else {
    alert('You need to be careful about your answer')
}
//console.log('your answer is =', qus3)

var qus4 = prompt(' Do you think i love mansef?')
if (qus4 === 'yes' || qus4 === 'y' ) {
    qus4 = qus4.toUpperCase();
    alert('You are my frined')
}
else {
    alert('try again my frinde')
}
//console.log('your answer is =', qus4)

var qus5 = prompt(' Do you think i love pc games?')
if (qus5 === 'no' || qus5 === 'n' ) {
    qus5 = qus5.toUpperCase();
    alert('No man who dose not love pc games')
}
else {
    alert('You are my lovly man')
}
//console.log('your answer is =', qus5)
alert('Thank you for answer my qustion and welcome to my page again ' + name)

