/* Query detects this state page readiness. Code included inside $( document ).ready()
 will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
 */
$(document).ready(function() {
    // Use the the function after the page is loaded and generate random words from the API
    generateRandomWords();
    // Add a click event listener to anchor tags within the 'random-word-list' element
    $("#random-word-list").on("click", "a", function(event) {
    // Prevent the default link functionality.
    event.preventDefault();
    
    // Set the clicked word as the value of the 'choosen' input field
    $("#choosen").val($(this).text());
    
    // Trigger a click on the 'custom-button'
    $(".custom-button").click();
});

});

/**
 * Fetches a list of random words from the Random Words API and logs them.
 * In case of errors during fetching or handling, they are logged to the console.
 */
async function generateRandomWords() {

    // Define the API endpoint for fetching random words. The URL includes parameters to 
    // specify the count of words to fetch and set both a minimum and maximum word length,
    // following the original Random Words API configuration.
    const url = 'https://random-words5.p.rapidapi.com/getMultipleRandom?count=4&minLength=5&maxLength=8';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fe209f256emshc114ceae6c6c116p1d872djsn27d575353cc3',
            'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
        }
    };

    try {
        // Send the fetch request to the API
        const response = await fetch(url, options);

        // Parse and store the JSON response
        const result = await response.json();

        // Log the retrieved random words to the console
        console.log('Your random words:' + result);
        // Loop through the results array
        for (let i = 0; i < result.length; i++) {
            // For each word in the results, append it to the 'random-word-list' as a list item
            // Each word is wrapped in an anchor tag for later functionality
            $("#random-word-list").append('<li><a href="#">' + result[i] + '</a></li>');
        }

    } catch (error) {
        // If an error occurs, log it to the console
        console.error(error);
    }
};


/*
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
            // First, remove all child elements of #synonyms 
            $('#synonyms').empty();
            // If the 'synonyms' property exists and has items, populate #synonyms unordered list with the items    
            console.log("SYNONYMS:")
            for (let i = 0; i < result.synonyms.length; i++) {
                $("#synonyms").append('<li>' + result.synonyms[i] + '</li>');
            }

        } else {
            console.log("No data found")
        }
        // Log any errors related to the fetch operation to the console    
    } catch (error) {
        console.error(error);
    }
}

/**
 * Fetches definitions for a given word from the WordsAPI.
 * 
 * The function takes a word as input and constructs a URL to fetch definition for the word
 * from the WordsAPI. If the fetch operation is successful and definitions are found, they are
 * logged to the console. If no definitions are found or if there's an error with the fetch operation, 
 * appropriate error messages are logged.
 */
async function fetchDefinitions(word) {
    // Construct the URL using the provided word
    const url = 'https://wordsapiv1.p.rapidapi.com/words/' + word + '/definitions';
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
            // First, remove all child elements of #definitions
            $('#definitions').empty();
            // If the 'definitions' property exists and has items, populate #definitions with the paragraph items 
            console.log("DEFINITIONS:");
            for (let i = 0; i < result.definitions.length; i++) {
                $("#definitions").append('<p>' + result.definitions[i].definition + '</p>');
            }

        } else {
            console.log("No data found")
        }
        // Log any errors related to the fetch operation to the console    
    } catch (error) {
        console.error(error);
    }
}


/**
 * Fetches examples for a given word from the WordsAPI.
 * 
 * The function takes a word as input and constructs a URL to fetch example for the word
 * from the WordsAPI. If the fetch operation is successful and examples are found, they are
 * logged to the console. If no examples are found or if there's an error with the fetch operation, 
 * appropriate error messages are logged.
 */
async function fetchExamples(word) {
    // Construct the URL using the provided word
    const url = 'https://wordsapiv1.p.rapidapi.com/words/' + word + '/examples';
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
            // First, remove all child elements of #examples
            $('#examples').empty();
            // If the 'definitions' property exists and has items, populate #examples with the paragraph items 
            console.log("EXAMPLES:");
            for (let i = 0; i < result.examples.length; i++) {
                $("#examples").append('<p>' + result.examples[i] + '</p>');
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
        // If the input is not empty, use the fetchSynonyms, fetchDefinitions, fetchExamples functions to fetch data from the api using the input value
        fetchSynonyms(inputValue);
        fetchDefinitions(inputValue);
        fetchExamples(inputValue);

        // Present the input value on the UI
        choosenWord.html('Your word is: <b>' + inputValue + '</b>');

        // Change label of the input after form submission
        entryLabel.html('Try another word:');
        // Hide gif when the button is clicked
        $("#typing-gif").hide();
        // Show word-data section when the function is called
        $("#word-data").show();
        // When the input left empty present an error message to the user
    } else {
        errorMessage.text("It can't be empty :(")
    }
}