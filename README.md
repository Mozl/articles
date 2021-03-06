## articles

A React SPA project for showing articles, with a ranking page at the end.

## Setup

- Git clone the repo to download the project files.

- In the terminal run: `npm install` to install all the dependencies for the project.

- Run `npm start` to get the app started.

- Head to http://localhost:3000/ in the browser to see it.

## Testing

- Run `npm test` to run the unit tests
- Run `npm start && ./node_modules/.bin/cypress open` to run the integration tests

I have written a few simple unit and snapshot tests using Jest and Enzyme, along with Cypress integration tests. As TDD is very important to me I wanted to approach the task using that methodology. However, given time restraints I started the project and then wrote the tests.

## My approach

I started out by setting up a simple create-react-app project as I wanted to jump into development quickly. I started out mapping out the architecture of the project, deciding the components needed and CSS framework to use. I decided to use styled-components as it keeps the CSS with the components themselves, alongside CSS Grid for a modern, responsive layout. Starting with the Article component, I started out being able to show one article with some mock data. I wanted to make use of the new features in React such as useContext and useState so I then moved the data to the ArticleContext, wrapping the App in the context provider and added useContext to the Article. This was then moved to the ArticleContainer when I started working on the other articles. As I wanted to only create one Article component, I added logic which renders the Article based on the props passed to it. This means the Articles are correctly rendered, considering each is a unique mix of text, images and lists.

I then added the Nav component, styling it simply with styled-components and adding the dummy links. I decided to use React Router to power the links to aid navigation due to its declarative style. I then started work on the ranking page, adding in a simple form with a function to handle the submit. This includes a dummy POST using fetch, with a try/catch with an error if the data send fails. As there is no server I have decided to simply refresh and clear the inputs when the data is submitted.

In order the show how I would use data from an API for the articles I wrote some fetch code using useEffect, another new React feature, but I have commented it out to show it but not use it. For accessibility I have added a number of aria labels and used semantic HTML whereever possible. As a quick way to show errors, I wrote a few functions for erroring due to loss of network connection and slow connection, using a simple alert. 

## Due to time constraints

If I had more time to work on this project I would:

- refactor the ranking page using SVG stars for each article and implement full POST
- write more unit tests for full coverage and integration tests for all scenarios and edge cases
- handle preloading the next article
- finish adding accessibility layer to the app, ensuring screen readers would be able to easily access all the content
- improve styling for better UX