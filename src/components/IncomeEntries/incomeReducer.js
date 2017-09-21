import { types } from './incomeActions';

const defaultState = {
  description: '',
  amount: '',
  lineItems: []
};

export default function IncomeReducer (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.UPDATE_INCOME_DESCRIPTION: {
      return {
        ...state,
        description: payload.description
      };
    }
    case types.UPDATE_INCOME_AMOUNT: {
      return {
        ...state, amount: payload.amount
      };
    }

    case types.ADD_INCOME: {
      const { description, amount } = action.payload;
      return {
        description: '',
        amount: '',
        actions: '',
        lineItems: [
          ...state.lineItems,
          { description, amount }
        ]
      };
    }

    default: {
      return state;
    }
  }
}
