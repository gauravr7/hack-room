import { SET_CURRENT_DATE } from '../actions/sampleAction';

const initialState = Immutable.fromJS({
    open: false,
    content: null,
    options: {},
    scrollTop: 0
});

/**
 * alertbox description
 * @param  {Object} [state=initialState] initialState declaration
 * @param  {Object} action               action type
 * @return {Object}                      dispatching state
 */
const alertbox = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_ALERTBOX:
            return state.set('options', Immutable.fromJS(action.payload.options || {}))
                .set('content', action.payload.element)
                .set('open', true);
        case CLOSE_ALERTBOX:
            return initialState;
        default:
            return state;
    }
};

export default alertbox;
