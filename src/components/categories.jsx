import { useState } from 'react';

const categories = ['Action', 'Fight', 'Trending', 'Block Buster', 'Action', 'Fight', 'Trending', 'Block Buster','Action', 'Fight', 'Trending', 'Block Buster','Action', 'Fight', 'Trending', 'Block Buster','Action', 'Fight', 'Trending', 'Block Buster'];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    console.log("Selected category:", category);
  };

  return (
    <div className="flex overflow-x-auto space-x-4 mt-4 p-4 scrollbar-thin">
      {categories.map((category) => (
        <button
          key={category}
                  className={`flex flex-col items-center cursor-pointer p-2 rounded-lg transition duration-300 ${
                    category === activeCategory ? 'bg-blue-500 text-white' : 'bg-gray-200'}hover:bg-blue-400`}
                    onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
