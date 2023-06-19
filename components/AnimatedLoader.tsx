import React from "react";
import Image from "next/image";

type Props = {};

const AnimatedLoader = (props: Props) => {
  return (
    <div className="min-h-screen text-white bg-[#ffd02c] flex justify-center items-center">
      <Image
        src={"/loader2.gif"}
        alt={"loading..."}
        height={300}
        width={300}
        className=" select-none "
      />
    </div>
  );
};

export default AnimatedLoader;
