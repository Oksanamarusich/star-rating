import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Wrapper } from './Styled';

export const StarRating = ({ count = 5, currentItem, setCurrentItem }) => {
  const [hoverItem, setHoverItem] = useState();
  const stars = Array(count).fill(0);
  return (
    <Wrapper>
      {stars.map((_, index) => {
        const color =
          index <= (hoverItem !== null ? hoverItem : currentItem)
            ? 'gold'
            : 'lightgrey';
        return (
          <div
            key={index}
            onClick={() => setCurrentItem(index)}
            onMouseMove={() => setHoverItem(index)}
            onMouseOut={() => setHoverItem(null)}
            style={{ color }}
          >
            <FaStar size="50" />
          </div>
        );
      })}
    </Wrapper>
  );
};
