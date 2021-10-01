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

Variables
    button1 - links to button in document
    apiLink - variable for api url
    city
    temp
    tempC
    tempF
    conditions
    error
    weatherHere - container for city, temp, tempC, tempF, otherInfo, conditions
    zipInput
    zip - blank string
    

Functions
    apiCall()
        * run call to api with zipcode concatenated from zipInput, 
        * make weatherHere display = block
        * city innerHTML = city from response
        * temp innerHTML = temp from response
        * tempC innerHTML = temp calculated to C, 
        * tempF innerHTML = temp calculate to F
        * conditions innerHTML = conditions from response
        * imageChoice()
    zipNotFound()
        * makes error message appear if api call unsuccessful or incorrect zip code
    
Objects
    zipInput
        * limited to 5 digits, text replaces zip of apiLink
    button
        * when clicked, apiCall()

INIT
    html displays

    user enters zip in zipInput
        button1 clicked 
            send request to api
        IF request is answered
            - replace url interior zipcode with zip
            - change weatherHere to display: block
            - make error display - none
            - display api info to page matched to ids
            IF temp > 310
                display image4 in otherInfo
            ELSEIF temp > 297 and < 311
                display image1 in otherInfo
            ELSE IF temp < 297 and temp > 281
                display image2 in otherInfo
            ELSE IF temp <= 280
                display image3 in otherInfo
        IF request fails 
            display error message
            make weatherHere display - none
      repeats
    