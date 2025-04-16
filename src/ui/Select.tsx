interface SelectProps {
  value: string;
  onChange: (event: any) => void;
  options: any[];
}

export default function SelectBox({ value, onChange, options }: SelectProps) {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        border: "none",
        background: "#d7e7f4",
        color: "#525371",
        borderRadius: "4px",
        fontSize: "12px",
        outline: "none",
        padding: "8px 0",
        width: "100%",
      }}
    >
      {options.map((opt) => (
        <option value={opt.value} key={opt.value}>
          {opt.text}
        </option>
      ))}
    </select>
  );
}
