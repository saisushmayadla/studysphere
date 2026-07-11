import { useParams, useNavigate } from "react-router-dom";
import { getGroups, deleteGroup } from "../utils/storage";

function GroupDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const group = getGroups().find(
    (g) => g.id === Number(id)
  );

  if (!group) {
    return <h2>Group Not Found</h2>;
  }

  const handleDelete = () => {
    deleteGroup(group.id);
    alert("Group Deleted");
    navigate("/");
  };

  return (
    <div
      style={{
        width: "70%",
        margin: "50px auto",
      }}
    >
      <h1>{group.title}</h1>

      <p>Subject: {group.subject}</p>

      <p>Department: {group.department}</p>

      <p>Year: {group.year}</p>

      <p>Schedule: {group.schedule}</p>

      <p>Members: {group.members}</p>

      <br />

      <button onClick={handleDelete}>
        Delete Group
      </button>
    </div>
  );
}

export default GroupDetails;