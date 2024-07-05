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
    <div id="pie-chart" className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center">
      <ApexCharts options={options} series={options.series} type="pie" />
    </div>
  );
};

export default HistoryComponent;
