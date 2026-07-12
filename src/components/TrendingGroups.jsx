import { Link } from "react-router-dom";

const groups = [
  {
    id: 1,
    title: "DSA Interview Prep",
    subject: "Data Structures",
    members: "5 / 8",
    match: "96%",
    streak: "18 Days",
    dna: ["Visual", "Morning", "Focused"],
  },
  {
    id: 2,
    title: "Full Stack Development",
    subject: "MERN Stack",
    members: "4 / 6",
    match: "93%",
    streak: "12 Days",
    dna: ["Practical", "Night Owl", "Coding"],
  },
  {
    id: 3,
    title: "DBMS Mastery",
    subject: "Database Systems",
    members: "7 / 10",
    match: "91%",
    streak: "9 Days",
    dna: ["Logical", "Teamwork", "Discussion"],
  },
];

function TrendingGroups() {
  return (
    <section id="groups"
      style={{
        width: "90%",
        margin: "80px auto",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        Trending Study Groups
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#6B7280",
          marginBottom: "45px",
        }}
      >
        Discover the most active study communities on campus.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
        }}
      >
        {groups.map((group) => (
          <div
            key={group.id}
            style={{
              background: "white",
              borderRadius: "22px",
              padding: "25px",
              boxShadow: "0 15px 40px rgba(0,0,0,.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3>{group.title}</h3>

              <span
                style={{
                  background: "#EEF2FF",
                  color: "#4F46E5",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontWeight: "600",
                }}
              >
                {group.match}
              </span>
            </div>

            <p
              style={{
                color: "#6B7280",
                margin: "15px 0",
              }}
            >
              {group.subject}
            </p>

            <p>
              <strong>Members:</strong> {group.members}
            </p>

            <p>
              <strong>Study Streak:</strong> 🔥 {group.streak}
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "18px",
                flexWrap: "wrap",
              }}
            >
              {group.dna.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#F3F4F6",
                    padding: "8px 14px",
                    borderRadius: "20px",
                    fontSize: "14px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link to={`/group/${group.id}`}>
              <button
                style={{
                  marginTop: "25px",
                  width: "100%",
                  padding: "14px",
                  border: "none",
                  borderRadius: "12px",
                  background: "#4F46E5",
                  color: "white",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingGroups;