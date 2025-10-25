import { useState } from "react";

function Input({ options, amount  , selectedCurrency , onAmountChange , onCurrencyChange}) {




    return (
        <>

                <div className="flex items-center justify-between  p-2 ">
                    <div className="flex flex-col w-60 space-y-2.5 items-start justify-center" >
                        <label className="text-2xl" htmlFor="inputbox">From</label>
                        <input value={amount} onChange={(e) => onAmountChange(Number(e.target.value))} className="border-2 rounded-2xl p-2 " type="number" placeholder="Enter Amount" name="inputbox" />
                    </div>

                    <div className="flex flex-col w-60 space-y-2.5 items-start justify-center" >
                        <label className="text-2xl" htmlFor="selectCurrency">Currency Type</label>
                        <select  
                            value={selectedCurrency}
                            onChange={(e)=>onCurrencyChange(e.target.value)}
                            className="w-40 border-2 rounded-2xl p-2" name="selectCurrency" >
                            {options.map((curr) => {
                                return (
                                    <option className="text-black" key={curr}>{curr}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
        </>
    )
}

export default Input