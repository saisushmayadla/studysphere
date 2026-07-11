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
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="department"
          placeholder="Department"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="year"
          placeholder="Year"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="members"
          placeholder="Members"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="schedule"
          placeholder="Schedule"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Create Group
        </button>

      </form>
    </div>
  );
}

export default CreateGroup;