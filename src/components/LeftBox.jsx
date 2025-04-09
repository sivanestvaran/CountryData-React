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

const FirstRow = ({ flagLink, weekdays,countryData , population }) => {

    // console.log('data'+countryData)
    //console.log('population :'+JSON.stringify(population[0]))

    const filterDaysByMonth = weekdays.filter((day)=>{
        const month = new Date().getMonth()+1
        return new Date(day).getMonth()+1 == month   
    }).map((day) =>{
        const [y,m,d] = day.split('-')
        return d
    });

    const rows=[];
    for(let i=0;i<filterDaysByMonth.length;i+=5)
    {
        rows.push(filterDaysByMonth.slice(i,i+5))
    }

    const monthText = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // console.log(rows);
    // console.log(filterByMonth)
    // console.log('Dates :'+weekdays)
    return (
        <>
            <div className="d-flex flex-column flex-md-row justify-content-center">
                <div className="p-3">
                    <div className='countryData p-2'>
                        <div className='rounded-3 p-2'>
                            <p className="badge rounded-pill text-bg-info">Country</p> - <span className="badge text-bg-primary">{countryData.name}</span> <br/>
                            <p className="badge rounded-pill text-bg-info">Capital</p> - <span className="badge text-bg-primary">{countryData.capital}</span> <br/>
                            <p className="badge rounded-pill text-bg-info">GDP growth</p> - <span className="badge text-bg-primary">{countryData.gdp_growth}%</span> <br/>
                            <p className="badge rounded-pill text-bg-info">ISO</p> - <span className="badge text-bg-primary">{countryData.iso2}</span><br/>
                            <p className="badge rounded-pill text-bg-info">Currency Code</p> - <span className="badge text-bg-primary">{countryData.currency.code}</span><br/>
                            <p className="badge rounded-pill text-bg-info">Currency Name</p> - <span className="badge text-bg-primary">{countryData.currency.name}</span><br/>
                            <p className="badge rounded-pill text-bg-info">Region</p> - <span className="badge text-bg-primary">{countryData.region}</span><br/>
                            <p className="badge rounded-pill text-bg-info">Population</p> - <span className="badge text-bg-primary">{population[0].population}</span><br/>
                            <p className="badge rounded-pill text-bg-info">Urban Population</p> - <span className="badge text-bg-primary">{countryData.urban_population}%</span><br/>
                            <p className="badge rounded-pill text-bg-info">Internet Users</p> - <span className="badge text-bg-primary">{countryData.internet_users}%</span><br/>
                            <p className="badge rounded-pill text-bg-info">Unemployment</p> - <span className="badge text-bg-primary">{countryData.unemployment}%</span><br/>
                            <p className="badge rounded-pill text-bg-info">Employment Industry</p> - <span className="badge text-bg-primary">{countryData.employment_industry}%</span><br/>
                            <p className="badge rounded-pill text-bg-info">Refugees</p> - <span className="badge text-bg-primary">{countryData.refugees}%</span><br/>
                            
                        </div>
                    </div>
                </div>
                <div className="p-3 ">
                    <div className='countryFlag' style={{ backgroundImage: `url(${flagLink})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
                        {/* <img src={flagLink} alt="" className='object-fit-fill rounded-3' /> */}
                    </div>
                    <div className='countryWorkDays p-3'>
                        <div className='bg-white rounded-3 p-2'>
                        <p className='text-center fw-bold '>Working Days of {monthText[new Date().getMonth()+1]}</p>
                        <table className='table table-bordered mt-2'>
                            <tbody>
                                {rows.map((row,rowIndex)=>{

                                    return <tr key={rowIndex}>
                                        {row.map((col,colIndex)=>{
                                            return <td key={colIndex}>
                                               {col}
                                            </td>
                                        })}
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        <p>Total WorkingDays = <b>{filterDaysByMonth.length}</b> Days</p>
                        </div>
                       
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

const LeftBox = ({ population, flagLink, weekdays,countryData }) => {
    return (
            <div className="container">
                <FirstRow flagLink={flagLink} weekdays={weekdays} population={population} countryData={countryData} />
                <SecondRow population={population} />
            </div>
    )
}

export default LeftBox
