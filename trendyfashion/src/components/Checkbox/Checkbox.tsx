import { type ChangeEvent } from "react"

interface ICheckbox{
label:string;
checked?: boolean;
disabled?: boolean;
onChange?: (checked: boolean) => void
}



const Checkbox:React.FC<ICheckbox> = ({
    label,
    checked = false,
    disabled= false,
    onChange,
}) => {
    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{ 
    if (onChange) onChange(e.target.checked);
};

  return (
    <div>
      <label htmlFor="" className="flex flex-row items-center gap-2">
        <input
        type="checkbox" 
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        name="checkbox" 
        className={`h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500
        ${disabled ? "cursor-not-allowed opacity-50" : ""}` }
        />
        {label && <span className={`${disabled ? "text-gray-400" : "text-gray-800"}`}>{label}</span>}
      </label>
    </div>
  )
}

export default Checkbox
