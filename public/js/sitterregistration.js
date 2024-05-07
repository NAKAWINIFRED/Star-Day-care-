console.log('javascript is connected')
document.getElementById("sitterform").addEventListener("submit",function(event){
      event.preventDefault();
    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    // const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const nin = document.getElementById("nin").value;
    const nextofkin = document.getElementById("nextofkin").value;
    const recommender  = document.getElementById("recommender").value;
    const religion = document.getElementById("religion").value;
    const levelofeducation = document.getElementById("levelofeducation").value;
    const dateofbirth = document.getElementById("dateofbirth").value;
    const email = document.getElementById("email").value;
    const nextofkincontact = document.getElementById("nextofkincontact").value;
    const recommendercontact = document.getElementById("recommendercontact").value;
    const emergencycontact = document.getElementById("emergencycontact").value;
    
    

    // const message= document.getElementById("message");
    // message.innerHTML='<div>Sitter Registered</div>'

    document.getElementById("sitterform").reset();
    let sitterinfo = {name:name, location:location, gender:gender, nin:nin, nextofkin:nextofkin, recommender:recommender, religion:religion, levelofeducation:levelofeducation, dateofbirth:dateofbirth, email:email, nextofkincontact:nextofkincontact,recommendercontact:recommendercontact, emergencycontact:emergencycontact}
    console.log(sitterinfo);

});