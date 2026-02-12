import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    gender: "",
    role: "",
    acceptTerms: false
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* input kamu di sini */}
      </form>

      {submittedData && (
        <div>
          <h2>Registration Summary</h2>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>Role: {submittedData.role}</p>
          <p>
            Accepted Terms: {submittedData.acceptTerms ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
