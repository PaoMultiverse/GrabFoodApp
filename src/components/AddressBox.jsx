import "./Navbar.css"
import React, {useState} from 'react'

function AddressBox(){
    const [address,setAddress] = useState('');
    const [tempAddress, setTempAddress] = useState('');

    const HandleInputChange = (event) => {
        setTempAddress(event.target.value)
    }

    const HandleOnClickButton = () => {
        setAddress(tempAddress);
    }
    return (
        <>
            <div className="container">
                    <div className="col-md-1" style={{ marginLeft: "30px" }}>
                        <div className="container-address-box shadow-sm p-3 mb-5 rounded">
                            <div className="wrap-input">
                                <h5 id="af">Good Afternoon</h5>
                                <h1 id="where">Where should we deliver your food today?</h1>
                                <div>
                                    <img id="location" src="./src/assets/icon-locate.png" alt="Location"></img>
                                    <input 
                                        id="search-input" 
                                        placeholder="Nhập địa chỉ của bạn"
                                        type="text"
                                        value={address}
                                        onChange={HandleInputChange}
                                    />
                                    <img id="des" src="./src/assets/icon-geo-button.svg" alt="Geo Button"></img>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-search">Tìm kiếm</button>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
        </>
    )
}
export const address = {address};
export default AddressBox;