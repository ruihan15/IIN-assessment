import FacultyCard from "./components/FacultyCard";
function App() {
  const facultyList = [
    {
      facultyName: "Melissa Wood-Tepperberg",
      facultyTitle:
        "Founder of Melissa Wood Health and Creator of the MWH Method",
      facultyCurriculumTopic: "Mindful movement; Creating lasting change",
      facultyProfilePicture:
        "https://info.integrativenutrition.com/hubfs/Melissa_Wood_HCTP_11-24%20at%2012.22%201.jpg",
    },
    {
      facultyName: "Will Cole, IFMCP, DNM, DC",
      facultyTitle: "Functional Medicine Expert",
      facultyCurriculumTopic: "Intuitive fasting; Plant-based ketogenic diet",
      facultyProfilePicture: "",
    },
  ];
  return (
    <div style={{ display: "flex" }}>
      {facultyList.map((item) => {
        return (
          <FacultyCard
            facultyName={item.facultyName}
            facultyTitle={item.facultyTitle}
            facultyCurriculumTopic={item.facultyCurriculumTopic}
            facultyProfilePicture={item.facultyProfilePicture}
          ></FacultyCard>
        );
      })}
    </div>
  );
}

export default App;
