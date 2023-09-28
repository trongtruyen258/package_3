import { useState } from "react";
import MoneyInput from "./MoneyInput";

export default function ConvertMoney() {
  const [usd, setUSD] = useState("");
  const [vnd, setVND] = useState("");
  const convertToUSD = (vndInput) => {
    setVND(vndInput);
    setUSD(vndInput / 24372.5);
  };
  const convertToVND = (usdInput) => {
    setUSD(usdInput);
    setVND(usdInput * 24372.5);
  };
  return (
    <div>
      <MoneyInput typeMoney={"USD"} money={usd} sendData={convertToVND} />
      <MoneyInput typeMoney={"VND"} money={vnd} sendData={convertToUSD} />
    </div>
  );
}
