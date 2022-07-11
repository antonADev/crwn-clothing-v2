// import { Link } from 'react-router-dom';

import './category-preview.styles.jsx';
import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  PreviewContainer,
} from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer className='category-preview-container'>
      <h2>
        <CategoryPreviewTitle className='title' to={title}>
          {title.toUpperCase()}
        </CategoryPreviewTitle>
      </h2>
      <PreviewContainer className='preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
