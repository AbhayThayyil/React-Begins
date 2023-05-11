import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?w=2000"
      alt="LOGO"
    ></img>
  </a>
);
const Header = () => (
  <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const restaurantList = [
  {
    name: "Chicking",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jasm6doxd15mw0ko5auv",
    cuisine: ["Burgers", "Chicken"],
    rating: 4.2,
  },
  {
    name: "The Auram Cloud",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jrdns5sxeyxbfu5cpkab",
    cuisine: ["curry", "Porotta"],
    rating: 4,
  },
  {
    name: "Mr Shawarma",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gxilj3x6uvyegb3ntupq",
    cuisine: ["Shawarma"],
    rating: 4.5,
  },
  {
    name: "Biriyani.com",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rukcvz0dlcn9e2tohfq5",
    cuisine: ["Biriyani", "Ghee Rice"],
    rating: 4.2,
  },
];

const Body = () => (
  <div className="restaurant-list">
    {
      restaurantList.map((restaurant)=>{
        return <RestaurantCard {...restaurant} />
      })
    }
  </div>
);

const Footer = () => <h1>Footer</h1>;

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const RestaurantCard = ({name,image,cuisine,rating}) => {
  console.log(props);
  return (
    <div className="card">
      <img
        className="card-image"
        src={image}
        alt="card-image"
      />
      <h2>{name}</h2>
      <h3>{cuisine.join(',')}</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
