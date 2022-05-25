import { auth } from './firebase'; // to jest sciezka do miejsca gdzie exportujesz obiekt auth z firebase 
class ApiFetcher {
  makeGetRequest(url, customHeaders) {
    return (
      auth.currentUser
        ?.getIdToken()
        .then((userToken) => {
          const authHeaders = {
            authorization: `Bearer ${userToken}`,
          };

          return fetch(url, {
            method: 'GET',
            headers: {
              ...customHeaders,
              ...authHeaders,
            },
          });
        })
        .then((response) => response.json())
    );
  }


makePostRequest(url, data, customHeaders) {
    return (
      auth.currentUser
        ?.getIdToken()
        .then((userToken) => {
          const authHeaders = {
            authorization: `Bearer ${userToken}`,
          };

          return fetch(url, {
            method: 'POST',
            headers: {
              ...customHeaders,
              ...authHeaders,
            },
						body: JSON.stringify(data)
          });
        })
        
    );
  }

}

export const apiFetcher = new ApiFetcher();