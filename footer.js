document.addEventListener("DOMContentLoaded", function () {
    // Create footer element
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-section">
                <h3>DENIOS NEWSLETTER</h3>
                <p>Register now to get more specialist tips, news from the world of DENIOS, and great environmental protection and safety offers.</p>
                <button class="subscribe-button">Subscribe</button>
                <div class="social-icons">
                    <a href="#"><img src="x-icon.png" alt="Twitter"></a>
                    <a href="#"><img src="facebook-icon.png" alt="Facebook"></a>
                    <a href="#"><img src="youtube-icon.png" alt="YouTube"></a>
                    <a href="#"><img src="linkedin-icon.png" alt="LinkedIn"></a>
                </div>
            </div>

            <div class="footer-section">
                <h3>EXPLORE DENIOS</h3>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Sustainability</a></li>
                    <li><a href="#">Locations</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Jobs</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>DENIOS SERVICES</h3>
                <ul>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">On-site Consultation</a></li>
                    <li><a href="#">Service and Maintenance</a></li>
                    <li><a href="#">E-Procurement</a></li>
                    <li><a href="#">Become a Sales Partner</a></li>
                    <li><a href="#">Main Catalogue</a></li>
                    <li><a href="#">Download Centre</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>DENIOS MAGAZINE</h3>
                <ul>
                    <li><a href="#">Magazine</a></li>
                    <li><a href="#">Case Studies</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>PAYMENT METHOD</h3>
                <div class="payment-methods">
                    <img src="bank-transfer.png" alt="Bank Transfer">
                    <img src="invoice-order.png" alt="Invoice Order">
                    <img src="paypal.png" alt="PayPal">
                    <img src="visa.png" alt="VISA">
                    <img src="mastercard.png" alt="Mastercard">
                </div>
            </div>

            <div class="footer-section">
                <h3>DENIOS FOR THE ENVIRONMENT</h3>
                <div class="eco-certificates">
                    <img src="ecovadis.png" alt="EcoVadis">
                    <img src="climate-neutral.png" alt="Climate Neutral">
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <a href="#">Delivery and Payment</a> |
            <a href="#">Privacy Policy</a> |
            <a href="#">Use of cookies</a> |
            <a href="#">Terms & Conditions</a> |
            <a href="#">Imprint</a> |
            <span>Excl. VAT</span>
        </div>
    `;

    // Replace existing footer or append it to the body
    const existingFooter = document.querySelector("footer");
    if (existingFooter) {
        existingFooter.replaceWith(footer);
    } else {
        document.body.appendChild(footer);
    }

    // Apply CSS styles dynamically
    const style = document.createElement("style");
    style.innerHTML = `
        .footer {
            background: #f8f8f8;
            padding: 30px 10%;
            font-family: Arial, sans-serif;
            color: #333;
        }

        .footer-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .footer-section {
            width: 20%;
            min-width: 200px;
            margin-bottom: 20px;
        }

        .footer-section h3 {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .footer-section ul {
            list-style: none;
            padding: 0;
        }

        .footer-section ul li {
            margin-bottom: 8px;
        }

        .footer-section ul li a {
            text-decoration: none;
            color: #333;
        }

        .footer-section ul li a:hover {
            text-decoration: underline;
        }

        .subscribe-button {
            background: #0056b3;
            color: white;
            padding: 10px 15px;
            border: none;
            cursor: pointer;
            margin-top: 10px;
        }

        .subscribe-button:hover {
            background: #004494;
        }

        .social-icons a img {
            width: 24px;
            margin-right: 8px;
        }

        .payment-methods img,
        .eco-certificates img {
            width: 80px;
            margin-right: 10px;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 15px;
            font-size: 14px;
            border-top: 1px solid #ccc;
            margin-top: 10px;
        }

        .footer-bottom a {
            text-decoration: none;
            color: #333;
            margin-right: 10px;
        }

        .footer-bottom a:hover {
            text-decoration: underline;
        }
    `;

    // Append styles to head
    document.head.appendChild(style);
});
