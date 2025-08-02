# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build production bundle
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Project Architecture

This is a React + Vite application with a simple single-page structure:

- **Frontend Framework**: React 19 with modern hooks and functional components
- **Build Tool**: Vite for fast development and optimized builds
- **Module System**: ES modules with modern JavaScript syntax
- **Entry Point**: `src/main.jsx` renders the root `App` component into `index.html`
- **Component Structure**: Currently contains a single `App.jsx` component with basic state management

## Code Style & Linting

- ESLint configured with React Hooks and React Refresh plugins
- Targets modern browsers with ES2020+ features
- Custom rule for unused variables with pattern exceptions
- JSX support enabled throughout the codebase

## File Structure

- `src/` - Source code directory
- `public/` - Static assets served directly
- `dist/` - Build output (ignored by ESLint)
- Configuration files in root: `vite.config.js`, `eslint.config.js`, `package.json`