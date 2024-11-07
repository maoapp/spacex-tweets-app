# SpaceX Tweets App (UI)

https://spacex-tweets-app.vercel.app/

## Project Description
A React-based web application that provides an interactive interface for tracking SpaceX launches and viewing related tweets. The app integrates with the SpaceX API to display information about upcoming and past launches, and with the Twitter API to showcase recent tweets about SpaceX or space launches. The application is designed for scalability and responsiveness, providing users with an intuitive experience across devices.

---

## Preview

<img width="1506" alt="image" src="https://github.com/user-attachments/assets/6daae56f-a176-484c-b469-dd69f6eb0a8e">


## Methodology
To develop the SpaceX Tweets App UI effectively, I adopted a structured approach focusing on front-end best practices, component reusability, and integration with APIs. The UI was built using React and styled using Chakra UI for a modern and responsive design. For data management and API requests, Axios was used to communicate with the backend services. Additionally, React Router was implemented for smooth navigation between pages.

For testing, React Testing Library and Jest were used to ensure component reliability and consistent user interactions.

### Key Features:
- **State Managment:**
  - Ensure the application share different states and cache data between screens.
    (https://github.com/maoapp/spacex-tweets-app/pull/1)
    
- **Launch Information:**
  - Fetch and display SpaceX launches (upcoming and past) with details like mission name, date, and status.
    (https://github.com/maoapp/spacex-tweets-app/pull/2)
    (https://github.com/maoapp/spacex-tweets-app/pull/3)
    (https://github.com/maoapp/spacex-tweets-app/pull/7)
    
- **Twitter Integration:**
  - Show tweets related to SpaceX launches, fetched from the backend service.
    (https://github.com/maoapp/spacex-tweets-app/pull/8)
    
- **Favorite section:**
  - Display favorite launches cards.
    (https://github.com/maoapp/spacex-tweets-app/pull/5)

- **Filter feature:**
  - Filter upcoming cards by date
    (https://github.com/maoapp/spacex-tweets-app/pull/6)

- **Unit tests: WIP**
  - Add unit test config and some initial tests
    (https://github.com/maoapp/spacex-tweets-app/pull/12)

## Development Tasks Completed
The following tasks were completed during development:

- **Project Setup:**
  Initialized project structure, installed dependencies, and configured React environment.

- **API Integration:**
  Integrated SpaceX API and backend services for fetching launches and tweet data.

- **Chakra UI Integration:**
  Styled components using Chakra UI for a clean and responsive design.

- **Routing:**
  Implemented client-side routing with React Router for seamless navigation.

- **Error and Loading States:**
  Added loading spinners and user-friendly error messages for a polished user experience.

- **Deployment**
  Deploy app and add CD to release continuously

- **Unit Testing: WIP**
  Tested core components and features using React Testing Library and Jest.

---

## Branching Strategy
For effective task management and collaboration, the following branching strategy was employed:

1. **Feature Branching:** Each major feature (e.g., SpaceX launches page, Twitter feed integration) was developed in its own branch, ensuring isolated development and testing.
2. **Fix Branching:** Bug fixes and UI tweaks were handled in dedicated fix branches.
3. **Main Branch:** Used for stable, production-ready code after rigorous testing.

---

## Run Project Locally

### Clone the repository:
```bash
git clone https://github.com/maoapp/spacex-tweets-app.git
```

Install dependencies:
   ```bash
   cd spacex-tweets-service
   npm install
   ```

Start the development server:
   ```bash
   npm run dev
   ```
      

Build App:

   ```bash
   npm run build
   ```

