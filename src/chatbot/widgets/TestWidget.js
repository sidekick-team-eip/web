import React, { useState, useEffect } from "react";

const TestWidget = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="stats">
      <div className="column-left">
        <p> Username :</p>
        <p> Kcal today :</p>
        <p> Training today :</p>
        <p> Training streak :</p>
        <p> Weight :</p>
      </div>
      <div className="column-right">
        <ClipLoader color={"#fff"} loading={loading} />
        <p>Pierre Bittou</p>
        <p>1450 kcal</p>
        <p>Not yet</p>
        <p>4</p>
        <p>77.4 Kg</p>
      </div>
    </div>
  );
};

export default TestWidget;