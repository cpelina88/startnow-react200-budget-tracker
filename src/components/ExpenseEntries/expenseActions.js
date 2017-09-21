export const types = {
  UPDATE_EXPENSE_DESCRIPTION: 'UPDATE_EXPENSE_DESCRIPTION',
  UPDATE_EXPENSE_AMOUNT: 'UPDATE_EXPENSE_AMOUNT',
  ADD_EXPENSE: 'ADD_EXPENSE'
};

export function updateExpenseDescription(description) {
  return {
    type: types.UPDATE_EXPENSE_DESCRIPTION,
    payload: { description }
  };
}

export function updateExpenseAmount(amount) {
  return {
    type: types.UPDATE_EXPENSE_AMOUNT,
    payload: { amount }
  };
}

export function addExpense(description, amount) {
  return {
    type: types.ADD_EXPENSE,
    payload: {
      description,
      amount: parseFloat(amount)
    }
  };
}

