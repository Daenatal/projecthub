import './category-menu.styles.scss';

import CategoryItem from '../category-item/category-item.component';

import img from '../../assets/crafts.jpg';
import img2 from '../../assets/games.jpg';
import img3 from '../../assets/shows.jpg';
import img4 from '../../assets/movies.jpg';
import img5 from '../../assets/projects.jpg';

const categories = [
    {
      id: 1,
      title: 'Hobbies',
      imageUrl: img,
    },
    {
      id: 2,
      title: 'Games',
      imageUrl: img2,
    },
    {
      id: 3,
      title: 'Shows',
      imageUrl: img3,
    },
    {
      id: 4,
      title: 'Movies',
      imageUrl: img4,
    },
    {
      id: 5,
      title: 'Projects',
      imageUrl: img5,
    }
  ]

const CategoryMenu = () => {
    return (
        <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}

    </div>
    );
}

export default CategoryMenu