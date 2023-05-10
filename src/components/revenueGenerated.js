import { Chart } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(...registerables);

const RevenueGenerated = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Total Pipline',
                data: [100, 200, 500, 400, 600],
            },
            {
                label: 'Tptal Revenue ',
                data: [200, 300, 100, 500, 400],
            }
        ],
    };
    return (
        <div className='row p-4' style={{ border: "none", borderRadius: "10px", backgroundColor: "white" }}>
            <div className='col-12'>
                <h5>Revenue generated</h5>
                <Line data={data} />
            </div>
        </div>
    )
}
export default RevenueGenerated;