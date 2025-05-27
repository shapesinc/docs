# Shapes Inc Documentation

This documentation site is built with [Mintlify](https://mintlify.com/), a modern documentation platform that uses MDX files for content.

## 🚀 Getting Started

### Prerequisites
- Node.js 19+ installed
- npm or yarn package manager

### Local Development

1. Install Mintlify CLI:
```bash
npm i -g mintlify
```

2. Start the development server:
```bash
cd docs
mint dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the site

## 📁 Project Structure

```
docs/
├── docs.json              # Main configuration file
├── introduction.mdx       # Homepage content
├── getting-started/       # Getting started guides
├── user-guide/           # User documentation
├── creator-guide/        # Creator documentation
├── products-services/    # Product information
├── api-reference/        # API documentation
├── support/              # Support pages
├── logo/                 # Logo assets
└── images/               # Image assets
```

## 📄 Adding New Pages

### 1. Create the MDX File

Create a new `.mdx` file in the appropriate directory:

```mdx
---
title: 'Your Page Title'
description: 'Brief description for SEO and navigation'
---

# Your Page Title

Your content goes here...
```

### 2. Update docs.json

Add your new page to the navigation in `docs.json`:

```json
{
  "group": "Your Group",
  "pages": [
    "existing-page",
    "your-new-page"  // Add this line
  ]
}
```

### 3. File Naming Convention

- Use kebab-case for file names: `my-new-page.mdx`
- Match the file path in docs.json: `"folder/my-new-page"`
- Don't include `.mdx` extension in docs.json

## 📋 Adding FAQ Pages

The documentation includes a dedicated FAQ section with its own tab. To add new FAQ pages:

### 1. Create FAQ File

Create your FAQ page in the `faq/` directory:

```mdx
---
title: 'Your FAQ Topic'
description: 'Common questions about your topic'
---

# Your FAQ Topic

<AccordionGroup>
  <Accordion title="Question 1">
    Answer to the first question
  </Accordion>
  
  <Accordion title="Question 2">
    Answer to the second question
  </Accordion>
</AccordionGroup>
```

### 2. Add to FAQ Navigation

Update the FAQ tab in `docs.json`:

```json
{
  "tab": "FAQ",
  "groups": [
    {
      "group": "Frequently Asked Questions",
      "pages": [
        "faq/login-issues",
        "faq/shapes-commands",
        "faq/your-new-faq"  // Add your new FAQ page here
      ]
    }
  ]
}
```

### 3. FAQ Best Practices

- Use `<AccordionGroup>` and `<Accordion>` for Q&A format
- Keep questions concise and answers helpful
- Use callouts (`<Note>`, `<Tip>`, `<Warning>`) for important information
- Include contact information for additional help

## Mintlify Components

### Cards

Create attractive card layouts:

```mdx
<Card title="Card Title" icon="icon-name">
  Card content goes here
</Card>

<CardGroup cols={2}>
  <Card title="Card 1" icon="star">
    First card content
  </Card>
  <Card title="Card 2" icon="heart">
    Second card content
  </Card>
</CardGroup>
```

### Tabs

Organize content with tabs:

```mdx
<Tabs>
  <Tab title="Tab 1">
    Content for tab 1
  </Tab>
  <Tab title="Tab 2">
    Content for tab 2
  </Tab>
</Tabs>
```

### Steps

Create step-by-step guides:

```mdx
<Steps>
  <Step title="First Step">
    Description of the first step
  </Step>
  <Step title="Second Step">
    Description of the second step
  </Step>
</Steps>
```

### Callouts

Add important notes and tips:

```mdx
<Note>
  This is a general note
</Note>

<Tip>
  This is a helpful tip
</Tip>

<Warning>
  This is a warning message
</Warning>

<Info>
  This is informational content
</Info>
```

### Code Blocks

Display code with syntax highlighting:

```mdx
```javascript
function example() {
  console.log("Hello, world!");
}
```
```

### Accordions

Create collapsible content:

```mdx
<AccordionGroup>
  <Accordion title="Question 1">
    Answer to question 1
  </Accordion>
  <Accordion title="Question 2">
    Answer to question 2
  </Accordion>
</AccordionGroup>
```

### Images

Add images with captions:

```mdx
<img src="/images/example.png" alt="Description" />

<Frame>
  <img src="/images/example.png" alt="Description" />
</Frame>
```

## ⚙️ Configuration (docs.json)

### Basic Structure

```json
{
  "$schema": "https://mintlify.com/docs.json",
  "theme": "linden",
  "name": "Shapes Inc",
  "colors": {
    "primary": "#2563EB",
    "light": "#3B82F6", 
    "dark": "#1D4ED8"
  },
  "navigation": {
    "tabs": [
      {
        "tab": "Tab Name",
        "groups": [
          {
            "group": "Group Name",
            "pages": ["page1", "page2"]
          }
        ]
      }
    ]
  }
}
```

### Navigation Structure

- **Tabs**: Top-level navigation sections
- **Groups**: Subsections within tabs
- **Pages**: Individual documentation pages

### Adding New Sections

1. **New Group**: Add to existing tab
```json
{
  "group": "New Section",
  "pages": ["new-page1", "new-page2"]
}
```

2. **New Tab**: Add entire new section
```json
{
  "tab": "New Tab",
  "groups": [
    {
      "group": "Group in New Tab",
      "pages": ["page1"]
    }
  ]
}
```

3. **Nested Groups**: Create subsections
```json
{
  "group": "Parent Group",
  "pages": [
    "intro-page",
    {
      "group": "Nested Group",
      "pages": ["nested-page1", "nested-page2"]
    }
  ]
}
```

## Best Practices

### Content Writing

1. **Use clear, descriptive titles**
2. **Write concise descriptions for SEO**
3. **Structure content with proper headings (H1, H2, H3)**
4. **Use bullet points and numbered lists**
5. **Include code examples where relevant**

### File Organization

1. **Group related pages in directories**
2. **Use consistent naming conventions**
3. **Keep file names short but descriptive**
4. **Organize images in the `/images` folder**

### Navigation Design

1. **Limit groups to 5-7 pages for readability**
2. **Use logical grouping and ordering**
3. **Keep navigation depth to 2-3 levels maximum**
4. **Use descriptive group and page names**

## 🔧 Common Tasks

### Adding Icons

Use [Lucide icons](https://lucide.dev/) in components:

```mdx
<Card title="Example" icon="star">
  Content here
</Card>
```

### Linking Between Pages

```mdx
[Link text](/path/to/page)
[External link](https://example.com)
```

### Adding Images

1. Place images in `/images` folder
2. Reference with `/images/filename.png`
3. Always include alt text for accessibility

### Custom Styling

Add custom CSS in a `globals.css` file and reference it in docs.json:

```json
{
  "css": ["globals.css"]
}
```

## 🚀 Deployment

The site automatically deploys when changes are pushed to the main branch. Mintlify handles the build and hosting process.

### Manual Deployment

If needed, you can manually trigger deployment through the Mintlify dashboard.

## Support

- **Mintlify Documentation**: [docs.mintlify.com](https://docs.mintlify.com)
- **Shapes Inc Support**: [hi@shapes.inc](mailto:hi@shapes.inc)
- **Community**: [Reddit](https://reddit.com/r/ShapesInc)

## Common Issues

### Page Not Showing

1. Check file path in docs.json matches actual file location
2. Ensure file has proper frontmatter (title, description)
3. Verify docs.json syntax is valid

### Styling Issues

1. Check component syntax matches Mintlify documentation
2. Ensure proper closing tags for all components
3. Validate MDX syntax

### Build Errors

1. Run `mint dev` locally to catch errors
2. Check browser console for JavaScript errors
3. Validate docs.json structure