// PREMIUM INLINE CONFIG
const config = {
    profile: {
        name: "Customer Name",
        bio: "Your tagline goes here.",
        image: "assets/profile.jpg"
    },
    colors: {
        primary: "#6a5acd",
        text: "#333",
        background: "#ffffff",
        buttonHover: "#f2f2f2",
        glow: "#6a5acd"
    },
    links: [
        { name: "WhatsApp", url: "https://wa.me/1234567890", icon: "fab fa-whatsapp", color: "#25d366" },
        { name: "Instagram", url: "https://instagram.com/username", icon: "fab fa-instagram", color: "#e1306c" },
        { name: "Location", url: "https://maps.google.com?q=location", icon: "fas fa-map-marker-alt", color: "#ff6347" },
        { name: "Menu", url: "#menu", icon: "fas fa-bars", color: "#6a5acd" }
    ],
    footer: "© 2026 Your Company Name"
};

// PROFILE
document.querySelector('.profile-pic').src = config.profile.image;
document.querySelector('.username').textContent = config.profile.name;
document.querySelector('.bio').textContent = config.profile.bio;

// COLORS
const root = document.documentElement;
root.style.setProperty('--primary-color', config.colors.primary);
root.style.setProperty('--text-color', config.colors.text);
root.style.setProperty('--background-color', config.colors.background);
root.style.setProperty('--button-hover', config.colors.buttonHover);
root.style.setProperty('--glow-color', config.colors.glow);

// LINKS GRID
const linksGrid = document.querySelector('.links-grid');
config.links.forEach((link, index) => {
    const a = document.createElement('a');
    a.href = link.url;
    a.className = 'link-btn';
    a.style.backgroundColor = link.color;
    a.style.animationDelay = `${index * 0.15}s`; // staggered fade-in
    a.innerHTML = `<i class="${link.icon}"></i> ${link.name}`;
    linksGrid.appendChild(a);
});

// FOOTER
document.querySelector('.footer').textContent = config.footer;
