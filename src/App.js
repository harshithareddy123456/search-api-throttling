import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts([...data]);
      setOriginalProducts([...data]);
    };
    fetchdata();
  }, []);
  const handlesearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const filterProducts = (searchValue) => {
    console.log(search);
    if (searchValue === "") {
      return originalProducts;
    } else {
      return originalProducts.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  };

  useEffect(() => {
    if (flag) {
      setProducts(filterProducts(search));
      setFlag(false);
      setTimeout(() => {
        setFlag(true);
      }, 3000);
    }
  }, [search, originalProducts, flag]);
  return (
    <>
      <div className="input">
        <input
          value={search}
          type="text"
          placeholder="please type something to search"
          onChange={(e) => handlesearch(e)}
        ></input>
      </div>
      <div className="App">
        {products && products.map((item) => <Card item={item} />)}
      </div>
    </>
  );
}

export default App;
