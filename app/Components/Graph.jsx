"use client"
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { Scatter } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
function Graph() {
    const { value, setValue } = useContext(MyContext);
    const [chartData , setChartdata] = useState({});
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






















    const chart = ()=>{
        console.log("chartjson", chartJson);
        setChartdata({
         
            labels: chartJson?.dr_primary_overall?.region ,
            datasets: [
                {
                    label: chartJson?.dr_primary_overall?.label,
                    data:chartJson?.dr_primary_overall?.data,
                    backgroundColor: "#D20062"
                }
            ]
        })
    }
  



    return (
        <div className="flex justify-center ">
             {(value == "lit_rate") && <div className="h-80 lg:w-[500px] sm:w-[80] p-8 grid  gap-y-14 mt-56 flex justify-center items-center text-[32px] text-purple-800 font-bold border-4 rounded-lg shadow-lg">
                
               <Scatter
                data = {chartData}
                height={500}
                width={1000}
                option={
                    {
                    maintainAspectRatio:true,
                    }
                }
                className="h-full w-full"
                />

            
            </div>
            }
              {/* {(value == "dropout ratio") && <div className="h-56 w-96 p-8 mt-56 flex justify-center items-center text-[32px] text-purple-800 font-bold bg-red-400">
                Nooooo
            </div>
            }
             {(value == "Teacher ratio") && <div className="h-56 w-96 p-8 mt-56 flex justify-center items-center text-[32px] text-purple-800 font-bold bg-red-400">
                Fuck off
            </div>
            }   */}
        </div>
    )
}

export default Graph