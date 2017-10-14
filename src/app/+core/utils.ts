export function callApi(dataService, method, endpoint, data?): Promise<any> {
    return new Promise((resolve, reject) => {

      let _method = 'getData';

      if (method === 'POST') {
        _method = 'postData';
      }

      if (method === 'PUT') {
        _method = 'putData'
      }

      if (method === 'PATCH') {
        _method = 'patchData'
      }

      if (method === 'GET') {
        _method = 'getData';
      }

    dataService[_method](endpoint, data)
        .then(result => resolve(result))
        .catch(err => reject(err))
    });
}