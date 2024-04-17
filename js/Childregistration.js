console.log('javascript is connected')
document.getElementById("childform").addEventListener("submit",function(event){
      event.preventDefault();
    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const mothername = document.getElementById("mothername").value;
    const fathername = document.getElementById("fathername").value;
    const mothercontact  = document.getElementById("mothercontact").value;
    const fathercontact = document.getElementById("fathercontact").value;
    const babynumber = document.getElementById("babynumber").value;
    const dateofbirth = document.getElementById("dateofbirth").value;
    const broughtchild = document.getElementById("broughtchild").value;
    const periodofstay = document.getElementById("periodofstay").value;
    const feepaid = document.getElementById("feepaid").value;
    const emergencycontact = document.getElementById("emergencycontact").value;
    
    

    const message= document.getElementById("message");
    message.innerHTML='<div>Child Registered</div>'

    document.getElementById("childform").reset();
    let sitterinfo = {name:name, location:location, gender:gender, babynumber:babynumber, feepaid:feepaid, mothercontact:mothercontact, mothername:mothername, fathercontact:fathercontact, fathername:fathername, periodofstay:periodofstay, broughtchild:broughtchild,age:age, emergencycontact:emergencycontact}
    console.log(sitterinfo);

});