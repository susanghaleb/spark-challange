import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";

const Product = ({ data, onDown, onUp }) => {
  const handleDown = useCallback(() => {
    onDown(data);
  }, [onDown, data]);

  const handleUp = useCallback(() => {
    onUp(data);
  }, [onUp, data]);

  return (
    <>
      <li>
        <button onClick={handleDown}>Down</button>
        <button onClick={handleUp}>Up</button>
        <span>{data.title}</span>
      </li>
    </>
  );
};

Product.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  }).isRequired,
  onDown: PropTypes.func.isRequired,
  onUp: PropTypes.func.isRequired
};

export default memo(Product);
