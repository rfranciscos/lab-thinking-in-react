import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (propris) => {  
  return (
    <div>
      <table>
        <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {propris.products.map((product, index) => {
          return <ProductRow key={index} product={product} />;
        })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
