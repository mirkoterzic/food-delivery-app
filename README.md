# Food Delivery App

This is a food delivery app built with React and Vite. The app provides users with an interactive interface to explore different food categories, place orders, and filter menu items based on price and type. It includes several modern UI components like a navbar, hero section, and menu cards.

## Features

- Responsive layout with Tailwind CSS.
- Dynamic menu filtering based on food category and price.
- Integrated icons using `react-icons`.
- Modern development stack with Vite for fast builds and hot module reloading.
- Deployed on GitHub Pages.

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



   
