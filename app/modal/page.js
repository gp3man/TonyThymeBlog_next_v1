"use client";

import { useEffect } from "react";

const Modal = ({ children }) => {
  useEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => {
        document.getElementById("my_modal_2").showModal();
      }, 2000);
    }
  }, []);
  return (
    <dialog id="my_modal_2" className="modal modal-top sm:modal-middle">
      <div className="modal-box bg-slate-900 hover:bg-accent">
        <div>
          {children}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-slate-50 font-bold bg-slate-800 bg-opacity-50 hover:bg-opacity-100 hover:bg-red-800">
            ✕
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
