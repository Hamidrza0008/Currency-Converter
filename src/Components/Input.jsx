import { useState } from "react";

function Input({ lable, options, amount, selectedCurrency, onAmountChange, onCurrencyChange }) {
    return (
        <div className="h-full flex flex-col sm:flex-row items-center justify-between w-full sm:w-[90%] md:w-[80%] p-3 space-y-4 sm:space-y-0 sm:space-x-6">
            <h1>{lable}</h1>
            <div className="flex flex-col w-full sm:w-1/2 space-y-2.5">
                <label className="text-xl sm:text-2xl" htmlFor="inputbox">Amount</label>
                <input
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    className="border-2 border-white/30 rounded-2xl p-2 w-full bg-transparent text-white placeholder-white/60 focus:outline-none"
                    type="number"
                    placeholder="Enter Amount"
                    name="inputbox"
                />
            </div>

            <div className="flex flex-col w-full sm:w-1/2 space-y-2.5">
                <label className="text-xl sm:text-2xl" htmlFor="selectCurrency">Currency</label>
                <select
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    className="border-2 border-white/30 rounded-2xl p-2 w-full bg-transparent text-white focus:outline-none"
                    name="selectCurrency"
                >
                    {options.map((curr) => (
                        <option className="text-black" key={curr}>{curr}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Input;
