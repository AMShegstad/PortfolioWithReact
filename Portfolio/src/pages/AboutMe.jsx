export default function About() {
    // The About component returns a container-fluid div with personal information
    const containerStyle = {
        backgroundColor: 'var(--custom-color-eerieBlack)',
        color: 'var(--custom-color-tiffanyBlue)',
        padding: '20px',
        width: '100%'
    };

    return (
      <div className="container-fluid" style={containerStyle}>
        <h1>Call me &apos;Alex&apos;!</h1>
        <br></br>
        <hr></hr>
        <br></br>
        <p style={{ fontSize: "20px" }}>
          I am a full stack web developer with a passion for creating dynamic and
          interactive web applications. I have experience working with both front
          and back end technologies, and I am always eager to learn new skills. I
          am currently enrolled in the University of Minnesota Coding Boot Camp,
          and I am excited to continue growing as a developer.
        </p>
        <p style={{ fontSize: "20px" }}>
          I have a background in music and stage performance, and professionally, I
          have worked for the retail company Target for almost 18 years. I have experience
          cultivating, teaching, and leading my own teams of employees, providing 
          excellent customer service, and creating a safe, positive and inclusive work environment.
        </p>
        <p style={{ fontSize: "20px" }}>
          Education includes study in Dramatic Performance at Hillsborough Community
          College in Brandon, Florida, and a Bachelor of Science in Software Development 
          from Bellevue University in Bellevue, Nebraska.
        </p>
      </div>
    );
}
