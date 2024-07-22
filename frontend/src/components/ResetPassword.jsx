/* eslint-disable no-empty */
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";

import axios from "axios";

const ResetPassword = () => {
  const Input1 = useRef(null);
  const Input2 = useRef(null);
  const Input3 = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const onReset = () => {
    setShowModal(false);

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 5000);

  };

  const changePassword = async () => {
    const prevPassword = Input1.current.value;
    const currentPassword = Input2.current.value;
    const userEmail = userInfo.data.email;
    const form = {
      email: userEmail,
      prev: prevPassword,
      current: currentPassword

    };
    console.log(Input3.current.value ,Input2.current.value)
    if(Input3.current.value == Input2.current.value){
      try {
        const res = await axios.post("/api/v1/user/changepassword", form);
        if (res.data._id) {
          onReset()
        }
        else {
          setShowToast1(true);
  
          setTimeout(() => {
            setShowToast1(false);
          }, 5000);
        }
      } catch (err) {
  
      }
  
    }
    else {
      setShowToast2(false);
      setTimeout(() => {
        setShowToast2(false);
      }, 5000);
    }
  

  }
  return (
    <>
      {showToast && (
        <div
          className="absolute right-0 flex py-2 px-3 mx-2 mt-[200px] z-[999] bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white rounded-sm w-[290px] h-[70px] items-center"
          onClick={() => setShowToast(false)}
        >
          <span className="mx-2 text-lg">無事に変更されました！</span>
          <svg
            className="w-10 h-10 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>

        </div>
      )}
      {showToast1 && (
        <div
          className="absolute right-0 flex py-2 px-3 mx-2 mt-[200px] z-[999] bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white rounded-sm w-[290px] h-[70px] items-center"
          onClick={() => setShowToast1(false)}
        >
          <span className="mx-2 text-lg">パスワードが違います！</span>
          <svg
            className="w-10 h-10 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>

        </div>
      )}
      {showToast2&& (
        <div
          className="absolute right-0 flex py-2 px-3 mx-2 mt-[200px] z-[999] bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white rounded-sm w-[290px] h-[70px] items-center"
          onClick={() => setShowToast2(false)}
        >
          <span className="mx-2 text-lg">パスワードが一致しません。</span>
          <svg
            className="w-10 h-10 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>

        </div>
      )}


      <button
        className="p-2 lg:px-7 lg:py-3  border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-xl cursor-pointer hover: shadow-md transition text-sm lg:text-xl"
        onClick={() => setShowModal(true)}
      >
       PW
      </button>

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-600 bg-opacity-60">
            <div
              className="absolute w-full h-full "
              onClick={() => setShowModal(false)}
            ></div>
            <div
              className="
                 text-black
                  flex flex-col
                       bg-white
                         shadow-md
                        px-4
                        z-[999]
                        sm:px-6
                        md:px-8
                        lg:px-10
                        py-8
                        rounded-3xl
                        w-[400px]
                        max-w-lg
                        "
            >
              <div className="relative">
                <span
                  className="absolute top-0 lg:-right-5 right-0 -mt-8 text-[25px] hover:cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  &#215;
                </span>
              </div>

              <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
                パスワードを変更
              </div>

              <div className="mt-10">
                {/* <form action="#"> */}
                <div className="flex flex-col mb-5">
                  <label
                    htmlFor="email"
                    className="mb-1 text-sm tracking-wide text-gray-600"
                  >
                    現在のパスワード:
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="password"
                      name="email"
                      className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                      placeholder="パスワードを入力してください"
                      ref={Input1}
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="password"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    新しいパスワード:
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                      placeholder="新しいパスワードを入力してください"
                      ref={Input2}
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="password"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                  確認する:
                  </label>
                  <div className="relative">
                    <input
                      id="password1"
                      type="password"
                      name="password1"
                      className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                      placeholder="新しいパスワードを入力してください"
                      ref={Input3}
                    />
                  </div>
                </div>

                <button
                  className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                  onClick={() => changePassword()}
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                    />
                  </svg> */}

                  <span>パスワードを再設定</span>
                </button>
                {/* </form> */}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ResetPassword;
