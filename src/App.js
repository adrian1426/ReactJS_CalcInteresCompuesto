import { Formik, Form } from 'formik';
import Button from './components/Button';
import Container from "./components/Container";
import Input from './components/Input';
import Section from "./components/Section";

const initialState = {
  deposit: '',
  contribution: '',
  years: '',
  rate: ''
};

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit;

  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1)
  };

  return Math.round(total);
};

function App() {

  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(Number(deposit), Number(contribution), Number(years), Number(rate));
    console.log(val);
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

            <Button>Calcular</Button>
          </Form>
        </Formik>
      </Section>
    </Container>
  );
}

export default App;
