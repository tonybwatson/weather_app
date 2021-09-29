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