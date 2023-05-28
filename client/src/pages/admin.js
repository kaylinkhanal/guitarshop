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
   
    return (
        <div>
        <h2><u>Kyalin Sir Jinadabaad</u></h2>
        <h1>Rijman Guitar Shop</h1>
        <h1>Henary guiter shop</h1>
        <h1>Kaylin guitar shop</h1>

      
     
        <Formik
          initialValues={{
            productName: '',
            productPrice: '',
            productDiscription: ''
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