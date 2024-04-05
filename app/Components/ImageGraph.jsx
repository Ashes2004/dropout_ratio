import React from 'react'

import Image from 'next/image';
function ImageGraph({link}) {
  return (
    <div className="h-80 w-full flex justify-center  ">
        <div className="h-[400px] w-[400px]  border-2  flex justify-center items-center border-purple-400 rounded-lg shadow-xl"
        >
        <Image
  src= {link}
  alt="My Image"
  className="rounded-lg"
  width={800}
  height={500}
  style={{
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    height: "100%"
  }}
/>
        </div>
    </div>
  )
}

export default ImageGraph