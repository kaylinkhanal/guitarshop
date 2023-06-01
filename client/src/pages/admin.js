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
    productDescription: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
const Admin = ( )=> {
   
    return (
        <div>
    
    <h3>Add new products</h3>
        <Formik
          initialValues={{
            productName: '',
            productPrice: '',
            productDescription: ''
          }}
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
              <Field name="productDescription"  placeholder="productDescription"/>
              {errors.productDescription && touched.productDescription ? <div>{errors.productDescription}</div> : null}
              <br/>
              
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Admin