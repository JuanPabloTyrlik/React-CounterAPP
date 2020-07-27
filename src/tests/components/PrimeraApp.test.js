import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import PrimeraApp from '../../components/PrimeraApp';
// import {render} from '@testing-library/react';

describe('Pruebas en <PrimeraApp />', () => {
    // test('should render "Hola, Soy Goku', () => {
    //     const saludo = 'Hola, Soy Goku';
    //     const wrapper = render(<PrimeraApp saludo={saludo} />);
    //     expect(wrapper.getByText(saludo)).toBeInTheDocument();
    // })
    test('should render <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    });
});
