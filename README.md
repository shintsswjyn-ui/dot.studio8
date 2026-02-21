# DOT STUDIO | Fine Art Portfolio

A professional, monochrome, and minimalist fine art portfolio website for **Satriyo Ilmahesa Mahawikan**.

## Features

- **Monochrome Aesthetic**: Elegant black, white, and grayscale design.
- **Dynamic Content**: All site data is managed through `src/siteConfig.ts`.
- **Fullscreen Hero**: Supports both images and videos with smooth transitions.
- **Responsive Gallery**: Grayscale-to-color hover effects and lazy loading.
- **Order System**: Integrated inquiry form that generates `mailto` links.
- **Smooth Animations**: Powered by `motion` for page transitions and scroll reveals.

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Customization Guide

### Editing Content
All text, links, and data are located in `src/siteConfig.ts`. Open this file to update:
- Site Name & Tagline
- Artist Biography & Photo
- Techniques & Timeline
- Social Media Links
- Contact Email

### Replacing Images & Videos
To update the visual assets, modify the URLs in `src/siteConfig.ts`:

- **Hero Slider**: Update `heroSlides` array.
  - For videos: Set `type: "video"`, provide `src` (mp4/webm) and a `poster` image.
  - For images: Set `type: "image"` and provide `src`.
- **Gallery**: Update the `drawings` array. Each object requires a `thumbnail` (for the grid) and a high-res `image` (for the detail page).
- **About Page**: Update `collageImages` for the progress section and `artistInfo.photo`.

### Styling
The global theme is defined in `src/index.css` using Tailwind's `@theme` block. You can adjust the primary colors (`ink`, `paper`, `ash`) and fonts there.

## Technologies Used
- React 19
- Vite
- React Router 7
- Tailwind CSS 4
- Motion (Framer Motion)
- Lucide React (Icons)
