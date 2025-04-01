# Portfolio - Philip Greiner
https://philipgreiner-portfolio.vercel.app/

This is the portfolio of designer Philip Greiner, developed with Next.js and Tailwind CSS. The site features a homepage and several cards showcasing the designer's past projects.

## Technologies Used

- **Next.js** - React framework for modern web applications.
- **Tailwind CSS** - Utility-first framework for fast and responsive styling.

## Features

- Homepage introducing the designer.
- Interactive cards displaying previous projects.
- Responsive design optimized for performance.

## How to Run the Project

1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/repository-name.git
   ```
2. Navigate to the project folder:
   ```sh
   cd repository-name
   ```
3. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
4. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
5. Open in your browser:
   ```
   http://localhost:3000
   ```

## Project Structure

```
├── .gitignore
├── .vscode
    └── settings.json
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
    ├── pdfs
    │   └── resume.pdf
    └── projects
    │   ├── 1
    │       ├── cover.avif
    │       ├── image1.avif
    │       ├── image2.avif
    │       └── image3.avif
    │   ├── 2
    │       ├── cover.avif
    │       ├── image1.avif
    │       ├── image2.avif
    │       └── image3.avif
    │   ├── 3
    │       └── cover.avif
    │   ├── 4
    │       └── cover.avif
    │   ├── 5
    │       └── cover.avif
    │   ├── 6
    │       └── cover.avif
    │   ├── 7
    │       └── cover.avif
    │   ├── 8
    │       └── cover.avif
    │   ├── 9
    │       └── cover.avif
    │   └── 10
    │       └── cover.avif
├── src
    ├── Components
    │   ├── Nav.tsx
    │   └── ProjectCard.tsx
    └── app
    │   ├── about-me
    │       └── page.tsx
    │   ├── data
    │       └── projects.ts
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── projects
    │       └── [id]
    │           └── page.tsx
└── tsconfig.json
```

## License

This project is licensed under the MIT License.
