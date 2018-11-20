function ValidateForm(){
 var validUsername = false;
 var validUserPassword = false;
 var validFirstName = false;
 var validLastName = false;
 var validPhone = false;
 //var validEmail = false;
 var letters = /^[A-Za-z]+ $/;
 var numbers = /^[0-9]+ $/;
 
var validEmail = document.getElementById("email").value;
var atpos = validEmail.indexOf("@");
var dotpos = validEmail.lastIndexOf("."); 
 
 var errorMessages ="";  // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

/*********** VALIDATES USERNAME ******** */
  //Required. Maximum 12 characters.
 if (myContact.username.value.length > 12 || myContact.username.value===null || myContact.username.value==="")
   errorMessages += "<p>The username must be less than 12 characters and it is required</p>";
 else
   validUsername =true;
   
 //console.log(validUsername);
  
  
   /*********** VALIDATES PASSWORD ******** */
 if (myContact.password.value===null ||
 myContact.password.value=== "" ||
 myContact.password.value.length >7)
 errorMessages += "<p>The password must be less than 7 characters and it is required</p>";
 else
 validUserPassword = true;
  

  
  /*********** VALIDATES FIRSTNAME ******** */
 if (myContact.firstname.value===null ||
 myContact.firstname.value=== "" ||
 myContact.firstname.value.length >20 || !myContact.firstname.value.match(letters))
 errorMessages += "<p>The firstname must be less than 20 characters and it is required. Only letters and numbers are accepted</p>";
 else
 validFirstName = true;
  
  /*********** VALIDATES LASTNAME ******** */
 if (myContact.lastname.value===null ||
 myContact.lastname.value=== "" ||
 myContact.lastname.value.length >20 || !myContact.lastname.value.match(letters))
 errorMessages += "<p>The firstname must be less than 20 characters and it is required. Only letters and numbers are accepted</p>";
 else
 validLastName = true; 
 
/*********** VALIDATES PHONE NUMBER ******** */
 if (myContact.phone.value===null ||
 myContact.phone.value=== "" ||
 myContact.phone.value.length >15 || !myContact.phone.value.match(numbers))
 errorMessages += "<p>The phone number must be less than 15 characters and it is required. Only numbers are accepted</p>";
 else
 validPhone = true;
 
  
 
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=validEmail.length) {
    errorMessages += "<p>Invalid email</p>";
else
validEmail = true;
  //Or assign the value to a variable. For example validEmail = true
  
  
  
 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validUsername && validUserPassword && validFirstName && validPhone) ;
}
