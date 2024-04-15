console.log('javascript is connected')
document.getElementById("sitterform").addEventListener("submit",function(){
      event.preventDefault();
    const name = document.getElementById("name").Value
    const loction = document.getElementById("loction").Value
    const age = document.getElementById("age").Value
    const gender = document.getElementById("gender").Value
    const nin = document.getElementById("nin").Value
    const nextofkin = document.getElementById("nextofkin").Value
    const recommonder  = document.getElementById("recommdonder").Value
    const religion = document.getElementById("religion").Value
    const levelofeduction = document.getElementById("levelofeduction").Value
    const dateofbirth = document.getElementById("dateofbirth").Value

    const message= document.getElementById("message");
    message.innerHTML='<div>Sitter Registered</div>'

    document.getElementById("sitterform").reset();
    

})