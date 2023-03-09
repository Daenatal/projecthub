import { Link } from 'react-router-dom';
import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <Link className='category-container' to={`/${title}`}>
            <div className='background-image' style={{
              backgroundImage: `url(${imageUrl})`
            }}/>
            <div className='category-body-container'>
              <h2>{title}</h2>
              <p>See All</p>
            </div>
        </Link>
        
    )
}

export default CategoryItem