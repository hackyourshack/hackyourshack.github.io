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
