import { useEffect } from "react";
import { InputField } from "../../components/atoms/InputFeild";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { nameSchema } from "../../utils/validationSchema";
import { CustomButton } from "../../components/atoms/CustomButton";
import { useNavigate } from "react-router-dom";
import { Invoice_Form_Route } from "../../constants";

import styles from "./styles.module.css";

export const Login = () => {
  const navigate = useNavigate();
  const initialValues: TLoginValues = {
    userName: "",
    password: "",
  };

  useEffect(() => {
    const session = localStorage.getItem("userSession");
    if (session) {
      navigate(Invoice_Form_Route);
    }
  }, [navigate]);

  const handleSubmit = (values: TLoginValues) => {
    localStorage.setItem("userSession", JSON.stringify(values));
    navigate(Invoice_Form_Route);
  };

  return (
    <div className={styles.loginPageWrapper}>
      <h1>Welcome to Edstruments</h1>
      <p>Login in to Your Account</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.formWrapper}>
          <InputField
            name="userName"
            placeholder="Please Enter Name"
            label="User Name"
          />
          <InputField
            name="password"
            type="password"
            placeholder="Please Enter Password"
            label="Password"
          />
          <div className={styles.buttonWrapper}>
            <CustomButton type="submit" accent="primary">
              Login
            </CustomButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

const validationSchema = Yup.object().shape({
  userName: nameSchema("User Name"),
  password: nameSchema("Password"),
});

type TLoginValues = {
  userName: string;
  password: string;
};
