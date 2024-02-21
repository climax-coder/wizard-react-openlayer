# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Features Implemented

### Completion of Project Wizard

1. Title and Structure: The project wizard includes a structured UI with titles, descriptions, and indicators for each step.
2. Stepper: Implemented a stepper component to guide users through the creation process.
3. Step Completion: Each step is marked as completed once the necessary actions are fulfilled, indicated by a check icon and a filled circle.

# Feature Enhancements

1. State Management with Jotai and React Query
   Jotai: Jotai is used for state management in the project. It provides a simple and flexible way to manage state in React applications.
   React Query: React Query is utilized for fetching and caching data from the server. It simplifies data fetching and synchronization with the UI.

2. Project Page
   Header Section: Displays a background image representing the project area. Project name and settings icon are positioned accordingly.
   Date Range: Date range is displayed at the bottom center of the header section.
   Project Info Cards: Four cards provide essential project information in a structured layout.

3. Project Details Page
   Project Details: Displays detailed information about the project, including relevant data and maps.
   Map: Utilizes OpenLayers to display the selected project area

# Usage

To run the project and explore the new features:

Clone the repository to your local machine.
https://github.com/seniorprodev/wizard-react-openlayer
Install dependencies using "npm install".
Start the development server with "npm run dev".

# Technologies

### React

### React Query

### Jotai

### Chakra UI

### OpenLayers
