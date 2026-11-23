import StudentCard from './StudentCard';

export default function StudentList({ students, onView, onDelete }) {
  return (
    <section className="students-section" aria-label="Student list">
      <h2 className="section-title">
        <span aria-hidden="true">🎓</span> Student List
        <span className="count">({students.length})</span>
      </h2>
      {students.length === 0 ? (
        <div className="empty-state">
          <p>No students have been added yet.</p>
          <p>Use the form above to add your first student.</p>
        </div>
      ) : (
        <div className="student-grid">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onView={onView}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}