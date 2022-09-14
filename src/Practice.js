import { useEffect, useState } from "react";

function Hello() {
  // function byeFn() {
  //   console.log("Bye :(");
  // }
  // function hiFn() {
  //   console.log("Hi :)");
  //   return byeFn;
  // }
  useEffect(() => {
    console.log("Hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onChange = (event) => setKeyword(event.target.value);
//   const onClick = () => setValue((prev) => prev + 1);
//   console.log("I run all the time");

//   useEffect(() => {
//     console.log("I run only once");
//   }, []);

//   useEffect(() => {
//     console.log("I run when 'keyword' changes ");
//   }, [keyword]);

//   useEffect(() => {
//     console.log("I run when 'counter' changes ");
//   }, [counter]);

//   useEffect(() => {
//     console.log("I run when counter & keyword change");
//   }, [keyword, counter]);
//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here..."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}> Click me!</button>
//     </div>
//   );
// }

export default App;

////////////////////////////////////

// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (toDo === "") {
//       return;
//     }
//     setToDos((currentArray) => [toDo, ...currentArray]);
//     setToDo("");
//   };
//   return (
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write your to-do..."
//         />
//         <button>Add To Do</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

///////////////////////////////////////////
// The coins!

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [coinValue, setCoinValue] = useState(0);

//   const [coinID, setCoinID] = useState("");
//   const [usdPrice, setUSDPrice] = useState(0);

//   useEffect(() => {
//     fetch(`https://api.coinpaprika.com/v1/tickers`)
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setCoinID(json[0].id);
//         // console.log(json);
//       });
//     setLoading(false);
//   }, []);

//   function getUSDPrice(cID, cValue) {
//     const coin = coins.find((c, index) => {
//       console.log(index, c);
//       return c.id === cID;
//     });
//     if (coin) {
//       setUSDPrice(cValue * coin.quotes.USD.price);
//     }
//   }

//   const onChange = (event) => {
//     setCoinValue(event.target.value);
//     getUSDPrice(coinID, event.target.value);
//   };

//   const onCoinIDChange = (event) => {
//     setCoinID(event.target.value);
//     getUSDPrice(event.target.value, coinValue);
//   };

//   return (
//     <div>
//       <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
//       {loading ? <strong>Loading...</strong> : null}
//       <input
//         onChange={onChange}
//         value={coinValue}
//         placeholder="Put the number to convert"
//         type="number"
//       />
//       <select onChange={onCoinIDChange} value={coinID}>
//         {coins.map((coin) => (
//           <option key={coin.id} value={coin.id}>
//             {coin.name} ({coin.symbol})
//           </option>
//         ))}
//       </select>
//       <div>
//         <input
//           onChange={(e) => setUSDPrice(e.target.value)}
//           value={usdPrice}
//           type="number"
//         />
//         USD
//       </div>
//       <ul>
//         {coins.map((coin) => (
//           <li key={coin.id}>
//             {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

////////////////////////////////
// The coins! Practice

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [inputNum, setInputNum] = useState(0);

//   const [coinID, setCoinID] = useState("");
//   const [usdPrice, setUSDPrice] = useState(0);

//   useEffect(() => {
//     fetch(`https://api.coinpaprika.com/v1/tickers`)
//       .then((res) => res.json())
//       .then((json) => {
//         setCoins(json);
//         setCoinID(json[0].id);
//       });
//     setLoading(false);
//   }, []);

//   function getUSDPrice(cID, cValue) {
//     const coin = coins.find((c, index) => {
//       console.log(index, c);
//       return c.id === cID;
//     });
//     if (coin) {
//       setUSDPrice(cValue * coin.quotes.USD.price);
//     }
//   }

//   const onChange = (event) => {
//     setInputNum(event.target.value);
//     getUSDPrice(coinID, event.target.value);
//   };

//   const onCoinIDChange = (event) => {
//     setCoinID(event.target.value);
//     getUSDPrice(event.target.value, inputNum);
//   };

//   return (
//     <div>
//       <h1>The Coins! ({loading ? "0" : coins.length})</h1>
//       {loading ? <strong>Loading...</strong> : null}
//       <input
//         placeholder="Put the number to convert"
//         type="number"
//         value={inputNum}
//         onChange={onChange}
//       />
//       <select value={coinID} onChange={onCoinIDChange}>
//         {coins.map((coin) => (
//           <option key={coin.id} value={coin.id}>
//             {coin.name} ({coin.symbol})
//           </option>
//         ))}
//       </select>
//       <div>
//         <input
//           type="number"
//           value={usdPrice}
//           onChange={(e) => setUSDPrice(e.target.value)}
//         />{" "}
//         USD
//       </div>
//       <ul>
//         {coins.map((coin) => (
//           <li key={coin.id}>
//             {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
