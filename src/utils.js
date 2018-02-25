import pathOr from "lodash/fp/pathOr";
import curry from "lodash/fp/curry";

export const getLabels = curry((labelObj, path) =>
  pathOr(path, path, labelObj)
);

const noop = () => null;

export const triggerServerRequest = (
  options = {},
  successCallback,
  failiureCallback = noop
) => {
  const url = options.url || "/";
  const method = options.method || "GET";
  const data = options.data || {};
  var urlEncodedData = "";
  var urlEncodedDataPairs = [];
  for (let name in data) {
    if (data[name])
      urlEncodedDataPairs.push(
        encodeURIComponent(name) + "=" + JSON.stringify(data[name])
      );
  }
  urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.addEventListener("load", () => {
      resolve({
        response: xhr.response,
        status: xhr.status
      });
    });
    xhr.addEventListener("error", () => {
      reject({
        response: xhr.response,
        status: xhr.status
      });
    });
    if (urlEncodedData) {
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    xhr.send(urlEncodedData);
  })
    .then(successCallback)
    .catch(failiureCallback);
};
