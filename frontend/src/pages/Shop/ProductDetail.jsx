/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { useParams } from "react-router-dom";
import axios from "axios";

import convertDateFormat from "../../utils/utils"
import NumberFormat from "../../utils/NumberFormat";
const ProductDetail = () => {
  const { id } = useParams();
  const realid = id.slice(1);
  const [data, setData] = useState({});
  const [mode, setMode] = useState(1);
  const [tableData, setTableData]  = useState([]);
  useEffect(() => {
    console.log(data.PriceData)
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/data/${realid}`);
        let   jsonObject = (response.data.PriceData).map(JSON.stringify);
        let set =new Set(jsonObject)
        set= Array.from(set).map(JSON.parse);
        setData(response.data);
        setTableData(Array.from(set))
        window.history.replaceState(
          { page: "newPage" },
          response.data?.ProductDescription,
          `/detail/${id}`
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    return () => { };
  }, [])
  const close = () => {
   window.close()
  }

  const gotosnk =() => {
    const url ="https://snkrdunk.com/products/" + data.productNumber;
    window.open(url, '_blank');
  }

  const gotoStock =() => {
    const url ="https://stockx.com/ja-jp/" + data.productNumber;
    window.open(url, '_blank');
  }

  return (
    <div>
      <Header />

      <div className="mt-[40px] bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 w-full lg:w-[80%] flex justify-center mx-auto">

      </div>

      <div
        className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-[80%] h-full justify-center lg:mx-auto mx-3 lg:grid lg:grid-cols-7">

        <div className="mx-auto w-[90%] h-[90%] relative -mt-16 border-4 border-white rounded-full lg:grid lg:col-span-4" >
          <div className="h-full w-full">
            <img src={data.
              image} alt='shoes' />
          </div>

        </div>
        <div className="text-center lg:mt-20 mt-3 lg:grid lg:col-span-3">
          <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="lg:mt-10 mt-2">

              <div className="lg:text-3xl text-sm ">{data?.ProductDescription}</div>
              <p className=" lg:text-4xl text-sm lg:mt-5 mt-2">{data.productNumber}</p>
              <p className=" lg:text-4xl text-sm lg:mt-5 mt-2">{convertDateFormat(data.date)}</p>
            </div>
            <div className="flex lg:mb-12 mb-2 justify-center lg:gap-8 gap-2">
              <div className="flex ">
                <button 
                onClick={gotosnk}
                className=" block mx-auto bg-blue-600 hover:shadow-lg font-semibold text-white px-6 lg:text-3xl">  SNKRDUNK</button>
              </div>
              <div className="">
                <button
                      onClick={gotoStock}
                 className=" block mx-auto  bg-blue-600 hover:shadow-lg font-semibold text-white px-6 lg:text-3xl">  STOCKX</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-[80%] flex justify-center lg:mx-auto mx-3">


        {/* Table */}
        <div className=" w-full">
          <table className="table-auto w-full dark:text-slate-300 ">
            {/* Table header */}
            <thead className="text-xs lg:text-3xl mx-auto uppercase  dark:text-slate-500 bg-slate-50  rounded-sm">
              <tr>
                <th className="p-2  w-[20%]">
                  <div className="font-semibold lg:text-center text-left ">サイズ</div>
                </th>
                <th className="p-2 w-[20%]">
                  <div className="font-semibold lg:text-center hidden lg:block text-left ">スニダン価格</div>
                  <div className="font-semibold lg:text-center md:hidden text-left ">スニダン</div>
                </th>
                <th className="p-2 w-[20%]">
                  <div className="font-semibold lg:text-center hidden lg:block  text-center">即利益額</div>
                  <div className="font-semibold lg:text-center  md:hidden  text-left">即利額</div>
                </th>
              
                <th className="p-2 w-[10%]">
                  <div className="font-semibold lg:text-center hidden lg:block text-center">即利益率</div>
                  <div className="font-semibold lg:text-center  md:hidden  text-right">率</div>
                </th>
                <th className="p-2 w-[20%]">
                  <div className="font-semibold lg:text-center md:block hidden text-center">最安値利益額</div>
                  <div className="font-semibold lg:text-center md:hidden text-left ">最安益額</div>
                </th>
                <th className="p-2 w-[10%]">
                  <div className="font-semibold lg:text-center md:block hidden text-left">最安値利益率</div>
                  <div className="font-semibold lg:text-center  md:hidden text-right">率</div>
                </th>
              </tr>
              
            </thead>
            {/* Table body */}
            <tbody className=" text-xs lg:text-3xl font-medium divide-y divide-slate-100 dark:divide-slate-700 ">
              {/* Row */}
              {tableData?.map((item, index) => {
                return < >
                  {Number(item[0]) >= 0 &&item[0] !=null  && <tr key ={index} className="bg-green-500 text-xs lg:text-3xl text-white">
                    <td className=" px-1 py-4 w-[20%]"> <div className="lg:text-center text-center text-white">{item[6]}</div></td>
                    <td className=" px-4 py-4">
                      
                      <div className="lg:text-center text-left text-white">{NumberFormat(item[5].toFixed(0))}</div>
                      

                    </td>
                    <td className=" px-2 py-2">  <div className="lg:text-center text-left text-white">{NumberFormat(item[0].toFixed(0))}</div></td>
                    <td className=" px-2 py-2"> <div className="lg:text-center text-right text-white">{NumberFormat(item[1].toFixed(0))}</div></td>
                    <td className=" px-2 py-2"> <div className="lg:text-center text-left text-white">{NumberFormat(item[2].toFixed(0))}</div></td>
                    <td className=" px-2 py-2"> <div className="lg:text-center text-right text-white">{NumberFormat(item[3].toFixed(0))}</div></td>
                  </tr>}
                  {Number(item[0]) < 0 && item[0] !=null && <tr key ={index}  className=" text-xs lg:text-3xl">
                    <td className=" px-1 py-4 w-[20%]"> <div className="lg:text-center text-center text-emerald-500">{item[6]}</div></td>
                    <td className=" px-4 py-4">
                      <div className="lg:text-center text-left text-emerald-500">{NumberFormat(item[5].toFixed(0))}</div>
                      

                    </td>
                    <td className=" px-2 py-2">  <div className="lg:text-center text-left text-emerald-500">{NumberFormat(item[0].toFixed(0))}</div></td>
                    <td className=" px-2 py-2"> <div className="lg:text-center text-right text-emerald-500">{NumberFormat(item[1].toFixed(0))}</div></td>
                    <td className=" px-2 py-2"> <div className="lg:text-center text-left text-emerald-500">{NumberFormat(item[2].toFixed(0))}</div></td>
                    <td className=" px-2 py-2"> <div className="lg:text-center text-right text-emerald-500">{NumberFormat(item[3].toFixed(0))}</div></td>
                  </tr>}
                </>
              })}

            </tbody>


          </table>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button onClick={close} className="bg-gray-500 px-5 py-3 lg:text-xl text-sm text-white rounded-xl">
        閉じる
        </button>
      </div>
      <div className="flex justify-center mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
