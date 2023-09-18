export default function EventQuestion3() {
  const handleSubmit = (e) => {
    alert("Hello World!");
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit" value={"Search"} />
      </form>
    </div>
  );
}
