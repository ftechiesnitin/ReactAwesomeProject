export default class api {
  static headers(){
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
      'X-Requested-With': 'XMLHttpRequest'
    };
  }

  static get(route, params){
    return this.xhr(route, params, 'GET');
  }

  static put(route, params){
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params){
    return this.xhr(route, params, 'POST');
  }

  static xhr(route, params, method){

    const url = 'http://api.giphy.com/v1/gifs/search?q=' + params.searchKey + '&api_key=dc6zaTOxFJmzC&limit=20';

    let options = Object.assign({ method: method }, params && method != 'GET' ? { body: JSON.stringify(params) } : null );
    options.headers = api.headers();
    return fetch(url, options).then(res => {
      let json = res.json();

      if(res.ok) return json;

      return json.then(err => { throw err });
    });
  }
}
