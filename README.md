# Lindeed

Lindeed is a job listing web application that allows users to browse job categories, view featured jobs, and see detailed job information. This project is built using React, React Router, Tailwind CSS, and Daisy UI.

## Technology Used

- React
- React Router
- Tailwind CSS
- Daisy UI

## Project Setup

### 1. Project Setup with React Router, Tailwind, and Daisy UI

- Initialized the project with React.
- Set up React Router for navigation.
- Integrated Tailwind CSS for styling.
- Added Daisy UI for additional UI components.

### 2. Set Nested Route and Navbar for Lindeed

- Configured nested routes using React Router.
- Created a responsive Navbar for navigating through different pages.

### 3. Set Page Layout and Display Featured Jobs

- Designed the page layout to display featured jobs.
- Implemented a grid layout to showcase job listings.

### 4. Add Icons and Handle Show All Jobs

- Integrated `react-icons` library to add icons to job categories.
- Implemented functionality to show all jobs when a button is clicked.

### 5. Load Job Details Page and Display

- Set up dynamic routing to load job details based on the selected job.
- Displayed detailed information about the job on a separate page.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/lindeed.git
    cd lindeed
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

### Running the Project

1. Start the development server:

    ```sh
    npm start
    ```

2. Open your browser and navigate to:

    ```
    http://localhost:3000
    ```

## Project Structure

- `src/`: Main source folder containing all the components and assets.
  - `components/`: Contains all the React components.
  - `data/`: Contains the JSON files for job categories and job details.
  - `routes/`: Contains the routing components.
- `public/`: Public folder containing static assets.

## Features

### 1. Navbar

- A responsive navigation bar for easy navigation between different pages.

### 2. Banner

- A welcoming banner that highlights the purpose of the application and encourages users to get started.

### 3. Job Categories

- Displays job categories with relevant icons and availability.
- Fetches data from `categories.json` and dynamically renders the categories.

### 4. Featured Jobs

- Displays a list of featured jobs with a button to show all jobs.
- Fetches job data and renders it in a grid layout.

### 5. Job Details

- Loads detailed information about a selected job.
- Displays job title, company name, location, salary, job type, and description.

## Additional Functionality to be Added

- User authentication and profile management.
- Job application functionality.
- Enhanced search and filter options for jobs.
- Admin panel for managing job postings.


