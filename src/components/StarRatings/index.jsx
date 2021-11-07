import React from 'react'
import ReactStars from "react-rating-stars-component";
import { theme } from '../../theme';

const RatingStars = () => {
  return (
    <ReactStars
      isHalf
      count={5}
      size={20}
      value={4.5}
      activeColor={theme.colors.orange}
      edit={false}
    />
  )
}

export default RatingStars
