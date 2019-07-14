import React, { useContext, useEffect } from 'react';

import { partContext } from '../context/partContext';

const BASE_URL = 'http://loremricksum.com/api/?paragraphs=3&quotes=10';

export default function Episode(): JSX.Element {
  const fetchData = async () => {
    const data = await fetch(BASE_URL);
    const JSONdata = data.json();
    console.log(JSONdata);
  };

  const { state, dispatch } = useContext(partContext);
  useEffect(() => {
    fetchData();
  }, []);

  return <h1>episodes goes here</h1>;
}
