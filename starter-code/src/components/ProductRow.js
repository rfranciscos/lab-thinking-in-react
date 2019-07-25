import React from 'react';

const ProductRow = (product) => {
    return (
       <tr>
           <th>{product.product.name}</th>
           <th>{product.product.price}</th>
       </tr>
    )
}

export default ProductRow;