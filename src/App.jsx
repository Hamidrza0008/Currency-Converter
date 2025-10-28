import { useEffect, useState } from 'react'
import './App.css'
import UseCurrency from './Hooks/UseCurrency'
import Input from './Components/Input'
import bgVideo from './assets/background.mp4';

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState("");

  const rates = UseCurrency(from);
  const options = Object.keys(rates);

  const convert = () => {
    setConvertedAmount(amount * rates[to]);
  };

  const Swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div className="h-screen w-full relative flex items-center justify-center">
      <video
        className="h-screen w-full object-cover absolute z-0"
        src={bgVideo}
        autoPlay
        loop
        muted
      />
      <div className="h-[90%] lg:h-fit text-white absolute z-20 flex flex-col items-center justify-center
      w-[90%] sm:w-[70%] md:w-[50%]  bg-black/40 backdrop-blur-sm border border-white/20
      rounded-2xl shadow-lg p-5 lg:space-y-6">
        <Input
          options={options}
          amount={amount}
          selectedCurrency={from}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
          lable={"From"}
        />
        <Input
          options={options}
          amount={convertedAmount}
          selectedCurrency={to}
          onCurrencyChange={setTo}
          lable={"To"}
        />
        <div className="flex space-x-3">
          <button
            onClick={convert}
            className="w-24 sm:w-28 p-2 border-2 border-white/30 rounded-2xl bg-white/10 hover:bg-white/20 transition-all"
          >
            Convert
          </button>
          <button
            onClick={Swap}
            className="w-24 sm:w-28 p-2 border-2 border-white/30 rounded-2xl bg-white/10 hover:bg-white/20 transition-all"
          >
            Swap
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
