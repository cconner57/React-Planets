import React from 'react'

const MobileApp = () => {
    return (
        <div className='mobileApp'>
            <h1>Download the app on the <br></br>Apple App Store or Google Play Store</h1>
            <div className='mobileApp-Stores'>
                <img className='apple' src={process.env.PUBLIC_URL + '/assets/applestore.png'} alt="Apple Store" />
                <img className='google' src={process.env.PUBLIC_URL + '/assets/googlestore.png'} alt="Google Play Store" />
            </div>
        </div>
    )
}

export default MobileApp
