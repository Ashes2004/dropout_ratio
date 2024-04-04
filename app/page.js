"use client"
import Image from "next/image";
import Dropdown from "./Components/DropDown";
import { MyContext } from "./context/MyContext";
import { useEffect, useState } from "react";
import Graph from "./Components/Graph";
export default function Home() {
  const [value, setValue] = useState();



  const data = [
    {
      "index": 1,
      "name": "Literacy rate",
      "show": "lit_rate"
    },
    {
      "index": 2,
      "name": "Per capita Income",
      "show": "pci"
    },
    {
      "index": 3,
      "name": "Gender Parity Index (primary)",
      "show": "gpi_primary"
    }
    ,
    {
      "index": 5,
      "name": "Gender Parity Index (Upper Primary)",
      "show": "gpi_upper_primary"
    }
    ,
    {
      "index": 6,
      "name": "Gender Parity Index (Secondary)",
      "show": "gpi_secondary"
    },
    {
      "index": 7,
      "name": "PTR (primary) ",
      "show": "ptr_primary"
    },
    {
      "index": 8,
      "name": "PTR (Upper primary)",
      "show": "ptr_upper_primary"
    },
    {
      "index": 9,
      "name": "PTR (Secondary)",
      "show": "ptr_secondary"
    },
    {
      "index": 10,
      "name": "Availability of electricity",
      "show": "elec"
    },
    {
      "index": 11,
      "name": "Availability of library with books",
      "show": "lib"
    },
    {
      "index": 12,
      "name": "Availability of drinking water",
      "show": "water"
    },
    {
      "index": 13,
      "name": "Availability of electricity",
      "show": "elec"
    },
    {
      "index": 14,
      "name": "Unemployment rate",
      "show": "unemp_rate"
    },
    {
      "index": 15,
      "name": "Life Expectency (girls)",
      "show": "life_exp_girls",
    },
    {
      "index": 16,
      "name": "Life Expectency (boys)",
      "show": "life_exp_boys",
    },
    {
      "index": 17,
      "name": "Human development index",
      "show": "hdi",
    },
  ]


  return (
    <div className=" bg-gray-200 h-[1300px] w-screen  ">
      <MyContext.Provider value={{ value, setValue }}>
        <div className="flex justify-center w-screen pt-24 ">
          <Dropdown data={data} />
        </div>
       

          <Graph />





       

      </MyContext.Provider>
    </div>
  );
}
