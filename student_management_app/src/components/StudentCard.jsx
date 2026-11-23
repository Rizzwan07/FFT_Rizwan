export default function StudentCard({ student, onView, onDelete }) {
  return (
    <article className="student-card">
      <span className="badge">{student.course}</span>
      <div className="student-id">ID: {student.id}</div>
      <h3>{student.name}</h3>
      <div className="card-actions">
        <button
          type="button"
          className="btn btn-view"
          onClick={() => onView(student)}
          aria-label={`View details for ${student.name}`}
        >
          View Details
        </button>
        <button
          type="button"
          className="btn btn-delete"
          onClick={() => onDelete(student.id)}
          aria-label={`Delete ${student.name}`}
        >
          Delete
        </button>
      </div>
    </article>
  );
}