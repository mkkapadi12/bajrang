import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  //   console.log("products :", products);
  return (
    <Wrapper className="p-10 sm:py-8">
      <div className="container grid grid-cols-1 gap-12 sm:grid-cols-3">
        {products.map((curEle) => {
          return <Product key={curEle.id} {...curEle} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  figure {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      /* background-color: rgba(0, 0, 0, 0.5); */
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      width: 100%;
      max-width: 75%;
      margin-top: 1.5rem;
      height: 15rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    /* background-color: ${({ theme }) => theme.colors.card_bg}; */
    /* border-radius: 1rem; */
    border: 0.1rem solid rgb(170 170 170 / 40%);

    .card-data {
      padding: 0 1rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default GridView;
