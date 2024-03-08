import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
                        return(
                            <div className="head">
                            <div className="logo-container">
                                <img  className="logo" src="https://static.vecteezy.com/system/resources/previews/013/342/395/original/food-delivery-logo-design-fast-delivery-service-sign-free-vector.jpg"></img>
                                <h2 className="name"> Foody</h2>
                            </div>
                            <div className="nav-items">
                                <ul>
                                    <li><u>Home</u></li>
                                    <li><u>About us</u></li>
                                    <li><u>contact us</u></li>
                                    <li><u>cart</u></li>
                                </ul>
                            </div>
                            </div>
                        )
                    }
const Restaurant  = (Props) => {
    console.log(Props);

    return(
        <div className="res">
            
            <img className="res-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_NYmg95uW07i0eDkbGtknr3Fc9Orca9-_g&usqp=CAU"></img>
            <h3>{Props.resName}</h3>
            <h4> {Props.cuisine}</h4>
            <h4>{Props.rate}</h4>
            <h4>{Props.time}</h4>
        </div>
    )
}  

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <Restaurant
                     
                    resName="Meghna Food"
                    cuisine="Biryani,North indian,Asian"
                    rate="4.4 stars"
                    time="38 minutes"    
                    />
                <Restaurant
                    resName="HL Frankie"
                    cuisine="Frankies, street food"
                    rate="4.2 stars"
                    time="28 minutes"
                />
                <Restaurant
                    resName="Gajanand Pauva House"
                    cuisine="Snacks, Indian"
                    rate="4.4 stars"
                    time="34 minutes"
                />
                <Restaurant
                    resName="Swati Snacks"
                    cuisine="Gujrati Food"
                    rate="4.4 stars"
                    time="40 minutes"
                />
                <Restaurant
                    resName="Punjabi Tadka"
                    cuisine="Punjabi Food"
                    rate="4.4 stars"
                    time="28 minutes"
                />
                <Restaurant
                    resName="KFC"
                    cuisine="Burger,North indian,Asian"
                    rate="4.3 stars"
                    time="30 minutes"
                />
                <Restaurant
                    resName="Pizza Hut"
                    cuisine="Pizzas"
                    rate="3.8 stars"
                    time="25 minutes"
                />
                <Restaurant
                    resName="McDonald's"
                    cuisine="Fast food"
                    rate="4.2 stars"
                    time="38 minutes"
                />
                <Restaurant
                    resName="Karnavati Dabeli"
                    cuisine="Street Food"
                    rate="4.1 stars"
                    time="40 minutes"
                />
                <Restaurant
                    resName="Subway"
                    cuisine="Salad,Healthy food"
                    rate="4.0 stars"
                    time="28 minutes"
                />
                <Restaurant
                    resName="Shreeji Krupa"
                    cuisine="Snacks, Beverages"
                    rate="4.2 stars"
                    time="40 minutes"
                />
                <Restaurant
                    resName="Monginis"
                    cuisine="cake,Sweet Food"
                    rate="4.1 stars"
                    time="32 minutes"
                />
                <Restaurant
                    resName="Bole To Vadapav"
                    cuisine="vadapav, street food "
                    rate="4.4 stars"
                    time="30 minutes"
                />
                <Restaurant
                    resName="Das Khaman"
                    cuisine="snackes"
                    rate="4.0 stars"
                    time="32 minutes"
                />
                <Restaurant
                    resName="Wagh Bakri Tea Lounge"
                    cuisine="tea,desserts"
                    rate="3.4 stars"
                    time="28 minutes"
                />
                <Restaurant
                    resName="Vadilal Hangout"
                    cuisine="ice-creams"
                    rate="4.7 stars"
                    time="30 minutes"
                />
                <Restaurant
                    resName="Simple south"
                    cuisine="south indian"
                    rate="4.0 stars"
                    time="35 minutes"
                />
                <Restaurant
                    resName="Desi Tadka"
                    cuisine="street food"
                    rate="4.2 stars"
                    time="30 minutes"
                />
                
            </div>
        </div>
    )
} 

const Footer = () => {
        return(
            <div className="footer">
                <h2>for better experience,Download the Foody App Now..</h2>
                
                <div className="im-container">
                    <img  className="i1" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"></img>
                    <img className="i2" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"></img>
                </div>
                <div className="com">
                    <h2><b>company</b></h2>
                    <h4>About</h4>
                    <h4>careers</h4>
                    <h4>foody one</h4>
                </div>
                <div className="contact">
                    <h2><b>Contact us</b></h2>
                    <h4>Help & support</h4>
                    <h4>Ride with us</h4>
                   
                </div>
                <div className="deliverto">
                    <h2><b> We Deliver To..</b></h2>
                    <h4>Ahmedabad</h4>
                    <h4>Mumbai</h4>
                    <h4>Delhi</h4>
                    <h4>Kolkata</h4>
                    <h4>chennai</h4>
                    <h4>Bengluru..</h4>
                </div>
            </div>
           
        )
}

const AppLayout = () => {
                    return(
                    <div className="app">
                    <Header />
                    <Body />
                    <Footer />
                    </div>);
                    }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);