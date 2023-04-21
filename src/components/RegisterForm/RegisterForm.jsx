import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth.operations';
// import { Formik } from 'formik';
import * as Yup from 'yup';

// const validationSchema = yup.object().shape({
//   name: yup.string().required('Required'),
//   email: yup.string().required('Required').email('Invalid email'),
//   password: yup.string().required('Required'),
// });

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <>
//       RegisterForm
//       <Formik
//         validationSchema={validationSchema}
//         initialValues={{
//           name: '',
//           email: '',
//           password: '',
//         }}
//       >
//         {(values, handleChange, handleBlur, isValid, dirty, toched, errors) => (
//           <div>
//             <input
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.name}
//             />
//             {toched.name && errors.name && <p>{errors.name}</p>}
//             <button
//               disabled={!isValid && !dirty}
//               onClick={handleSubmit}
//               type="summit"
//             >
//               Sign Up
//             </button>
//           </div>
//         )}
//       </Formik>
//     </>
//   );
// };
import { Formik, Field, Form, ErrorMessage } from 'formik';

import style from './RegisterForm.module.css';

export const RegisterForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Invalid email'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'password length is at least 6 characters'),
  });
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          //   const form = currentTarget;
          dispatch(
            register({
              name: values.name,
              email: values.email,
              password: values.password,
            })
          );
          //   alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className={style.form}>
            <h2 className={style.title}>Sign Up</h2>
            <label className={style.label} htmlFor="name">
              Name
            </label>
            <Field
              className={style.input}
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="div" />
            <label className={style.label} htmlFor="email">
              Email
            </label>
            <Field
              className={style.input}
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" />
            <label className={style.label} htmlFor="password">
              Password
            </label>
            <Field
              className={style.input}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" />
            <button
              className={style.submit}
              type="submit"
              disabled={!isValid && !dirty}
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
