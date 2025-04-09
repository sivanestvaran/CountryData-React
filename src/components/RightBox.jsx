import React, { useRef } from 'react'

const RightBox = ({searchCountry}) => {

    const inputRef = useRef();

    const searchHandler =()=>{
        searchCountry(inputRef.current.value)
    }

    return (
        <div className='d-flex flex-md-row flex-column align-items-center vh-100'>
            <div className='searchBox d-flex flex-md-row flex-column align-items-center '>
                <div>
                <p className='fw-bold text-white'>Country Name:</p>
                <div class="input-group">
                    <input type="text" class="form-control border border-white rounded-0 rounded-start-2" ref={inputRef} placeholder='Enter country name...'/>
                        <button class="input-group-text border border-white bg-white rounded-start-0" onClick={searchHandler}><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1"/></button>
                </div>
                </div>
               
            </div>
        </div>

    )
}

export default RightBox
