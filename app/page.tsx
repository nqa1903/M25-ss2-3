import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function page() {
  return (
    <div>
      page
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <br />
      Câu 1 :
      <div>
        <label htmlFor="">Label</label>
        <div className="relative w-96">
          <input
            type="password"
            placeholder="Enter password"
            className="w-[100%]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 absolute top-0 right-0 text-neutral-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <p>Helper text</p>
      </div>
      <br />
      Câu 2 :
      <div className="w-96">
        <label htmlFor="">Input Label</label>
        <div className="relative">
          <input type="text" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 absolute top-0 left-0 text-neutral-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <label htmlFor=""><input type="checkbox" name="" id="" checked/>Label</label>
          <label htmlFor=""><input type="checkbox" name="" id="" />Label</label>
          <label htmlFor=""><input type="checkbox" name="" id="" />Label</label>
          <label htmlFor=""><input type="checkbox" name="" id="" checked/>Label</label>
        </div>
        <div className="flex ">
          <button>Clear</button>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
}
