export const calcCreditScore = (
  cutomer_id,
  loan_amount,
  interest_rate,
  tenure
) => {
  ///MORE BUSSINESS LOGIC CAN BE ADDED HERE
  var pastLaonpaid=1;
  var numberOfLoans=0;
  var laonApprovedvloume=100;
  var cSCore;
  if (pastLaonpaid > numberOfLoans) {
    cSCore = 51;
    return cSCore;
  }

  cSCore = laonApprovedvloume / (numberOfLoans0 - pastLaonpaid);
  return cSCore;
};

export const checkApproval = (
  cutomer_id,
  loan_amount,
  interest_rate,
  tenure
) => {
  const CreditScore = calcCreditScore(
    cutomer_id,
    loan_amount,
    interest_rate,
    tenure
  );

  if (CreditScore > 50) {
    return { values: true, corrected_interest_rate: interest_rate };
  }

  if (CreditScore < 50 && CreditScore > 30) {
    return { values: true, corrected_interest_rate: 12 };
  }
  if (CreditScore < 30 && CreditScore > 10) {
    return { values: true, corrected_interest_rate: 16 };
  }

  return { values: true, corrected_interest_rate: 999 };
};
