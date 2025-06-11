import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { CustomButton } from "../atoms/CustomButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { commonIconProps, Login_Page_Route } from "../../constants";

export const Header = () => {
  const [activeTab, setActiveTab] = useState(0);

  const logout = () => {
    localStorage.removeItem("userSession");
    window.location.href = Login_Page_Route;
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftHeader}>
        <KeyboardBackspaceIcon {...commonIconProps} sx={{ color: "#333" }} />
        <h4 className={styles.headerText}>Create New Invoice</h4>
      </div>
      <div className={styles.rightHeader}>
        <div className={styles.tabsContainer}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.headerTabs} ${
                activeTab === tab.id ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  className={styles.underline}
                  layoutId="underline"
                  initial={false}
                  animate={{ backgroundColor: "#4497d1" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <CustomButton onClick={logout} accent="primary">
            Logout
          </CustomButton>
        </div>
      </div>
    </header>
  );
};

const tabs = [
  { id: 0, label: "Vender Details" },
  { id: 1, label: "Invoice Details" },
  { id: 2, label: "Comments" },
];
