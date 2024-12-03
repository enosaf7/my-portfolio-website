# Professional Portfolio Website

A modern, responsive portfolio website built to showcase my professional work and skills.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Animated typing effect
- Project showcase section
- Skills display
- Contact form
- Modern UI with animations
- Social media integration

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome for icons
- Google Fonts

## Setup

1. Clone this repository or download the files
2. Open `index.html` in your web browser
3. Customize the content in the HTML file with your personal information
4. Update the styling in `styles.css` if desired
5. Modify the JavaScript animations and interactions in `script.js`

## Customization

### To add a new project:

Add the following HTML structure inside the `projects-grid` div in `index.html`:

```html
<div class="project-card">
    <img src="path-to-project-image.jpg" alt="Project Name">
    <h3>Project Name</h3>
    <p>Project description goes here</p>
    <div class="project-links">
        <a href="live-demo-link" target="_blank">Live Demo</a>
        <a href="github-repo-link" target="_blank">GitHub</a>
    </div>
</div>
```

### To update social links:

Modify the href attributes in the social-links section of `index.html`:

```html
<div class="social-links">
    <a href="your-github-url" target="_blank"><i class="fab fa-github"></i></a>
    <a href="your-linkedin-url" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="your-twitter-url" target="_blank"><i class="fab fa-twitter"></i></a>
</div>
```

## License

This project is open source and available under the MIT License.
