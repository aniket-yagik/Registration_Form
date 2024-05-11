// Dob Code
function FindAge() {
   let day = document.getElementById('Dob').value
   let Dob = new Date(day);
   let today = new Date()
   let Age = today.getTime() - Dob.getTime();
   Age = Math.floor(Age / (1000 * 60 * 60 * 24 * 365.25))
   document.getElementById('age').value = Age
}

// api Calling Country
const CountryDropdown = document.getElementById('country')

fetch('https://restcountries.com/v3.1/all').then(res => {
   return res.json();

}).then(countriesData => {
   let output = "";
   countriesData.forEach(country => {
      output += `<option>${country.name.common}</option>`
   })
   CountryDropdown.innerHTML = output;
}).catch(err => {
   output += `<option>${err.message}<option>`
})


function takevalue() {
   let fname = document.getElementById('firstname').value
   let lname = document.getElementById('lastname').value
   let email = document.getElementById('email').value
   let country = document.getElementById('country').value
   let state = document.getElementById('state').value
   let city = document.getElementById('city').value
   let male = document.getElementById('male')
   let female = document.getElementById('female')
   let Dob = document.getElementById('Dob').value
   let age = document.getElementById('age').value


   document.write(`Your First Name is - ${fname} <br>`)
   document.write(`Your Last Name is - ${lname} <br>`)
   document.write(`Your E-Mail is - ${email} <br>`)
   document.write(`Your Country is - ${country} <br>`)
   document.write(`Your State is - ${state} <br>`)
   document.write(`Your City is - ${city} <br>`)
   if (male.checked == true) {
      document.write(`Your Gender is - ${male.value} <br>`)
   } else if (female.checked == true) {
      document.write(`Your Gender is - ${female.value} <br>`)
   }
   document.write(`Your Date of Birth is - ${Dob} <br>`)
   document.write(`Your Age is - ${age} <br>`)
}
