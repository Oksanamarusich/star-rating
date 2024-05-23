import { Wrapper } from "components/StarRating/Styled";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
export const Card = ({rating}) => {

    const fullStars = Math.floor(rating); // Кількість повних зірок
  const hasHalfStar = rating - fullStars >= 0.5; // Перевірка, чи є половинна зірка
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Кількість порожніх зірок
    
   
    return ( <Wrapper>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar size="50" key={`full-${index}`} color="gold" />
      ))}
      {hasHalfStar && <FaStarHalfAlt size="50" key="half" color="gold" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaStar size="50" key={`empty-${index}`} color="lightgrey" />
      ))}
{/* ============================================ */}
          {/* {Array(fullStars).fill(0).map((_, index) => (
        <FaStar key={`full-${index}`} color="gold" />
      ))}
      {hasHalfStar && <FaStarHalfAlt key="half" color="gold" />}
      {Array(emptyStars).fill(0).map((_, index) => (
        <FaStar key={`empty-${index}`} color="lightgrey" />
      ))} */}
        
{/* =================================================== */}
         {/* {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={`full-${index}`} color="gold" />
      ))}
      {hasHalfStar && <FaStarHalfAlt key="half" color="gold" />}
      {Array.from({ length: emptyStars }, (_, index) => (
        <FaStar key={`empty-${index}`} color="lightgrey" />
      ))} */}
    </Wrapper>)
}