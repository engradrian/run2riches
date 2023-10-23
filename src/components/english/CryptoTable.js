import React from 'react';
import { Line } from 'react-chartjs-2';


const CryptoTable = () => {
    // const [wCoinData, setWCoinData] = React.useState([]);

    // React.useEffect(() => {
    //     fetchWCoinData()
    //         .then(data => setWCoinData(data))
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

    
    // const fetchWCoinData = async () => {
    //     try {
    //         // Make an API call to fetch WCoin data for the last 24 hours
    //         const response = await fetch('https://raw.githubusercontent.com/slimeserveahead/slimeserveahead.github.io/main/run2riches/data.json');
    //         const data = await response.json();
    //         return data;
    //     } catch (error) {
    //         throw error;
    //     }
    // };

    const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
            label: 'Sample Data',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
            beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    )
}

export default CryptoTable