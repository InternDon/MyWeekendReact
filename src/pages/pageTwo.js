import '../style/stylesMain.css'

const pageTwo = () => {
    return(
        <>
            <div className="container-fluid firstcontainer">
                <div className="row align-items-center firstrow">
                    {/* First Column */}
                    <div className="col-4 firstcolumn">
                    <div className="card">
                        <img className="card-img-top" src="https://i.pinimg.com/564x/39/b7/61/39b761a41509a724c9d43cf4b1aa996a.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">My Saturday Morning</h5>
                            <p className="card-text">The first things I did in my Saturday morning is to sleep, since I slept late last night Friday. My sleep was from 7am to 12pm. waking up checking phone for updates and stuff. And preparing for my routine this saturday.</p>
                        </div>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="col-4 firstcolumn">
                    <div className="card" >
                        <img className="card-img-top" src="https://i.pinimg.com/736x/2d/da/d9/2ddad91d38d15de337306363c1965dda.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">My Saturday Lunch</h5>
                            <p className="card-text">After waking up at 1pm I made my lunch, which is a beef with salt and rosemary. And frying it with a butter. After having a good lunch while  watching YouTube videos. I went to shower and prepare for my me time.</p>
                        </div>
                        </div>
                    </div>
                    {/* Third Column */}
                    <div className="col-4 firstcolumn">
                    <div className="card">
                        <img className="card-img-top" src="https://i.pinimg.com/736x/b0/41/ed/b041ed6928738a65269be01d7dac2c82.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">My Saturday Evening</h5>
                            <p className="card-text">My me time starts at 6pm and having fun playing Lost Ark all night until I fall asleep. Been grinding for boss hunts and items, so that I can get more power level for future boss raids with friends.</p>
                        </div>
                        </div>
                    </div>

                </div> 
            </div>
        </>
    )
}

export default pageTwo