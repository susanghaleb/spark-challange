import React, { useEffect, useState, memo } from "react";
import { findIndex } from "lodash";
import List from "../components/List";

const productsMock = [
  {
    id: "0",
    title: "pan"
  },
  {
    id: "1",
    title: "leche"
  },
  {
    id: "2",
    title: "manzana"
  },
  {
    id: "3",
    title: "jabón"
  },
  {
    id: "4",
    title: "galletitas"
  }
];

const directions = Object.freeze({
  UP: "UP",
  DOWN: "DOWN"
});

function moveItem(array, product, direction) {
  const currentPosition = findIndex(array, product);
  const newPosition =
    direction === directions.UP ? currentPosition + 1 : currentPosition - 1;

  array.splice(newPosition, 0, array.splice(currentPosition, 1)[0]);

  return array;
}

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const handleUp = product => {
    const newProducts = moveItem(products, product, directions.UP);
    setProducts([...newProducts]);
  };

  const handleDown = product => {
    const newProducts = moveItem(products, product, directions.DOWN);
    setProducts([...newProducts]);
  };

  useEffect(() => {
    setProducts(productsMock);
  }, [products]);

  return <List products={products} onUp={handleUp} onDown={handleDown} />;
};

export default memo(ProductList);
