import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "40px 20px",
      }}
    >
      {/* Background Blur */}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "#C7D2FE",
          borderRadius: "50%",
          filter: "blur(120px)",
          left: "-120px",
          top: "-60px",
          zIndex: -1,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "#DDD6FE",
          borderRadius: "50%",
          filter: "blur(120px)",
          right: "-120px",
          bottom: "-60px",
          zIndex: -1,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        {/* Badge */}

        <div
          style={{
            display: "inline-block",
            padding: "10px 24px",
            borderRadius: "999px",
            background: "#EEF2FF",
            color: "#4338CA",
            fontWeight: "700",
            marginBottom: "25px",
          }}
        >
          Smart Study Matching powered by StudyDNA
        </div>

        {/* Heading */}

        <h1
          style={{
            fontSize: "64px",
            fontWeight: "900",
            lineHeight: "72px",
            color: "#111827",
          }}
        >
          Find Your Perfect
          <br />
          Study Group
        </h1>

        {/* Description */}

        <p
          style={{
            maxWidth: "700px",
            margin: "28px auto",
            fontSize: "20px",
            color: "#6B7280",
            lineHeight: "34px",
          }}
        >
          Study smarter with students who share your goals, schedule,
          learning style, and interests. Create meaningful study groups
          in seconds.
        </p>

        {/* Buttons */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            flexWrap: "wrap",
            marginTop: "35px",
          }}
        >
          {/* Explore Groups Button */}
          <a href="#groups">
            <button
              style={{
                padding: "16px 34px",
                border: "none",
                borderRadius: "15px",
                background: "linear-gradient(135deg,#4F46E5,#7C3AED)",
                color: "white",
                fontWeight: "700",
                fontSize: "16px",
                boxShadow: "0 15px 35px rgba(79,70,229,.35)",
              }}
            >
              Explore Groups →
            </button>
          </a>

          {/* Create Group Button */}
          <Link to="/create">
            <button
              style={{
                padding: "16px 34px",
                borderRadius: "15px",
                border: "1px solid #E5E7EB",
                background: "white",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              Create Group
            </button>
          </Link>
        </div>

        {/* Feature Chips */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "45px",
          }}
        >
          {[
            "AI Study Match",
            "StudyDNA",
            "Compatibility Score",
            "Study Streak",
          ].map((chip) => (
            <div
              key={chip}
              style={{
                padding: "10px 18px",
                background: "rgba(255,255,255,.85)",
                border: "1px solid #E5E7EB",
                borderRadius: "999px",
                fontWeight: "600",
                backdropFilter: "blur(10px)",
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;