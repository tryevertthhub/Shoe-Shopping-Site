/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Card from "./Card";
import SubHeader from "./SubHeader";
import Category from "./Category";
import TopHeader from "./TopHeader";
import Paggination from "./Paggination";
import Footer from "./Footer";

import * as XLSX from 'xlsx';

const Table = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [tdata, setTData] = useState([]);
  const [subData, setSubData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [mode, setMode] = useState(1);

  const downloadExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  };

  useEffect(() => {
    console.log(id)
    if (id) {
      setCurrentPage(id);
    }
    else {
      setCurrentPage(1)
    }
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/sdata");
        // setData(response.data.filter((item) => item.MsaleMoney != null));
        // setTData(response.data.filter((item) => item.MHopeMoney != null))
        // let num = parseInt(response.data.filter((item) => item.MsaleMoney != null).length / 60) + 1
        // setTotal(num);
         let temp = [...(response.data)]

        
       

        const transformedArray = temp.map(item => ({
          ...item, // Spread the rest of the original object properties
          pop: item.pop.length > 0 ? (item.pop[0]).slice(2, (item.pop[0]).length) : null // Check if `pop` has elements and take the first one

      }));

      console.log(transformedArray)
        setData(transformedArray)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => { }
  }, []);

  useEffect(() => {
    setSubData(tdata?.slice(60 * (currentPage - 1), 60 * currentPage));

  }, [data])

  useEffect(() => {
    setSubData(tdata?.slice(60 * (currentPage - 1), 60 * currentPage));
  }, [tdata])


  const Prev = () => {
    setCurrentPage(Math.max(1, currentPage - 1));
    window.history.replaceState(
      { page: "newPage" },
      '',
      `/pages/${Math.max(1, currentPage - 1)}`
    );
  }

  const Next = () => {
    setCurrentPage((Math.min(total, currentPage + 1)));
    window.history.replaceState(
      { page: "newPage" },
      '',
      `/pages/${Math.min(total, currentPage + 1)}`
    );
  }

  useEffect(() => {
    setSubData(tdata?.slice(60 * (currentPage - 1), 60 * currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const ChooseNumber = (str) => {
    return parseInt(str.replace(/\D/g, ""));
  };



  const SortByMondey = () => {
    let temp = [...data]
    if (mode === 2) {
      let temp_;
      temp_ = temp.sort((p1, p2) => (Number(p1?.MHopeMoney) < Number(p2?.MHopeMoney)) ? 1 : (Number(p1?.MHopeMoney) > Number(p2?.MHopeMoney)) ? -1 : 0)
      setTData(temp_);
    
    }
    else {
      let temp_;
      temp_ = temp.sort((p1, p2) => (Number(p1?.MsaleMoney) < Number(p2?.MsaleMoney)) ? 1 : (Number(p1?.MsaleMoney) > Number(p2?.MsaleMoney)) ? -1 : 0);
      setTData(temp_);

    }

  }
  const SortByPercent = () => {
    let temp = [...data]
    if (mode === 2) {
      let temp_;
      temp_ = temp.sort((p1, p2) => (Number(p1?.MHopePercent) < Number(p2?.MHopePercent)) ? 1 : (Number(p1?.MHopePercent) > Number(p2?.MHopePercent)) ? -1 : 0);
      setTData(temp_)

    }
    else {
      let temp_;
      temp_ = temp.sort((p1, p2) => (Number(p1?.MSalePercent) < Number(p2?.MSalePercent)) ? 1 : (Number(p1?.MSalePercent) > Number(p2?.MSalePercent)) ? -1 : 0);
      setTData(temp_)

    }
    
  }

  const TitleSearch = (e) => {
    console.log(e)
    const regex = /-?\d+(\.\d+)?/;
    let filteredData;
    let temp = [...data];
    // parseFloat(str.match(regex)[0]);
    const ProfitMin = ((e.ProfitMoney[0] ?? '-99999').match(regex)) !== null ? ((e.ProfitMoney[0] ?? '-99999').match(regex))[0] : -99999;
    const ProfitMax = ((e.ProfitMoney[1] ?? '99999').match(regex)) !== null ? ((e.ProfitMoney[1] ?? '999999').match(regex))[0] : 9999999;

    const ProfitMinP = ((e.ProfitPercent[0] ?? '-99999').match(regex)) !== null ? ((e.ProfitPercent[0] ?? '-99999').match(regex))[0] : -99999;
    const ProfitMaxP = ((e.ProfitPercent[1] ?? '-99999').match(regex)) !== null ? ((e.ProfitPercent[1] ?? '999999').match(regex))[0] : 9999999;

    if (mode === 2) filteredData = temp.filter((item) =>
      item.MHopeMoney && item.MHopePercent &&
      (item.ProductDescription.includes(e.Title) === true || item.productNumber.includes(e.Title) === true)
      &&
      ((e.Price[0] === undefined || e.Price[1] === undefined || e.Price[0] === '' || e.Price[1] === '')
        || ((e.Price[0] <= ChooseNumber(item.Lowest)) === true && ((e.Price[1] >= ChooseNumber(item.Lowest)) === true)))
      &&
      ((ProfitMin <= parseFloat((item.MHopeMoney).match(regex)[0])) && (ProfitMax >= parseFloat((item.MHopeMoney).match(regex)[0])))
      &&
      ((ProfitMinP <= parseFloat((item.MHopePercent).match(regex)[0])) && (ProfitMaxP >= parseFloat((item.MHopePercent).match(regex)[0])))
    )
    else {
      filteredData = temp.filter((item) =>
        item.MsaleMoney && item.MSalePercent &&
        (item.ProductDescription.includes(e.Title) === true || item.productNumber.includes(e.Title) === true)
        &&
        ((e.Price[0] === undefined || e.Price[1] === undefined || e.Price[0] === '' || e.Price[1] === '')
          || ((e.Price[0] <= ChooseNumber(item.Lowest)) === true && ((e.Price[1] >= ChooseNumber(item.Lowest)) === true)))
        &&
        ((ProfitMin <= parseFloat((item.MsaleMoney).match(regex)[0])) && (ProfitMax >= parseFloat((item.MsaleMoney).match(regex)[0])))
        &&
        ((ProfitMinP <= parseFloat((item.MSalePercent).match(regex)[0])) && (ProfitMaxP >= parseFloat((item.MSalePercent).match(regex)[0])))
      )
    }


    setTData(filteredData)
    setCurrentPage(1)
    setTotal(parseInt(filteredData.length / 60) + 1)
  }
  //ProfitMoney
  return (
    <div className="relative flex  flex-col justify-center overflow-hidden bg-gray sm:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 w-full h-full">
        <div>
          <TopHeader setMode={setMode} />
        </div>
        <div>
          <SubHeader TitleSearch={TitleSearch} />
        </div>
        <div>
          <Category SortByMondey={SortByMondey} SortByPercent={SortByPercent} />
        </div>
        <div className="grid w-full grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 sm:gap-1 xl: gap-6">
          {subData?.map((item, index) => {
            {
              return <div key={index} className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm cursor-pointer">
                <Card data={item} mode={mode} />
              </div>
            }
          })}


        </div>
        <div className="flex justify-center mt-10">
          <Paggination
            Prev={Prev}
            Next={Next}
            setCurrentPage={setCurrentPage}
            total={total}
            currentPage={currentPage}

          />
        </div>
        <div className="flex justify-center mt-10">
          <Footer />
        </div>
        <div>
          <button onClick={() =>downloadExcel(data)}>
            DOwnload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
