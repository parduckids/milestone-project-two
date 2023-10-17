// A function that gets triggered when the form is submitted.
function fetchFromEntry(event) {
    // Prevent the default behavior of the form submission, 
    // which is to reload the page or navigate to a URL.
    event.preventDefault();

    // Access the value of the input field with the name "choosen" 
    // using the event object.
    let inputValue = event.target.choosen.value;
    
    // Log the entered value to the console.
    console.log(inputValue);
}