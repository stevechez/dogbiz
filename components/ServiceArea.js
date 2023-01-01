import React from "react";
import Image from "next/image";

const ServiceArea = () => {
  return (
    <div className="flex justify-between w-full px-48">
      <div className="flex-none w=[300px]">
        <Image
          src="/images/service-map.png"
          height={500}
          width={500}
          alt="Service Area"
        />
      </div>
      <div className="flex-1 ml-12">
        <h3 className="text-xl font-bold">Servicing Cupertino and Sunnyvale</h3>
        p.
      </div>
    </div>
  );
};

export default ServiceArea;
