import React from 'react';
import pfp from "../assets/pfp.svg";
import './FacultyCard.css'; // Assuming you have a separate CSS file for styles

export default function FacultyCard({ facultyName = "Faculty Name", facultyTitle = "Faculty Title", facultyCurriculumTopic = "Curriculum Topics", facultyProfilePicture }) {
    const handleImageError = (event) => {
        event.target.src = pfp; 
    };

    return (
        <div className="faculty-card">
            <div className="profile-picture">
                <img
                    src={facultyProfilePicture || pfp}
                    onError={handleImageError}
                    alt="Profile"
                />
            </div>
            <div className="info">
                <div className="faculty-name">{facultyName}</div>
                <div className="faculty-title">{facultyTitle}</div>
            </div>
            <div className="curriculum-topics">
                <div className="label">Curriculum Topics</div>
                <div className="topics">{facultyCurriculumTopic}</div>
            </div>
        </div>
    );
}