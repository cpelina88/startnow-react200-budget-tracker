export const types = {
  UPDATE_INCOME_DESCRIPTION: 'UPDATE_INCOME_DESCRIPTION',
  UPDATE_INCOME_AMOUNT: 'UPDATE_INCOME_AMOUNT',
  ADD_INCOME: 'ADD_INCOME'
};

export function updateIncomeDescription(description) {
  return {
    type: types.UPDATE_INCOME_DESCRIPTION,
    payload: { description }
  };
}

export function updateIncomeAmount(amount) {
  return {
    type: types.UPDATE_INCOME_AMOUNT,
    payload: { amount }
  };
}

export function addIncome(description, amount) {
  return {
    type: types.ADD_INCOME,
    payload: {
      description,
      amount: parseFloat(amount)
    }
  };
}
