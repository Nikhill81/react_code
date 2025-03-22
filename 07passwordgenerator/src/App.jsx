import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);  
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCarAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // UseRef Hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*+={}[]~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //  For copy 
  const copyPasswordToClipBoard = useCallback(() => { 
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101) // for Selecting words
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-4 py-6 my-8 bg-gray-700 text-orange-500">
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-gray-800 text-orange-400"
            placeholder="Generated password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipBoard}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium transition duration-200"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(Number(e.target.value));
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              id="charOutput"
              onChange={() => {
                setCarAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charOutput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
