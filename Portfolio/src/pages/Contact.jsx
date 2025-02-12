import '../assets/Contact.css'; // Import the custom CSS for contact animations

export default function Contact() {
    // The Contact component returns a container-fluid div with contact information
    const containerStyle = {
        backgroundColor: 'var(--custom-color-eerieBlack)',
        color: 'var(--custom-color-tiffanyBlue)',
        padding: '20px'
    };

    return (
      <div className="container-fluid mx-auto" style={containerStyle}>
        <h1 className="contact-line">Please, get in touch!</h1>
        <br/>
        <h3 className="contact-line">I would love to meet you to discuss Tech, Work, and anything else!</h3>
        <br/>
        <p className="contact-line">Send me an email at <a href="mailto:aShegstad@my365.Bellevue.Edu" target="_blank" rel="noreferrer">aShegstad@my365.Bellevue.Edu</a>!</p>
        <p className="contact-line">Check out my <a href="https://github.com/AMShegstad" target="_blank" rel="noreferrer">GitHub</a>.</p>
        <p className="contact-line">Connect with me on <a href="https://www.linkedin.com/in/alexander-shegstad" target="_blank" rel="noreferrer">LinkedIn</a>.</p>
      </div>
    );
}
