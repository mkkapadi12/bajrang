import React from "react";
import styled from "styled-components";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";

const Shop = () => {
  return (
    <Wrapper className="container mx-auto">
      <div className="grid-filter-column grid gap-12">
        <div className="filter-section">
          <Filter />
        </div>
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Shop;
