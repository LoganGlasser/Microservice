var createformButton = document.getElementById("create-form-button")    //createFormButton is the variable that is the button
createformButton.addEventListener('click', createformListener)  //when this variable is clicked, do the funciton createFormListener







function createformListener(event) {
    //This is looking for if we are opening up the create form, and making it visible
    var backdrop = document.getElementById('modal-backdrop')
    backdrop.classList.toggle('hidden')         //make the backdrop visible by toggling off the hidden value
    var modal = document.getElementById('create-form-modal')
    modal.classList.toggle('hidden')            //make the popup window visible by toggling off the hidden class
    //This is looking for if we are closing the create form, and makinging it invisible
    var cancelButton = document.getElementsByClassName("modal-cancel-button")
    cancelButton[0].addEventListener('click', cancelListener)
    var closeButton = document.getElementsByClassName("modal-close-button")
    closeButton[0].addEventListener('click', cancelListener)
    var createformFinal = document.getElementsByClassName("modal-accept-button")
    createformFinal[0].addEventListener('click', createFormButtonListener)
}


function cancelListener(event) {
    var inputName = document.getElementById("form-name-input")
    var inputAge = document.getElementById("form-age-input")
    var inputGender = document.getElementById("form-gender-input")
    inputName.value = ''
    inputAge.value = ''
    inputGender.value = ''
    //This clears fields for the next time they open this up after pressing cancel

    var backdrop = document.getElementById('modal-backdrop')
    backdrop.classList.toggle('hidden')     //make the backdrop invisible by toggling on the hidden value
    var modal = document.getElementById('create-form-modal')
    modal.classList.toggle('hidden')        //make the popup window invisible by toggling on the hidden class
    //This hides everything the backdrop and pop up menu


}

function createFormButtonListener(event) {
    var inputName = document.getElementById("form-name-input")
    var inputAge = document.getElementById("form-age-input")
    var inputGender = document.getElementById("form-gender-input")
    if (inputName.value.length == 0 || inputAge.value.length == 0 || inputGender == 0) {    //if one of the fields is blank, let the user know
        alert("Enter text in all of the boxes!")
    }
    else {  //if they have something in every section
        //Call the function to create the form, then the function to hide the popup, since they have made it
        createForm(inputName.value, inputAge.value, inputGender.value) 
        cancelListener(event)   //hide the popup
    }

}



function createForm(inputName, inputAge, inputGender) {
    let data = { name: inputName, age: inputAge, gender: inputGender };
    var reqUrl = "api";              
        fetch(reqUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        });
};