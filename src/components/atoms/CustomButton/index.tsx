import styles from "./styles.module.css";

export const CustomButton = (props: TCustomButtonType) => {
  const {
    children,
    onClick,
    type = "button",
    disabled = false,
    accent,
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.button} ${styles[accent]}`}
    >
      {children}
    </button>
  );
};

type TCustomButtonType = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  accent: "primary" | "secondary";
};
