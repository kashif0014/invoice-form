import { useState } from "react";
import { useField } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { motion } from "framer-motion";
import { ErrorMessage } from "../ErrorMessage";
import { commonIconProps } from "../../../constants";
import { Label } from "../Label";

import styles from "./styles.module.css";

export const InputField = (props: TInputFieldType) => {
  const { label, name, type = "text", placeholder, required } = props;
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className={styles.inputFeildWrapper}>
      <Label name={name} required={required} label={label} />
      <input
        className={styles.customInput}
        type={isPasswordField && showPassword ? "text" : type}
        placeholder={placeholder}
        {...field}
      />
      {isPasswordField && (
        <motion.span
          className={styles.passwordIcon}
          onClick={togglePassword}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {showPassword ? (
            <VisibilityIcon {...commonIconProps} />
          ) : (
            <VisibilityOffIcon {...commonIconProps} />
          )}
        </motion.span>
      )}

      <ErrorMessage name={name} error={meta.error} touched={meta.touched} />
    </div>
  );
};

type TInputFieldType = {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};
