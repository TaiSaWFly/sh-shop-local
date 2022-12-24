import * as yup from "yup";

export const loginSchema = yup.object().shape({
  password: yup.string().required("The field is required to fill"),
  email: yup
    .string()
    .required("The field is required to fill")
    .email("Email entered incorrectly"),
});

export const signupSchema = yup.object().shape({
  licence: yup
    .boolean()
    .oneOf(
      [true],
      "You cannot use our service without confirming the license agreement"
    ),
  country: yup.object().nullable().required("The field is required to fill"),
  confirmPassword: yup
    .string()
    .required("The field is required to fill")
    .oneOf([yup.ref("password")], "Password does not match current"),
  password: yup
    .string()
    .required("The field is required to fill")
    .matches(/^[^а-яА-Я]*$/g, "Password must contain only latin letters")
    .matches(/[A-Z]/g, "Password must contain 1 capital letter")
    .matches(/[0-9]+/g, "Password must contain 1 digit")
    .matches(/^[^ ]*$/g, "Password must not contain a ' space ' character")
    .min(8, "Password must be 8 characters"),
  email: yup
    .string()
    .required("The field is required to fill")
    .email("Email entered incorrectly"),
  userName: yup
    .string()
    .required("The field is required to fill")
    .min(3, "Username must be at least 3 characters")
    .max(16, "Username must not exceed 16 characters"),
});

export const editUserSchema = yup.object().shape({
  country: yup.object().nullable().required("The field is required to fill"),
  email: yup
    .string()
    .required("The field is required to fill")
    .email("Email entered incorrectly"),
  userName: yup
    .string()
    .required("The field is required to fill")
    .min(3, "Username must be at least 3 characters")
    .max(16, "Username must not exceed 16 characters"),
});

export const requestForReceivedOrderFormSchema = yup.object().shape({
  phone: yup.string().required("The field is required to fill"),
  email: yup
    .string()
    .required("The field is required to fill")
    .email("Email entered incorrectly"),
  userName: yup.string().required("The field is required to fill"),
});

export const courierFormSchema = yup.object().shape({
  firstName: yup.string().required("The field is required to fill"),
});
