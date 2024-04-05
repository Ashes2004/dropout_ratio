import React from 'react'

function Card({text}) {
  return (
    <div className="h-80 w-full flex justify-center  ">
        <div className="h-72 w-[600px]  border-2 p-7 mt-12 flex  justify-center font-semibold items-center border-purple-400 rounded-lg shadow-xl"
        style={{
            backgroundImage: "linear-gradient(130deg, #614385, #02AABD)",
            color: "#fff" ,
            // backgroundColor:"whitesmoke" // Optionally, set the text color to white
        }} >
        {text}
        </div>
    </div>
  )
}

export default Card