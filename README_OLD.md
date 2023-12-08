# Bird Sanctuary

## Getting Started

- Fork this repo
- Clone the forked repository
- `cd` to the directory where you cloned it
- `npm install` to install dependencies
- `npm run dev`

> _Note_: Remember to `git add`, `git commit` and `git push` regularly

## Submission Guidelines

- When finished, commit and push your work.
- Make a pull request on Github.
- Submit the link to your pull request on Canvas.

This project is designed to challenge the React skills you have gained so far.

There are 7 features that need to be implemented. Each completed function will be worth 1 point.

A minium of 5 points must be attained in order to pass.

You may receive partial credit (0.5 points) for code that is close to achieving functionality.

## Details

Create a bird sanctuary donation app that meets the criteria from user stories below.

**The bird data is in `src/data/birds.js` and the bonus items are in `src/data/bonusItems.js`. Import these and pass them to your components as props. Use these data files and do not change any information in the original array**

The following demo has been styled for clarity. You do not need to style this app.

![demo gif](./assets/bird-sanctuary.gif)

## User Stories

These 7 Criteria are 1 point each for a total of 7 points

1. I can see sections with birds, that have a name, image, amount and adopt button.
1. I can add birds to the shopping cart.
1. I can see a total cost of the birds in my cart.
1. I can get a 10% discount if I have 3 or more birds in my cart
1. I can get a series of bonus items for increasing cart totals
1. I can use a form to checkout my cart, upon checkout, it resets my cart
1. I can delete a bird from my cart

## Acceptance criteria

The acceptance criteria is listed below. Notice that there are some important details about the exact text, classes, or HTML tags you'll need to use.

Your React app should be made up of a minimum of 3 components:

- Cards.jsx
- Checkout.jsx
- Cart.jsx

### Cards

- The bird data comes from `src/data/birds.js`
  [ ] Each bird card displays the name, image, and amount (price)
- Each bird card has a class name of `card`
- Each bird card has an `Adopt` button with the text `Adopt`

### Cart

- The cart has a class name of `cart`
- When I click on a bird card's adopt button, its name, amount and a delete button appears in the cart as an `<ol>` `list item``.
- The total shows up as an `<h4>` element inside the cart
- When I click an additional bird adopt button, the total cost is updated and additional bird name(s) is added as a list item to the ordered list
- If I click the same bird twice an alert pops up saying 'Bird Already Chosen' and nothing changes
- When there are less than 3 birds in the cart there is a 0% discount
- When there are 3 or more birds in the cart there is a 10% discount
- When I delete a bird from the cart the amount of the bird is subtracted from the total
- When I delete a bird from the cart and there are less than 3 birds, the percentage reverts to 0%
- When I delete enough birds from the cart, the number of bonus items adjust based on the decremented total. (see bonus item criteria below)

### Bonus Items

The bonuses come from `src/data/bonusItems.js`

- The bonus items are added in the `Cart.jsx` component as list items in a `<ul>` as follows:
- 1 bonus (first array item) is given if the total is between 100 and 300
- 2 bonuses (first and second array items) are given if the total is between 300 and 500
- 3 bonuses (first, second and third array items) are given if the total is between 500 and 1000
- 4 bonuses are given if the total is more than 1000

### Checkout

- I can complete the inputs in the checkout form.
- When I complete the form with valid input and click `Submit`, an alert tells me the purchase was successful.
  - Alert text should say: `You have successfully adopted birds. Thank you!`
- When I close the alert box, the cart component should fully reset (no birds, no discount, total = 0, no bonus items listed)

## Help and tips

- Before you write any code, think about your component structure.

  - What components will you need to represent the parts of the app?
  - Which components will need to have state?
  - Which components will need to know about the state of **other components**?
  - Which components will need to get props (data or callbacks) from another component?
  - Which components will be rendered by other components?
  - Draw out your component structure. Check your drawing against the user stories. Will you be able to implement all of the stories with this structure?
