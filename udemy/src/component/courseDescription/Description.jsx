import React from "react";
import GoalsContent from "./GoalsContent";
import SubscribeAuthor from "./SubscribeAuthor";

const Description = () => {
  return (
    <>
      <div className="mt-5">
        <SubscribeAuthor />

        <GoalsContent />
      </div>
    </>
  );
};

export default Description;
