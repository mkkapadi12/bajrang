import React from "react";
import styled from "styled-components";
import CurrencyFormate from "../helper/CurrencyFormate";
import { NavLink } from "react-router-dom";
import Button from "../Styles/Button";

const ListView = ({ products }) => {
  return (
    <Wrapper className="py-8 ">
      <div className="container grid gap-12">
        {products.map((curElem) => {
          const { id, name, image, price, description } = curElem;
          return (
            <div className="grid grid-cols-2 card" key={id}>
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className="card-data">
                <h3 className="my-8 text-3xl capitalize">{name}</h3>
                <p className="font-bold text-text">
                  <CurrencyFormate price={price} />
                </p>
                <p>{description.slice(0, 98)}...</p>
                <NavLink to={`/singleproduct/${id}`}>
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    padding: 1rem;
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
      max-width: 90%;
      height: 15rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);

    .card-data {
      padding: 0 2rem;
    }

    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }

      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default ListView;
