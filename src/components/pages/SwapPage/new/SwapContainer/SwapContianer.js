import React from "react";

import TokenDropDownModal from "components/organisms/TokenDropdownModal";
import { formatUSD, formatPrice } from "lib/utils";
import {
  SwitchVerticalIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/solid";

const SwapContianer = ({
  balances,
  fromToken,
  fromTokenOptions,
  onChangeFromToken,
  onChangeFromAmounts,
  fromAmounts,
  estimatedValue,
  onSwitchTokenBtn,
  basePrice,
  toToken,
  toTokenOptions,
  onChangeToToken,
  toAmounts,
  onClickMax,
}) => {
  return (
    <div className="p-4 mt-4 border-t border-b border-l border-r rounded-lg dark:border-foreground-400 border-primary-500">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold font-work">From</p>
        <p className="text-sm font-normal font-work">
          Available Balance:{" "}
          {balances[fromToken?.name]
            ? balances[fromToken?.name].valueReadable.toPrecision(8)
            : "0.00"}
          {` ${fromToken?.name}`}
        </p>
      </div>
      <div className="flex items-center justify-between px-3 py-2 mt-3 rounded-lg dark:bg-foreground-200 bg-primary-300">
        {fromTokenOptions.length > 0 && (
          <TokenDropDownModal
            tickers={fromTokenOptions}
            onSelectedOption={onChangeFromToken}
            selectedOption={fromToken}
          />
        )}
        <button
          className="bg-[#07071C] px-2 py-1 rounded-md text-sm font-semibold text-primary-900 ml-2.5 hover:bg-slate-800 font-work"
          onClick={onClickMax}
        >
          Max
        </button>
        <input
          className="ml-3 text-2xl font-semibold text-right bg-transparent focus:outline-none"
          placeholder="0.00"
          onChange={onChangeFromAmounts}
          value={fromAmounts}
        />
      </div>
      <p className="mt-1 text-sm font-normal text-right text-slate-400 font-work">
        Estimated value: ~ ${formatUSD(estimatedValue)}
      </p>
      <div className="relative h-px mx-2 my-5 dark:bg-foreground-400 bg-primary-500">
        <button
          className="absolute inset-x-0 w-10 h-10 mx-auto -mt-5 rounded-full shadow-xl bg-gradient-to-r from-primary-900 to-secondary-900"
          onClick={onSwitchTokenBtn}
        >
          <SwitchVerticalIcon className="absolute inset-x-0 mx-auto -mt-3.5 w-7 hover:opacity-80 text-white" />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">To</p>
        <p className="flex items-center text-sm font-normal font-work">
          1 {fromToken?.name} = {formatPrice(basePrice)} {toToken?.name}
          <SwitchHorizontalIcon className="w-4" />
        </p>
      </div>
      <div className="flex items-center justify-between px-3 py-2 mt-3 rounded-lg">
        {toTokenOptions?.length > 0 && (
          <TokenDropDownModal
            tickers={toTokenOptions}
            onSelectedOption={onChangeToToken}
            selectedOption={toToken}
          />
        )}
        <input
          className="ml-3 text-2xl font-semibold text-right bg-transparent focus:outline-none"
          placeholder="0.00"
          value={toAmounts.toPrecision(6)}
        />
      </div>
    </div>
  );
};

export default SwapContianer;
