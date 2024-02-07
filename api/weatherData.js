
/* fetching api using async await */
// const fetchData=async(target)=>{
//     try {
//     const url=`https://api.weatherapi.com/v1/forecast.json?key=c5e1bd820c444c23bed95034240502&q=${target}&days=4`
//     const response=await fetch(url);
//      const data=await response.json();
//      console.log(data);
//      return data;
//     } catch (error) {
//      alert("location not found");
//     }
//  };

/*fetching api using promise */
 const fetchDataByPromise=(target)=>{
    const url=`https://api.weatherapi.com/v1/forecast.json?key=c5e1bd820c444c23bed95034240502&q=${target}&days=4`
     return fetch(url).then((rawData)=>{
        return rawData.json();
     }).then(data=>{
        return data;
     }).catch((error)=>{
        alert("location not found");
     })
 }

 export {fetchDataByPromise};

 /* exporting api call if use async await */
//  export fetchData;