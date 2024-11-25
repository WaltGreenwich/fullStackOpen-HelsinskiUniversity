sequenceDiagram
participant browser
participant server

    Note right of browser: The user types a note and clicks "Save"
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: { "message": "Note created successfully" }
    deactivate server

    Note right of browser: The browser updates the UI dynamically by adding the new note<br>to the list without refreshing the page
