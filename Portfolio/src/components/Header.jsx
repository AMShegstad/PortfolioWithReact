import '../App.css'; // Correct the import path for App.css
import Navbar from "./Navbar";

// Import the profile image correctly
import profileImage from '/images/profileImage.jpg';

const Header = () => {
    // Inline styles for the header, image, and text
    const headerStyle = {
        display: 'flex',
        flexDirection: 'column', // Change to column to place navbar at the bottom
        alignItems: 'center',
        padding: '10px',
        backgroundColor: 'var(--custom-color-eerieBlack)', // Use predefined color
        position: 'fixed',
        top: 0,
        width: '100%', // Ensure header spans full width
        zIndex: 1000
    };

    const topSectionStyle = {
        display: 'flex',
        flexDirection: 'row', // Place image and text side-by-side
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center', // Center the content
    };

    const imgStyle = {
        width: '150px', // Shrink image down to 100px
        height: '150px',
        marginRight: '10px', // Add margin to the right of the image
        objectFit: 'scale-down', // Prevent image from stretching
        borderRadius: '15px' // Round the corners of the image
    };

    const textStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align text to the start
        justifyContent: 'center',
        color: 'var(--custom-color-tiffanyBlue)' // Use predefined color
    };

    return (
        <header style={headerStyle}>
            <div style={topSectionStyle}>
                <img 
                    src={profileImage} 
                    alt="Alexander Shegstad" 
                    style={imgStyle}
                />
                <div style={textStyle}>
                    <h3>Alexander Shegstad</h3>
                    <h5>Full Stack Web Developer</h5>
                </div>
            </div>
            <Navbar/>
        </header>
    );
};

export default Header;