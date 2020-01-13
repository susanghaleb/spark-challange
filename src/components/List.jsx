import React, { memo } from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const List = ({ products, onUp, onDown }) => {
  return (
    <>
      <ul>
        {products.map(product => (
          <Product
            data={product}
            key={product.id}
            onUp={onUp}
            onDown={onDown}
          />
        ))}
      </ul>
    </>
  );
};

List.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string
    })
  ).isRequired
};

export default memo(List);
