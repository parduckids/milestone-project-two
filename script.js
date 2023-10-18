
/**
 * Fetches synonyms for a given word from the WordsAPI.
 * 
 * The function takes a word as input and constructs a URL to fetch synonyms for the word
 * from the WordsAPI. If the fetch operation is successful and synonyms are found, they are
 * logged to the console. If no synonyms are found or if there's an error with the fetch operation, 
 * appropriate error messages are logged.
 */
async function fetchSynonyms(word) {
    // Construct the URL using the provided word
    const url = 'https://wordsapiv1.p.rapidapi.com/words/' + word + '/synonyms';
    // Set fetch options, including headers for authentication with the API
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fe209f256emshc114ceae6c6c116p1d872djsn27d575353cc3',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    try {
         // Send a fetch request to the API
        const response = await fetch(url, options);
         // Check if the response was successful
        if (response.ok) {
            // Parse the response as JSON
            const result = await response.json();
             // If the 'synonyms' property exists and has items, log each synonym to the console     
            for (let i = 0; i < result.synonyms.length; i++) {
                console.log(result.synonyms[i]);
            }
        
        } else {
            console.log("No data found")
        }
    // Log any errors related to the fetch operation to the console    
    } catch (error) {
        console.error(error);
    }
}






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
        // If the input is not empty, use the fetchSynonyms function to fetch data from the api using the input value
        fetchSynonyms(inputValue);

        // Present the input value on the UI
        choosenWord.html('Your word is: <b>' + inputValue + '</b>');

        // Change label of the input after form submission
        entryLabel.html('Try another word:');
    // When the input left empty present an error message to the user
    } else {
        errorMessage.text("It can't be empty :(")
    }
}

