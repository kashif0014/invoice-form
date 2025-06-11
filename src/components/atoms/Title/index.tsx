import styles from "./styles.module.css";

export const Title = (props: TTitleType) => {
  const { titleText, beforeIcon, fontSize = "medium" } = props;
  return (
    <div className={styles.titleWrapper}>
      {beforeIcon ? <div className={styles.titleIcon}>{beforeIcon}</div> : null}

      <h3 className={`${styles.title} ${styles[fontSize]} `}>{titleText}</h3>
    </div>
  );
};

type TTitleType = {
  titleText: string;
  beforeIcon?: React.ReactNode;
  fontSize?: "small" | "medium";
};
