"use client"
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { Scatter } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
function Graph() {
    const { value, setValue } = useContext(MyContext);
    const [chartData, setChartdata] = useState({});
    const [chartData1, setChartdata1] = useState({});
    const [chartData2, setChartdata2] = useState({});
    const [chartJson, setChartJson] = useState({});

    useEffect(() => {
        if (value) {
            fetch(`https://dropout-ratio-api-sobhanbose.koyeb.app/getData/byCriterionFormatted?criterion=${value}`)
                .then(resp => resp.json())
                .then(data => {
                    console.log("Fetched data:", data);
                    setChartJson(data);
                })
                .catch(error => console.error("Fetch Error:", error));
        }
    }, [value]);

    useEffect(() => {
        console.log("Chart JSON:", chartJson);
        // Assuming you want to update chartData based on chartJson
        // Here you can update chartData using chartJson
        chart();
    }, [chartJson]);






















    const chart = () => {
        console.log("chartjson", chartJson);
        setChartdata({


            labels:(chartJson?.title === "Gender Parity Index (primary)" ? chartJson?.dr_primary_boys?.region : 
            (chartJson?.title === "Gender Parity Index (upper primary)" ? chartJson?.dr_upper_primary_boys?.region : 
            (chartJson?.title === "Gender Parity Index (secondary)" ? chartJson?.dr_secondary_boys?.region : 
            chartJson?.dr_primary_overall?.region)))
            ,
            datasets: [
                {
                    label: (chartJson?.title === "Gender Parity Index (primary)" ? chartJson?.dr_primary_boys?.label : 
                    (chartJson?.title === "Gender Parity Index (upper primary)" ? chartJson?.dr_upper_primary_boys?.label : 
                    (chartJson?.title === "Gender Parity Index (secondary)" ? chartJson?.dr_secondary_boys?.label : 
                    chartJson?.dr_primary_overall?.label))),
                    data: (chartJson?.title === "Gender Parity Index (primary)" ? chartJson?.dr_primary_boys?.data : 
                    (chartJson?.title === "Gender Parity Index (upper primary)" ? chartJson?.dr_upper_primary_boys?.data : 
                    (chartJson?.title === "Gender Parity Index (secondary)" ? chartJson?.dr_secondary_boys?.data : 
                    chartJson?.dr_primary_overall?.data))),
                    
                    backgroundColor: "#D20062"
                }
            ]
        })
        setChartdata1({

            label: (chartJson?.title === "Gender Parity Index (primary)" ? chartJson?.dr_primary_girls?.region : 
            (chartJson?.title === "Gender Parity Index (upper primary)" ? chartJson?.dr_upper_primary_girls?.region : 
            (chartJson?.title === "Gender Parity Index (secondary)" ? chartJson?.dr_secondary_girls?.region : 
            chartJson?.dr_primary_overall?.region)))
            ,
datasets: [
    {
        label: (chartJson?.title === "Gender Parity Index (primary)" ? chartJson?.dr_primary_girls?.label : 
        (chartJson?.title === "Gender Parity Index (upper primary)" ? chartJson?.dr_upper_primary_girls?.label : 
        (chartJson?.title === "Gender Parity Index (secondary)" ? chartJson?.dr_secondary_girls?.label : 
        chartJson?.dr_primary_overall?.label))),
        data: (chartJson?.title === "Gender Parity Index (primary)" ? chartJson?.dr_primary_girls?.data : 
        (chartJson?.title === "Gender Parity Index (upper primary)" ? chartJson?.dr_upper_primary_girls?.data : 
        (chartJson?.title === "Gender Parity Index (secondary)" ? chartJson?.dr_secondary_girls?.data : 
        chartJson?.dr_primary_overall?.data))),
        backgroundColor: "#0A1D56"
        
    }
]

        })
        setChartdata2({

            labels: chartJson?.dr_secondary_overall?.region,
            datasets: [
                {
                    label: chartJson?.dr_secondary_overall?.label,
                    data: chartJson?.dr_secondary_overall?.data,
                    backgroundColor: "#711DB0"
                }
            ]
        })
    }




    return (
        <div className="flex justify-center ">




            {(value == "lit_rate") && <div className="h-[500px] w-screen p-8  mt-12 ">
                <div className=" ml-24 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    {(chartData != {}) && <Scatter
                        data={chartData}
                        height={500}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                    />}
                    {(chartData1 != {}) && <Scatter
                        data={chartData1}
                        height={500}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                    />
                    }
                </div>
                <div className="flex mt-24 h-[300px] justify-center">
                    {(chartData2 != {}) && <Scatter
                        data={chartData2}
                        height={500}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-lg"
                    />}
                </div>

            </div>
            }









            {(value == "pci") && <div className="h-[500px] w-screen p-8  mt-12 ">
                <div className=" ml-24 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={500}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                    />
                    <Scatter
                        data={chartData1}
                        height={500}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                    />

                </div>
                <div className="flex mt-24 h-[300px] justify-center">
                    <Scatter
                        data={chartData2}
                        height={500}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-lg"
                    />
                </div>

            </div>
            }




            {(value == "gpi_primary") && <div className="h-[500px] w-screen p-8  mt-12 ">
                <div className=" ml-24 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={500}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                    />
                    <Scatter
                        data={chartData1}
                        height={500}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                    />

                </div>
               </div>

                }




{(value == "gpi_upper_primary") && <div className="h-[500px] w-screen p-8  mt-12 ">
                <div className=" ml-24 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={500}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                    />
                    <Scatter
                        data={chartData1}
                        height={500}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                    />

                </div>
               </div>

                }


{(value == "gpi_secondary") && <div className="h-[500px] w-screen p-8  mt-12 ">
                <div className=" ml-24 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={500}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                    />
                    <Scatter
                        data={chartData1}
                        height={500}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                    />

                </div>
               </div>

                }



                {(value == "ptr_primary") && <div className="h-[500px] w-screen p-8  mt-12 ">
                    <div className=" ml-24 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                        <Scatter
                            data={chartData}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />
                        <Scatter
                            data={chartData1}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />

                    </div>
                    <div className="flex mt-24 h-[300px] justify-center">
                        <Scatter
                            data={chartData2}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-lg"
                        />
                    </div>

                </div>
                }









                {(value == "ptr_secondary") && <div className="h-[500px] w-screen p-8  mt-12 ">
                    <div className=" ml-24 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                        <Scatter
                            data={chartData}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />
                        <Scatter
                            data={chartData1}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />

                    </div>
                    <div className="flex mt-24 h-[300px] justify-center">
                        <Scatter
                            data={chartData2}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-lg"
                        />
                    </div>

                </div>
                }









                {(value == "ptr_upper_primary") && <div className="h-[500px] w-screen p-8  mt-12 ">
                    <div className=" ml-24 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                        <Scatter
                            data={chartData}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />
                        <Scatter
                            data={chartData1}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />

                    </div>
                    <div className="flex mt-24 h-[300px] justify-center">
                        <Scatter
                            data={chartData2}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-lg"
                        />
                    </div>

                </div>
                }












                {(value == "elec") && <div className="h-[500px] w-screen p-8  mt-12 ">
                    <div className=" ml-24 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                        <Scatter
                            data={chartData}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />
                        <Scatter
                            data={chartData1}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />

                    </div>
                    <div className="flex mt-24 h-[300px] justify-center">
                        <Scatter
                            data={chartData2}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-lg"
                        />
                    </div>

                </div>
                }










                {(value == "lib") && <div className="h-[500px] w-screen p-8  mt-12 ">
                    <div className=" ml-24 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                        <Scatter
                            data={chartData}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />
                        <Scatter
                            data={chartData1}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />

                    </div>
                    <div className="flex mt-24 h-[300px] justify-center">
                        <Scatter
                            data={chartData2}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-lg"
                        />
                    </div>

                </div>
                }






                {(value == "water") && <div className="h-[500px] w-screen p-8  mt-12 ">
                    <div className=" ml-24 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                        <Scatter
                            data={chartData}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />
                        <Scatter
                            data={chartData1}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />

                    </div>
                    <div className="flex mt-24 h-[300px] justify-center">
                        <Scatter
                            data={chartData2}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-lg"
                        />
                    </div>

                </div>
                }




                {(value == "hdi") && <div className="h-[500px] w-screen p-8  mt-12 ">
                    <div className=" ml-24 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                        <Scatter
                            data={chartData}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />
                        <Scatter
                            data={chartData1}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />

                    </div>
                    <div className="flex mt-24 h-[300px] justify-center">
                        <Scatter
                            data={chartData2}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-lg"
                        />
                    </div>

                </div>
                }



                {(value == "life_exp_girls") && <div className="h-[500px] w-screen p-8  mt-12 ">
                    <div className=" ml-24 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                        <Scatter
                            data={chartData}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />
                        <Scatter
                            data={chartData1}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />

                    </div>
                    <div className="flex mt-24 h-[300px] justify-center">
                        <Scatter
                            data={chartData2}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-lg"
                        />
                    </div>

                </div>
                }




                {(value == "life_exp_boys") && <div className="h-[500px] w-screen p-8  mt-12 ">
                    <div className=" ml-24 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                        <Scatter
                            data={chartData}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />
                        <Scatter
                            data={chartData1}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />

                    </div>
                    <div className="flex mt-24 h-[300px] justify-center">
                        <Scatter
                            data={chartData2}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-lg"
                        />
                    </div>

                </div>
                }




                {(value == "unemp_rate") && <div className="h-[500px] w-screen p-8  mt-12 ">
                    <div className=" ml-24 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                        <Scatter
                            data={chartData}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />
                        <Scatter
                            data={chartData1}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-lg"
                        />

                    </div>
                    <div className="flex mt-24 h-[300px] justify-center">
                        <Scatter
                            data={chartData2}
                            height={500}
                            width={1000}
                            option={{
                                maintainAspectRatio: true,
                            }}
                            className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-lg"
                        />
                    </div>

                </div>
                }

            </div>
    )

}
export default Graph