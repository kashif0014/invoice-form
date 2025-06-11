import { useField, useFormikContext } from "formik";
import { Label } from "../Label";
import DatePicker from "react-datepicker";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { ErrorMessage } from "../ErrorMessage";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./styles.module.css";

export const InputDate = (props: TInputDateType) => {
  const { label, name, required } = props;
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <div className={styles.dateInputWrapper}>
      <Label name={name} required={required} label={label} />

      <div className={styles.inputContainer}>
        <div className={styles.leftIcon}>
          <CalendarMonthSharpIcon
            fontSize="small"
            className={styles.calendarIcon}
            sx={{ color: "#57606d" }}
          />
        </div>
        <DatePicker
          calendarClassName={styles.reactDatePicker}
          wrapperClassName={styles.reactDatePickerWrapper}
          id={name}
          selected={field.value ? new Date(field.value) : null}
          onChange={(date) => setFieldValue(name, date)}
          dateFormat="MM/dd/yyyy"
          className={styles.input}
          placeholderText="MM/DD/YYYY"
        />
        <div className={styles.rightIcon}>
          <KeyboardArrowDownSharpIcon
            fontSize="small"
            sx={{ color: "#57606d" }}
            className={styles.arrowIcon}
          />
        </div>
      </div>

      <ErrorMessage name={name} error={meta.error} touched={meta.touched} />
    </div>
  );
};

type TInputDateType = {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
};
