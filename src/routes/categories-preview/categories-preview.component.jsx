import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';

//IMPORTED TO REVERSE REDUX TO CONTEXT
import { CategoriesContext } from '../../contexts/categories.context';
import { useContext } from 'react';
const CategoriesPreview = () => {
  //COMMENTED OUT TO REVERSE REDUX TO CONTEXT
  // const categoriesMap = useSelector(selectCategoriesMap);

  const { categories } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
