import * as Yup from "yup";

export const nameSchema = (fieldName: string = "Name") =>
  Yup.string()
    .min(3, `${fieldName} must be at least 3 characters`)
    .required(`${fieldName} is required`);

export const InvoiceValidationSchema = Yup.object().shape({
  vendor: Yup.string().required("Vendor is required"),
  purchaseOrderNumber: Yup.string().required("PO Number is required"),
  invoiceNumber: Yup.string().required("Invoice Number is required"),
  invoiceDate: Yup.date().required("Invoice Date is required"),
  totalAmount: Yup.number()
    .required("Amount is required")
    .positive("Must be positive"),
  paymentTerms: Yup.string().required("Payment Terms are required"),
  dueDate: Yup.date().required("Due Date is required"),
  glPostDate: Yup.date().required("GL Post Date is required"),
  department: Yup.string().required("Department is required"),
  account: Yup.string().required("Account is required"),
  location: Yup.string().required("Location is required"),
  lineAmount: Yup.number()
    .required("Amount is required")
    .positive("Must be positive"),
  description: nameSchema("Description"),
  invoiceDescription: nameSchema("Invoice Description"),
});
