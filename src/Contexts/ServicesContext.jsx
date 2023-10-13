import { createContext, useContext, useEffect, useState } from "react";


export let ServicesContext = createContext('');

export const ServicesProvider= ({children}) => {
  const [services, setServices] = useState(null);

  useEffect(() => {
    const getData = () => {
    fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }
    getData();
}, []);
console.log(services);

  return (
    <ServicesContext.Provider
      value={{
        services,
        setServices
      }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider



