# Mostafa Rahman — Portfolio Website

A fully responsive single-page portfolio built with **React + Vite + Tailwind CSS**.

## Getting Started

```bash
npm install
npm run dev
```

## Adding Your Photos

Replace the placeholder divs with real images by placing your photos in the `public/` folder:

### Hero Section (`src/components/Hero.jsx`)
Replace the placeholder div inside the circular container with:
```jsx
<img src="/hero-photo.jpg" alt="Mostafa Rahman" className="w-full h-full object-cover object-top" />
```

### About Section (`src/components/About.jsx`)
Replace the placeholder div inside the rounded-2xl container with:
```jsx
<img src="/about-photo.jpg" alt="Mostafa Rahman" className="w-full h-full object-cover" />
```

### Project Screenshots (`src/components/Works.jsx`)
Replace each project placeholder with:
```jsx
<img src="/project-1.jpg" alt="Finance App" className="w-full h-40 object-cover rounded-xl" />
```
Use `/project-1.jpg`, `/project-2.jpg`, `/project-3.jpg`, `/project-4.jpg`.

### Client Avatars (`src/components/Testimonials.jsx`)
Replace each avatar placeholder with:
```jsx
<img src="/client-1.jpg" alt={t.name} className="w-full h-full object-cover" />
```
Use `/client-1.jpg`, `/client-2.jpg`, etc.

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.
# portfolio-mostofa
