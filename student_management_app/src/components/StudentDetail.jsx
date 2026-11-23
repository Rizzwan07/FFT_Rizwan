export default function StudentDetail({ student, onClose, onDelete }) {
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <h2>Student Details</h2>
          <button type="button" className="btn-close" onClick={onClose} aria-label="Close details">
            ✕
          </button>
        </div>
        <div className="detail-body">
          <div className="detail-row">
            <span className="detail-label">Student ID</span>
            <span className="detail-value">{student.id}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Name</span>
            <span className="detail-value">{student.name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Course</span>
            <span className="detail-value">{student.course}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Email</span>
            <span className="detail-value">{student.email}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Phone</span>
            <span className="detail-value">{student.phone}</span>
          </div>
        </div>
        <div className="modal-actions">
          <button type="button" className="btn btn-view" onClick={onClose}>
            Close
          </button>
          <button
            type="button"
            className="btn btn-delete"
            onClick={() => {
              onDelete(student.id);
              onClose();
            }}
          >
            Delete Student
          </button>
        </div>
      </div>
    </div>
  );
}