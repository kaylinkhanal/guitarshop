import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
 productName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
    productPrice: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    productDiscription: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
const Admin = ( )=> {
    const initialValues = {
        productDiscription: '',
        productPrice: '',
        productName: ''
    }
    return (
        <div>
        <h1>Suman guitar shop</h1>
     
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={values => {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values)
          };
          fetch('http://localhost:3001/products', requestOptions)
      
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="productName" placeholder="Product name"/>
              {errors.productName && touched.productName ? (
                <div>{errors.productName}</div>
              ) : null}
              <br/>
              <Field name="productPrice" placeholder="productPrice"/>
              {errors.productPrice && touched.productPrice? (
                <div>{errors.productPrice}</div>
              ) : null}
              <br/>
              <Field name="productDiscription"  placeholder="productDiscription"/>
              {errors.productDiscription && touched.productDiscription ? <div>{errors.productDiscription}</div> : null}
              <br/>
              
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Admin