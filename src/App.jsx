import { useEffect, useState } from 'react'
import './App.css'
import UseCurrency from './Hooks/UseCurrency'
import Input from './Components/Input'
import bgVideo from './assets/background.mp4';


function App() {

  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState("")

  const rates = UseCurrency(from);
  const options = Object.keys(rates)


  const convert = () => {
    setConvertedAmount(amount * rates[to])
  }

  const Swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount)
  }

  return (
    <>
      <div className='h-screen w-full relative flex items-center justify-center '>
        <video
          className="h-screen w-full object-cover absolute z-0"
          src={bgVideo}
          autoPlay
          loop
          muted
        />

        <div className="text-white absolute z-20 flex flex-col items-center justify-center 
h-[70%] w-[50%] bg-black/40 backdrop-blur-sm border border-white/20 
rounded-2xl shadow-lg p-5">

          <Input options={options} amount={amount} selectedCurrency={from} onAmountChange={setAmount} onCurrencyChange={setFrom} />

          <Input options={options} amount={convertedAmount} selectedCurrency={to} onCurrencyChange={setTo} />

          <div className='space-x-2.5'>
            <button onClick={convert} className='w-20 p-2 border-2 rounded-2xl'>Convert</button>
            <button onClick={Swap} className='w-20 p-2 border-2 rounded-2xl'>Swap</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
