import React from 'react';

const Saved = ({ savedProducts, handleSave  } ) => {
  if (savedProducts.length === 0) {
    return <p>No saved products yet.</p>;
  }

  return (
    <div>
      <h1>Saved Products</h1>
      <ul>
        {savedProducts.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}

            function addtoCartFunc(item) {
              
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Saved;