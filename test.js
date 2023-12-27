const { expect } = require('chai');
const axios = require('axios');
describe('API tests', () => {
  it('should return correct data', async () => {
    const response = await axios.get('http://localhost:3000/users'); 
    expect(response.data).to.deep.equal({ key: 'value' });
  });
});
