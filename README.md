# Smart Shopping List

## 🎯 About

Smart Shopping List is a React application designed to help you organize your shopping efficiently. It allows you to add, edit, and remove items from your shopping list, as well as filter items based on various criteria. The application also supports undo and redo functionality for better user experience.

## 🛠 Tech Stack

- **[React:](https://react.dev/)** A JavaScript library for building user interfaces.
- **[Redux Toolkit:](https://redux-toolkit.js.org/)** A library for managing application state.
- **[TypeScript:](https://www.typescriptlang.org/)** A programming language that adds static typing to JavaScript.
- **[Redux Persist:](https://www.npmjs.com/package/redux-persist)** A library for persisting Redux state in localStorage.
- **[Tailwind CSS:](https://tailwindcss.com/)** A utility-first CSS framework for styling.
- **[ESLint:](https://eslint.org/)** A tool for identifying and fixing problems in JavaScript code.
- **[Prettier:](https://prettier.io/)** An opinionated code formatter.
- **[Jest:](https://jestjs.io/)** Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- **[Vite:](https://vite.dev/)** A build tool that provides a faster and leaner development experience for modern web projects.

## ✨ Features
- **Add Items**: Easily add new items to your shopping list with details such as name, quantity, and category.
- **Edit Items**: Modify existing items to update their details.
- **Remove Items**: Delete items from your shopping list.
- **Mark as Purchased**: Toggle the purchased status of items.
- **Filter Items**: Filter items by name, category, and purchased status.
- **Undo/Redo**: Undo and redo actions to revert or reapply changes.

## 🏁 Starting

```
Before starting 🏁, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

# Clone this project
$ git clone https://github.com/mmazitov/smart-shopping-list.git

# Access
$ cd smart-shopping-list

# Install the dependencies using Yarn or npm:
$ yarn install or $ npm install

#To start the development server, run:
$ npm run dev or $ yarn dev

# To build the project for production, run:
$ npm run build or $ yarn build

# To preview the production build, run:
$ npm run preview or $ yarn preview

# Lint project
$ npm lint or $ yarn lint


```

## Usage
Add New Items:
- Use the form on the left side of the screen to add new items to your shopping list.
- Fill in the item name, quantity, and select a category.
- Click the "Add Item" button to add the item to the list.

Edit Existing Items: 
- Click the "Edit" button next to an item to modify its details.
- Update the item name, quantity, or category as needed.
- Click the "Save Changes" button to save the updates.
 
Remove Items:
- Click the "Remove" button next to an item to delete it from the list.
- Confirm the removal in the prompt that appears.
 
Mark Items as Purchased:
- Click the checkbox next to an item to mark it as purchased.
- The item will be visually distinguished to indicate its purchased status.

Filter Items:
- Use the search filter to filter items by name, category, and purchased status.
- Enter a search term to filter items by name.
- Select a category from the dropdown to filter items by category.
- Toggle the "Purchased" checkbox to show or hide purchased items.

Undo/Redo Actions:
- Use the "Undo" button to revert the last action.
- Use the "Redo" button to reapply the last undone action.

## 📁 Project Structure  

- components: Contains the React components used in the application.
  - ItemForm.tsx: Component for adding and editing items.
  - ItemList.tsx: Component for displaying the list of items.
  - SearchFilter.tsx: Component for filtering items.
  - ShoppingListItem.tsx: Component for rendering individual shopping list items.
  - UI: Contains reusable UI components such as buttons, inputs, labels, and selects.
- store: Contains the Redux store configuration and slices.
  - shoppingSlice.ts: Redux slice for managing shopping list state.
  - store.ts: Configuration of the Redux store with persistence.
  - types: Contains TypeScript type definitions.

- types.ts: Defines interfaces and types used throughout the application.
- utils: Contains utility functions.
  - categories.ts: Utility functions for handling item categories.
  - validation.ts: Utility functions for validating item data.


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any bugs or have feature requests.
