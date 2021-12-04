import { Formik, Form } from 'formik';
import Container from "./components/Container";
import Input from './components/Input';
import Section from "./components/Section";

const initialState = {
  deposit: '',
  contribution: '',
  years: '',
  rate: ''
};

function App() {

  const handleSubmit = () => {
    console.log('object')
  };

  return (
    <Container>
      <Section>
        <Formik
          initialValues={initialState}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input
              name='deposit'
              label='Depósito inicial'
            />

            <Input
              name='contribution'
              label='Contribución anual'
            />

            <Input
              name='years'
              label='Años'
            />

            <Input
              name='rate'
              label='Interés estimado'
            />
          </Form>
        </Formik>
      </Section>
    </Container>
  );
}

export default App;
