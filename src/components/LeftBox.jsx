import React from 'react'

const FirstRow = () => {
    return (
        <>
            <div className="d-flex flex-column flex-md-row justify-content-center">
                <div className="p-3">
                    <div className='countryData p-2'>
                        <h1>Country data</h1>
                    </div>
                </div>
                <div className="p-3 ">
                    <div className='countryFlag p-2'>
                        <h1>Hello</h1>
                    </div>
                    <div className='countryWorkDays p-2'>
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

const SecondRow = () => {
    return (
        <>
            <div className="d-flex flex-column flex-md-row justify-content-center">
                <div className="p-3">
                    <div className="countryPopulation p-2">
                        <h1>Test</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

const LeftBox = () => {
    return (
        <div className='col-md-8'>
            <div className="container">
                <FirstRow />
                <SecondRow />
            </div>
        </div>
    )
}

export default LeftBox
