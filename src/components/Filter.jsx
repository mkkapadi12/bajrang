import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../Context/FilterContext";
import CheckIcon from "@mui/icons-material/Check";
import CurrencyFormate from "../helper/CurrencyFormate";
import Button from "../Styles/Button";

const Filter = () => {
  const {
    filters: { text, category, color, Price, minPrice, maxPrice },
    updateFilterValue,
    all_product,
    clearFilter,
  } = useFilterContext();
  // console.log(text);

  //get the unique data for each field.

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });

    if (property === "colors") {
      // return (newVal = ["all", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }
    // else {
    return (newVal = ["all", ...new Set(newVal)]);
    // }
    // console.log(newVal);
  };

  //we need unique data
  const categoryOnlyData = getUniqueData(all_product, "category");
  // const companyOnlyData = getUniqueData(all_product, 'company');
  const colorData = getUniqueData(all_product, "colors");
  // console.log("colorData :", colorData);
  // console.log("companyOnlyData :", companyOnlyData);

  return (
    <>
      <Wrapper className="flex flex-col gap-12 p-12 sm:px-0 sm:py-20">
        <div className="filter-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              value={text.toLowerCase()}
              onChange={updateFilterValue}
              autoComplete="off"
              placeholder="Search Product"
              className="border rounded outline-none border-btn"
            />
          </form>
        </div>
        <div className="filter-category">
          <h3 className="py-4 text-xl">Category</h3>
          <div>
            {categoryOnlyData.map((curElem, index) => {
              return (
                <>
                  <button
                    type="button"
                    key={index}
                    name="category"
                    value={curElem}
                    onClick={updateFilterValue}
                    className={curElem === category ? "active" : "null"}
                  >
                    {curElem}
                  </button>
                </>
              );
            })}
          </div>
        </div>

        <div className="filter-colors colors">
          <h3 className="py-4 text-xl">Colors</h3>
          <div className="filter-color-style">
            {colorData.map((curColor, index) => {
              if (curColor === "all") {
                return (
                  <button
                    type="button"
                    style={{ backgroundColor: curColor }}
                    key={index}
                    className="color-all--style"
                    name="color"
                    value={curColor}
                    onClick={updateFilterValue}
                  >
                    All
                  </button>
                );
              }
              return (
                <button
                  type="button"
                  style={{ backgroundColor: curColor }}
                  key={index}
                  className={
                    curColor === color ? "btnStyle active" : "btnStyle"
                  }
                  name="color"
                  value={curColor}
                  onClick={updateFilterValue}
                >
                  {color === curColor ? (
                    <CheckIcon className="checkStyle" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
        <div className="filter_price">
          <h3 className="py-4 text-xl">Price</h3>
          <p>
            <CurrencyFormate price={Price} />
          </p>
          <input
            type="range"
            name="Price"
            id="Price"
            value={Price}
            min={minPrice}
            max={maxPrice}
            onChange={updateFilterValue}
          />
        </div>
        <div className="filter-clear">
          <Button className="btn" onClick={clearFilter}>
            Clear Filter
          </Button>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 100%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-color-style {
    display: flex;
    justify-content: flex-start;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 0.5rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default Filter;
