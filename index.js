// Get the form element & submit button
const form = document.getElementById("my--form")
const submitbutton = document.getElementById("submit")


// Add event listener to the form submit event
submitbutton.addEventListener('click', function(event){
    event.preventDefault() // Prevent form submission


// Get the form input values

let name = document.getElementById('name').value
let email = document.getElementById('email').value
let course = Array.from(document.querySelectorAll('input[name="course"]:checked')).map(course => course.value)
let message = document.getElementById('message').value
let gender = document.querySelector('input[name="gender"]:checked').value


// Create an object to hold the form data

const formData = {
    name:name,
    email:email,
    course:course,
    message:message,
    gender:gender
}




// Store the form data in the local storage

localStorage.setItem('formData',JSON.stringify(formData))


  // Reset the form
 
  form.reset()



});




// Retrieve the form data from the local storage
const storedFormData = localStorage.getItem('formData')

// Parse the JSON string into an object

const formData = JSON.parse('storedFormData')

// Use the form data as needed
console.log(formData.name);
console.log(formData.email);
console.log(formData.course);
console.log(formData.message);
console.log(formData.gender);


// Get the data in browser itself 

function readValue(){
    document.getElementById('demo').innerHTML = storedFormData
}
