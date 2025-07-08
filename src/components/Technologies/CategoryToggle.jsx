import './CategoryToggle.css';

export default function CategoryToggle({ category, onClick, isActive }) {
  return (
    <button
      className={`category-toggle ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {category}
    </button>
  );
}
