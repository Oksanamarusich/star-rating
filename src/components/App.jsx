import { useState } from "react";
import { Card } from "./Card/Card";
import { StarRating } from "./StarRating/StarRating";


export const App = () => {
  const [currentItem, setCurrentItem] = useState();
  const rating = 3.6;
  return (
    <div>
      <StarRating
        count={5}
        activeStyle={{ color: "blue" }}
          currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <Card rating={rating} />
    </div>
    
    
  );
};
