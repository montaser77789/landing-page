import ApexCharts from 'react-apexcharts';

const HistoryComponent = () => {
  const options = {
    series: [13, 43, 22],
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Balance', 'Expense', 'Credit Loan'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
  };

  return (
    <div id="pie-chart" className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center">
      <ApexCharts options={options} series={options.series} type="pie" width={380} />
    </div>
  );
};

export default HistoryComponent;
