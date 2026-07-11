export function generateMatchScore() {
  return Math.floor(Math.random() * 21) + 80;
}

export function generateStudyDNA() {
  const styles = ["Visual", "Practical", "Theory", "Discussion"];
  const habits = ["Morning", "Night Owl"];
  const focus = ["DSA", "Web Dev", "AI", "DBMS"];

  return {
    style: styles[Math.floor(Math.random() * styles.length)],
    habit: habits[Math.floor(Math.random() * habits.length)],
    focus: focus[Math.floor(Math.random() * focus.length)],
    consistency: Math.floor(Math.random() * 21) + 80,
  };
}