import { ErrorMessage } from "../ErrorMessage";
import { useField } from "formik";
import { Label } from "../Label";

import styles from "./styles.module.css";

export const InputAmount = (props: TInputAmountType) => {
  const { label, name, required } = props;
  const [field, meta] = useField(name);

  return (
    <div className={styles.inputAmountWrapper}>
      <Label name={name} required={required} label={label} />
      <div className={styles.inputAmountWrapper}>
        <span className={styles.inputAmountPrefixText}>$</span>
        <input
          id={name}
          type="number"
          {...field}
          className={styles.inputAmount}
          placeholder="0.00"
        />
        <span className={styles.inputAmountSuffixText}>USD</span>
      </div>
      <ErrorMessage name={name} error={meta.error} touched={meta.touched} />
    </div>
  );
};

type TInputAmountType = {
  label?: string;
  name: string;
  required?: boolean;
};
