# Shapes Inc Documentation

Welcome to the official documentation repository for Shapes Inc! This repository contains all user guides, getting started materials, and help documentation for the Shapes platform.

## About This Repository

This documentation is built with [Mintlify](https://mintlify.com/) and automatically deploys to our documentation site when changes are merged to the main branch.

## Quick Start for Contributors

### Prerequisites

1. Install [Node.js](https://nodejs.org/) (version 19 or higher)
2. Install the Mintlify CLI globally:
   ```bash
   npm i -g mintlify
   ```

### Local Development

1. Clone this repository
2. Navigate to the documentation folder
3. Run the development server:
   ```bash
   mintlify dev
   ```
4. Open your browser to `http://localhost:3000` to preview changes

## How to Update Documentation

### Adding a New Page

1. **Create the MDX file** in the root directory using kebab-case naming:
   ```
   my-new-guide.mdx
   ```

2. **Add proper frontmatter** to your MDX file:
   ```mdx
   ---
   title: 'My New Guide'
   description: 'A helpful description of what this guide covers.'
   ---

   # My New Guide

   Your content here...
   ```

3. **Update docs.json** to include your new page in the navigation:
   ```json
   {
     "group": "User Guides",
     "pages": [
       "existing-page",
       "my-new-guide"  // Add your new page here
     ]
   }
   ```

### Editing Existing Pages

1. Find the `.mdx` file you want to edit
2. Make your changes using [Markdown syntax](https://mintlify.com/docs/content/text)
3. Test locally with `mintlify dev`
4. Commit and push your changes

### Removing Pages

1. **Delete the MDX file**
2. **Remove from docs.json** - This is critical! Remove the page reference from the navigation structure
3. **Update any internal links** that pointed to the deleted page

## docs.json Management

The `docs.json` file controls the site configuration and navigation. **Always update this file when adding, removing, or reorganizing pages.**

### Current Structure

```json
{
  "navigation": {
    "groups": [
      {
        "group": "Getting Started",
        "pages": [
          "introduction",
          "welcome-to-shapes", 
          "make-or-recover-account"
        ]
      },
      {
        "group": "User Guides",
        "pages": [
          "user-guide",
          "how-to-make-a-shape",
          "how-to-make-high-quality-shape"
        ]
      }
    ]
  }
}
```

### Best Practices

- **File Naming**: Use kebab-case for all file names (`my-guide.mdx`, not `My Guide.mdx`)
- **Always Update Navigation**: When adding/removing files, update `docs.json` immediately
- **Test Locally**: Run `mintlify dev` to test changes before committing
- **Clear Titles**: Use descriptive titles in frontmatter
- **Consistent Structure**: Follow the existing page structure and formatting

### What NOT to Do

- **Don't** create files without adding them to `docs.json`
- **Don't** use spaces or special characters in file names
- **Don't** leave empty placeholder files (they'll be removed)
- **Don't** reference deleted files in `docs.json` navigation
- **Don't** commit broken links or 404s

## Content Guidelines

### Writing Style
- Use clear, concise language
- Write in second person ("you")
- Include helpful examples and screenshots
- Break content into digestible sections

### Markdown Features
We support all standard Markdown plus Mintlify components:
- `<Card>` components for call-to-action sections
- `<CardGroup>` for organizing multiple cards
- `<Accordion>` for collapsible content
- Code blocks with syntax highlighting
- Images and media embeds

## Deployment Process

1. **Create a branch** for your changes
2. **Make your updates** following the guidelines above
3. **Test locally** with `mintlify dev`
4. **Create a Pull Request** to the main branch
5. **Review and merge** - Changes auto-deploy to production

## Current Site Structure

- **Getting Started** - Introduction, welcome, and account setup
- **User Guides** - How-to guides and tutorials for using Shapes

## Troubleshooting

- **Mintlify dev not working**: Run `mintlify install` to reinstall dependencies
- **404 errors**: Check that all files referenced in `docs.json` actually exist
- **Build fails**: Verify `docs.json` syntax is valid JSON
- **Navigation missing**: Ensure new pages are added to `docs.json` navigation

## Support

- For documentation issues: Create an issue in this repository
- For Shapes platform support: Email [hi@shapes.inc](mailto:hi@shapes.inc)
- For technical questions: Check our [User Guide](/user-guide)

---

**Made with ❤️ by the Shapes Inc team**