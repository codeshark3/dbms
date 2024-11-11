import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <div className="grid grid-cols-2 gap-4 border-b bg-primary p-4">
      <div className="flex flex-shrink-0 items-center pl-4">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={50}
          height={50}
        />
        <h1 className="ml-2 text-2xl font-bold text-white">CSIR-WRI DBMS</h1>
      </div>
    </div>
    // <div className="flex h-[100px] items-center justify-between border-4 bg-slate-200 py-3">
    //   <div className="flex flex-shrink-0 items-center pl-4">
    //     <Image
    //       src="/assets/images/logo.png"
    //       alt="logo"
    //       width={50}
    //       height={50}
    //     />
    //     <h1 className="text-primary ml-2 text-2xl font-bold">CSIR-WRI DBMS</h1>
    //   </div>

    //   <div className="m-2 flex items-center justify-center gap-x-4 pr-4">
    //     {/* <Link href="https://instagram.com/kevinrush">
    //           <FaInstagram size={20} />
    //         </Link> */}
    //     <Link href="">
    //       <CgProfile size={30} />
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Header;
