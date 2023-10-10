export const saveBookedData = (value) => {
    const getData = JSON.parse(localStorage.getItem("BookedData"));
    console.log(getData)
    const newData = [...getData?getData:'', value];
    localStorage.setItem("BookedData", JSON.stringify(newData));
};

export const getBookedData = () => {
    const getData = JSON.parse(localStorage.getItem("BookedData"));
    return getData? getData : [];
};