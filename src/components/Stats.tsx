// import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { Data } from "../utils/Data";
import "./styles/chart.css";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Stats = () => {
  const data = {
    labels: [
      "Procurement category",
      "Procurement category",
      "Procurement category",
      "Procurement category",
    ],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "All Contract Groups By Procurement Category",
        data: [55, 23, 96, 30],
        // you can set indiviual colors for each bar
        backgroundColor: [
          "rgba(93, 95, 239, 1)",
          "rgba(4, 57, 89, 1)",
          "rgba(239, 93, 168, 1)",
          "rgba(189, 134, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };


  const barData = {
    labels: Data.map(o => o.dept),
    datasets: [
      {
        label: 'Allocated Amount',
        backgroundColor: 'rgba(8, 65, 22, 1)',
        borderColor: 'rgb(0, 255, 0)',
        borderWidth: 1,
        data: Data.map(o => o.userGain)
      }
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Project Name",
      },
    },
  };

  return (
    <section className="w-full px-6 md:px-16 mb-8 ">
      <h1 className="text-xl md:text-2xl font-semibold w-64 md:w-96 text-[#03012C] mb-4">
        All Projects And Fund Allocation
      </h1>
      <div className="flex items-center justify-center flex-col md:grid md:grid-cols-2 gap-4 md:gap-10 mt-8">
        <div
          className="chart bg-white rounded-xl flex items-center justify-center py-4 md:py-10"
          style={boxStyles}
        >
          <Pie data={data} />
        </div>
        <div
          className="chart bg-white rounded-xl flex items-center justify-center py-4 md:py-10"
          style={boxStyles}
        >
          <Pie data={data} />
        </div>
        <div
          className="md:col-span-2 mt-4 bg-white rounded-xl flex items-center justify-between flex-col md:flex-row py-4 md:py-10 px-4 md:px-8 z-20 -mb-52 md:-mb-0"
          style={boxStyles}
        >
          <aside className="w-64 md:mr-10">
            <h1 className="text-xl font-semibold mb-3 text-[#03012C]">
              Top 10 MDA Contract
            </h1>
            <p className="text-[#03012C] font-light text-xs md:text-base">
              Listed here are the top 10 MDA Contranct with their corresponding
              aloocated budget and contract period
            </p>
          </aside>
          <div className="bar flex-1 w-full flex items-center justify-center">
            <Bar options={options} data={barData} />
          </div>
        </div>
      </div>
    </section>
  );
};

const boxStyles = {
  boxShadow: "6px 14px 14px rgba(0, 0, 0, 0.05)",
};

export default Stats;
