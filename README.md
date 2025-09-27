# Website Starter

A static website project with organized directory structure supporting 5 main pages and future expansion.

## Project Structure

```
website-starter/
├── index.html              # Main homepage entry point
├── pages/                  # Additional HTML pages
│   ├── suites.html        # Suites information page
│   ├── amenities.html     # Amenities showcase page
│   ├── location.html      # Location and directions
│   └── contact.html       # Contact information
├── css/                   # Stylesheets
├── js/                    # JavaScript files
├── images/                # Image assets organized by content type
│   ├── gallery/           # Photo gallery images
│   ├── suites/           # Suite-specific images
│   ├── amenities/        # Amenity photos
│   ├── location/         # Location and area images
│   └── hero/             # Hero/banner images
├── assets/               # Other static assets (fonts, documents, etc.)
└── README.md            # This file
```

## Directory Organization

### Root Level
- **index.html**: Main entry point for the website
- **pages/**: Contains all secondary HTML pages for clean URL structure

### Asset Directories
- **css/**: All stylesheets and CSS-related files
- **js/**: JavaScript files for interactivity and functionality
- **images/**: Media files organized by content category for easy maintenance
- **assets/**: Miscellaneous static files (fonts, PDFs, etc.)

### Development Workflow
This structure supports both development and production deployment:
- Clean separation of concerns (content, styles, scripts, media)
- Logical organization for 5 main website sections
- Scalable structure for future page additions
- Version control friendly with `.gitkeep` files in empty directories

### Best Practices Implemented
- Follows web development naming conventions
- Supports SEO-friendly URL structure
- Maintains clear asset organization
- Enables efficient caching strategies
- Facilitates team collaboration and maintenance
