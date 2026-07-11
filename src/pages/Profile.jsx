import Navbar from "../components/Navbar";

function Profile() {
  return (
    <>
      <Navbar />

      <div
        style={{
          width: "90%",
          maxWidth: "900px",
          margin: "50px auto",
          background: "white",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 15px 35px rgba(0,0,0,.08)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src="https://ui-avatars.com/api/?name=Student&background=4F46E5&color=fff&size=128"
            alt="profile"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />

          <h1>Student Profile</h1>

          <p style={{ color: "#6B7280" }}>
            Manage your StudySphere profile
          </p>
        </div>

        <hr style={{ margin: "30px 0" }} />

        <div style={{ lineHeight: "40px", fontSize: "18px" }}>
          <p><strong>🎓 Department:</strong> CSE</p>
          <p><strong>📅 Year:</strong> 2nd Year</p>
          <p><strong>🧬 StudyDNA:</strong> Visual Learner</p>
          <p><strong>🔥 Study Streak:</strong> 12 Days</p>
          <p><strong>⭐ Compatibility:</strong> 94%</p>
        </div>
      </div>
    </>
  );
}

export default Profile;