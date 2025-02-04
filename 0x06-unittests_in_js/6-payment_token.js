function getPaymentTokenFromAPI(success) {
  if (success) {
    const promiseToReturn = new Promise((resolve, reject) => {
      resolve({data: 'Successful response from the API' });
    });
    return promiseToReturn;
  }
}

module.exports = getPaymentTokenFromAPI;
