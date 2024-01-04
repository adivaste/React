const RestaurantCard = (props) => {
  const { name, diningRating, deliveryRating, imgURL, location } = props.restaurant;
  const key = "key :" + 1 + Math.random()*100*parseFloat(diningRating)*parseFloat(deliveryRating);
  // console.log(key);

  return (
      <div key={key} className="restaurantCard">
          <div id="imageDiv">
              <img
                  style={{
                      width: "100%",
                      height: "180px",
                      borderRadius: "5px",
                      objectFit: "cover",
                  }}
                  src={imgURL}
                  alt=""
              />  
          </div>
          <p style={{
              padding:"4px 0px 4px 0px",
              fontSize : "18px",
              fontWeight : "600"
          }}>{name}</p>
          <div style={{ display: "flex" }}>
              <div className="halfWidth" style={{ padding: "3px" }}>
                  Rating: {diningRating}
              </div>
              <div className="halfWidth" style={{ padding: "3px" }}>
                  Delivery: {deliveryRating}
              </div>
          </div>
          <div className="location" style={{ padding: "3px" }}>
              {location.address}, {location.city}, {location.state} {location.zipcode}
          </div>
      </div>
  );
};


const RestaurantComponent = (props) => {

    const {query, setQuery, restaurants, setRestaurants} = props;

    return (
        <>
            <h1 style={{
                fontFamily : "Metropolis",
                fontWeight : "800",
                padding : "20px 30px 10px 30px"
            }}>Restaurants </h1>
            <div className="RestaurantComponent" style={{
                display:"flex",
                flexWrap: "wrap",
                width : "100%",
                padding : "20px",
                justifyContent: "space-around"
            }}>
                {restaurants.length !=0 ? restaurants.map((restaurant) => (
                    <RestaurantCard restaurant={restaurant} />
                )) : <h1 style={{color : "red", textAlign : "left !important"}}>No available restaurants found</h1>}

            </div>
        </>
    )
}

export default RestaurantComponent;