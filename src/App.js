import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from './components/Button';
import Container from "./components/Container";
import Input from './components/Input';
import Section from "./components/Section";
import Balance from './components/Balance';

const initialState = {
  deposit: '',
  contribution: '',
  years: '',
  rate: ''
};

const validationScheYup = {
  deposit: Yup.number().required('Obligatorio deposito').typeError('Debe ser numérico'),
  contribution: Yup.number().required('Obligatorio contribucion').typeError('Debe ser numérico'),
  years: Yup.number().required('Obligatorio años').typeError('Debe ser numérico'),
  rate: Yup.number().required('Obligatorio impuesto').typeError('Debe ser numérico').min(0, 'el valor minimo es 0').max(1, 'El valor máximo es 1'),
};

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit;

  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1)
  };

  return Math.round(total);
};

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

function App() {
  const [balance, setBalance] = useState('');

  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(Number(deposit), Number(contribution), Number(years), Number(rate));

    setBalance(formatter.format(val));
  };

  return (
    <Container>
      <Section>
        <Formik
          initialValues={initialState}
          onSubmit={handleSubmit}
          validationSchema={Yup.object(validationScheYup)}
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

            <Button type="submit">Calcular</Button>
          </Form>
        </Formik>
        {balance !== '' && <Balance>Balance final: {balance}</Balance>}
      </Section>
    </Container>
  );
}

export default App;
