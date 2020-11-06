# Concept for the `Hack Your Shack` platform implementation

## Features

### For Users

- View Content\*
- Search Content\*
- Select Language\*
- Sign Up
- Sign In
- Edit Profile
- Storage
  - Bookmark\*
  - Comment
  - Create Hack
    - Instruction/Template
    - Tutorial
    - Video cutting
    - Translation
- Community
  - Post in Forum
  - Chat with other users

> \*) no sign-in required

### For Editors

Candidate frameworks:

- Netlify CMS: https://www.netlifycms.org/

## Content Management

### General

All content will be stored as markdown files.

All content will be stored in repositories apart from the platform´s implementation.

The different sections (storage, magazine, handbook, events) can have different templates, front-matter and stylesheets.

> **YFM (YAML FrontMatter):** The front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines. Here is a basic example:
>
> ```
> ---
> layout: post
> title: Blogging Like a Hacker
> ---
> ```

### Repository Structure

- hacks-repo
  - hack-12812734.md
  - hack-83927467.md
  - hack-24765485.md
  - hack-98374598.md
  - hack-09834559.md
- editor-repo (fully static)
  - storage
    - editorial.md
  - magazine
    - edition01
      - editorial.md
      - article01.md
  - handbook
    - Fully static
    - frontmatter.md
    - topics
      - toilets.md
      - statics.md
      - bricks.md
  - events

## Hosting

Options

- Vercel/Next.js
- AWS: Amplify?
- GCP: Google App Engine

## Style

### Popular Examples

- m.youtube.com
- chefkoch.de
- airbnb.com
- google.com
- facebook.com
- uber.com
- unsplash.com

### Goals

- have much screen space for content
- colorful, lively, nevertheless clear visuals
- lots of photo and video footage
- fun to use intuitive controls
  - should look great over images
  - should still be well recognizable over text

### Controls

- Section switcher
- Search bar

## Page Structure

- Global
  - Logo
    - top-left corner
    - transparent
    - always in screen or scroll out?
    - function: Goto landing-page or open app-bar?
  - Section Switcher
    - bottom-right corner
- Landing Page
  - Top
    - Full size picture with slogan of the day
    - Parallax scrolling into content (with scroll button)
  - Content
    - Site news (e.g. new topic in the handbook)
    - Community news
    - Featured hack
    - Trending hacks
  - Bottom
    - About us
    - etc.
- Magazine
- Handbook
- Community
- Search Page
  - central entry point to the hack storage
  - rich filter feature
- Hack Page
- Profile/Preferences
- Bookmarks
