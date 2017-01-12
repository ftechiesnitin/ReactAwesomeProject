class Api {
  static headers(){
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'dataType': 'json',
    'X-Requested-With': 'XMLHttpRequest',
    'X-Mashape-Key': 'SOME_API_KEY'
  }

  static get(route){
    return this.xhr(route, null, 'GET');
  }

  static xhr(route, params, method){
    const host = 'HOST_URL';
    // const url =
    // API CALL
  }
}
