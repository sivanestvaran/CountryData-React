import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Title,
    Legend

} from 'chart.js';
import { color } from 'chart.js/helpers';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Title, Legend)

const FirstRow = ({ flagLink }) => {
    return (
        <>
            <div className="d-flex flex-column flex-md-row justify-content-center">
                <div className="p-3">
                    <div className='countryData p-2'>
                        <h1>Country data</h1>
                    </div>
                </div>
                <div className="p-3 ">
                    <div className='countryFlag' style={{ backgroundImage: `url(${flagLink})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
                        {/* <img src={flagLink} alt="" className='object-fit-fill rounded-3' /> */}
                    </div>
                    <div className='countryWorkDays p-2'>
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

const SecondRow = ({ population, }) => {

    // console.log('Test from here: ')
    // const data = population.map((d) => (d.year))
    // console.log(data)

    const data = {
        labels: population.map((data) => (data.year)).reverse(),
        datasets: [
            {
                label: 'Population',
                data: population.map((data) => data.yearly_change_percentage).reverse(),
                borderColor: '#757c88',
                backgroundColor: '#016064',
                tension: 0.4
            },
            {
                label: 'Fertility Rate',
                data: population.map((data) => data.fertility_rate).reverse(),
                borderColor: '#52b2bf',
                backgroundColor: '#1f456e',
                tension: 0.4
            }
        ],

    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Population Percentage by Year',
            },
        },
    };


    return (
        <>
            <div className="d-flex flex-column flex-md-row justify-content-center">
                <div className="p-3">
                    <div className="countryPopulation p-3">
                        <div style={{ backgroundColor: 'white', borderRadius: '20px' }}>
                            <Line data={data} options={options} />
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

const LeftBox = ({ population, flagLink }) => {
    return (
        <div className='col-md-8'>
            <div className="container">
                <FirstRow flagLink={flagLink} />
                <SecondRow population={population} />
            </div>
        </div>
    )
}

export default LeftBox
