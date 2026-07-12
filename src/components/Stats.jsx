import { Users, BookOpen, Trophy, Calendar } from "lucide-react";

const stats = [
  {
    icon: <Users size={32} />,
    value: "850+",
    title: "Students"
  },
  {
    icon: <BookOpen size={32} />,
    value: "120+",
    title: "Study Groups"
  },
  {
    icon: <Trophy size={32} />,
    value: "94%",
    title: "Match Accuracy"
  },
  {
    icon: <Calendar size={32} />,
    value: "300+",
    title: "Sessions"
  }
];

function Stats() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "25px",
        marginTop: "30px"
      }}
    >
      {stats.map((item) => (
        <div
          key={item.title}
          style={{
            background: "white",
            padding: "35px",
            borderRadius: "22px",
            textAlign: "center",
            boxShadow: "0 15px 40px rgba(0,0,0,.08)"
          }}
        >
          <div
            style={{
              color: "#4F46E5",
              marginBottom: "15px"
            }}
          >
            {item.icon}
          </div>

          <h2>{item.value}</h2>

          <p
            style={{
              color: "#6B7280"
            }}
          >
            {item.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats;