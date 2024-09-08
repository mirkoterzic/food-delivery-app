# Food Delivery App

This is a food delivery app built with React and Vite. The app provides users with an interactive interface to explore different food items and filter menu items based on price and type. It includes UI components like a navbar, hero section, and menu cards.

## Live Demo

**<a href="https://mirkoterzic.github.io/food-delivery-app/" target="_blank">You can view the live demo of the project here</a>**

## Features

- **Responsive Layout:** Built with Tailwind CSS for a flexible and adaptive design that looks great on all devices.

- **Dynamic Menu Filtering:** Users can filter food items based on category (e.g., burger, pizza, salad, chicken) and price range.

- **Integrated Icons:** Utilizes `react-icons` to enhance the user interface with scalable icons.

- **Modern Development Stack:** Employs Vite for fast builds and hot module reloading, ensuring a smooth development experience.

- **Deployed on GitHub Pages:** Accessible live with seamless integration through GitHub Pages.

- **Data Integration:**
  - **`data.js` File:** Contains a comprehensive dataset with food items and categories, including:
    - **Food Items:** Detailed with `id`, `name`, `category`, `image`, and `price`. This dataset drives the menu display, allowing users to view and filter items based on their preferences.
    - **Categories:** Includes various food categories with corresponding images to help users easily navigate and find their desired food types.

The `data.js` file provides a structured way to manage and display information, ensuring a consistent and dynamic user experience throughout the app.


## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/mirkoterzic/food-delivery-app.git
   cd food-delivery-app
2. Install depndencies

   ```bash
   npm install

3. Run the development server

   ```bash
   npm run dev

## Scripts
- `npm run dev`: Start the development server with Vite.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint to check for code quality issues.

## Deployment
This project is set up to be deployed on GitHub Pages using GitHub Actions. It will automatically build and deploy the app when changes are pushed to the main branch.

[Here is the youtube video i used to deploy the app](https://www.youtube.com/watch?v=Bk28snjHr7c)

### GitHub Actions Workflow
The GitHub Actions configuration can be found in `.github/workflows/deploy.yml`. The workflow consists of the following steps:

1. Checkout the repository.
2. Set up Node.js and install dependencies.
3. Build the project.
4. Deploy the production build to GitHub Pages.

## Tech Stack
- **Frontend**: React, Tailwind CSS, Vite
- **Icons**: react-icons
- **Build Tools**: Vite


## Components
The app consists of several reusable React components:

- **Navbar**: Navigation bar with toggleable mobile menu.
- **Hero**: The main banner with a call to action.
- **HeadLineCards**: Promotional cards showcasing top deals.
- **Food**: Dynamic filtering of menu items by category and price.
- **Footer**: Footer section with contact info and links.

## Author

**Mirko Terzic**

**<a href="https://github.com/mirkoterzic" target="_blank">GitHub</a>**

**<a href="https://www.linkedin.com/in/mirkoterzic/" target="_blank">LinkedIn</a>**

**<a href="https://leetcode.com/u/mirko_terzic/" target="_blank">LeetCode</a>**

**<a href="https://www.frontendmentor.io/profile/mirkoterzic" target="_blank">Frontedn Mentor Profile</a>**


   
