function SearchBar() {
  return (
    <div
      style={{
        width: "90%",
        margin: "40px auto",
      }}
    >
      <input
        type="text"
        placeholder="🔍 Search Study Groups..."
        style={{
          width: "100%",
          padding: "18px",
          borderRadius: "14px",
          border: "1px solid #ddd",
          fontSize: "16px",
          outline: "none",
        }}
      />
    </div>
  );
}

export default SearchBar;