import { useState } from "react";

// get, 데이어 불러오고, 에러 로딩상태 관리
const useFetch = (url, options) => {
  //'react query'
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  fetch(url, options).then((res) => res.json());
  return [];
};
