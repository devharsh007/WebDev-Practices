import { useId, React } from 'react';


function InputBox({     //other props to pass with input box
  label,      // to or from label
  amount,       // the amount to be entered by user
  onAmounChange,      // trriger the function while amount changes
  onCurrencyChange,     // triggers the specific function while amount changes
  currencyOptions = [],     // holds the data of currency options rg. inr, usd, etc.
  selectCurrency = 'usd',     // to be selected from currency options (JSON File)
  amountDisable = false,      // for optimiaztion , feature to diable the other input
  currencyDisable = false,      // for optimiaztion , feature to diable the other input
  className = "",     // for user to enter other classes
}) {
  const amountInputId = useId();
   
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
        <div className="w-1/2">
          <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
            {label}
          </label>
          <input 
            id={amountInputId}
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e)=>{onAmounChange && onAmounChange(Number(e.target.value))}}
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            value={selectCurrency}
            disabled = {currencyDisable}
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          >
            {currencyOptions.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
              ))}
          </select>
            </div>
        </div>
    );
}

export default InputBox;
