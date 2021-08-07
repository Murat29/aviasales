interface IconfigApi {
  url: string;
}

class Api {
  url: string;
  constructor(config: IconfigApi) {
    this.url = config.url;
  }

  getSearchId() {
    return fetch(this.url + '/search', {
      method: 'GET',
    }).then(this._getResponseData);
  }

  getPackTickets(searchId: string) {
    return fetch(`${this.url}/tickets?searchId=${searchId}`, {
      method: 'GET',
    }).then(this._getResponseData);
  }

  _getResponseData(data: any) {
    if (!data.ok) {
      console.log(data.ok);
      return Promise.reject(`Ошибка: ${data.status}`);
    }
    return data.json();
  }
}

const configApi: IconfigApi = {
  url: 'https://front-test.beta.aviasales.ru',
};

const api = new Api(configApi);

export default api;
