#Note: part0.5
```mermaid
sequenceDiagram

participant browser
participant server

note over browser: Opens https://studies.cs.helsinki.fi/exampleapp/spa
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
server -->> browser: HTML-code 304

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server -->> browser: HTML-code 304
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server -->> browser: HTML-code 304
note over browser: Browser shows estructure and ask for json data array
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server -->> browser: HTML-code 200
note over browser: Browser loads data due to JS
note over browser: Browser loads html page



