import React from "react";
import { Container, Row } from "react-bootstrap";
import { useProducts } from "../contexts/ProductProvider";
import Product from "./Shared/Product";

const TopProducts = () => {
  const { state } = useProducts();

  let content;

  if (state.length === 0) {
    content = <p> Products list is empty</p>;
  }

  if (state.length > 0) {
    content = (
      <Container>
        <Row>
          {state
            .filter((p) => p.rating >= 4)
            .map((product, i) => (
              <Product key={i} product={product} />
            ))}
        </Row>
      </Container>
    );
  }

  return <div>{content}</div>;
};

export default TopProducts;
