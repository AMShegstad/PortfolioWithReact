import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const Project = ({ name, description, technologies, link, image }) => {  
    const [imgError, setImgError] = useState(false);

    // Define PropTypes outside the component function
    Project.propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        technologies: PropTypes.array.isRequired,
        link: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    };

    return (
        // Card component with custom width and class
        <Card style={{ width: '80rem', backgroundColor: 'var(--custom-color-eerieBlack)', color: 'var(--custom-color-tiffanyBlue)', borderWidth: '5px', borderColor: 'var(--custom-color-tiffanyBlue)'}} className='project-card'>
            {/* Card image */}
            <Card.Img 
                variant='top' 
                src={imgError ? '/public/images/placeholder.jpg' : image} 
                onError={() => setImgError(true)}
                style={{ height: '160px'}}
            />
            {/* Card body with flex column layout */}
            <Card.Body className='d-flex flex-column'>
                {/* Card title */}
                <Card.Title> {name} </Card.Title>
                {/* Card text with custom font size */}
                <Card.Text style={{ fontSize: '14px' }} className="flex-grow-1">
                    {description}
                </Card.Text>
                {/* Technologies used section */}
                <h4 style={{fontSize: '16px'}}>Technologies used:</h4>
                <ul>
                    {technologies.map((tech, index) => (
                        <li key={index} fontSize='10px'>{tech}</li>
                    ))}
                </ul>
                {/* Button to check out the project */}
                <Button variant='primary' href={link} target="_blank" rel="noreferrer"> Check it out! </Button>
            </Card.Body>
        </Card>
    )
}

export default Project;
