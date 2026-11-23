import { useState } from 'react';

function StudentForm({ onAddStudent, error, onClearError }) {
  const [student, setStudent] = useState({
    id: '',
    name: '',
    course: '',
    email: '',
    phone: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setStudent({
      ...student,
      [name]: value,
    });

    if (error) {
      onClearError();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const hasEmptyField = Object.values(student).some(
      (value) => value.trim() === ''
    );

    if (hasEmptyField) {
      alert('Please fill in all fields.');
      return;
    }

    onAddStudent(student);

    setStudent({
      id: '',
      name: '',
      course: '',
      email: '',
      phone: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>Add Student</h2>
      <div className="form-grid">
        {error && (
          <div className="error-msg" key="error">
            {error}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="id">Student ID</label>
          <input
            id="id"
            name="id"
            type="text"
            value={student.id}
            onChange={handleChange}
            placeholder="e.g. STU101"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={student.name}
            onChange={handleChange}
            placeholder="Enter full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course</label>
          <input
            id="course"
            name="course"
            type="text"
            value={student.course}
            onChange={handleChange}
            placeholder="Enter course"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={student.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={student.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </div>
        <button type="submit" className="btn-add">
          Add Student
        </button>
      </div>
    </form>
  );
}

export default StudentForm;
