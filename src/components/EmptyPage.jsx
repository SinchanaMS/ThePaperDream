export default function EmptyPage({ icon, text }) {
  return (
    <div className="empty-page">
      <h1 className="empty-description">{text}</h1>
      <span className="material-icons material-icons-outlined empty-icon">
        {icon}
      </span>
    </div>
  );
}
