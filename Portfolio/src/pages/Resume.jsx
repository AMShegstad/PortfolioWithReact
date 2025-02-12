export default function Resume() {
    // The Resume component returns a container-fluid div for full-width layout
    const containerStyle = {
        backgroundColor: 'var(--custom-color-eerieBlack)',
        color: 'var(--custom-color-tiffanyBlue)',
        padding: '20px'
    };

    return (
        <div className="container-fluid mx-0 text-left" style={containerStyle}>
            <h1>Alexander Shegstad</h1>
            <p>Email: <a href="mailto:AlexShegstad@Gmail.com">AlexShegstad@Gmail.com</a>  |  <a href="mailto:aShegstad@my365.Bellevue.edu">Alexander.Shegstad@Target.com</a></p>
            <h2>Objective</h2>
            <p>Seeking an entry role as a software developer on a dedicated and diverse team.</p>
            <h2>Experience</h2>
            <h3>02/2022 – Current</h3>
            <h4>Service & Engagement Team Leader, Target</h4>
            <ul>
                <li>Utilize skills in guest engagement and de-escalation, problem-solving, planning, knowledge of retail fundamentals, and more to drive sales, return visits, and recovery.</li>
                <li>Lead a team of passionate and empowered guest advocates and front-of-store attendants in delivering an unrivaled shopping experience through eliminating guest wait times, friendly interactions, accurate following of defined best-practices, and in-depth knowledge of digital and physical offerings.</li>
                <li>Assessing the physical front of store and utilizing business reporting and other tools to troubleshoot and follow-up on opportunity areas.</li>
                <li>Create and establish a culture of safety and ethical conduct, holding the team accountable when necessary. We teach not only to work safe, but for every team member to advocate safety for all coworker and guests.</li>
            </ul>
            <h3>10/2007 – 02/2022</h3>
            <h4>Team Member and Leader in Myriad Roles, Target</h4>
            <ul>
                <li>Interacting with every guest with a smile on my face, working as a team player, and exhibiting daily what it means to be a Target team member an in inclusive and welcoming environment.</li>
                <li>Whether it be the Vibe, W.I.R.E (Welcome, Inspire, Reward, and Ease), guest-centered selling, or G.U.E.S.T. (Greet, Understand, Engage, Solve, and Thank), understand the company’s focus from a high level and enacting it at the store level has always been a high priority. Regardless of the title, it has always been important to me to be a leader by example.</li>
                <li>Success in many roles, such as Guest and Service Advocates, Front-of-Store Attendant, Food Preparation, Tech Consultant, General Merchandise and Specialty Sales Leadership, and Closing Team Leader.</li>
            </ul>
            <h2>Education</h2>
            <p>Bachelor’s Degree in Software Development, Bellevue University, Achieved in 2024, Suma Cum Laude</p>
            <p>Coursework included Project Management, various code courses largely focused on Web Development with Java, Planning, and more. 3.96 GPA.</p>
            <h2>Skills</h2>
            <ul>
                <li>Software development in Java, HTML/CSS, JavaScript, MySQL and PostgreSQL, Object Oriented Programming, TypeScript and more.</li>
                <li>Time Management</li>
                <li>Guest Service and De-escalation</li>
                <li>Lifelong Learner</li>
                <li>Leadership and Accountability</li>
            </ul>
            <h2>Activities</h2>
            <p>Computer programming is not just my field of study, but something I enjoy and have quite an interest in. I intend to be doing this work for many years to come.</p>
            <p>I am conversational in American Sign Language, and currently learning German.</p>
            <br/>
        </div>
    )
}