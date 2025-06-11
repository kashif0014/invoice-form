export type InvoiceFormValues = {
  // Vendor Details
  vendor: string;

  // Invoice Details
  purchaseOrderNumber: string;
  invoiceNumber: string;
  invoiceDate: string;
  totalAmount: number;
  paymentTerms: string;
  dueDate: string;
  glPostDate: string;
  invoiceDescription: string;

  // Expense Details
  department: string;
  lineAmount: number;
  account: string;
  location: string;
  description: string;

  // Comments
  comments: string;

  pdfFile?: string | null;
};
