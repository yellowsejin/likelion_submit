import React, { useState } from 'react';
import axios from 'axios';
import Food from './Food' ;

function App() {
  const [query, setQuery] = useState('');
  const [foods, setFoods] = useState([]);

  const handleSearch = async () => {
    const apiKey = process.env.REACT_APP_API_KEY ;
    const url = 'https://openapi.foodsafetykorea.go.kr/api/${apiKey}/I2790/json/1/100/DESC_KOR=${query}'

    try {
      const response = await axios.get(url);
      console.log(response.data);

      const result = response.data.I2790.row.filter(item => item.DESC_KOR.includes(query));

      setFoods(result);
    } catch (error) {
      console.error('API 요청 실패:', error);
      setFoods([]);
    }
  };

  return (
    <div>
      <h1>고지혈증 식품 필터</h1>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="음식명을 입력하세요"/>
      <button onClick={handleSearch}>검색</button>

      <ul>
        {foods.length === 0 ? (
          <li>검색 결과가 없습니다.</li>
        ) : (
          foods.map((food, index) => (
            <Food key={index} food={food} />
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
