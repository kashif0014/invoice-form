import styles from "./styles.module.css";

export const Label = (props: TLabelType) => {
  const { label, name, required = false } = props;
  return (
    <div className={styles.labelWrapper}>
      {label ? (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      ) : null}
      {label && required ? <span className={styles.required}>*</span> : null}
    </div>
  );
};

type TLabelType = {
  label?: string;
  name: string;
  required?: boolean;
};
