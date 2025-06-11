import styles from "./styles.module.css";

export const ErrorMessage = (props: TErrorMessageType) => {
  const { error, touched, name } = props;

  if (!touched || !error) return null;

  return (
    <div data-field-name={name} className={styles.errorText}>
      {error}
    </div>
  );
};

type TErrorMessageType = {
  name: string;
  error?: string;
  touched?: boolean;
};
