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
    test('should render <PrimeraApp /> correctly', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should render the subtitle sent with props', () => {
        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Subtitulo';
        const wrapper = shallow(
            <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
        );
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    });
});
