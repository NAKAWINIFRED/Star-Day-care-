console.log('javascript is connected')
function validation(event){
    const fullName = document.getElementById("fullName").value;
    const location = document.getElementById("location").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const mothername = document.getElementById("mothername").value;
    const fathername = document.getElementById("fathername").value;
    const mothercontact  = document.getElementById("mothercontact").value;
    const fathercontact = document.getElementById("fathercontact").value;
    const babynumber = document.getElementById("babynumber").value;
    const dateofbirth = document.getElementById("dateOfBirth").value;
    const broughtchild = document.getElementById("broughtchild").value;
    const periodofstay = document.getElementById("periodOfStay").value;
    const feepaid = document.getElementById("feepaid").value;
    const emergencycontact = document.getElementById("emergencycontact").value;
    
  
       // Validation
    if(fullName === "" ||location === "" || age === "" || gender === "" || mothername === "" || fathername === "" || mothercontact === "" ||fathercontact === "" ||babynumber ==="" ||dateofbirth === "" ||broughtchild === "" || periodofstay === "" ||feepaid === "" ||emergencycontact === "" ) {
     alert("Please fill in all required fields.");
     event.preventDefault();
     return;
  }
 
//  document.getElementById("childform").reset();
 

}