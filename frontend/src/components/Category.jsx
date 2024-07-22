const Category = ({SortByMondey, SortByPercent}) => {
    return (
      <nav className="bg-white p-4 justify-end">
        <div className="container mx-auto flex flex-col lg:flex-row justify-end items-center">
         
  
          <div className="lg:flex  lg:flex-row lg:space-x-4 lg:mt-0 mt-4 flex  items-center text-sm lg:text-xl">
            <h1 className="  px-4 py-2 hover:text-orange-600 cursor-pointer">
            並び替え
            </h1>
            <h1
              onClick={SortByPercent}
              className="  px-4 py-2  hover:text-orange-600 cursor-pointer"
            >
              利益率
            </h1>
            <h1 
               onClick={SortByMondey}
             className="  px-4 py-2  hover:text-orange-600 cursor-pointer">
            利益額
            </h1>
            <h1  className=" px-4 py-2  hover:text-orange-600 cursor-pointer">
            更新日時
            </h1>
          </div>
        </div>
      </nav>
    );
  };
  
  
  
  
  export default Category;
  