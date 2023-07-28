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