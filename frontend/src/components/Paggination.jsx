/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";

const Paggination = ({ Prev, Next, setCurrentPage, total, currentPage }) => {

  const [numbers, setNumbers] = useState(['1', '2', '3', '...', `${total}`]);

  const Prev1 = () => {
    let array = [];
    if (Number(numbers[0]) !== 1 && total > 5) {
      {
        numbers?.map((number, index) => {
          index <= 2 &&
            (array.push(Math.max(1, Number(number) - 1)));
        })
      }
      array[2] < total - 2 ? array.push('...') : array.push(array[2] + 1);

      array.push(total);
      setNumbers(array);
      Prev();
    }
  }

  useEffect(() => {
    gotoPage(currentPage)
  }, [currentPage])
  const Next1 = () => {
    let array = [];

    if (Number(numbers[3]) !== total - 1 && total >= 6) {
      {
        numbers?.map((number, index) => {
          index <= 2 &&
            (array.push(Math.min(total, Number(number) + 1)));
        })
      }
      array[2] < total - 2 ? array.push('...') : array.push(array[2] + 1);
      array.push(total);
      setNumbers(array);
      Next();
    }
  }

  const gotoPage = (number) => {
    
    if (number !== "...")
      setCurrentPage(Number(number));
    window.history.replaceState(
      { page: "newPage" },
      '',
      `/pages/${Number(number)}`
    );
    if(total <5){
      return;
    }
    if (Number(number) <= total - 5) {
      setNumbers([`${number}`, `${Number(number)  + 1}`, `${Number(number)  + 2}`, '...', `${total}`]);
    }
    if (number === total - 4) {
      setNumbers([`${number}`, `${Number(number)  + 1}`, `${Number(number)  + 2}`, `${Number(number)  + 3}`, `${total}`]);
    }
    if (Number(number) === total - 3) {
      setNumbers([`${Number(number)  - 1}`, `${Number(number) }`, `${Number(number)  + 1}`, `${Number(number)  + 2}`, `${total}`]);
    }
    if (Number(number) === total - 2) {
      setNumbers([`${Number(number)  - 2}`, `${Number(number)  - 1}`, `${Number(number) }`, `${Number(number)  + 1}`, `${total}`]);
    }
    if (Number(number) === total - 1) {
      setNumbers([`${Number(number)  - 3}`, `${Number(number)  - 2}`, `${Number(number)  - 1}`, `${Number(number) }`, `${total}`]);
    }
    if (Number(number) === total) {
      setNumbers([`${Number(number)  - 4}`, `${Number(number)  - 3}`, `${Number(number)  - 2}`, `${Number(number)  - 1}`, `${total}`]);
    }
  }

  useEffect(() => {
    if (total > 5)
      setNumbers(['1', '2', '3', '...', `${total}`]);
    if (total === 5)
      setNumbers(['1', '2', '3', '4', `${total}`]);
    if (total === 4)
      setNumbers(['1', '2', '3', `${total}`]);
    if (total === 3)
      setNumbers(['1', '2', `${total}`]);
    if (total === 2)
      setNumbers(['1', `${total}`]);
    if (total === 1)
      setNumbers(['1']);
    if (total === 0)
      setNumbers(['0']);
  }, [total])
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li>

          <a
            onClick={Prev1}

            className="cursor-pointer bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Prev
          </a>
        </li>

        {numbers?.map((number, index) => {
          return <li key={index}>

            <a
              onClick={() => gotoPage(number)}
              className="cursor-pointer bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0  leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {number}
            </a>
          </li>
        })}
        <li>
          <a
            onClick={Next1}
            className="cursor-pointer bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paggination;
