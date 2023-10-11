'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
const Announcement = ({ data }) => {
  const { headline, details, location, thumbnail } = data;
  const [show, setShow] = useState(true)
  useEffect(()=>{
    if (show){
      () => document.getElementById("my_modal_2").showModal()
    }
  },[show])

  return (
      <dialog id="my_modal_2" className="modal z-20" >
        <div className="modal-box">
          <h3 className="font-bold text-lg">{headline}</h3>
          <p className="py-4">{details}</p>
          {/* <Image
          src={thumbnail?.url}
          width={thumbnail?.width}
          height={thumbnail?.height}
          alt="Announcement Image"
          /> */}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
  );
};

export default Announcement;
