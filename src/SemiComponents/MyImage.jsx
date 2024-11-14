import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({
  imgs = [{ url: "https://i.ibb.co/dJGZPpy/Product5.jpg" }],
}) => {
  const [mainImg, setMainImg] = useState(imgs[0]);
  // console.log("url", imgs[0].url);
  // console.log("mainImg :", mainImg.url);
  return (
    <Wrapper>
      <div className="grid-four-column grid">
        {imgs.map((CurElem, index) => {
          return (
            <figure key={imgs.id}>
              <img
                src={CurElem.url}
                alt={CurElem.filename}
                className="box-image--style"
                key={index}
                onClick={() => setMainImg(CurElem)}
              />
            </figure>
          );
        })}
      </div>
      {/* 2ns column */}
      <div className="main-screen">
        <img src={mainImg.url} alt={mainImg.filename} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;
