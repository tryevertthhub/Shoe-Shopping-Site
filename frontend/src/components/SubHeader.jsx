/*

*/
import { useRef, useState } from "react";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
const SunHeader = ({ TitleSearch }) => {
  const Ref = useRef('');
  const RefMinPrice = useRef('');
  const RefMaxPrice = useRef('');

  const RefMinProfitMoney = useRef('');
  const RefMaxProfitMoney = useRef('');

  const RefMinProfitPercent = useRef('');
  const RefMaxProfitPercent = useRef('');

  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  const Search = () => {
    const Title = Ref.current.value;
    const MinPrice = RefMinPrice?.current?.value;
    const MaxPrice = RefMaxPrice?.current?.value;
    const MinProfitMoney = RefMinProfitMoney?.current?.value;
    const MaxProfitMoney = RefMaxProfitMoney?.current?.value;
    const MinProfitPercent = RefMinProfitPercent?.current?.value;
    const MaxProfitPercent = RefMaxProfitPercent?.current?.value;

    const data = {
      Title: Title,
      Price: [MinPrice, MaxPrice],
      ProfitMoney: [MinProfitMoney, MaxProfitMoney],
      ProfitPercent: [MinProfitPercent, MaxProfitPercent]
    }
    TitleSearch(data);
  }
  return (
    <div className="bg-blue-500">
      <div className="flex items-center justify-between flex-wrap  lg:p-6 p-2">
        <div className=" items-center flex-shrink-0 text-white mr-6 hidden lg:block">
          <span className=" font-semibold text-xl tracking-tight  text-white">
            商品名・型番検索
          </span>
        </div>
        <div className="w-full  flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">

            {/* <input className="py-2 px-4 mr-6 rounded-md" ref={Ref} /> */}
            <input
                type="text"
                name="date"
                placeholder=" "
                ref={Ref}
                className="lg:text-xl text-sm pb-2 lg:w-[30%]  w-[60%] mr-30  px-0 mt-0 text-center bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 border-gray-200 text-white"
              />
            <button
              onClick={Search}
              className="lg:text-xl text-sm bg-transparent  ml-10  font-semibold  py-2 px-4 border border-white hover:border-transparent rounded text-white">
              検索
            </button>
          </div>
          <div></div>
        </div>
      </div>
      {show && (
        <div>
          <div className="grid w-full lg:w-1/2 sm:grid-cols-1 md:grid-cols-5 gap-1 lg:gap-4 lg:mt-5 mt-2">
            <div className=" flex lg:justify-end col-span-2  px-8 text-white lg:text-xl text-sm  justify-center" >
              SNKRDUNK価格
            </div>
            <div className="flex  space-x-4 mx-3 col-span-3 ">
            <div className="w-full">
              <input
                type="text"
                name="date"
                placeholder=" "
                ref={RefMinPrice}
                className=" pb-2 block lg:text-xl text-sm  w-full px-0 mt-0 text-center bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 border-gray-200 text-white"
              />
        

            </div>
            <span className="mx-6 text-white lg:text-xl text-sm">~</span>
            <div className="relative z-0 w-full">
              <input
                type="text"
                name="time"
                placeholder=" "
                ref={RefMaxPrice}
                className="lg:text-xl text-sm pb-2 block w-full px-0 mt-0 text-center  bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 border-gray-200 text-white"
              />
          

            </div>
          </div>
          </div>

          <div className="grid w-full lg:w-1/2   sm:grid-cols-1 md:grid-cols-5 gap-1 lg:gap-4 lg:mt-5 mt-2">
            <div className=" flex lg:justify-end col-span-2  px-8 text-white  justify-center lg:text-xl text-sm">
              STOCKX利益額
            </div>
            <div className="flex  space-x-4 mx-3 col-span-3 ">
            <div className="w-full">
              <input
                type="text"
                name="date"
                placeholder=" "
                ref={RefMinProfitMoney}
                className=" pb-2 block lg:text-xl text-sm  w-full px-0 mt-0 text-center bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 border-gray-200 text-white"
              />
        

            </div>
            <span className="mx-6 text-white lg:text-xl text-sm">~</span>
            <div className="relative z-0 w-full">
              <input
                type="text"
                name="time"
                placeholder=" "
                ref={RefMaxProfitMoney}
                className="lg:text-xl text-sm pb-2 block w-full px-0 mt-0 text-center  bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 border-gray-200 text-white"
              />
          

            </div>
          </div>
          </div>

  
          

          <div className="grid w-full lg:w-1/2 sm:grid-cols-1 md:grid-cols-5  gap-1 lg:gap-4 lg:mt-5 mt-2">
            <div className="flex lg:justify-end col-span-2  px-8 text-white  justify-center lg:text-xl text-sm">
              STOCKX利益率
            </div>
            <div className="flex  space-x-4 mx-3 col-span-3 ">
            <div className="w-full">
              <input
                type="text"
                name="date"
                placeholder=" "
                ref={RefMinProfitPercent}
                className="lg:text-xl text-sm pb-2 block w-full px-0 mt-0 text-center bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 border-gray-200 text-white"
              />
        

            </div>
            <span className="mx-6 text-white lg:text-xl text-sm">~</span>
            <div className="relative z-0 w-full">
              <input
                type="text"
                name="time"
                placeholder=" "
                ref={RefMaxProfitPercent}
                className="lg:text-xl text-sm pb-2 block w-full px-0 mt-0 text-center  bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 border-gray-200 text-white"
              />
          

            </div>
          </div>
          </div>
        </div>
      )}
      <div className="flex justify-center lg:mt-5 mt-1" >
        {show === true ? (
          <button onClick={() => toggle()}>
            <MdKeyboardDoubleArrowUp size={32} className="bg-blue-500 text-white" />
          </button>
        ) : (
          <button onClick={() => toggle()}>
            <MdKeyboardDoubleArrowDown size={32} className="bg-blue-500 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SunHeader;
