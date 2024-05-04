import React from "react";
import styled from "styled-components";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuIcon from "@mui/icons-material/Menu";
import { useFilterContext } from "../Context/FilterContext";

const Sort = () => {
  const { Grid_View, setGridView, setListView, filter_product, sorting } =
    useFilterContext();
  return (
    <>
      <Wrapper className="flex flex-col items-center justify-between gap-10 mt-20 sm:gap-0 sm:flex-row">
        {/* 1st column */}
        <div className="flex gap-8 sorting-list--grid">
          <button
            className={Grid_View ? "active sort-btn" : "sort-btn"}
            onClick={setGridView}
          >
            <GridViewIcon className="text-2xl" />
          </button>
          <button
            className={!Grid_View ? "active sort-btn" : "sort-btn"}
            onClick={setListView}
          >
            <MenuIcon className="text-2xl" />
          </button>
        </div>
        {/* 2nd column */}
        <div className="text-text">{`${filter_product.length} Product Available`}</div>
        {/* 3rd column */}
        <div className="sort-selection">
          <form action="#">
            <label htmlFor="sort"></label>
            <select
              name="sort"
              id="sort"
              className="p-2 border outline-none cursor-pointer border-btn"
              onClick={sorting}
            >
              <option value="lowest">Price(lowest)</option>
              <option value="#" disabled></option>
              <option value="highest">Price(highest)</option>
              <option value="#" disabled></option>
              <option value="a-z">Price(a-z)</option>
              <option value="#" disabled></option>
              <option value="z-a">Price(z-a)</option>
              <option value="#" disabled></option>
            </select>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .sorting-list--grid {
    .sort-btn {
      padding: 0.5rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
`;

export default Sort;
