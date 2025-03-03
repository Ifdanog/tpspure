document.addEventListener("DOMContentLoaded", function () {
    // Create a new header container
    const header = document.createElement("div");
    header.classList.add("ins-header__row");

    // Set inner HTML for navigation
    header.innerHTML = `
        <div class="ins-header__menu ins-header__menu--several">
            <div class="ins-header__menu-fade"></div>
            <div class="ins-header__menu-wrap">
                <nav class="ins-header__menu-inner">
                    <div class="ins-header__menu-link">
                        <a class="ins-header__menu-link-title" href="/" target="_self" aria-label="Home">Home</a>
                    </div>
                    <div class="ins-header__menu-link dropdown">
                        <a class="ins-header__menu-link-title" href="/product" target="_self" aria-label="Products">Products ▾</a>
                        <div class="dropdown-content">
                            <a href="/product/category1">Category 1</a>
                            <a href="/product/category2">Category 2</a>
                            <a href="/product/category3">Category 3</a>
                        </div>
                    </div>
                    <div class="ins-header__menu-link">
                        <a class="ins-header__menu-link-title" href="/services" target="_self" aria-label="Services">Services</a>
                    </div>
                    <div class="ins-header__menu-link">
                        <a class="ins-header__menu-link-title" href="/about-us" target="_self" aria-label="About Us">About Us</a>
                    </div>
                    <div class="ins-header__menu-link">
                        <a class="ins-header__menu-link-title" href="/contact-us" target="_self" aria-label="Contact Us">Contact Us</a>
                    </div>
                    <div class="ins-header__menu-link">
                        <a class="ins-header__menu-link-title" href="/blogs" target="_self" aria-label="Blogs">Blogs</a>
                    </div>
                </nav>
            </div>
            <div class="ins-header__scroller">
                <div class="ins-header__scroller-marker" style="left: 0%; width: 100%;"></div>
            </div>
        </div>
    `;

    // Replace existing header
    const existingHeader = document.querySelector(".ins-header__row");
    if (existingHeader) {
        existingHeader.replaceWith(header);
    } else {
        document.body.prepend(header); // Add to top if no existing header
    }

    // Apply styles using JavaScript
    const style = document.createElement("style");
    style.textContent = `
        .ins-header__row {
            background: #f8f9fa;
            padding: 10px 20px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        .ins-header__menu-inner {
            display: flex;
            gap: 20px;
        }
        .ins-header__menu-link {
            position: relative;
        }
        .ins-header__menu-link-title {
            text-decoration: none;
            color: #333;
            font-weight: bold;
            padding: 10px;
            display: block;
        }
        .dropdown-content {
            display: none;
            position: absolute;
            background: white;
            min-width: 150px;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
            z-index: 10;
        }
        .dropdown-content a {
            color: black;
            padding: 10px;
            display: block;
            text-decoration: none;
        }
        .dropdown-content a:hover {
            background: #f1f1f1;
        }
        .dropdown:hover .dropdown-content {
            display: block;
        }
    `;
    document.head.appendChild(style);
});
