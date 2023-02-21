import './categories.styles.scss';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hobbies',
    },
    {
      id: 2,
      title: 'Games',
    },
    {
      id: 3,
      title: 'Shows',
    },
    {
      id: 4,
      title: 'Movies',
    },
    {
      id: 5,
      title: 'Projects',
    }
  ]
  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div key={id} className='category-container'>
          <div className='background-image' />
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>See All</p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default App
