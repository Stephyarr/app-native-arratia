import { CATEGORIES } from "../../constants/data/index"

const initialState = {
    categories: CATEGORIES,
    seleted: null,
}

const categoryReducer = (state = initialState, action) => {
    return state;
};

export default categoryReducer;