// main 'users' array which contains all the users data
const users = [
    // {
    // fname: "Abhishek",
    // lname: "Pore",
    // eml: "abhishekp96@gmail.com",
    // pwd: "me",
    // },

    // {
    //     fname: "Vrushali",
    //     lname: "Vibhandik",
    //     eml: "vvrushali18@gmail.com",
    //     pwd: "tinu",
    // },

    // {
    //     fname: "Aishwarya",
    //     lname: "Pore",
    //     eml: "aishwaryapore@gmail.com",
    //     pwd: "aishu",
    // }

    // {
    //     fname: "Ravi",
    //     lname: "Deopurkar",
    //     eml: "ravideopurkar@gmail.com",
    //     pwd: "jiju",
    // },

    // {
    //     fname: "Sheetal",
    //     lname: "Ahirrao",
    //     eml: "sheetalahirrao@gmail.com",
    //     pwd: "tai",
    // }
];

let newUser = {};


// get the form
let form = document.getElementById('form');

// add submit event on the form
form.addEventListener('submit',(event) => {
    event.preventDefault();  // prevent the default action from firing

    var email = document.getElementById("email").value;   // get the email
    var password = document.getElementById("password").value; // get the password

    // iterate through the 'users' array and check if the email and password match
    const check =  users.some(check => check.eml === email && check.pwd === password);  //'some()' returns value in boolean
       
    if(check == true){ // if the above conditions are matched then we fire the modal
        ( () => document.getElementById("WelcomeModalTrigger").click())();
            document.getElementById("email").value = ""; // reset the email value in input field
            document.getElementById("password").value = ""; // reset the password value in input field
            document.getElementById('error').innerHTML = ""; // reset the error
        }
        else{   // if the conditions are not matched then give error message
            document.getElementById('error').innerHTML= "Email or Password is incorrect."; // error message
            document.getElementById("email").value = "";   // reset the email value in input field
            document.getElementById("password").value = "";  // reset the error
        }
    
    // iterate through the 'users' array and check if the email and password match
    let fetchedUser = users.find(fetchedUser => fetchedUser.eml === email);  
        // give error message when the fetched user is not registered
    if(fetchedUser == undefined){
            document.getElementById('error').innerHTML= "You are not registered with us.<br> Kindly Sign Up first!"; // error message
        }
     
});

// get the signUp button
let signUp = document.getElementById('signUp');

// add 'click' event to the 'signUp' button
signUp.addEventListener('click', () => {
    ( () => document.getElementById("signUpModalTrigger").click())(); // fire the sign up modal
});

// get the signIn button
let signIn = document.getElementById("signIn");

// add 'click' event to the 'signIn' button
signIn.addEventListener('click', () => {
    ( () => document.getElementById("closeSignUp").click())(); // close the sign up modal    
});

// get the sign up form
let signUpForm = document.getElementById('signUpForm');

// add submit event on the sign up form
signUpForm.addEventListener('submit',(eventnew) => {
    eventnew.preventDefault();  // prevent the default action from firing
    document.getElementById('signUpError').innerHTML = ""; // reset the error

    let newFname = document.getElementById('newFname').value;  // get the new user's first name
    let newLname = document.getElementById('newLname').value;  // get the new user's last name
    let newEmail = document.getElementById('newEmail').value;  // get the new user's email
    let newPassword = document.getElementById('newPassword').value;  // get the new user's password
    let confirmNewPassword = document.getElementById('confirmNewPassword').value;  // get the new user's confirm password

    if(newPassword.length < 8){
        document.getElementById('signUpError').innerHTML= "Password must be at least 8 characters!";// error message
    }else{
    // check if newPassword and confirmNewPassword are the same
        if(newPassword === confirmNewPassword){
            newUser.fname = newFname; // set the new user's fisrt name
            newUser.lname = newLname; // set the new user's last name
            newUser.eml = newEmail;  // set the new user's email
            newUser.pwd = newPassword; // set the new user's password
            document.getElementById('savedMessage').innerHTML = "Your data have been saved!"; // reset the error
            users.push(newUser);

            console.log(newUser); 
            console.log(users);
            
            document.getElementById("newFname").value = ""; // reset the first name value in input field
            document.getElementById("newLname").value = ""; // reset the last name value in input field
            document.getElementById("newEmail").value = ""; // reset the email value in input field
            document.getElementById("newPassword").value = ""; // reset the password value in input field
            document.getElementById("confirmNewPassword").value = ""; // reset the conmfirm spassword value in input field

            document.getElementById('signUpError').innerHTML = ""; // reset the error

        }else{
            document.getElementById('signUpError').innerHTML= "Passwords do not match";// error message
        }
    }
});