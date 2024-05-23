import React, { useEffect } from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";
import MyImage from "../SemiComponents/MyImage";
import CurrencyFormate from "../helper/CurrencyFormate";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
// import AddToCart from "../SemiComponents/AddToCart";
import styled from "styled-components";
import Progress from "../helper/Progress";
import { SinglePro } from "../Data/SinglePro";
// const API =
//   "https://dev-krv9yget2a9na8l.api.raw-labs.com/latkan-products2/productnoa";

const API = SinglePro;

const SingleProduct = () => {
  const { getSingleProduct, singleProduct, isSingleLoading } =
    useProductContext();
  // const { id } = useParams();

  useEffect(() => {
    getSingleProduct(API);
  }, []);

  const { id: alis, name, price, description, image } = singleProduct;
  if (isSingleLoading) {
    return (
      <>
        <Progress />
      </>
    );
  }
  console.log(singleProduct);
  return (
    <>
      <div>
        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="px-5 py-3 m-5 border bg-bg dark:bg-gray-800"
        >
          <Breadcrumb.Item icon={HiHome}>
            <Link to="/" className="hover:text-btn">
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/shop" className="hover:text-btn">
              Product
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Mayur</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Wrapper>
        <section className="container">
          <div className="grid grid-cols-2">
            <div className="product-images">
              <MyImage imgs={image} />
            </div>
            <div className="product-data">
              <h2 style={{ textTransform: "capitalize" }}>{name}</h2>

              {/* <Rating stars={stars} reviews={reviews} /> */}
              <p className="product-data-price">
                MRP:
                <del>
                  <CurrencyFormate price={price + 250000} />
                </del>
              </p>
              <p className="product-data-price product-data-real-price">
                Deal of The Day : <CurrencyFormate price={price} />
              </p>
              <p>{description}</p>
              <div className="product-data-warranty">
                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Free Delivery</p>
                </div>
                <div className="product-warranty-data">
                  <TbReplace className="warranty-icon" />
                  <p>30 Days Replacement</p>
                </div>
                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Mayur Delivery</p>
                </div>
                <div className="product-warranty-data">
                  <MdSecurity className="warranty-icon" />
                  <p>2 years warranty</p>
                </div>
              </div>
              {/* <div className="product-data-info">
                <p>
                  Available :
                  <span>{stock > 0 ? "In Stock" : "Not Available"} </span>
                </p>
                <p>
                  ID :<span>{alis}</span>
                </p>
                <p>
                  Brand :<span>{company}</span>
                </p>
              </div> */}
              <hr />
              {/* <AddToCart product={singleProduct} /> */}
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default SingleProduct;

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;
