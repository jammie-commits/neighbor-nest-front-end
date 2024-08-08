import React from 'react';
import './ContactUs.css';

const Contacts = () => {
    return (
        <div id="contact-us">
            <div className="contact-info">
                <h1>Let's Talk</h1>
                <p>Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.</p>
                <h2>Email</h2>
                <p>beebsa@gmail.com</p>
                <h2>Socials</h2>
                <p><a href="#instagram">Instagram</a></p>
                <p><a href="#twitter">Twitter</a></p>
                <p><a href="#facebook">Facebook</a></p>
            </div>
            <div className="contact-form">
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <footer>
                <div className="contacts">
                    <ul>
                        <li>Phone: (334) 202-4792</li>
                        <li>Email: nadoaya@comcast.net</li>
                        <li>Address: 950 Devonshire Ave Camp Hill, PA 17011</li>
                        <li>Johannesburg, South Africa</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Contacts;
