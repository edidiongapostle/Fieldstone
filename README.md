# Fieldstone National Bank - Demo Website

A fully responsive, modern banking website demo built for portfolio and demonstration purposes. This project showcases a complete digital banking experience with public-facing pages and a simulated online banking dashboard.

## ⚠️ Important Notice

**This is a demo website for portfolio purposes only.** It is not a real financial institution. No real personal or account information should be entered. All forms are simulated and do not actually process or store data.

## Features

### Public Pages
- **Home Page** (`index.html`) - Landing page with hero section, product offerings, and feature highlights
- **About Page** (`about.html`) - Company history, timeline, leadership, and community information
- **Login Page** (`login.html`) - Secure-looking login interface with demo authentication
- **Create Account** (`create-account.html`) - Multi-step account opening form with validation

### Online Banking Dashboard (`/users/`)
- **Dashboard** (`users/dashboard.html`) - Account overview with balance display, account cards, recent transactions, and quick actions
- **Transfers** (`users/transfers.html`) - Between-account transfers, external transfers, and bill pay functionality
- **Bill Pay** (`users/bill-pay.html`) - Dedicated bill payment interface with payee management
- **Deposits** (`users/deposits.html`) - Mobile check deposit and direct deposit setup
- **Settings** (`users/settings.html`) - Profile management, security settings, and preferences
- **Account Details** (`users/account-details.html`) - Detailed account information, transaction history, and account settings
- **Statements** (`users/statements.html`) - View and download monthly statements, tax documents, and other account documents

### Key Functionality
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dashboard Navigation** - Custom navigation bar for authenticated users
- **User Dropdown** - Profile menu with settings, security, and sign out options
- **Hide Balances** - Toggle to hide/show account balances on dashboard
- **Customize Dashboard** - Ability to hide/show account cards
- **Form Validation** - Client-side validation with visual feedback
- **Demo Forms** - All forms use `data-demo-form` attribute for simulated submissions
- **Accessibility** - Semantic HTML, ARIA labels, and keyboard navigation support

## Project Structure

```
fieldstone-bank/
├── css/
│   └── styles.css          # Main stylesheet with all page styles
├── js/
│   └── script.js           # Shared JavaScript functionality
├── users/                  # Authenticated user pages
│   ├── dashboard.html
│   ├── transfers.html
│   ├── bill-pay.html
│   ├── deposits.html
│   ├── settings.html
│   ├── account-details.html
│   └── statements.html
├── about.html
├── create-account.html
├── index.html
├── login.html
└── README.md
```

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Custom CSS with CSS variables, flexbox, and grid layouts
- **JavaScript (Vanilla)** - No frameworks, pure JavaScript for interactivity
- **Google Fonts** - Libre Franklin (display) and Inter (body text)
- **SVG Icons** - Custom SVG icons throughout the interface

## Getting Started

### Local Development

1. Clone or download the project files
2. Open any HTML file in a web browser
3. No build process or server required - works directly from the file system

### Deployment

1. Upload all files to your web server
2. Ensure the directory structure is maintained:
   - `css/` folder with `styles.css`
   - `js/` folder with `script.js`
   - `users/` folder with all dashboard pages
   - Root HTML files in the main directory
3. Set proper file permissions (644 for files, 755 for directories)
4. Test the live site to ensure all paths are correct

## Authentication Flow

The demo authentication flow works as follows:

1. **Login** (`login.html`) - Users enter any credentials and click "Sign In"
   - Form uses `data-demo-form` attribute with `data-success-redirect="users/dashboard.html"`
   - Simulated success message is shown
   - Redirects to dashboard after 2 seconds

2. **Create Account** (`create-account.html`) - Multi-step form for new users
   - Form uses `data-demo-form` attribute with `data-success-redirect="users/dashboard.html"`
   - Simulated account creation process
   - Redirects to dashboard after completion

3. **Sign Out** - Available in user dropdown on all dashboard pages
   - Links back to `login.html`

## Customization

### Colors
All colors are defined as CSS variables in `styles.css`:
```css
:root {
  --navy-900: #0A2540;
  --navy-800: #0F3057;
  --blue-600: #1B4D89;
  --red-600: #C41230;
  --green-700: #1E7B4D;
  /* ... more variables */
}
```

### Typography
- Display font: Libre Franklin
- Body font: Inter
- Both loaded via Google Fonts

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Known Limitations

- All forms are simulated - no backend processing
- No real authentication or data storage
- Demo bar appears on all pages to indicate this is a demonstration
- Some features (like file upload for mobile deposit) are simulated with alerts

## Future Enhancements

Potential additions for a real implementation:
- Backend API integration
- Real authentication system
- Database for user data
- Payment processing integration
- Advanced security features
- Mobile app integration

## Credits

Designed and developed as a portfolio project demonstrating modern web development practices, responsive design, and user experience design for financial applications.

## License

This is a demo project for portfolio purposes. Not intended for production use as a real banking application.

---

**Note:** This project uses fictional branding ("Fieldstone National Bank") for demonstration purposes only. Any resemblance to actual financial institutions is coincidental.
