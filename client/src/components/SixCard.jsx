import React from "react";
import { Link } from "react-router-dom";
const SixCard = ({ name }) => {
  return (
    <div className="my-5">
      <div>
        <h2 className=" text-2xl font-bold">{name}</h2>
      </div>
      <div className="grid grid-cols-6 gap-6 my-4">
        <div className="shadow-md rounded-md  hover:shadow-2xl">
          <Link to={"#"}>
            <img
              className="shadow-md rounded-md"
              src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_atta-flour-staplesStorefront_m_480_250323_01.jpg?tr=w-1920,q=80"
              alt=""
            />
          </Link>
        </div>
        <div className="shadow-md rounded-md  hover:shadow-2xl">
          <Link to={"#"}>
            <img
              className="shadow-md rounded-md"
              src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_atta-flour-staplesStorefront_m_480_250323_01.jpg?tr=w-1920,q=80"
              alt=""
            />
          </Link>
        </div>
        <div className="shadow-md rounded-md  hover:shadow-2xl">
          <Link to={"#"}>
            <img
              className="shadow-md rounded-md"
              src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_atta-flour-staplesStorefront_m_480_250323_01.jpg?tr=w-1920,q=80"
              alt=""
            />
          </Link>
        </div>
        <div className="shadow-md rounded-md  hover:shadow-2xl">
          <Link to={"#"}>
            <img
              className="shadow-md rounded-md"
              src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_atta-flour-staplesStorefront_m_480_250323_01.jpg?tr=w-1920,q=80"
              alt=""
            />
          </Link>
        </div>
        <div className="shadow-md rounded-md  hover:shadow-2xl">
          <Link to={"#"}>
            <img
              className="shadow-md rounded-md"
              src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_atta-flour-staplesStorefront_m_480_250323_01.jpg?tr=w-1920,q=80"
              alt=""
            />
          </Link>
        </div>
        <div className="shadow-md rounded-md hover:shadow-2xl">
          <Link to={"#"}>
            <img
              className="shadow-md rounded-md"
              src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_atta-flour-staplesStorefront_m_480_250323_01.jpg?tr=w-1920,q=80"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SixCard;
