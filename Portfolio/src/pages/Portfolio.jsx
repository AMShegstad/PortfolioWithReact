import Card from "../components/Project";
import { data as projectData } from "../assets/projectData";
import '../assets/Card.css'; // Import the custom CSS for card animations

export default function Portfolio() {
    const containerStyle = {
        backgroundColor: 'var(--custom-color-eerieBlack)',
        color: 'var(--custom-color-tiffanyBlue)',
        padding: '20px'
    };

    return (
        <div className="container-fluid mx-auto" style={containerStyle}>
            {/* Bootstrap row class to create a horizontal group of columns */}
            <div className="row">
                {/* Map through projectData and render a Card component for each project */}
                {projectData.map((project, index) => (
                    <div 
                        className="d-flex justify-content-around col-lg-4 col-md-6 col-sm-8 h-200 w-200 mb-2 mt-3" 
                        key={index}
                        style={{ animationDelay: `${index * 2}s` }} // Increase animation delay
                    >
                        <Card
                            name={project.name}
                            description={project.description}
                            technologies={project.technologies}
                            link={project.link}
                            image={project.image} // Ensure image property is passed
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
