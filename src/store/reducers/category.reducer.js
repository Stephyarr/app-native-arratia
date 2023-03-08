import { CATEGORIES } from "../../constants/data/index";
import { categoryTypes } from "../types";

const { SELECT_CATEGORY } = categoryTypes;

const initialState = {
    categories: CATEGORIES,
    seleted: null,
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type ) {
        case SELECT_CATEGORY: 
            const indexCategory = state.categories.findIndex(
                (category) => category.id == action.category
            )
            if(indexCategory == -1) return state;

            return {
                ...state,
                seleted: state.categories[indexCategory],
            }
            default:
                return state;
    }
};

export default categoryReducer;