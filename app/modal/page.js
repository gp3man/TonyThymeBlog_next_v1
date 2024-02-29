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
      <div className="modal-box bg-slate-900 hover:bg-accent">{children}</div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
