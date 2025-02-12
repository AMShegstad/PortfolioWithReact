const Footer = () => {

    return (
        <footer style={{ 
            textAlign: 'center', 
            padding: '1em 0', 
            background: 'var(--custom-color-chamoisee)',
            position: 'fixed', 
            bottom: 0, 
            width: '100%',
            color: 'var(--custom-color-tiffanyBlue)'
        }}>
            <p>&copy;2005 Alexander Shegstad. All Rights Reserved</p>
        </footer>
    );
};

export default Footer;