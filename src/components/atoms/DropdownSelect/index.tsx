import { useField } from "formik";
import styles from "./styles.module.css";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { ErrorMessage } from "../ErrorMessage";
import { Label } from "../Label";

export const DropdownSelect = (props: TSelectFieldProps) => {
  const {
    label,
    name,
    options,
    required = false,
    placeholder = "Select an option",
    showInfoText = false,
  } = props;
  const [field, meta] = useField(props);
  const selectedOption = options.find((opt) => opt.value === field.value);

  return (
    <div className={styles.selectFieldWrapper}>
      <Label name={name} required={required} label={label} />
      <select {...field} className={styles.select} value={field.value || ""}>
        <option value="" disabled hidden={!placeholder}>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <KeyboardArrowDownSharpIcon
        fontSize="small"
        style={{
          position: "absolute",
          cursor: "pointer",
          pointerEvents: "none",
          right: "10px",
          top: "60%",
          transform: "translateY(-60%)",
        }}
        sx={{ color: "#333333" }}
      />
      {showInfoText && selectedOption?.infoText ? (
        <p className={styles.infoText}>{selectedOption.infoText}</p>
      ) : null}
      <ErrorMessage name={name} error={meta.error} touched={meta.touched} />
    </div>
  );
};

type TOption = {
  label: string;
  value: string;
  infoText?: string;
};

type TSelectFieldProps = {
  label?: string;
  name: string;
  options: TOption[];
  placeholder?: string;
  required?: boolean;
  showInfoText?: boolean;
};
