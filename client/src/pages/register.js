import { Formik, Form, Field } from 'formik';


const Register = ( )=> {
   
    return (
        <div>
    
      
        <Formik
          initialValues={{
            userName: '',
            password: '',
            email: ''
          }}
          onSubmit={values => {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values)
          };
          fetch('http://localhost:3001/register', requestOptions)
      
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="userName" placeholder="userName"/>
              {errors.userName && touched.userName ? (
                <div>{errors.userName}</div>
              ) : null}
              <br/>
              <Field name="password"  type ="password"placeholder="password"/>
              {errors.password && touched.password? (
                <div>{errors.password}</div>
              ) : null}
              <br/>
              <Field name="email"  placeholder="email"/>
              {errors.email && touched.email ? (
              <div>{errors.email}</div>
               ): null}
              <br/>
              
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Register