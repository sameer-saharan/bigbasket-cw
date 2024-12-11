# BigBasket Clone (Frontend Only)

This is a **frontend-only** clone of BigBasket's homepage, built using React. The project focuses on recreating the visual and functional elements of the homepage with basic interactivity. It uses modern web technologies like **TailwindCSS**, **Redux Toolkit**, and **React Router**.

---

## Features
- **Routing:** Implemented with React Router for navigation.
- **State Management:** Powered by Redux Toolkit.
- **Dynamic Components:** Specific components are rendered dynamically based on user interaction.
- **TailwindCSS:** For fast and efficient styling.
- **Reusable Components:** Organized components for scalability and maintainability.

---

## Technologies Used

- **React**
- **TailwindCSS**
- **Redux Toolkit**
- **React Router**

---

## File and Component Overview

### `main.jsx`

- Entry point of the app.
- Uses **React Router** for routing.
- Integrates **Provider** from `react-redux` for global state management.

### `App.jsx`

- Wraps the main layout components: `Header` and `Footer`.
- Includes the `Outlet` component from `react-router-dom` to render routed content.

### Pages

- **`Home.jsx`**
  - Imports all components from the `Categories` directory.
  - Features a `CategoryButton` to filter and display products dynamically.
  - Includes slideshow components.
- **`Products.jsx`**
  - Displays all available products.
  - Rendered under the `/products` route.

### Data

- Stored in JSON files under the `data` folder.
- Contains product details and asset links for rendering.

### Components

- **Reusable Components**: Modular components like `CategoryButton`, `ProductCard`, and `PromoCards` for scalability.
- **Categories**: Custom components like `Electronics`, `Grocery`, etc., dynamically rendered based on user input.
- **Footer**: A structured footer with social links and categorized items.

### `utils/renderCategoryComponent.js`

- Helps display products category-wise on the homepage.
- Returns the specific category component needed, based on the state from `categorySlice.js`.

### Store

- **`store.js`**
  - Configures the Redux store for state management.
  - Combines slices, including the `categorySlice`.
- **`categorySlice.js`**
  - Contains reducers to manage the selected category state.
  - Sends category data to `renderCategoryComponent.js`, which then returns the appropriate category component to `Home.jsx`.

---

### Project Folder Structure

```plaintext
.
└── app/
    ├── src/
    │   ├── components/
    │   │   ├── Categories/
    │   │   │   ├── index.js
    │   │   │   ├── CustomProducts.jsx
    │   │   │   ├── Drinks.jsx
    │   │   │   ├── Electronics.jsx
    │   │   │   ├── Grocery.jsx
    │   │   │   ├── Household.jsx
    │   │   │   └── TeaAndCoffee.jsx
    │   │   ├── Footer/
    │   │   │   ├── Footer.jsx
    │   │   │   ├── ListHead.jsx
    │   │   │   ├── ListItem.jsx
    │   │   │   └── Socials.jsx
    │   │   ├── Product/
    │   │   │   ├── ProductCard.jsx
    │   │   │   └── ProductCaregory.jsx
    │   │   ├── Promos/
    │   │   │   ├── Promos.jsx
    │   │   │   └── PromoCards.jsx
    │   │   ├── Slideslow/
    │   │   │   ├── SecondSlideslow.jsx
    │   │   │   ├── SlideButton.jsx
    │   │   │   └── Slideslow.jsx
    │   │   ├── index.jsx
    │   │   ├── About.jsx
    │   │   ├── CategoryButton.jsx
    │   │   ├── Dropdown.jsx
    │   │   └── Header.jsx
    │   ├── data/
    │   │   ├── cards.json
    │   │   ├── custom.json
    │   │   ├── products.json
    │   │   └── slideslow.json
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   └── Products.jsx
    │   ├── store/
    │   │   ├── categorySlice.js
    │   │   └── store.js
    │   ├── utils/
    │   │   └── renderCategoryComponent.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    └── XD
```

## Info

- *Deployed at <a href="https://bigbasket-cw.vercel.app">`bigbasket-cw.vercel.app`</a>*