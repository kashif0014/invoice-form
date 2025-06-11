import type { InvoiceFormValues } from "../constants/types";

export const generateDummyData = () => ({
  vendor: "a1-ex",
  purchaseOrderNumber: "po1",
  invoiceNumber: "In1",
  invoiceDate: new Date().toISOString().split("T")[0],
  dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0],
  glPostDate: new Date().toISOString().split("T")[0],
  totalAmount: 1500,
  lineAmount: 1200,
  paymentTerms: "net30",
  invoiceDescription: "Website development services",
  department: "engineering",
  account: "account1",
  location: "location1",
  description: "Q2 website maintenance",
  comments: "Approved by @john",
  pdfFile: null,
});

export const getInitialValues = (): InvoiceFormValues => {
  const savedData = localStorage.getItem("invoiceFormData");
  return savedData
    ? JSON.parse(savedData)
    : {
        // Vendor Details
        vendor: "",

        // Invoice Details
        purchaseOrderNumber: "",
        invoiceNumber: "",
        invoiceDate: "",
        totalAmount: 0,
        paymentTerms: "",
        dueDate: "",
        glPostDate: "",
        invoiceDescription: "",

        // Expense Details
        department: "",
        lineAmount: 0,
        account: "",
        location: "",
        description: "",

        // Comments
        comments: "",

        // PDF
        pdfFile: null,
      };
};
