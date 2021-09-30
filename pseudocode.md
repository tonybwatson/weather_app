Display weather only after valid zip entered & data fetched
if zip was bad, display error message

conditional rendering - based on whether zip correct, data returned

store zips as array of info?
or local storage to pull from later
best - pull from user's location

order of operations
1. go to url (html page)
2. onLoad (init)
    * set vars/state
    * bind events/click handlers - button click, hit enter, 
    * give input auto-focus
    START 
    * validation of data entered - defensive programming
    * call API
    * parse API data
    * onStateChange
    * update view
    END
3. STATE 
    * let weather = {} object
        .currentZip = blank string?/null
        .previousZip[] array
        .isBusy = false
        .errorMsg = ''
4. SUBMIT(API)

Functions
    apiCall()
        * run call to api with zipcode concatenated from zipInput, change information in divs matched to ids with info in api response
    zipNotFound()
        * makes 
    
Objects
    zipInput
        * limited to 5 digits, text replaces zip of apiLink
    button
        * when clicked, apiCall()

Variables
    * variable for each area text must be written - city, temperature (k, c, f), condition, other info
    * zipInput - text from zipInput input

load page
    html displays

    user enters zip in input
        button1 clicked 
        IF request is answered
            display api info to page matched to ids
            - concatenate url pieces with zip 
            - send request to api
            - change weatherHere
            - make error display - none
            IF tempF > 70
                display image1 in otherInfo
            ELSEIF temp F > 50 and < 70
                display image2 in otherInfo
            ELSE 
                display image3 in otherInfo
        IF request fails 
            display error message
            make weatherHere display - none
        
        