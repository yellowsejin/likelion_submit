// src/Food.jsx

import React from 'react';

function Food({ food }) {
  const fat = parseFloat(food.NUTR_CONT2);
  const cholesterol = parseFloat(food.NUTR_CONT4);

  const isHighFat = fat > 10;
  const isHighChol = cholesterol > 50;

  return (
    <li>
      {food.DESC_KOR} <br />
      지방: {isNaN(fat) ? '정보 없음' : `${fat}g`} | 콜레스테롤: {isNaN(cholesterol) ? '정보 없음' : `${cholesterol}mg`}
      <br />
      {isHighFat || isHighChol ? '피하는 게 좋아요' : '섭취해도 괜찮아요'}
    </li>
  );
}

export default Food;
