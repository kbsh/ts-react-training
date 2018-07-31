/**
 * enzymeを利用するにあたる設定です。
 * テストコード自身の実行前に実行されることを期待します。
 *   - package.json setupFilesにて実現します。
 */
var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });