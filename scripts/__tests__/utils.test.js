import { getQueryString } from '../utils';

describe('Utils', () => {
  it('getQueryString should convert a object to query string', () => {
    const data = {
      name: 'Levity',
      qty: '5',
      product: 'Lounge Chair',
    };

    const queryString = getQueryString(data);

    expect(queryString).toEqual('&name=Levity&qty=5&product=Lounge%20Chair');
  });
});
