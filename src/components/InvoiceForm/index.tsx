import { DropdownSelect } from "../atoms/DropdownSelect";
import { Title } from "../atoms/Title";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import MessageSharpIcon from "@mui/icons-material/MessageSharp";
import { InputField } from "../atoms/InputFeild";
import { InputDate } from "../atoms/InputDate";
import { InputAmount } from "../atoms/InputAmount";
import { CustomButton } from "../atoms/CustomButton";
import { Formik, Form, type FormikHelpers } from "formik";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  accountOptions,
  departmentOptions,
  invoiceOrderNumberOptions,
  locationOptions,
  paymentTermsOptions,
  purchaseOrderNumberOptions,
  vendorOptions,
} from "../../constants/dummyValues";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { FileUpload } from "../FileUpdload";
import { generateDummyData, getInitialValues } from "../../utils/helpers";
import { InvoiceValidationSchema } from "../../utils/validationSchema";
import type { InvoiceFormValues } from "../../constants/types";

export const InvoiceForm = () => {
  const [pdfFile, setPdfFile] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<InvoiceFormValues | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("invoiceFormData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      const latestForm = parsedData[parsedData.length - 1]; // Get latest
      if (latestForm?.pdfFile) setPdfFile(latestForm.pdfFile);
      if (latestForm) setFormValues(latestForm);
    }
  }, []);

  const handleSubmit = (
    values: InvoiceFormValues,
    { resetForm }: FormikHelpers<InvoiceFormValues>
  ) => {
    const formData = { ...values, pdfFile };
    console.log("Saving Form:", formData);

    // Save form data into array in localStorage
    const existing = JSON.parse(
      localStorage.getItem("invoiceFormData") || "[]"
    );
    const updatedData = [...existing, formData];
    localStorage.setItem("invoiceFormData", JSON.stringify(updatedData));

    // Reset form values
    resetForm({ values: getInitialValues() });
    setPdfFile(null);
  };

  const handleLoadDummyData = (setValues: any) => {
    const dummyData = generateDummyData();
    setValues(dummyData);
  };

  return (
    <>
      <div className={styles.invoiceContentWrapper}>
        <section className={styles.pdfSection}>
          <FileUpload file={pdfFile} onFileUpload={setPdfFile} />
        </section>
        <section className={styles.invoiceSection}>
          <Formik
            // key={formKey}
            enableReinitialize
            initialValues={formValues || getInitialValues()}
            validationSchema={InvoiceValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ setValues }) => (
              <Form className={styles.invoiceForm}>
                <Title
                  titleText="Vender Details"
                  beforeIcon={<MapsHomeWorkIcon {...iconProps} />}
                />
                <Title titleText="Vender Information" fontSize="small" />
                <DropdownSelect
                  name="vendor"
                  label="Vendor"
                  options={vendorOptions}
                  required
                  showInfoText
                />
                <p className={styles.venderDetailsText}>
                  <KeyboardArrowDownSharpIcon {...iconProps} />
                  View Vender Details
                </p>
                <Title
                  titleText="Invoice Details"
                  beforeIcon={<MapsHomeWorkIcon {...iconProps} />}
                />
                <Title titleText="General Information" fontSize="small" />
                <DropdownSelect
                  name="purchaseOrderNumber"
                  label="Purchase Order Number"
                  options={purchaseOrderNumberOptions}
                  required
                  placeholder="Select PO Number"
                />

                <Title titleText="Invoice Details" fontSize="small" />

                <div className={styles.quarterContainer}>
                  <DropdownSelect
                    name="invoiceNumber"
                    label="Invoice Number"
                    options={invoiceOrderNumberOptions}
                    required
                    placeholder="Select Invoice"
                  />
                  <InputDate name="invoiceDate" label="Invoice Date" required />
                </div>
                <div className={styles.quarterContainer}>
                  <InputAmount
                    label="Total Amount"
                    name="totalAmount"
                    required
                  />
                  <DropdownSelect
                    name="paymentTerms"
                    label="Payment Terms"
                    options={paymentTermsOptions}
                    required
                    placeholder="Select"
                  />
                </div>
                <div className={styles.quarterContainer}>
                  <InputDate name="dueDate" label="Due Date" required />
                  <InputDate name="glPostDate" label="GL Post Date" required />
                </div>
                <InputField
                  name="invoiceDescription"
                  required
                  label="Invoice Describtion"
                />
                <Title titleText="Expense Details" fontSize="small" />
                <div className={styles.quarterContainer}>
                  <InputAmount label="Line Amount" name="lineAmount" required />
                  <DropdownSelect
                    name="department"
                    label="Department"
                    options={departmentOptions}
                    required
                    placeholder="Select Department"
                  />
                </div>
                <div className={styles.quarterContainer}>
                  <DropdownSelect
                    name="account"
                    label="Account"
                    options={accountOptions}
                    required
                    placeholder="Select Account"
                  />
                  <DropdownSelect
                    name="location"
                    label="Location"
                    options={locationOptions}
                    required
                    placeholder="Select Location"
                  />
                </div>
                <InputField name="description" required label="Describtion" />
                <div className={styles.expenseButtonWrapper}>
                  <span className={styles.expenseButtonAlign}>
                    <CustomButton accent="secondary">
                      + Add Expense Coding
                    </CustomButton>
                  </span>
                </div>
                <Title
                  titleText="Comments"
                  beforeIcon={<MessageSharpIcon {...iconProps} />}
                />
                <InputField
                  name="comments"
                  placeholder="Add a comment and use @ to tag someone"
                />
                <div className={styles.buttonWrapper}>
                  <MoreVertIcon fontSize="small" sx={{ color: "535353" }} />
                  <CustomButton type="button" accent="secondary">
                    Save as Draft
                  </CustomButton>
                  <CustomButton type="submit" accent="primary">
                    Submit & New
                  </CustomButton>
                  <CustomButton
                    onClick={() => handleLoadDummyData(setValues)}
                    type="button"
                    accent="primary"
                  >
                    Load Dummy
                  </CustomButton>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </>
  );
};

const iconProps = {
  fontSize: "medium" as const,
  sx: { color: "#4680bf" },
};
