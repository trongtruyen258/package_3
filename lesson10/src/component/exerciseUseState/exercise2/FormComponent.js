import { useState } from "react";

export default function FormComponent() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  let dataInput = { ...formData };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(dataInput);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    dataInput = { ...dataInput, [name]: value };
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} /> <br />
        <label>Email:</label>
        <input type="text" name="email" onChange={handleChange} />
        <br />
        <input type="submit" value={"Submit"} />
      </form>
      <div>
        <p>Information input:</p>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
      </div>
    </div>
  );
}
