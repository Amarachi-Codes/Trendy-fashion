import { useState, type ChangeEvent } from "react"

interface IRange{
    min: number;
    max: number;
    step:number;
    defaultValue:number;
    onChange?: (value:number) => void
}

const Rangeslider: React.FC<IRange> =({
    min= 0, 
    max= 400, 
    step=1, 
    defaultValue= 200, 
    onChange,
}) => {
    const [value, setValue] = useState<number>(defaultValue);

const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    if (onChange) onChange(newValue);
}


  return (
    <div className="flex flex-col items-start w-40">
      <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleChange}
      className="w-full accent-blue-500" 
      />
      <span className="text-sm mt-2">Range: ${value}</span>
    </div>
  )
}

export default Rangeslider
