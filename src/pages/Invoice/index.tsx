import { Header } from "../../components/Header";
import { InvoiceForm } from "../../components/InvoiceForm";

import styles from "./styles.module.css";

export const Invoice = () => {
  return (
    <div className={styles.invoicePageWrapper}>
      <Header />
      <InvoiceForm />
    </div>
  );
};
