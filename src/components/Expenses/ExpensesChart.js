import Chart from "../Chart/Chart";

const ExpensesChart = ({ expenses }) => {
  const chartDataPoints = [
    { id: "1000", label: "Jan", value: 0 },
    { id: "2000", label: "Feb", value: 0 },
    { id: "3000", label: "Mar", value: 0 },
    { id: "4000", label: "Apr", value: 0 },
    { id: "5000", label: "May", value: 0 },
    { id: "6000", label: "Jun", value: 0 },
    { id: "7000", label: "Jul", value: 0 },
    { id: "8000", label: "Aug", value: 0 },
    { id: "9000", label: "Sep", value: 0 },
    { id: "10000", label: "Oct", value: 0 },
    { id: "11000", label: "Nov", value: 0 },
    { id: "12000", label: "Dec", value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
