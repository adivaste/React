# Day - 1 Notes 

## Things/Points to understand
1. What is rel stylesheet
2. What is react, react native, react 3D
3. What is CDN

## React-CDN's to include
- ``` <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>```
- ```<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>```
- Remember these script's must be included before react script content.
- You cannot do something like this, I wont actually render the tags as you are expecting
```const heading = React.createElement("h1", {}, "Name of mine <p> Name again </p>");```
- You can also write the ```null``` instead of ```{}```