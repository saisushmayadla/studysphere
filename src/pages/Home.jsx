import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StudyCard from "../components/StudyCard";

import { getGroups } from "../utils/storage";

function Home() {

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    setGroups(getGroups());
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <div
        style={{
          width: "90%",
          margin: "40px auto",
        }}
      >

        <input
          placeholder="🔍 Search Study Groups..."
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            marginBottom: "25px"
          }}
        />

        {
          groups.length === 0 ?

          <h2>No Groups Found</h2>

          :

          groups.map(group => (

            <StudyCard

              key={group.id}

              group={group}

            />

          ))
        }

      </div>

    </>
  );
}

export default Home;