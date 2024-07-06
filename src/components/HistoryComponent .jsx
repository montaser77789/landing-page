import ApexCharts from 'react-apexcharts';

const HistoryComponent = () => {
  const options = {
    series: [13, 43, 22],
    chart: {
      width: '100%', // Use percentage for responsive width
      type: 'pie',
    },
    labels: ['Balance', 'Expense', 'Credit Loan'],
    responsive: [{
      breakpoint: 768, // Adjust breakpoints as needed
      options: {
        chart: {
          width: 380, // Adjust width for tablets and larger screens
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
  };

  return (
    <section id='Token'>
            <h1 className="text-4xl font-bold text-center m-5">Chart</h1>

    <div id="pie-chart" className="bg-white p-4 w-full md:h-[400px] h-auto rounded-lg shadow-md flex justify-center items-center"
      > 

      <ApexCharts className="md:scale-150 scale-1"    options={options} series={options.series} type="pie" />
    </div>
    </section>

  );
};

export default HistoryComponent;
