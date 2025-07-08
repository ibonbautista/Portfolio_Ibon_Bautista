import { useState } from 'react';
import technologies from '../../data/technologies';
import CategoryToggle from './CategoryToggle';
import TechCategory from './TechCategory';
import './Technologies.css';

export default function Technologies() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleToggle = (category) => {
    setSelectedCategory(prev => prev === category ? null : category);
  };

  return (
    <section id="technologies" className="technologies-section">
      <h2>Tecnologías</h2>
      <div className="category-buttons">
        {Object.keys(technologies).map((category) => (
          <CategoryToggle
            key={category}
            category={category}
            onClick={() => handleToggle(category)}
            isActive={selectedCategory === category}
          />
        ))}
      </div>

      {selectedCategory && (
        <TechCategory
          category={selectedCategory}
          technologies={technologies[selectedCategory]}
        />
      )}
    </section>
  );
}
