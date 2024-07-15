function NumberFormat(str) {
    str= str.toString()
    let subStr = str;
    let sign="";
    if(str[0] == "-"){subStr = str.substring(1, str.length);sign = "-"}
    

    let num = Number(subStr)

    let top = Math.floor(num/1000);
    let bottom = num % 1000;
    if(top>0)
    {
        if(bottom<100 && bottom>10) bottom= "0" + bottom;
        if(bottom<10) bottom= "00" + bottom;
        if(bottom ==0) bottom= "000" ;
    }
   
    return sign + (top>0?top + ",":"") + bottom;
    // return  str;

}

export default NumberFormat