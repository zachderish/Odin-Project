/* LOGICAL OPERATORS */
// Write an if condition to check that age is NOT between 14 and 90 inclusively. Create two variants: the first one using NOT !, the second one – without it.


const age = 91;
if(!(age >=14 && age<=90)){
    alert("True");
}
if(age < 14 || age > 90) {
    alert("True");
}

/* Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled” */

let username = prompt("username");

if(username==="Admin"){
    let password = prompt("password");
    if(password==="TheMaster"){
        alert("Welcome!");
    } else if(password==="" || password===null){
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if(username==="" || username===null){
    alert("Canceled");
} else{
    alert("I don't know you");
}


/* Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!” */

let response = prompt('What is the "official" name of Javascript?');

if (response=="ECMAScript") {
    alert("Right!");
} else {
    alert("You don't know? ECMAScript!");
}

/* Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number. */

let number = prompt("Input number");

if (number > 0){
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

/* Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines. */

let message = (login == "Employee") ? "Hello" : 
    (login == "Director") ? "Greetings" :
    (login == "") ? "No login":
    "";

/* Rewrite the code below using a single switch statement:
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
} */

let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;
        
    case 1:
        alert(1);
        break;

    case 2:
    case 3:
        alert('2,3');
        break;
}


