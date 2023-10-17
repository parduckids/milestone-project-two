// A function that gets triggered when the form is submitted.
function fetchFromEntry(event) {
    // Save #choosen-word as a variable for later use
    let choosenWord = $('#choosen-word');
    // Save #entry-label as a variable for later use
    let entryLabel = $('#entry-label');
    // Save #error-message as a variable for later use
    let errorMessage = $("#error-message");
    // Prevent the default behavior of the form submission, 
    // which is to reload the page or navigate to a URL.
    event.preventDefault();

    // Access the value of the input field with the name "choosen" 
    // using the event object.
    let inputValue = event.target.choosen.value;
    // Check if the input is empty, if not present the value on the UI
    if (inputValue != '') {
        console.log(inputValue);

        // Present the input value on the UI
        choosenWord.html('Your word is: <b>' + inputValue + '</b>');

        // Change label of the input after form submission
        entryLabel.html('Try another word:');
    // When the input left empty present an error message to the user
    } else {
        errorMessage.text("It can't be empty :(")
    }
}