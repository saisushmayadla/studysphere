import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addGroup } from "../utils/storage";
import { generateMatchScore, generateStudyDNA } from "../utils/matchScore";

function CreateGroup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    subject: "",
    department: "",
    year: "",
    members: "",
    schedule: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.subject ||
      !form.department ||
      !form.year ||
      !form.members ||
      !form.schedule
    ) {
      alert("Please fill all fields.");
      return;
    }

    const group = {
      id: Date.now(),
      ...form,
      match: generateMatchScore(),
      dna: generateStudyDNA(),
      streak: Math.floor(Math.random() * 20) + 1,
    };

    addGroup(group);

    alert("Group Created Successfully!");

    navigate("/");
  };

  return (
    <div style={{ width: "70%", margin: "40px auto" }}>
      <h1>Create Study Group</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Group Name"
          value={form.title}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            marginBottom: "20px",
            fontSize: "16px"
          }}
        />

        <br /><br />

        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        >
          <option value="">Select Subject</option>
          <option value="Data Structures">Data Structures</option>
          <option value="Operating Systems">Operating Systems</option>
          <option value="DBMS">DBMS</option>
          <option value="Computer Networks">Computer Networks</option>
          <option value="Web Development">Web Development</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
        </select>

        <br /><br />

        <select
          name="department"
          value={form.department}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        >
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
        </select>

        <br /><br />

        <select
          name="year"
          value={form.year}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        >
          <option value="">Select Year</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>

        <br /><br />

        <input
          type="number"
          name="members"
          value={form.members}
          min="2"
          max="10"
          placeholder="Maximum Members"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        />

        <br /><br />

        <input
          type="time"
          name="schedule"
          value={form.schedule}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        />

        <br /><br />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "15px",
            background: "#4F46E5",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
           Create Study Group
        </button>

      </form>
    </div>
  );
}

export default CreateGroup;