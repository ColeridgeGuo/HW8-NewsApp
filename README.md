# CSCI 571 HW8 - React NewsApp

This is a web news app using React for the frontend and Node.js for the backend. New York Times api and Guardian api are used as news sources.

The app shows headline articles from both NYTimes and Guardian on the homepage, and different sections can be selected to filter down articles. A toggle switch can switch between NYTimes and Guardian articles. The search bar has autocomplete functionalities implelmented with Bing Autosuggest. Clicking on a news card enters the detailed page where the user and comment, bookmark, and share the article via Facebook, Twitter, and email.

The Node.js backend is served on Google Cloud Platform and serves as a middleware between the frontend web app and the APIs. Therefore the APIs are not directly called from the frontend. The backend can be found [here](https://github.com/ColeridgeGuo/HW8-NewsApp-backend).
