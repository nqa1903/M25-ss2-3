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
          <label htmlFor="">
            <input type="checkbox" name="" id="" checked />
            Label
          </label>
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Label
          </label>
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Label
          </label>
          <label htmlFor="">
            <input type="checkbox" name="" id="" checked />
            Label
          </label>
        </div>
        <div className="flex ">
          <button>Clear</button>
          <button>Apply</button>
        </div>
      </div>
      <div>
        Câu 3 : Form sign up
        <div>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" placeholder="you@gmail.com" />
        </div>
        <div>
          <label htmlFor="">Phone number</label>
          <input type="tel" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Address</label>
          <textarea name="" id="" placeholder="Tell us about you"></textarea>
        </div>
        <label htmlFor="">Skill</label>
        <div>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">HTML</label>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">JS</label>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">UX design</label>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">React JS</label>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">CSS</label>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Java</label>
        </div>
        <button>Sign up</button>
      </div>
      <div>
        Câu 5 :
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
        <h3>Delete blog post</h3>
        <p>
          Are you sure you want to delete this post ? This action cannot be
          undone
        </p>
        <div>
          <button>Cancel</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        Câu 6 :
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="82"
            height="40"
            fill="none"
            viewBox="0 0 82 40"
          >
            <path
              fill="#FFD43D"
              d="M73.365 19.71c0 2.904-2.241 5.31-5.27 5.31-3.03 0-5.228-2.406-5.228-5.31 0-2.905 2.199-5.312 5.228-5.312s5.27 2.407 5.27 5.311Z"
            ></path>
            <path
              fill="#FF0C81"
              d="M48.764 19.544c0 2.946-2.323 5.145-5.27 5.145-2.904 0-5.227-2.2-5.227-5.145 0-2.947 2.323-5.104 5.228-5.104 2.946 0 5.27 2.158 5.27 5.104Z"
            ></path>
            <path
              fill="#11EEFC"
              d="M20.074 25.02c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312Z"
            ></path>
            <path
              fill="#171A26"
              d="M68.095 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.855-10.83 11.12-10.83 6.349 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.03 0 5.27-2.406 5.27-5.31 0-2.905-2.24-5.312-5.27-5.312-3.029 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM43.08 40c-4.813 0-8.506-2.116-10.373-5.934l4.896-2.655c.913 1.784 2.614 3.195 5.394 3.195 3.486 0 5.85-2.448 5.85-6.473v-.374c-1.12 1.411-3.111 2.49-6.016 2.49-5.768 0-10.373-4.481-10.373-10.581 0-5.934 4.813-10.788 11.12-10.788 6.431 0 11.162 4.605 11.162 10.788v8.299C54.74 35.27 49.76 40 43.08 40Zm.415-15.311c2.946 0 5.27-2.2 5.27-5.145 0-2.947-2.324-5.104-5.27-5.104-2.905 0-5.228 2.158-5.228 5.104s2.323 5.145 5.228 5.145ZM20.074 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.854-10.83 11.12-10.83 6.348 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM0 0h5.892v30H0V0ZM82 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
            ></path>
          </svg>
          <ul>
            <li>Home</li>
            <li>Updates</li>
            <li>Service</li>
            <li>Features</li>
            <li>About us</li>
          </ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
