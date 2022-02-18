# Full Stack Store App

You will be building a store filled with products! Choose any theme you want:

- Soup
- Collectable rubber bands
- $1000 Store (no items worth less than $1000)

Or anything else you want

## Overview

- Use express & postgres/pg-promise to build a back-end
- Use create-react-app to build a front-end
- Connect the back-end and front-end
- Deploy the project online

## Sumission

- Be sure to have a README.md for this project. In the README.md
  - At minimum, include links to your live front-end and back-end
  - Submit the GitHub mono-repository URL to Canvas


- Follow the instructions for creating a video walkthrough of your app and submit the recording to Canvas

## User Stories, Acceptance Criteria and Code Quality Rubric

You must implement all of the user stories and acceptance criteria below. After those are completed, look at and implement as many of the stretch features as you want to.

### User Stories

1. A user can see a list of products to buy
1. A user can click on a product and see a detailed view
1. A user can click on the new button that takes me to a new form that lets the user create a new product
1. After clicking the submit button on the new form, it takes the user to a view that confirms the product has been created
1. A user can click on a button to see a pre-filled edit form and edit a product
1. After editing the product, a user is taken to a view that confirms the product has been updated
1. A user can delete a product
1. A user can visit this app from a provided ULR on the internet that uses data from the express API
1. Effort is present for navigation, headers, labels, colors, fonts, somewhat responsive design, confirmation/errors: A user creates a new product and can confirm that the product is created in some way (ie next view is of index page with new product present)
1. A user can [choose one bonus below]

### Acceptance Criteria

#### Back-end

- An app that uses `express`, and `pg-promise`, where it uses a `postgres` database
- The app is deployed on heroku and can be accessed from your React front-end app and Postman

Other files and folders required for full functionality of your app

|  #  | Action  |      URL      | HTTP Verb |    CRUD    |                Description                |
| :-: | :-----: | :-----------: | :-------: | :--------: | :---------------------------------------: |
|  1  |  Index  |   /products   |    GET    |  **R**ead  |   Get a list (or index) of all products   |
|  2  |  Show   | /products/:id |    GET    |  **R**ead  | Get an individual view (show one product) |
|  3  | Create  |   /products   |   POST    | **C**reate |           Create a new product            |
|  4  | Destroy | /products/:id |  DELETE   | **D**elete |             Delete a product              |
|  5  | Update  | /products/:id |    PUT    | **U**pdate |             Update a product              |

<br />

The model will have, at minimum, these following attributes

- `name` - a string, required
- `description` - a string
- `price` - a number
- `rating` - a number between 0 and 5
- `featured` - a boolean

Consider:

- adding a url for an image
- color
- dimensions/size

Or anything else that makes sense for your store.

#### Front-End

1. Is deployed online (ie on Netlify)
1. Allows users to perform full CRUD and uses all routes built for the back-end

## Deployment

[Use this template](https://github.com/joinpursuit/pern-final-project-template) - deploy the boilerplate app as the first thing you do.

Once the apps are deployed and working as expected,

- Submit your link to Canvas immediately
- You will not be graded until the due date/time

- customize the apps to be your own app.

## Bonuses - You MUST Implement one bonus that you have not used in a prior lab or assignment:

- Use Bootstrap React Components
- Make a second model (back-end and front-end) ie reviews
- Implement login/logout (DO NOT LOCK OUT non-logged in users from being able to see the products and product details)
  - Super Bonus - admin function - only allow admins to create/edit/delete products
- Create a simple shopping cart (add/remove products, front-end only)
- Allow image upload rather than links
- Implement sort product functionality (Front-end? Back-end? It will be up to you to determine pros and cons and make a choice)
- Another bonus feature approved by your instructor

## Example Stores

<details><summary>Inspiration 1</summary>

![](./assets/flow-hack.png)

</details>

<details><summary>Inspiration 2</summary>

![](./assets/neoboutique.png)

</details>

<br />
<hr />
<br />

## Grading:

You will be graded on your implementation of the above user stories

AND

You will have a 1:1 meeting with an instructor to demonstrate your apps functionality AND walk through some code:

- On the front end
- On the back end
- A follow up portion of your app chosen by your instructor

Also, you will be given some feedback on your presentation skills by IR/LPD

## Academic Integrity

Your work should reflect your current technical ability/knowledge