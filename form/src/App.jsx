import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    gender: "Male",
    role: "Teacher",
    terms: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email) {
      setError("Full Name and Email are required!");
      return;
    }

    if (!formData.terms) {
      setError("You must accept the terms!");
      return;
    }

    setError("");
    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <label>Full Name:</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label>Age:</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />

      <label>Gender:</label>
      <br />
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={formData.gender === "Male"}
        onChange={handleChange}
      /> Male

      <input
        type="radio"
        name="gender"
        value="Female"
        checked={formData.gender === "Female"}
        onChange={handleChange}
      /> Female

      <br /><br />

      <label>Role:</label>
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
      >
        <option>Teacher</option>
        <option>Student</option>
        <option>Admin</option>
      </select>

      <br /><br />

      <input
        type="checkbox"
        name="terms"
        checked={formData.terms}
        onChange={handleChange}
      />
      Accept Terms and Conditions

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;