# Sahaji Perera - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Fully responsive design for all devices
- **SEO Optimized**: Built with Next.js for optimal SEO
- **Performance**: Fast page loads and smooth transitions
- **Sections**:
  - Hero with social links and CTAs
  - About section with highlights
  - Skills with progress bars
  - Featured projects showcase
  - Education & certifications
  - Contact form
  - Professional footer

## 🛠️ Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/it23223394/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/it23223394/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

Your portfolio will be live in minutes! 🎉

## 📝 Customization

### Update Your Information

1. **Personal Information**: Edit the content in each component file in the `components/` directory
2. **Projects**: Update the projects array in `components/Projects.tsx`
3. **Skills**: Modify the skillCategories array in `components/Skills.tsx`
4. **Contact Info**: Update contact details in `components/Contact.tsx` and `components/Footer.tsx`

### Add Your CV

Place your CV file as `cv.pdf` in the `public/` directory (you'll need to create this folder).

### Connect Contact Form

To make the contact form functional:

1. **Using EmailJS** (Free):
   - Sign up at [emailjs.com](https://www.emailjs.com)
   - Get your API keys
   - Install EmailJS: `npm install @emailjs/browser`
   - Update the form submission logic in `components/Contact.tsx`

2. **Using Formspree** (Alternative):
   - Sign up at [formspree.io](https://formspree.io)
   - Update the form action

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── About.tsx           # About section
│   ├── Contact.tsx         # Contact section
│   ├── Experience.tsx      # Education & experience
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── Navbar.tsx          # Navigation bar
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills section
│   └── ThemeProvider.tsx   # Dark mode provider
├── public/                 # Static assets (add your CV here)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Color Customization

To change the primary color scheme, edit `tailwind.config.js`:

```js
primary: {
  50: '#f0f9ff',
  100: '#e0f2fe',
  // ... customize your colors
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Contact

**Sahaji Perera**
- Email: sahajiperera@gmail.com
- LinkedIn: [Sahaji Perera](https://www.linkedin.com/in/sahaji-perera-71a7b5345)
- GitHub: [@it23223394](https://github.com/it23223394)

---

Built with ❤️ using Next.js and Tailwind CSS
