import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      style={{
        width: "92%",
        margin: "70px auto",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "70px",
          fontWeight: "800",
          lineHeight: "80px",
        }}
      >
        Find Your Perfect
        <br />
        Study Group
      </h1>

      <p
        style={{
          width: "700px",
          margin: "25px auto",
          color: "#6B7280",
          fontSize: "18px",
        }}
      >
        Connect with students who match your study style,
        preparation goals, and schedule.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "35px",
        }}
      >
        <button
          style={{
            padding: "15px 28px",
            borderRadius: "14px",
            background: "#4F46E5",
            color: "white",
            border: "none",
            fontWeight: "600",
          }}
        >
          Explore Groups
        </button>

        <Link to="/create">
          <button
            style={{
              padding: "15px 28px",
              borderRadius: "14px",
              background: "white",
              border: "1px solid #ddd",
              fontWeight: "600",
            }}
          >
            Create Group
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;