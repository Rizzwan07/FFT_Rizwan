import { useState } from 'react';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [error, setError] = useState(null);

  const handleAddStudent = (newStudent) => {
    const exists = students.some(
      (s) => s.id.trim().toLowerCase() === newStudent.id.trim().toLowerCase()
    );
    if (exists) {
      setError(`A student with ID "${newStudent.id}" already exists.`);
      return;
    }
    setError(null);
    setStudents([...students, newStudent]);
  };

  const handleDeleteStudent = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter((s) => s.id !== id));
      if (selectedStudent?.id === id) {
        setSelectedStudent(null);
      }
    }
  };

  const handleViewStudent = (student) => {
    setError(null);
    setSelectedStudent(student);
  };

  const handleCloseDetail = () => setSelectedStudent(null);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Student Management</h1>
        <p className="subtitle">Add, view, and manage student records</p>
      </header>

      <StudentForm
        onAddStudent={handleAddStudent}
        error={error}
        onClearError={() => setError(null)}
      />

      <StudentList
        students={students}
        onView={handleViewStudent}
        onDelete={handleDeleteStudent}
      />

      {selectedStudent && (
        <StudentDetail
          student={selectedStudent}
          onClose={handleCloseDetail}
          onDelete={handleDeleteStudent}
        />
      )}
    </div>
  );
}

export default App;
