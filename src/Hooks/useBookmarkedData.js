export const saveBookmarkedData = (value) => {
    const getData = JSON.parse(localStorage.getItem("BookmarkedData"));
    console.log(getData)
    const newData = [...getData?getData:'', value];
    localStorage.setItem("BookmarkedData", JSON.stringify(newData));
};

export const getBookmarkedData= () => {
    const getData = JSON.parse(localStorage.getItem("BookmarkedData"));
    return getData? getData : [];
};