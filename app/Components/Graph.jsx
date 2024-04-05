"use client"
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { Scatter } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { ShowContext } from '../context/ShowContext';
import Card from './Card';
import ImageGraph from './ImageGraph';
function Graph() {
    const { value, setValue } = useContext(MyContext);
    const [chartData, setChartdata] = useState({});
    const [chartData1, setChartdata1] = useState({});
    const [chartData2, setChartdata2] = useState({});
    const [chartJson, setChartJson] = useState({});
    const { key, setkey } = useContext(ShowContext);

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


            labels: (chartJson?.title === "Gender Parity Index (primary)" ? chartJson?.dr_primary_boys?.region :
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

            labels: (chartJson?.title === "Gender Parity Index (primary)" ? chartJson?.dr_primary_girls?.region :
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
        (key == true) && <div>




            {(value == "lit_rate") && <div className="h-[500px] w-screen p-12  mt-4 ">
                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 h-96">
                    <ImageGraph link="https://i.postimg.cc/FHykGD71/Literacy.png" />
                   <Card text = "Our analysis has shown a relationship between Literacy Rates in states and UTs, more so in Upper Primary than in Primary and Secondary standards. The relationship is a negative one, which means that a higher literacy rate results in less dropouts. The effect of this is more evident in case of female dropouts in the Upper Primary standard. This can be due to the introduction of more complex subjects that rely heavily on critical thinking skills and understanding."/>
                 
                </div>
                <div className="flex justify-center mt-24 mb-24">
                    <h2 className="text-[40px] text-purple-700 font-bold underline">Chart Analysis</h2>
                </div>
                <div className=" ml-10 grid grid-cols-1  md:grid-cols-2 md:gap-x-4 h-[300px]" >
                    {(chartData != {}) && <Scatter
                        data={chartData}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border-2 border-green-400 rounded-lg shadow-xl"
                    />}
                    {(chartData1 != {}) && <Scatter
                        data={chartData1}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border-2 border-orange-400 rounded-lg shadow-xl"
                    />
                    }
                </div>
                <div className="flex mt-24 h-[300px] justify-center">
                    {(chartData2 != {}) && <Scatter
                        data={chartData2}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border-2 border-blue-400 rounded-lg shadow-xl"
                    />}
                </div>

            </div>
            }









            {(value == "pci") && <div className="h-[500px] w-screen p-12  mt-12 ">
                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 h-96">
                    <ImageGraph link="https://i.postimg.cc/FRRfrvGJ/Per-capita.png" />
                   <Card text = " Per Capita Income of a state heavily affects the Dropout Ratio across all standards. It is very clear that there is a potential decrease in dropout rates across a state when the per capita income is low. States with higher per capita income often have more resources to invest in their schools. Higher per capita income often translates to higher family income. This can give families the resources to afford after-school programs, tutors, and educational materials that can help students stay on track. In higher-income states, there might be a stronger emphasis on college education. This can motivate students to stay in school and see education as a path to a better future."/>
                </div>
                <div className="flex justify-center mt-24 mb-24">
                    <h2 className="text-[40px] text-purple-700 font-bold underline">Chart Analysis</h2>
                </div>
                <div className=" ml-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />
                    <Scatter
                        data={chartData1}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />

                </div>
                <div className="flex mt-24 h-[300px] justify-center">
                    <Scatter
                        data={chartData2}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-xl"
                    />
                </div>

            </div>
            }




            {(value == "gpi_primary") && <div className="h-[500px] w-screen p-12  mt-12 ">
                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 h-96">
                    <ImageGraph link="https://i.postimg.cc/5yy8RvDT/GPI-Primary.png" />
                   <Card text = "The Gender Parity Index (GPI) is a statistical tool used to measure how equal the access to education is for girls and boys in a particular area. The relation between GPI and Dropout rates is quite complex. A GPI of less than 1 should result in higher female dropout rates while a GPI of greater than 1 should result in higher male dropouts. But India has a more balanced GPI in almost every states. "/>
                </div>
                <div className="flex justify-center mt-24 mb-24">
                    <h2 className="text-[40px] text-purple-700 font-bold underline">Chart Analysis</h2>
                </div>
                <div className=" ml-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />
                    <Scatter
                        data={chartData1}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />

                </div>
            </div>

            }




            {(value == "gpi_upper_primary") && <div className="h-[500px] w-screen p-12  mt-12 ">
                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 h-96">
                    <ImageGraph link="https://i.postimg.cc/CxkkXw6h/GPI-Upper-Primary.png" />
                   <Card text = "The Gender Parity Index (GPI) is a statistical tool used to measure how equal the access to education is for girls and boys in a particular area. The relation between GPI and Dropout rates is quite complex. A GPI of less than 1 should result in higher female dropout rates while a GPI of greater than 1 should result in higher male dropouts. But India has a more balanced GPI in almost every states. "/>
                </div>
                <div className="flex justify-center mt-24 mb-24">
                    <h2 className="text-[40px] text-purple-700 font-bold underline">Chart Analysis</h2>
                </div>
                <div className=" ml-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />
                    <Scatter
                        data={chartData1}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />

                </div>
            </div>

            }


            {(value == "gpi_secondary") && <div className="h-[500px] w-screen p-12  mt-12 ">
                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 h-96">
                    <ImageGraph link="https://i.postimg.cc/2ytnRyD6/GPI-Secondary.png" />
                   <Card text = "The Gender Parity Index (GPI) is a statistical tool used to measure how equal the access to education is for girls and boys in a particular area. The relation between GPI and Dropout rates is quite complex. A GPI of less than 1 should result in higher female dropout rates while a GPI of greater than 1 should result in higher male dropouts. But India has a more balanced GPI in almost every states. "/>
                </div>
                <div className="flex justify-center mt-24 mb-24">
                    <h2 className="text-[40px] text-purple-700 font-bold underline">Chart Analysis</h2>
                </div>
                <div className=" ml-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />
                    <Scatter
                        data={chartData1}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />

                </div>
            </div>

            }



            {(value == "ptr_primary") && <div className="h-[500px] w-screen p-12  mt-12 ">
                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 h-96">
                    <ImageGraph link="https://i.postimg.cc/YqmWLp76/PTR.png" />
                   <Card text = "There's a strong link between pupil-teacher ratio (PTR) and dropout rates. With fewer students, teachers can dedicate more time and attention to each student's needs. This allows them to identify struggling students early on, provide better support. In smaller classes, students are more likely to participate actively in discussions. In crowded classrooms, students might feel lost or invisible. Smaller class sizes can help students feel more connected to their peers and the teacher. The affect of PTR is very visible across all of primary, upper primary and secondary standards. "/>
                </div>
                <div className="flex justify-center mt-24 mb-24">
                    <h2 className="text-[40px] text-purple-700 font-bold underline">Chart Analysis</h2>
                </div>
                <div className=" ml-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />
                    <Scatter
                        data={chartData1}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />

                </div>
                <div className="flex mt-24 h-[300px] justify-center">
                    <Scatter
                        data={chartData2}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-xl"
                    />
                </div>

            </div>
            }









            {(value == "ptr_secondary") && <div className="h-[500px] w-screen p-12  mt-12 ">
                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 h-96">
                    <ImageGraph link="https://i.postimg.cc/YqmWLp76/PTR.png" />
                   <Card text = "There's a strong link between pupil-teacher ratio (PTR) and dropout rates. With fewer students, teachers can dedicate more time and attention to each student's needs. This allows them to identify struggling students early on, provide better support. In smaller classes, students are more likely to participate actively in discussions. In crowded classrooms, students might feel lost or invisible. Smaller class sizes can help students feel more connected to their peers and the teacher. The affect of PTR is very visible across all of primary, upper primary and secondary standards. "/>
                </div>
                <div className="flex justify-center mt-24 mb-24">
                    <h2 className="text-[40px] text-purple-700 font-bold underline">Chart Analysis</h2>
                </div>
                <div className=" ml-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />
                    <Scatter
                        data={chartData1}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />

                </div>
                <div className="flex mt-24 h-[300px] justify-center">
                    <Scatter
                        data={chartData2}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-xl"
                    />
                </div>

            </div>
            }









            {(value == "ptr_upper_primary") && <div className="h-[500px] w-screen p-12  mt-12 ">
                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 h-96">
                    <ImageGraph link="https://i.postimg.cc/YqmWLp76/PTR.png" />
                   <Card text = "There's a strong link between pupil-teacher ratio (PTR) and dropout rates. With fewer students, teachers can dedicate more time and attention to each student's needs. This allows them to identify struggling students early on, provide better support. In smaller classes, students are more likely to participate actively in discussions. In crowded classrooms, students might feel lost or invisible. Smaller class sizes can help students feel more connected to their peers and the teacher. The affect of PTR is very visible across all of primary, upper primary and secondary standards. "/>
                </div>
                <div className="flex justify-center mt-24 mb-24">
                    <h2 className="text-[40px] text-purple-700 font-bold underline">Chart Analysis</h2>
                </div>
                <div className=" ml-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />
                    <Scatter
                        data={chartData1}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />

                </div>
                <div className="flex mt-24 h-[300px] justify-center">
                    <Scatter
                        data={chartData2}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-xl"
                    />
                </div>

            </div>
            }












            {(value == "elec") && <div className="h-[500px] w-screen p-12  mt-12 ">
                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 h-96">
                    <ImageGraph link="https://i.postimg.cc/tT2hkDvF/Current.png" />
                   <Card text = " The availability of electricity in schools has a positive impact on dropout rates, particularly in rural and under-resourced areas. Electricity allows schools to integrate technology like computers, projectors, and audio-visual aids into lessons. This can make learning more engaging. Proper lighting in classrooms and hallways can create a safer learning environment. Schools with electricity can potentially provide internet access for students and teachers. This opens doors to a vast number of educational resources online."/>
                </div>
                <div className="flex justify-center mt-24 mb-24">
                    <h2 className="text-[40px] text-purple-700 font-bold underline">Chart Analysis</h2>
                </div>
                <div className=" ml-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />
                    <Scatter
                        data={chartData1}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />

                </div>
                <div className="flex mt-24 h-[300px] justify-center">
                    <Scatter
                        data={chartData2}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-xl"
                    />
                </div>

            </div>
            }










            {(value == "lib") && <div className="h-[500px] w-screen p-12  mt-12 ">
                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 h-96">
                    <ImageGraph link="https://i.postimg.cc/TPxgXBZr/Library.png" />
                   <Card text = " The presence of a well-stocked library in schools has a positive impact on dropout rates. Libraries provide access to a wide range of books, motivating students to explore reading for enjoyment and develop stronger literacy skills. This allows students to delve deeper into subjects they're interested in, complete assignments, and develop critical research skills. A good library can be particularly important for students who lack a conducive learning environment at home. "/>
                </div>
                <div className="flex justify-center mt-24 mb-24">
                    <h2 className="text-[40px] text-purple-700 font-bold underline">Chart Analysis</h2>
                </div>
                <div className=" ml-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />
                    <Scatter
                        data={chartData1}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />

                </div>
                <div className="flex mt-24 h-[300px] justify-center">
                    <Scatter
                        data={chartData2}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-xl"
                    />
                </div>

            </div>
            }






            {(value == "water") && <div className="h-[500px] w-screen p-12  mt-12 ">
                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 h-96">
                    <ImageGraph link="https://i.postimg.cc/L5gnPVc9/Water.png" />
                   <Card text = "Availability of drinking water has proved to be a key factor in influencing dropout rates. Although most of the states have clean drinking water available across all schools, the states that don’t have a higher dropout rate across all standards. But the connection isn’t very strong. While lack of water can affect attendance and health, it's unlikely to be the sole reason a student drops out. Deeper social and economic factors likely play a bigger role. "/>
                </div>
                <div className="flex justify-center mt-24 mb-24">
                    <h2 className="text-[40px] text-purple-700 font-bold underline">Chart Analysis</h2>
                </div>
                <div className=" ml-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />
                    <Scatter
                        data={chartData1}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />

                </div>
                <div className="flex mt-24 h-[300px] justify-center">
                    <Scatter
                        data={chartData2}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-xl"
                    />
                </div>

            </div>
            }




            {(value == "hdi") && <div className="h-[500px] w-screen p-12  mt-12 ">
                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 h-96">
                    <ImageGraph link="https://i.postimg.cc/3wZprnTz/HDI.png" />
                   <Card text = "The Human Development Index (HDI) is a metric developed by the United Nations Development Programme (UNDP) to gauge the overall well-being of a country or state. It considers three key aspects of human development – Life Expectancy, Per Capita Income and Literacy Rate. Our analysis shows that there is a high dependency of HDI on Dropout Ratio of a state. A state with a high HDI is likely to have a more educated and healthy population. This can create a cycle where education is valued, leading to lower dropout rates, which in turn contributes to a more skilled workforce and a stronger economy. This reinforces the focus on human development, potentially leading to an even higher HDI in the future. "/>
                </div>
                <div className="flex justify-center mt-24 mb-24">
                    <h2 className="text-[40px] text-purple-700 font-bold underline">Chart Analysis</h2>
                </div>
                <div className=" ml-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />
                    <Scatter
                        data={chartData1}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />

                </div>
                <div className="flex mt-24 h-[300px] justify-center">
                    <Scatter
                        data={chartData2}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-xl"
                    />
                </div>

            </div>
            }



            {(value == "life_exp_girls") && <div className="h-[500px] w-screen p-12  mt-12 ">
                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 h-96">
                    <ImageGraph link="https://i.postimg.cc/W1LJMQpQ/life-girls.png" />
                   <Card text = "The connection between life expectancy in a state and dropout rates isn't as direct as some of the other factors. It seems to affect dropout rates across the Upper Primary standards but it might not directly influence dropout decisions in primary or secondary standards. Students at the primary and secondary standard likely aren't considering long-term factors like life expectancy when deciding to leave school. Their decisions are more likely influenced by immediate concerns and opportunities. "/>
                </div>
                <div className="flex justify-center mt-24 mb-24">
                    <h2 className="text-[40px] text-purple-700 font-bold underline">Chart Analysis</h2>
                </div>
                <div className=" ml-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />
                    <Scatter
                        data={chartData1}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />

                </div>
                <div className="flex mt-24 h-[300px] justify-center">
                    <Scatter
                        data={chartData2}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-xl"
                    />
                </div>

            </div>
            }




            {(value == "life_exp_boys") && <div className="h-[500px] w-screen p-12  mt-12 ">
                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 h-96">
                    <ImageGraph link="https://i.postimg.cc/Qt4T1CVb/life-boys.png" />
                   <Card text = "The connection between life expectancy in a state and dropout rates isn't as direct as some of the other factors. It seems to affect dropout rates across the Upper Primary standards but it might not directly influence dropout decisions in primary or secondary standards. Students at the primary and secondary standard likely aren't considering long-term factors like life expectancy when deciding to leave school. Their decisions are more likely influenced by immediate concerns and opportunities. "/>
                </div>
                <div className="flex justify-center mt-24 mb-24">
                    <h2 className="text-[40px] text-purple-700 font-bold underline">Chart Analysis</h2>
                </div>
                <div className=" ml-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />
                    <Scatter
                        data={chartData1}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />

                </div>
                <div className="flex mt-24 h-[300px] justify-center">
                    <Scatter
                        data={chartData2}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-xl"
                    />
                </div>

            </div>
            }




            {(value == "unemp_rate") && <div className="h-[500px] w-screen p-12  mt-12 ">
                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 h-96">
                    <ImageGraph link="https://i.postimg.cc/PxRCN7FV/Unemployment-Rate.png" />
                   <Card text = "Unemployment Rate affects dropout rate negatively, with it’s effects visible only at the secondary standard. States with high unemployment might be forced to cut education budgets. During periods of high unemployment, families might face financial hardship. High unemployment rates can create a sense of hopelessness, especially among the students of secondary standards, who might dropout to help their family with odd jobs. "/>
                </div>
                <div className="flex justify-center mt-24 mb-24">
                    <h2 className="text-[40px] text-purple-700 font-bold underline">Chart Analysis</h2>
                </div>
                <div className=" ml-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 h-[300px]">
                    <Scatter
                        data={chartData}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px] p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />
                    <Scatter
                        data={chartData1}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold border rounded-lg shadow-xl"
                    />

                </div>
                <div className="flex mt-24 h-[300px] justify-center">
                    <Scatter
                        data={chartData2}
                        height={450}
                        width={1000}
                        option={{
                            maintainAspectRatio: true,
                        }}
                        className="h-full w-[200px] text-[32px]  p-2 bg-white text-purple-800 font-bold borde rounded-lg shadow-xl"
                    />
                </div>

            </div>
            }

        </div>
    )

}
export default Graph