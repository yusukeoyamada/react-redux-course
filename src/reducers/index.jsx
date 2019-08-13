import { combineReducers } from 'redux';
import count from './count';

export default combineReducers({count});

// 複数version
// export default combineReducers({foo, bar, baz});
