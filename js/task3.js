
function createURL(str, obj) {
  return Object.keys(obj).reduce(function (result, key) {
    return result.replace('{'+key+'}', obj[key]);
  }, str);
}

let url = createURL(
 '/api/countries/{country}/regions/{region}/',
 { country: 'Ukraine', region: 'Kiev'}
);

console.log(url);
