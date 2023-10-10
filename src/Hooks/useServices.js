import {
  useEffect,
  useState
} from 'react';


export function useServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getData = () => {
    fetch('/public/data.json')
            .then(res => res.json())
            .then(data => {
              setServices(data);
              saveData(data);
            })
    }
    getData();
}, []);
  return [services, setServices]
}

export const saveData = (value) => {
  localStorage.setItem("services", JSON.stringify(value));
};

export const getData = () => {
  return JSON.parse(localStorage.getItem("services"));
};
