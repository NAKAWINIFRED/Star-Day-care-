console.log('javascript is connected')
// document.getElementById("sitterform").addEventListener("submit",function(event){
function regFormValidation(event){
    const fullName = document.getElementById("fullName").value;
    const location = document.getElementById("location").value;
    const gender = document.getElementById("gender").value;
    const nin = document.getElementById("nin").value;
    const nextofkin = document.getElementById("nextofkin").value;
    const recommender  = document.getElementById("recommender").value;
    const religion = document.getElementById("religion").value;
    const levelofeducation = document.getElementById("levelofeducation").value;
    const dateofbirth = document.getElementById("dateofbirth").value;
   //  const email = document.getElementById("email").value;
    const nextofkincontact = document.getElementById("nextofkincontact").value;
    const recommendercontact = document.getElementById("recommendercontact").value;
    const emergencycontact = document.getElementById("emergencycontact").value;


       // Validation 
    if(fullName === "" || location === "" || gender === "" || nin === "" || nextofkin === "" || recommender === "" || religion === "" || levelofeducation === "" || dateofbirth === ""  || nextofkincontact === "" || recommendercontact === "" || emergencycontact === "") {
     alert("Please fill in all required fields.");
     event.preventDefault()
     return;
     
  }

     // Example of email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault()
      return;
  }


   //   document.getElementById("sitterform").reset();


}
// });