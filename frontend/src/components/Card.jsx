/*
@Author:
@CreatedAt:
@Component:
*/

import { Link } from "react-router-dom";
import NumberFormat from "../utils/NumberFormat";
import convertDateFormat from "../utils/utils";
const Card = ({data, mode}) => {
const gotoDetail = (productNumber) => {
  const url ="/detail/:" + productNumber;
  window.open(url, "_blank");
} 
const Formatstring = (num) => {
  
  let absnum = Math.abs(num);
  let top =Math.floor(absnum/1000);
  let bottom = Math.floor(absnum%1000);
  top =(top ==0?"":top + ",");
  if(top!=0) {
    if(bottom>10 && bottom<100) {
      bottom = "0" + bottom
    }
    if(bottom<10){
      bottom ="00" + bottom
    }
    if(bottom ==0){
      bottom ="000";
    }
  }
  return (absnum ==num?"": "-" )+ top + bottom;
}
return (
  <div onClick={() => gotoDetail(data.productNumber)}>
    <div className="h-auto overflow-hidden">
      <div className="overflow-hidden relative">
        <img
          src={data.image
            }
          alt=""
        />
      </div>
    </div>
    <div className="bg-white py-4 px-3 h-[20%]">
      <h3 className="xl:text-lg mb-2 font-medium text-xs">
        {data?.ProductDescription}
      </h3>
      <div className="flex justify-between items-center border-b-2">
        <hr />
      </div>
    </div>
    <div className="bg-white py-4 px-3  ">
      <div className="flex justify-between">
          <h1 className="xl:text-lg mb-2 font-medium text-xs">型番</h1>
          <h1 className="xl:text-lg mb-2 font-medium text-xs">{ data.productNumber}</h1>
      </div>
      <div className="flex justify-between">
          <h1 className="xl:text-lg mb-2 font-medium text-xs">スニダン定価</h1>
          <h1 className="xl:text-lg mb-2 font-medium text-xs">{data?.Lowest.slice(0, -1)}</h1>
      </div>
      <div className="flex justify-between">
          <h1 className="xl:text-lg mb-2 font-medium text-xs">利益額(最大)</h1>
          <h1 className="xl:text-lg mb-2 font-medium text-xs">{
            mode === 1?
             Formatstring(Math.floor(data.MsaleMoney)):Formatstring(Math.floor(data.MHopeMoney))
          }</h1>
      </div>
      <div className="flex justify-between">
          <h1 className="xl:text-lg mb-2 font-medium text-xs">利益率(最大)</h1>
          <h1 className="xl:text-lg mb-2 font-medium text-xs">{
            mode === 1?
            (Math.floor(data.MSalePercent)) : (Math.floor(data.MHopePercent))
          }</h1>
      </div>
      <div className="flex justify-between mb-10">
          <h1 className="xl:text-lg mb-2 font-medium text-xs" >発売日</h1>
          <h1 className="xl:text-lg mb-2 font-medium text-xs">{convertDateFormat(data?.date)}</h1>
      </div>
    </div>
  </div>
);
};

export default Card;
//ブランド アディダス(adidas) モデル その他(adidas Other Models) 発売日 2022年11月1日 定価 ¥18,700 スタイルコード GY2404
