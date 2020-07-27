import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../../components/CounterApp';

describe('Pruebas de CounterApp', () => {
    let wrapper = shallow(<CounterApp />);
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });
    test('should render <CounterApp /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should render <CounterApp /> correctly with counter 100', () => {
        expect(
            shallow(<CounterApp value={100} />)
                .find('h2')
                .text()
        ).toBe('100');
    });
    test('should increse counter by 1', () => {
        wrapper.find('button').at(0).simulate('click');
        expect(parseInt(wrapper.find('h2').text())).toBe(1);
    });
    test('should increse counter by N', () => {
        const N = Math.floor(Math.random() * 10);
        for (let i = 0; i < N; i++) {
            wrapper.find('button').at(0).simulate('click');
        }
        expect(parseInt(wrapper.find('h2').text())).toBe(parseInt(N));
    });
    test('should decrease counter by 1', () => {
        wrapper.find('button').at(1).simulate('click');
        expect(parseInt(wrapper.find('h2').text())).toBe(-1);
    });
    test('should decrease counter by N', () => {
        const N = Math.floor(Math.random() * 10);
        for (let i = 0; i < N; i++) {
            wrapper.find('button').at(1).simulate('click');
        }
        expect(parseInt(wrapper.find('h2').text())).toBe(parseInt(N * -1));
    });
    test('should reset counter to 0', () => {
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        expect(parseInt(wrapper.find('h2').text())).toBe(0);
    });
    test('should reset counter to N', () => {
        const N = Math.floor(Math.random() * 10);
        const wrapper = shallow(<CounterApp value={N} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        expect(parseInt(wrapper.find('h2').text())).toBe(N);
    });
});
