import { mod } from '../react-training/snapshottest';
// import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const params = {
        class : "actualClassName",
        value : "text",
    }
    const actual = new mod.CreateDom(params);

    // react-test-renderer動かず。
    // const rendered = renderer.create(<CreateDom page="actualClassName">text</CreateDom>);

    expect(actual).toMatchSnapshot();
});