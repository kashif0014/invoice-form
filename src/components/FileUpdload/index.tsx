import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import styles from "./styles.module.css";
import { Title } from "../atoms/Title";
import { CustomButton } from "../atoms/CustomButton";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const FileUpload = (props: TFileUploadType) => {
  const { file, onFileUpload } = props;
  const [numPages, setNumPages] = useState<number | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        onFileUpload(result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className={styles.pdfContainer}>
      <div className={styles.pdfWrapper}>
        <Title titleText="Upload Your Invoice" fontSize="small" />
        <p className={styles.smallText}>To auto populate and save time</p>
        <div className={styles.iconWrapper}>
          <AssignmentTurnedInIcon fontSize="large" sx={{ color: "#1987e1" }} />
        </div>
        {file ? (
          <Document
            file={file}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.from({ length: numPages || 0 }, (_, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        ) : (
          <div className={styles.inputWrapper}>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
            />
            <div className={styles.buttonwrapper}>
              <CustomButton accent="secondary"> Upload </CustomButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

type TFileUploadType = {
  file: string | null;
  onFileUpload: (file: string) => void;
};
