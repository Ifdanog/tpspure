document.addEventListener("DOMContentLoaded", function () {
    // Create the new header structure
    const newHeader = document.createElement("header");
    newHeader.classList.add("custom-header");
    newHeader.innerHTML = `
        <div class="header-container">
            <div class="logo">
                <a href="/">
                    <img src="https://d2gt4h1eeousrn.cloudfront.net/110609312/header-fcHJMd/WCga6pX-200x200.jpg" alt="Logo">
                </a>
            </div>
            <nav class="nav-menu">
                <a href="/">Home</a>
                <div class="dropdown">
                    <a href="/product" class="dropdown-toggle">Products ▾</a>
                    <div class="dropdown-menu">
                        <a href="/product/category1">Category 1</a>
                        <a href="/product/category2">Category 2</a>
                        <a href="/product/category3">Category 3</a>
                    </div>
                </div>
                <a href="/services">Services</a>
                <a href="/about-us">About Us</a>
                <a href="/contact-us">Contact Us</a>
                <a href="/blogs">Blogs</a>
            </nav>
        </div>
    `;

    // Replace the existing header
    const existingHeader = document.querySelector("header");
    if (existingHeader) {
        existingHeader.replaceWith(newHeader);
    }

    // Apply styles dynamically
    const style = document.createElement("style");
    style.textContent = `
        .custom-header {
            background: #333;
            padding: 15px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: white;
        }
        .header-container {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }
        .logo img {
            height: 50px;
        }
        .nav-menu {
            display: flex;
            gap: 20px;
        }
        .nav-menu a {
            color: white;
            text-decoration: none;
            padding: 10px;
        }
        .nav-menu a:hover {
            text-decoration: underline;
        }
        .dropdown {
            position: relative;
        }
        .dropdown-menu {
            display: none;
            position: absolute;
            background: white;
            min-width: 150px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 10;
            border-radius: 5px;
        }
        .dropdown-menu a {
            display: block;
            padding: 10px;
            text-decoration: none;
            color: black;
        }
        .dropdown-menu a:hover {
            background-color: #f1f1f1;
        }
        .dropdown:hover .dropdown-menu {
            display: block;
        }
    `;
    document.head.appendChild(style);
});