import { types } from './expenseActions';

const defaultState = {
  description: '',
  amount: '',
  lineItems: []
};

export default function ExpenseReducer (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.UPDATE_EXPENSE_DESCRIPTION: {
      return {
        ...state,
        description: payload.description
      };
    }
    case types.UPDATE_EXPENSE_AMOUNT: {
      return {
        ...state, amount: payload.amount
      };
    }

    case types.ADD_EXPENSE: {
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

