import { Input } from "antd";
import { useId } from "react";

export function InputWithLabel({ label, ...propsInputAntd }) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input {...propsInputAntd} id={id} />
    </div>
  );
}
