function now(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("emailid").value;
    
    
    if(firstname == "" || lastname == "" || email == ""){
        alert("First Name, Last Name and Email ID is madatory!!!");
    }
    
}