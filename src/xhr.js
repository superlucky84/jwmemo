
const objectToQuerystring = function(obj) {
  if (!obj) {
    return {};
  }
  var filterkeys = Object.keys(obj).filter(function(key) {
    return obj[key] !== '' && obj[key] !== null;
  });

  return filterkeys.reduce(function(acc, key, index) {
    var startWith = index === 0 ? '' : '&';
    var value = obj[key];
    if (Array.isArray(value)) {
      value.forEach(arrValue => {
        acc += `${startWith}${key}[]=${arrValue}`;
      });
    } else {
      acc += `${startWith}${key}=${value}`;
    }

    return acc;
  }, '');
};

const createXhr = function(method, url, data, contentType) {
  return new Promise(function (resolve, reject) {

    var xhr = new XMLHttpRequest();

    if ('withCredentials' in xhr) {
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200 && resolve) {
            resolve(xhr.response);
          } else {
            reject('xhr error');
          }
        }
      };
      xhr.open(method, url, false);
      xhr.withCredentials = true;

      if (contentType) {
        xhr.setRequestHeader("Content-Type", contentType);
      }
    } else if (typeof XDomainRequest !== 'undefined') {
      xhr = new XDomainRequest();
      xhr.onprogress = function() {}; // no aborting
      xhr.ontimeout = function() {}; // "
      xhr.open(method, url);
    } else {
      xhr = null;
    }

    xhr.send(objectToQuerystring(data));
  });
};


export default async function ajax(ajaxRequestInfo) {
  let url = ajaxRequestInfo.url;
  const method = ajaxRequestInfo.method;
  const data = ajaxRequestInfo.data;
  const success = ajaxRequestInfo.success;
  const fail = ajaxRequestInfo.fail;
  const options = ajaxRequestInfo.options || {};
  const contentType = ajaxRequestInfo.contentType;

  if (method !== 'POST' && data) {
    url += `?${objectToQuerystring(data)}`;
  }
  const result = await createXhr(method, url, data, contentType);

  return JSON.parse(result);
}

