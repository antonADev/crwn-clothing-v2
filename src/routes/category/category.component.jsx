import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';

import { CategoryContainer, CategoryTitle } from './category.styles';

//IMPORTED TO REVERSE REDUX TO CONTEXT
import { CategoriesContext } from '../../contexts/categories.context';
import { useContext } from 'react';
const Category = () => {
  const { category } = useParams();
  // COMMENTED OUT TO REVERSE REDUX TO CONTEXT
  // const categoriesMap = useSelector(selectCategoriesMap);
  const { categories } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
