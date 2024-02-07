# FeelGood Project

## Project Overview

FeelGood is a web application designed to encourage young girls and other users to take meaningful breaks from online scrolling. By tracking time spent on various websites, the app suggests engaging, offline activities tailored to user preferences, such as podcasts, yoga sessions, and cooking recipes. The aim is to offer a digital space similar to Headspace, providing users with a way to recharge and 'feel good' again.

## Project Structure

The FeelGood project is built using Next.js and is organized as follows:

- **pages/**: Contains all page components of the application.
  - **api/**: Holds the API routes.
    - **updatelikes/**: API endpoints for updating number of likes of content in json data.
  - **content/**: holds a dinamic page "[category].js" for each content categroy).
  - Standard pages (_app.js, about.js, login.js, 404.js, index.js, suggestionForm.js).
- **comps/**: Reusable UI components (Navbar, Footer, Layout, Category, ContentCard, ContentGrid, ContentGridContainer, LikeButton, YoutubeVideo).
- **public/**: Static assets (images, icons).
- **styles/**: CSS and styling files.
- **data/**: JSON file for initial data (content.json).

## Quick Start

### Setting Up the Project

1. **Clone the Repository**:
   ```bash
   git clone [repository URL]
