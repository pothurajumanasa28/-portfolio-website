function Skills() {
  const skills = [
    "C",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Git"
  ];

  return (
    <section>
      <h2>Skills</h2>

      {skills.map((skill, index) => (
        <button
          key={index}
          style={{
            margin: "5px",
            padding: "10px",
            borderRadius: "5px",
            border: "none"
          }}
        >
          {skill}
        </button>
      ))}
    </section>
  );
}

export default Skills;
  
    