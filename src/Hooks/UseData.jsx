import { useEffect, useState } from 'react';

const UseData = () => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch('/public/data.json')
          .then(res => res.json())
          .then(data => setData(data))
      }, []);

    console.log(data);
    return data;
};

export default UseData;