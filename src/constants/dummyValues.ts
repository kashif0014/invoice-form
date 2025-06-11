export const vendorOptions = [
  {
    value: "a1-ex",
    label: "A - 1 Exteminators",
    infoText: "550 Main St, Lynn",
  },
  {
    value: "a2-ex",
    label: "A - 2 Exterminators",
    infoText: "123 Main St, Boston",
  },
  {
    value: "a3-ex",
    label: "A - 3 Exterminators",
  },
];

export const purchaseOrderNumberOptions = [
  {
    value: "po1",
    label: "12322",
  },
  {
    value: "po2",
    label: "233433",
  },
  {
    value: "po3",
    label: "3444343",
  },
];

export const invoiceOrderNumberOptions = [
  {
    value: "In1",
    label: "Invoice -1",
  },
  {
    value: "In2",
    label: "Invoice -2",
  },
  {
    value: "In3",
    label: "Invoice -3",
  },
];

export const paymentTermsOptions = [
  {
    value: "net30",
    label: "Net 30",
  },
  {
    value: "net45",
    label: "Net 45",
  },
  {
    value: "net60",
    label: "Net 60",
  },
];

export const departmentOptions = [
  {
    value: "sales",
    label: "Sales",
  },
  {
    value: "marketing",
    label: "Marketing",
  },
  {
    value: "engineering",
    label: "Engineering",
  },
];

export const accountOptions = [
  {
    value: "account1",
    label: "Account 1",
  },
  { value: "account2", label: "Account 2" },
  {
    value: "account3",
    label: "Account 3",
  },
];

export const locationOptions = [
  {
    value: "location1",
    label: "Location 1",
  },
  {
    value: "location2",
    label: "Location 2",
  },
  {
    value: "location3",
    label: "Location 3",
  },
];

export const generateDummyData = () => ({
  vendor: "a1-ex",
  purchaseOrderNumber: "po1",
  invoiceNumber: "In1",
  invoiceDate: new Date().toISOString().split("T")[0],
  dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0],
  glPostDate: new Date().toISOString().split("T")[0],
  totalAmount: "1500.00",
  paymentTerms: "net30",
  invoiceDescribtion: "Website development services",
  department: "engineering",
  account: "account1",
  location: "location1",
  describtion: "Q2 website maintenance",
  comments: "Approved by @john",
  pdfFile: null,
});
