const  convertDateFormat = (dateString)  => {

    // const data = dateString.split([""])
    // 2024年2月2日
  let date = dateString;
    if (dateString =="-")
    date="2023年2月2日"
       let temp = date?.replace("年", "/")
       let temp1 = temp?.replace("月", "/")
       let temp2 = temp1?.replace("日", "")
    return temp2; 
  }
 

  export default convertDateFormat