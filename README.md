# Mohamed Aaseef — Portfolio

A modern, interactive developer portfolio built with React, TypeScript, Vite, Tailwind CSS, Motion, and Lucide React.

The portfolio presents personal information, skills, projects, education, certifications, achievements, interests, and contact information through a responsive and animated interface.

## Features

- Responsive portfolio design
- Animated introductory loading screen
- Interactive navigation
- Scroll progress indicator
- Hero section
- About section
- Skills showcase
- Project showcase
- Education section
- Certifications section
- Achievements section
- Interests section
- Contact section
- Resume modal
- Interactive project cards
- Theme customization
- Smooth UI animations
- GitHub project links
- Google Apps Script integration for contact functionality

## Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React

### Additional Technologies

- Google GenAI
- Express
- dotenv
- Google Apps Script

## Project Structure

```text
Mohamed-Aaseef-Portfolio/
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── DeveloperIdentityCore.tsx
│   │   ├── Education.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Interests.tsx
│   │   ├── IntroLoader.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── ResumeModal.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── Skills.tsx
│   │
│   ├── context/
│   │   └── ThemeContext.tsx
│   │
│   ├── data/
│   │   └── portfolioData.ts
│   │
│   ├── services/
│   │   └── contactService.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── types.ts
│
├── google-apps-script.js
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
├── vite.config.ts
└── .env.example

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/mmohamedaaseef-cloud/Mohamed-Aaseef-Portfolio.git
```

### 2. Navigate to the project

```bash
cd Mohamed-Aaseef-Portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The development server will display the local URL in the terminal.

Open the URL shown in your terminal to view the portfolio.

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview Production Build

```bash
npm run preview
```

Previews the production build locally.

### Type Checking

```bash
npm run lint
```

Runs TypeScript type checking.

### Clean

```bash
npm run clean
```

Removes generated build files.

## Environment Variables

Create a `.env` file in the project root.

Add the following variable:

```env
VITE_GOOGLE_APPS_SCRIPT_URL=
```

This variable is used to configure the Google Apps Script endpoint for the contact functionality.

Do not commit private credentials, API keys, or other sensitive information to GitHub.

## Customizing the Portfolio

Most portfolio information is organized in:

```text
src/data/portfolioData.ts
```

This file contains structured information for:

- Personal information
- About details
- Skills
- Projects
- Education
- Certifications
- Achievements
- Languages
- Interests

This structure makes it easier to update portfolio content without modifying the main application logic.

## Main Sections

### Hero

Introduces the developer and provides access to the resume.

### About

Contains personal introduction and additional information.

### Skills

Displays technical skills grouped into categories.

### Projects

Showcases projects with descriptions, technologies, responsibilities, features, and repository links.

### Education

Displays academic background and related information.

### Certifications

Lists certifications, issuers, dates, skills learned, and credentials.

### Achievements

Highlights competitions, hackathons, academic achievements, events, and milestones.

### Interests

Displays technology interests, career interests, hobbies, and other areas of interest.

### Contact

Provides a way for visitors to get in touch.

### Resume

Includes an interactive resume modal for accessing the developer's resume.

## Contributing

Contributions are welcome.

### 1. Fork the repository

Fork this repository to your GitHub account.

### 2. Clone your fork

```bash
git clone https://github.com/YOUR_USERNAME/Mohamed-Aaseef-Portfolio.git
```

### 3. Create a feature branch

```bash
git checkout -b feature/your-feature
```

### 4. Make your changes

Implement your changes while following the existing project structure and coding style.

### 5. Test your changes

```bash
npm run build
npm run lint
```

### 6. Commit your changes

```bash
git add .
git commit -m "feat: describe your change"
```

### 7. Push your branch

```bash
git push origin feature/your-feature
```

### 8. Open a Pull Request

Create a Pull Request from your feature branch to the `main` branch of the original repository.

## Code Quality

Before submitting a Pull Request:

- Make sure the application builds successfully.
- Make sure TypeScript checks pass.
- Test your changes.
- Avoid unnecessary modifications.
- Do not commit sensitive information.
- Keep Pull Requests focused and clearly described.

## License

No license file is currently specified in this project.

## Author

**Mohamed Aaseef**

GitHub:

https://github.com/mmohamedaaseef-cloud/Mohamed-Aaseef-Portfolio
