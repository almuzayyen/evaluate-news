function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

 //(^http[s]?:\/{2})|(^www)|(^\/{1,2})
function validate (formText){
    //formText = document.getElementById('name').value
    //if(formText.match(/^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)){
 
   // }
   alert(' URL is unvalid format !!')
}

export { checkForName ,validate }