/* Query detects this state page readiness. Code included inside $( document ).ready()
 will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
 */
$(document).ready(function () {
    // Use the the function after the page is loaded and generate random words from the API
    generateRandomWords();
    // Add a click event listener to anchor tags within the 'random-word-list' element
    $("#random-word-list").on("click", "a", function (event) {
        // Prevent the default link functionality.
        event.preventDefault();

        // Set the clicked word as the value of the 'choosen' input field
        $("#choosen").val($(this).text());

        // Trigger a click on the 'custom-button'
        $(".custom-button").click();
    });

});


// Add a preloader to the page with a fade out effect after a short delay
function callPreloader() {
    // Display the preloader element with a flex layout
    $('#preloader').css('display', 'flex');

    // Set a delay of 1.5 seconds
    setTimeout(function () {
        // Fade out function 
        $('#preloader').fadeOut('slow', function () {
            // Hide preloader after the fade out effect
            $(this).hide();
            
            // Allow scrolling again
            $('body').css('overflow', 'auto');
        });
    }, 1500);
}

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
        // Create a variable for synonyms-wrapper for later use
        let synWrapper = $("#synonyms-wrapper");
        // Send a fetch request to the API
        const response = await fetch(url, options);
        // Check if the response was successful
        if (response.ok) {
            // Parse the response as JSON
            const result = await response.json();
            // First, remove all child elements of #synonyms 
            $('#synonyms').empty();
            // This will return 5 if there are 5 or more synonyms in the array
            // if there are less than 5 synonyms, it will return the actual number of synonyms
            let numSynonyms = Math.min(5, result.synonyms.length);
            // If the 'synonyms' property exists and has items, populate #synonyms unordered list with the items    
            for (let i = 0; i < numSynonyms; i++) {
                $("#synonyms").append('<li>' + result.synonyms[i] + '</li>');
            }
            // Hide part of the view when not available information for that section
            if (result.synonyms.length < 1) {
                synWrapper.hide();
            } else {
                synWrapper.show();

            }
            // If the request is successful return true, that will be used in the fetchFromEntry function
            return true;
            // Error handling for 404 - not found
        } else if (response.status === 404) {
            console.error("This word doesn't exist in our database");
            // Return false if the reuqest isn't succesfull
            return false;
        } else {
            // General error handling 
            console.error('Request failed with status: ', response.status);
            // Return false if the reuqest isn't succesfull
            return false;
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
        // Create a variable for definitions-wrapper for later use
        let defWrapper = $("#definitions-wrapper")
        // Send a fetch request to the API
        const response = await fetch(url, options);
        // Check if the response was successful
        if (response.ok) {
            // Parse the response as JSON
            const result = await response.json();
            // First, remove all child elements of #definitions
            $('#definitions').empty();
            // This will return 3 if there are 3 or more definitions in the array
            // if there are less than 3 definitions, it will return the actual number of definitions.
            let numDefinitions = Math.min(3, result.definitions.length);
            // If the 'definitions' property exists and has items, populate #definitions with the paragraph items 
            // Use numDefinitions instead of .length to limit the number of defitinits presented on the ui
            for (let i = 0; i < numDefinitions; i++) {
                $("#definitions").append('<p>' + result.definitions[i].definition + '</p>');
            }
            // Hide part of the view when not available information for that section
            if (result.definitions.length < 1) {
                defWrapper.hide();
            } else {
                defWrapper.show();
            }
            // If the request is successful return true, that will be used in the fetchFromEntry function
            return true;

        } else if (response.status === 404) {
            console.error("This word doesn't exist in our database");
            // Return false if the reuqest isn't succesfull
            return false;
        } else {
            // General error handling 
            console.error('Request failed with status: ', response.status);
            // Return false if the reuqest isn't succesfull
            return false;
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
        // Create a variable for examples-wrapper for later use
        let exWrapper = $("#examples-wrapper");
        // Send a fetch request to the API
        const response = await fetch(url, options);
        // Check if the response was successful
        if (response.ok) {
            // Parse the response as JSON
            const result = await response.json();
            // First, remove all child elements of #examples
            $('#examples').empty();
            // This will return 4 if there are 4 or more examples in the array
            // if there are less than 3 examples, it will return the actual number of examples
            let numExamples = Math.min(4, result.examples.length);
            // If the 'examples' property exists and has items, populate #examples with the paragraph items 
            for (let i = 0; i < numExamples; i++) {
                $("#examples").append('<p>' + result.examples[i] + '</p>');
            }
            // Hide part of the view when not available information for that section
            if (result.examples.length < 1) {
                exWrapper.hide();
            } else {
                exWrapper.show();
            }
            // If the request is successful return true, that will be used in the fetchFromEntry function
            return true;

        } else if (response.status === 404) {
            console.error("This word doesn't exist in our database");
            // Return false if the reuqest isn't succesfull
            return false;
        } else {
            // General error handling 
            console.error('Request failed with status: ', response.status);
            // Return false if the reuqest isn't succesfull
            return false;
        }
        // Log any errors related to the fetch operation to the console    
    } catch (error) {
        console.error(error);
    }
}





// An async function that gets triggered when the form is submitted. 
async function fetchFromEntry(event) {
    // Save #choosen-word as a variable for later use
    let choosenWord = $('#choosen-word');
    // Save #entry-label as a variable for later use
    let entryLabel = $('#entry-label');
    // Save #error-message as a variable for later use
    let errorMessage = $("#error-message");
    // Remove error message when the function is called
    errorMessage.text("");
    // Prevent the default behavior of the form submission, 
    // which is to reload the page or navigate to a URL.
    event.preventDefault();

    // Access the value of the input field with the name "choosen" 
    // using the event object.
    let inputValue = event.target.choosen.value;
    // Check if the input is empty, if not present the value on the UI
    if (inputValue != '') {
        // Await makes the functions  pause until the fetch functions are completed and returned a promise
        let synonymExists = await fetchSynonyms(inputValue);
        let exampleExists = await fetchExamples(inputValue);
        let definitionExists = await fetchDefinitions(inputValue);
        // Check if all functions retured false at the same time
        // When no data is returned, present error message to the user
        if (!synonymExists && !exampleExists && !definitionExists) {
            errorMessage.text("The word:"+ "'" + inputValue + "'" + "doesn't exist in our database :(");
            event.target.choosen.value = ''; // Clear the input field
            return; // Exit the function
        // If any of the function returned true continue the fetchFromEntry function
        } else{
        // Call preloader when the input isn't empty
        callPreloader();
        // If the input is not empty, use the fetchSynonyms, fetchDefinitions, fetchExamples functions to fetch data from the api using the input value

        // Present the input value on the UI
        choosenWord.html('Your word is: <b>' + inputValue + '</b>');

        // Change label of the input after form submission
        entryLabel.html('Try another word:');
        // Clear the input
        event.target.choosen.value = '';
        // Hide gif when the button is clicked
        $("#typing-gif").hide();
        // Show word-data section when the function is called
        $("#word-data").show();
        // When the input left empty present an error message to the user
        }
    } else {
        errorMessage.text("It can't be empty :(")
    }
}