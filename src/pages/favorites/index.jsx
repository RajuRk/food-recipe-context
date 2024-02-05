import { useContext } from 'react';
import { GlobalContext } from '../../context';
import RecipeItem from '../../components/recipe-item';

export default function index() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {favoritesList && favoritesList.length ? (
        favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className='className="lg:text-4xl text-xl text-center text-black font-extrabold"'>
            Nothing to Added
          </p>
        </div>
      )}
    </div>
  );
}
