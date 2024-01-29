import { useState, useEffect } from "react";
// import {Link} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menudetails from "./Menudetails";
import Button from "react-bootstrap/Button";

//Please add your own api key
// const Apikey = ;
const Home = () => {
  const [pizzastate, setPizzaState] = useState(false);
  const [burger, setBurgerState] = useState(true);
  const [burgerData, setburgerData] = useState(null);
  const [pizzaData, setpizzaData] = useState(null);
  const [search, searchData] = useState("");
  // const [searchBurger, setsearchBurger] = useState('');
  // const [searchPizza, setsearchPizza] = useState('')

  const fetchBurgerData = () => {
    fetch(
      `https://api.spoonacular.com/food/menuItems/search?query=burger&number=24&apiKey=${Apikey}`
    )
      .then((res) => res.json())
      .then((data) => setburgerData(data.menuItems));
  };

  const fetchPizzaData = () => {
    fetch(
      `https://api.spoonacular.com/food/menuItems/search?query=pizza&number=24&apiKey=${Apikey}`
    )
      .then((res) => res.json())
      .then((data) => setpizzaData(data.menuItems));
  };
  useEffect(() => {
    fetchBurgerData();
  }, []);

  const changePizza = (e) => {
    setPizzaState(e.target.checked);
    setBurgerState(false);
    fetchPizzaData();
  };
  const changeBurger = (e) => {
    setBurgerState(e.target.checked);
    setPizzaState(false);
    fetchBurgerData();
  };
  console.log("pizzastate", pizzastate);
  console.log("burgerstate", burger);
  const handleSearch = (e) => {
    if (burgerData != null && burger == true) {
      burgerData.filter((burger) => {
        console.log("burger", burger);
        if (burger.restaurantChain.includes(search)) {
          setburgerData(null);
          setburgerData([burger]);
        }
      });
    } else if (pizzaData != null && pizzastate == true) {
      pizzaData.filter((pizza) => {
        if (pizza.restaurantChain.includes(search)) {
          setpizzaData(null);
          setpizzaData([pizza]);
        }
      });
    }
  };

  const handleReset = () => {
    setburgerData(null);
    setpizzaData(null);
    searchData("");
    if (burger == true) {
      fetchBurgerData();
    } else if (pizzastate == true) {
      fetchPizzaData();
    }
  };
  return (
    <div>
      <form className="formblock" style={{ marginTop: "20px" }}>
        <label style={{ flexShrink: 4 }}> Please Enter Your Food Choice</label>

        <input
          type="radio"
          id="pizza"
          name="select"
          checked={pizzastate}
          onChange={changePizza}
        />
        <label htmlFor="pizza">Pizza </label>

        <input
          type="radio"
          id="burger"
          name="select"
          checked={burger}
          onChange={changeBurger}
        />
        <label htmlFor="burger"> Burger </label>
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Search Restaurant..."
          onChange={(e) => searchData(e.target.value)}
        />
        <button onClick={(e) => handleSearch(e)}>Search</button>
        <button style={{ marginRight: "20px" }} onClick={(e) => handleReset(e)}>
          Reset
        </button>
      </div>
      <Container fluid>
        <Row>
          {burgerData &&
            burger &&
            burger === true &&
            burgerData.map((burger) => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Menudetails
                    style={{ justifySelf: "center" }}
                    details={burger}
                  />
                </div>
              );
            })}

          {pizzaData &&
            pizzastate &&
            pizzastate === true &&
            pizzaData.map((pizza) => {
              return (
                //   <Col >
                <Menudetails details={pizza} />
                //    </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
