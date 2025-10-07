import React from "react";

import { useParams } from "react-router";
import { useAppApi } from "../Hooks/useAppAPi";
import DetailesCard from "../Componants/DetailesCard";
import RatingChart from "../Componants/RatingChart";

const Detailes = () => {
  const { id } = useParams();

  const { app } = useAppApi();

  const findData = app.find((data) => data.id === Number(id));
 

  if (!findData) {
  return <p className="text-center p-10">Loading...</p>;
}

  const ratingData = findData.ratings
  
  console.log(ratingData)
  return (
    <div>
     <DetailesCard findData={findData}></DetailesCard>
    {/* bar chat  */}


    <RatingChart ratingData={ratingData}></RatingChart>

    </div>
  );
};

export default Detailes;
