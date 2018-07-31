import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from "enzyme";
import { mod } from '../react-training/snapshottest';

describe('mod', () => {
    it('renders correctly', () => {
        // const dom:React.Component = <a href="http://www.facebook.com">Facebook</a>;;
        const dom = <a href="http://www.facebook.com">Facebook</a>;;
        const wrapper = shallow(dom);
    
        // Jest
        expect(wrapper.find('a').prop('href')).toBe('http://www.facebook.com');
    
        // Jest-enzyme
        // expect(wrapper.find('a')).toHaveProp('href', 'http://www.facebook.com');
    });
})