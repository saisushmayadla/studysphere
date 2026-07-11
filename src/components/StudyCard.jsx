import { Link } from "react-router-dom";
import { deleteGroup } from "../utils/storage";

function StudyCard({ group }) {

  const handleDelete = () => {
    if (window.confirm("Delete this study group?")) {
      deleteGroup(group.id);
      window.location.reload();
    }
  };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(15px)",
        borderRadius: "20px",
        padding: "25px",
        marginBottom: "25px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
      }}
    >
      <h2>{group.title}</h2>

      <p><strong>📘 Subject:</strong> {group.subject}</p>

      <p><strong>🏫 Department:</strong> {group.department}</p>

      <p><strong>🎓 Year:</strong> {group.year}</p>

      <p><strong>👥 Members:</strong> {group.members}</p>

      <p><strong>🕒 Schedule:</strong> {group.schedule}</p>

      <hr style={{ margin: "15px 0" }} />

      <h3>⭐ Compatibility : {group.match}%</h3>

      <p>🔥 Study Streak : {group.streak} Days</p>

      <h3>🧬 StudyDNA</h3>

      <ul>
        <li>Learning Style : {group.dna?.style}</li>
        <li>Study Habit : {group.dna?.habit}</li>
        <li>Focus Area : {group.dna?.focus}</li>
        <li>Consistency : {group.dna?.consistency}%</li>
      </ul>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
          flexWrap: "wrap"
        }}
      >
        <button
          style={{
            padding: "10px 18px",
            borderRadius: "10px",
            border: "none",
            background: "#4F46E5",
            color: "white"
          }}
        >
          Join Group
        </button>

        <Link to={`/group/${group.id}`}>
          <button
            style={{
              padding: "10px 18px",
              borderRadius: "10px",
              border: "none",
              background: "#10B981",
              color: "white"
            }}
          >
            View / Edit
          </button>
        </Link>

        <button
          onClick={handleDelete}
          style={{
            padding: "10px 18px",
            borderRadius: "10px",
            border: "none",
            background: "#EF4444",
            color: "white"
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudyCard;