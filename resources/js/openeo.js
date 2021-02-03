(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"), require("Oidc"));
	else if(typeof define === 'function' && define.amd)
		define(["axios", "Oidc"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("axios"), require("Oidc")) : factory(root["axios"], root["Oidc"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__23__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var equal = __webpack_require__(19);


/**
 * General utilities
 *
 * @class
 */
class Utils {

	/**
	 * Checks whether a variable is a real object or not.
	 *
	 * This is a more strict version of `typeof x === 'object'` as this example would also succeeds for arrays and `null`.
	 * This function only returns `true` for real objects and not for arrays, `null` or any other data types.
	 *
	 * @param {*} obj - A variable to check.
	 * @returns {boolean} - `true` is the given variable is an object, `false` otherwise.
	 */
	static isObject(obj) {
		return (typeof obj === 'object' && obj === Object(obj) && !Array.isArray(obj));
	}

	/**
	 * Performs a deep comparison between two values to determine if they are equivalent.
	 *
	 * @param {*} x - The value to compare.
	 * @param {*} y - The other value to compare.
	 * @returns {boolean} - Returns true if the values are equivalent, else false.
	 */
	static equals(x, y) {
		return equal(x, y);
	}

	/**
	 * Creates an object composed of the picked object properties.
	 *
	 * Returns a shallow copy!
	 *
	 * @param {object} obj - The source object.
	 * @param {string|array} toPick - The properties to pick.
	 * @returns {object}
	 */
	static pickFromObject(obj, toPick) {
		obj = Object(obj);
		if (typeof toPick === 'string') {
			toPick = [toPick];
		}
		const copy = {};
		toPick.forEach(key => copy[key] = obj[key]);
		return copy;
	}

	/**
	 * This method creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
	 *
	 * Returns a shallow copy!
	 *
	 * @param {object} obj - The source object.
	 * @param {string|array} toOmit - The properties to omit.
	 * @returns {object}
	 */
	static omitFromObject(obj, toOmit) {
		obj = Object(obj);
		if (typeof toOmit === 'string') {
			toOmit = [toOmit];
		}
		var copy = Object.assign({}, obj);
		for(let key of toOmit) {
			delete copy[key];
		}
		return copy;
	}

	/**
	 *  Creates an array of values by running each property of `object` thru function.
	 *
	 * The function is invoked with three arguments: (value, key, object).
	 *
	 * @param {object} obj
	 * @param {function} func
	 * @returns {object}
	 */
	static mapObject(obj, func) {
		// Taken from lodash, see https://github.com/lodash/lodash/blob/master/mapObject.js
		const props = Object.keys(obj);
		const result = new Array(props.length);
		props.forEach((key, index) => {
			result[index] = func(obj[key], key, obj);
		});
		return result;
	}

	/**
	 * Creates an object with the same keys as object and values generated by running each own enumerable string keyed property of object thru the function.
	 *
	 * The function is invoked with three arguments: (value, key, object).
	 *
	 * @param {object} obj
	 * @param {function} func
	 * @returns {object}
	 */
	static mapObjectValues(obj, func) {
		// Taken from lodash, see https://github.com/lodash/lodash/blob/master/mapValue.js
		obj = Object(obj);
		const result = {};
		Object.keys(obj).forEach((key) => {
			result[key] = func(obj[key], key, obj);
		});
		return result;
	}

	/**
	 * Creates a duplicate-free version of an array.
	 *
	 * If useEquals is set to true, uses the `Utils.equals` function for comparison instead of
	 * the JS === operator. Thus, if the array contains objects, you likely want to set
	 * `useEquals` to `true`.
	 *
	 * @param {array} array
	 * @param {boolean} useEquals
	 * @returns {array}
	 */
	static unique(array, useEquals = false) {
		if (useEquals) {
			return array.filter((s1, pos, arr) => arr.findIndex(s2 => Utils.equals(s1, s2)) === pos);
		}
		else {
			return [...new Set(array)];
		}
	}

	/**
	 * Computes the size of an array (number of array elements) or object (number of key-value-pairs).
	 *
	 * Returns 0 for all other data types.
	 *
	 * @param {*} obj
	 * @returns {integer}
	 */
	static size(obj) {
		if (typeof obj === 'object' && obj !== null) {
			if (Array.isArray(obj)) {
				return obj.length;
			}
			else {
				return Object.keys(obj).length;
			}
		}
		return 0;
	}

	/**
	 * Checks whether a variable is numeric.
	 *
	 * Numeric is every string with numeric data or a number, excluding NaN and finite numbers.
	 *
	 * @param {*} n - A variable to check.
	 * @returns {boolean} - `true` is the given variable is numeric, `false` otherwise.
	 */
	static isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
     * Deep clone for JSON-compatible data.
     *
     * @param {*} x - The data to clone.
     * @returns {*} - The cloned data.
     */
    static deepClone(x) {
		return JSON.parse(JSON.stringify(x));
    }

	/**
	 * Normalize a URL (mostly handling leading and trailing slashes).
	 *
	 * @static
	 * @param {string} baseUrl - The URL to normalize
	 * @param {string} path - An optional path to add to the URL
	 * @returns {string} Normalized URL.
	 */
	static normalizeUrl(baseUrl, path = null) {
		let url = baseUrl.replace(/\/$/, ""); // Remove trailing slash from base URL
		if (typeof path === 'string') {
			if (path.substr(0, 1) !== '/') {
				path = '/' + path; // Add leading slash to path
			}
			url = url + path.replace(/\/$/, ""); // Remove trailing slash from path
		}
		return url;
	}

	/**
	 * Replaces placeholders in this format: `{var}`.
	 *
	 * This can be used for the placeholders/variables in the openEO API's errors.json file.
	 *
	 * @param {string} message - The string to replace the placeholders in.
	 * @param {object} variables - A map with the placeholder names as keys and the replacement value as value.
	 */
	static replacePlaceholders(message, variables = {}) {
		if (typeof message === 'string' && Utils.isObject(variables)) {
			for(var placeholder in variables) {
				let vars = variables[placeholder];
				message = message.replace('{' + placeholder + '}', Array.isArray(vars) ? vars.join("; ") : vars);
			}
		}
		return message;
	}

	/**
	 * Compares two strings case-insensitive, including natural ordering for numbers.
	 *
	 * @param {string} a
	 * @param {string} b
	 * @returns {integer} Numeric value compatible with the [Array.sort(fn) interface](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Parameters).
	 */
    static compareStringCaseInsensitive(a, b) {
        if (typeof a !== 'string') {
            a = String(a);
        }
        if (typeof b !== 'string') {
            b = String(b);
        }
        return a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'});
    }

	/**
	 * Tries to make a string more readable by capitalizing it.
	 * Only applies to words with more than two characters.
	 *
	 * Supports converting from:
	 * - Snake Case (abc_def => Abc Def)
	 * - Kebab Case (abc-def => Abc Def)
	 * - Camel Case (abcDef => Abc Def)
	 *
	 * Doesn't capitalize if the words are not in any of the casing formats above.
	 *
	 * @param {*} strings - String(s) to make readable
	 * @param {string} arraySep - String to separate array elements with
	 * @returns {string}
	 */
    static prettifyString(strings, arraySep = '; ') {
		if (!Array.isArray(strings)) {
			strings = [String(strings)];
		}
		strings = strings.map(str => {
			if (str.length >= 3) {
				const replacer = (_,a,b) => a + ' ' + b.toUpperCase();
				if (str.includes('_')) {
					// Snake case converter
					str = str.replace(/([a-zA-Z\d])_([a-zA-Z\d])/g, replacer);
				}
				else if (str.includes('-')) {
					// Kebab case converter
					str = str.replace(/([a-zA-Z\d])-([a-zA-Z\d])/g, replacer);
				}
				else {
					// Camelcase converter
					str = str.replace(/([a-z])([A-Z])/g, replacer);
				}
				// Uppercase the first letter in the first word, too.
				return str.charAt(0).toUpperCase() + str.substr(1);
			}
			return str;
		});
		return strings.join(arraySep);
    }

	/**
	 * Makes link lists from the openEO API more user-friendly.
	 *
	 * Supports:
	 * - Set a reasonable title, if not available. Make title more readable.
	 * - Sorting by title (see `sort` parameter)
	 * - Removing given relation types (`rel` property, see `ignoreRel` parameter)
	 *
	 * @param {array} linkList - List of links
	 * @param {boolean} sort - Enable/Disable sorting by title. Enabled (true) by default.
	 * @param {array} ignoreRel - A list of rel types to remove. By default, removes the self links (rel type = `self`).
	 * @returns {array}
	 */
    static friendlyLinks(linkList, sort = true, ignoreRel = ['self']) {
        let links = [];
        if (!Array.isArray(linkList)) {
            return links;
        }

        for(let link of linkList) {
            link = Object.assign({}, link); // Make sure to work on a copy
            if (typeof link.rel === 'string' && ignoreRel.includes(link.rel.toLowerCase())) {
                continue;
            }
            if (typeof link.title !== 'string' || link.title.length === 0) {
                if (typeof link.rel === 'string' && link.rel.length > 1) {
                    link.title = Utils.prettifyString(link.rel);
                }
                else {
                    link.title = link.href.replace(/^https?:\/\/(www.)?/i, '').replace(/\/$/i, '');
                }
            }
            links.push(link);
        }
        if (sort) {
            links.sort((a, b) => Utils.compareStringCaseInsensitive(a.title, b.title));
        }
        return links;
    }

}

module.exports = Utils;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Platform dependant utilities for the openEO JS Client.
 *
 * Browser implementation, don't use in other environments.
 *
 * @hideconstructor
 */
class Environment {
  /**
   * Returns the name of the Environment, here `Browser`.
   *
   * @returns {string}
   * @static
   */
  static getName() {
    return 'Browser';
  }
  /**
   * Handles errors from the API that are returned as Blobs.
   *
   * @ignore
   * @static
   * @param {Blob} error
   * @returns {Promise<void>}
   */


  static handleErrorResponse(error) {
    return new Promise((_, reject) => {
      let fileReader = new FileReader();

      fileReader.onerror = event => {
        fileReader.abort();
        reject(event.target.error);
      };

      fileReader.onload = () => {
        // ArrayBuffer to String conversion is from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
        let res = fileReader.result instanceof ArrayBuffer ? String.fromCharCode.apply(null, new Uint16Array(fileReader.result)) : fileReader.result;
        let obj = typeof res === 'string' ? JSON.parse(res) : res;
        reject(obj);
      };

      fileReader.readAsText(error.response.data);
    });
  }
  /**
   * Returns how binary responses from the servers are returned (`stream` or `blob`).
   *
   * @returns {string}
   * @static
   */


  static getResponseType() {
    return 'blob';
  }
  /**
   * Encodes a string into Base64 encoding.
   *
   * @static
   * @param {string} str - String to encode.
   * @returns {string} String encoded in Base64.
   */


  static base64encode(str) {
    // btoa is JS's ugly name for encodeBase64
    return btoa(str);
  }
  /**
   * Detect the file name for the given data source.
   *
   * @ignore
   * @static
   * @param {*} source - An object from a file upload form.
   * @returns {string}
   */


  static fileNameForUpload(source) {
    return source.name.split(/(\\|\/)/g).pop();
  }
  /**
   * Get the data from the source that should be uploaded.
   *
   * @ignore
   * @static
   * @param {*} source - An object from a file upload form.
   * @returns {*}
   */


  static dataForUpload(source) {
    return source;
  }
  /**
   * Downloads files to local storage and returns a list of file paths.
   *
   * Not supported in Browsers and only throws an Error!
   *
   * @static
   * @param {Connection} con
   * @param {Array.<object.<string, *>>} assets
   * @param {string} targetFolder
   * @throws {Error}
   */


  static async downloadResults(con, assets, targetFolder) {
    // eslint-disable-line no-unused-vars
    throw new Error("downloadResults is not supported in a browser environment.");
  }
  /**
   * Offers data to download in the browser.
   *
   * This method may fail with overly big data.
   *
   * @async
   * @static
   * @param {*} data - Data to download.
   * @param {string} filename - File name that is suggested to the user.
   * @returns {Promise<void>}
   * @see https://github.com/kennethjiang/js-file-download/blob/master/file-download.js
   */


  static saveToFile(data, filename) {
    /* istanbul ignore next */
    return new Promise((resolve, reject) => {
      try {
        if (!(data instanceof Blob)) {
          data = new Blob([data], {
            type: 'application/octet-stream'
          });
        }

        let blobURL = window.URL.createObjectURL(data);
        let tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.href = blobURL;
        tempLink.setAttribute('download', filename || 'download');

        if (typeof tempLink.download === 'undefined') {
          tempLink.setAttribute('target', '_blank');
        }

        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(blobURL);
        resolve();
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

}

module.exports = Environment;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * The base class for authentication providers such as Basic and OpenID Connect.
 *
 * @abstract
 */
class AuthProvider {
  /**
   * Creates a new OidcProvider instance to authenticate using OpenID Connect.
   *
   * @param {string} type - The type of the authentication procedure as specified by the API, e.g. `oidc` or `basic`.
   * @param {Connection} connection - A Connection object representing an established connection to an openEO back-end.
   * @param {AuthProviderMeta} options - Options
   */
  constructor(type, connection, options) {
    this.id = options.id || null;
    this.title = options.title || "";
    this.description = options.description || "";
    this.type = type;
    /**
     * @protected
     * @type {Connection}
     */

    this.connection = connection;
    this.token = null;
  }
  /**
   * Get an identifier for the auth provider (combination of the type + provider identifier).
   *
   * @returns {string}
   */


  getId() {
    let id = this.getType();

    if (this.getProviderId().length > 0) {
      id += '.' + this.getProviderId();
    }

    return id;
  }
  /**
   * Returns the type of the authentication procedure as specified by the API, e.g. `oidc` or `basic`.
   *
   * @returns {string}
   */


  getType() {
    return this.type;
  }
  /**
   * Returns the provider identifier, may not be available for all authentication methods.
   *
   * @returns {string}
   */


  getProviderId() {
    return typeof this.id === 'string' ? this.id : "";
  }
  /**
   * Returns the human-readable title for the authentication method / provider.
   *
   * @returns {string}
   */


  getTitle() {
    return this.title;
  }
  /**
   * Returns the human-readable description for the authentication method / provider.
   *
   * @returns {string}
   */


  getDescription() {
    return this.description;
  }
  /**
   * Returns the access token that is used as Bearer Token in API requests.
   *
   * Returns `null` if no access token has been set yet (i.e. not authenticated any longer).
   *
   * @returns {?string}
   */


  getToken() {
    if (typeof this.token === 'string') {
      return this.getType() + "/" + this.getProviderId() + "/" + this.token;
    } else {
      return null;
    }
  }
  /**
   * Sets the access token that is used as Bearer Token in API requests.
   *
   * Set to `null` to remove the access token.
   *
   * This also manages which auth provider is set for the connection.
   *
   * @param {?string} token
   */


  setToken(token) {
    this.token = token;

    if (this.token !== null) {
      this.connection.authProvider = this;
    } else {
      this.connection.authProvider = null;
    }
  }
  /**
   * Abstract method that extending classes implement the login process with.
   *
   * @param  {...*} args
   * @throws {Error}
   */


  async login(...args) {
    throw new Error("Not implemented.", args);
  }
  /**
   * Logout from the established session.
   *
   * This is experimental and just removes the token for now.
   * May need to be overridden by sub-classes.
   *
   * @async
   */


  async logout() {
    this.setToken(null);
  }

}

module.exports = AuthProvider;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * The base class for entities such as Job, Process Graph, Service etc.
 *
 * @abstract
 */
class BaseEntity {
  /**
   * Creates an instance of this object.
   *
   * @param {Connection} connection - A Connection object representing an established connection to an openEO back-end.
   * @param {Array} properties - A mapping from the API property names to the JS client property names (usually to convert between snake_case and camelCase), e.g. `["id", "title", ["process_graph", "processGraph"]]`
   */
  constructor(connection, properties = []) {
    /**
     * @protected
     * @type {Connection}
     */
    this.connection = connection;
    /**
     * @protected
     * @type {object.<string, string>}
     */

    this.apiToClientNames = {};
    /**
     * @protected
     * @type {object.<string, string>}
     */

    this.clientToApiNames = {};
    /**
     * @protected
     * @type {number}
     */

    this.lastRefreshTime = 0;
    /**
     * Additional (non-standardized) properties received from the API.
     *
     * @protected
     * @type {object.<string, *>}
     */

    this.extra = {};

    for (let i in properties) {
      let backend, client;

      if (Array.isArray(properties[i])) {
        backend = properties[i][0];
        client = properties[i][1];
      } else {
        backend = properties[i];
        client = properties[i];
      }

      this.apiToClientNames[backend] = client;
      this.clientToApiNames[client] = backend;
    }
  }
  /**
   * Returns a JSON serializable representation of the data that is API compliant.
   *
   * @returns {object.<string, *>}
   */


  toJSON() {
    let obj = {};

    for (let key in this.clientToApiNames) {
      let apiKey = this.clientToApiNames[key];

      if (typeof this[key] !== 'undefined') {
        obj[apiKey] = this[key];
      }
    }

    return Object.assign(obj, this.extra);
  }
  /**
   * Converts the data from an API response into data suitable for our JS client models.
   *
   * @param {object.<string, *>} metadata - JSON object originating from an API response.
   * @returns {BaseEntity} Returns the object itself.
   */


  setAll(metadata) {
    for (let name in metadata) {
      if (typeof this.apiToClientNames[name] === 'undefined') {
        this.extra[name] = metadata[name];
      } else {
        this[this.apiToClientNames[name]] = metadata[name];
      }
    }

    this.lastRefreshTime = Date.now();
    return this;
  }
  /**
   * Returns the age of the data in seconds.
   *
   * @returns {number} Age of the data in seconds as integer.
   */


  getDataAge() {
    return (Date.now() - this.lastRefreshTime) / 1000;
  }
  /**
   * Returns all data in the model.
   *
   * @returns {object.<string, *>}
   */


  getAll() {
    let obj = {};

    for (let backend in this.apiToClientNames) {
      let client = this.apiToClientNames[backend];
      obj[client] = this[client];
    }

    return Object.assign(obj, this.extra);
  }
  /**
   * Get a value from the additional data that is not part of the core model, i.e. from proprietary extensions.
   *
   * @param {string} name - Name of the property.
   * @returns {*} The value, which could be of any type.
   */


  get(name) {
    return typeof this.extra[name] !== 'undefined' ? this.extra[name] : null;
  }
  /**
   * Converts the object to a valid objects for API requests.
   *
   * @param {object.<string, *>} parameters
   * @returns {object.<string, *>}
   * @protected
   */


  _convertToRequest(parameters) {
    let request = {};

    for (let key in parameters) {
      if (typeof this.clientToApiNames[key] === 'undefined') {
        request[key] = parameters[key];
      } else {
        request[this.clientToApiNames[key]] = parameters[key];
      }
    }

    return request;
  }
  /**
   * Checks whether a features is supported by the API.
   *
   * @param {string} feature
   * @returns {boolean}
   * @protected
   * @see Capabilities#hasFeature
   */


  _supports(feature) {
    return this.connection.capabilities().hasFeature(feature);
  }

}

module.exports = BaseEntity;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const Utils = __webpack_require__(0);

const Parameter = __webpack_require__(5);
/**
 * A class that represents a process node and also a result from a process.
 */


class BuilderNode {
  /**
   * Creates a new process node for the builder.
   *
   * @param {Builder} parent
   * @param {string} processId
   * @param {object.<string, *>} [processArgs={}]
   * @param {?string} [processDescription=null]
   */
  constructor(parent, processId, processArgs = {}, processDescription = null) {
    /**
     * The parent builder.
     * @type {Builder}
     */
    this.parent = parent;
    /**
     * The specification of the process associated with this node.
     * @type {Process}
     * @readonly
     */

    this.spec = this.parent.spec(processId);

    if (!Utils.isObject(this.spec)) {
      throw new Error("Process doesn't exist: " + processId);
    }
    /**
     * The unique identifier for the node (not the process ID!).
     * @type {string}
     */


    this.id = parent.generateId(processId);
    /**
     * The arguments for the process.
     * @type {object.<string, *>}
     */

    this.arguments = Array.isArray(processArgs) ? this.namedArguments(processArgs) : processArgs;
    /**
     * @ignore
     */

    this._description = processDescription;
    /**
     * Is this the result node?
     * @type {boolean}
     */

    this.result = false;
    this.addParametersToProcess(this.arguments);
  }
  /**
   * Converts a sorted array of arguments to an object with the respective parameter names.
   *
   * @param {Array} processArgs
   * @returns {object.<string, *>}
   * @throws {Error}
   */


  namedArguments(processArgs) {
    if (processArgs.length > (this.spec.parameters || []).length) {
      throw new Error("More arguments specified than parameters available.");
    }

    let obj = {};

    if (Array.isArray(this.spec.parameters)) {
      for (let i = 0; i < this.spec.parameters.length; i++) {
        obj[this.spec.parameters[i].name] = processArgs[i];
      }
    }

    return obj;
  }
  /**
   * Checks the arguments given for parameters and add them to the process.
   *
   * @param {object.<string, *>|Array} processArgs
   */


  addParametersToProcess(processArgs) {
    for (let key in processArgs) {
      let arg = processArgs[key];

      if (arg instanceof Parameter) {
        if (Utils.isObject(arg.spec.schema)) {
          this.parent.addParameter(arg.spec);
        }
      } else if (arg instanceof BuilderNode) {
        this.addParametersToProcess(arg.arguments);
      } else if (Array.isArray(arg) || Utils.isObject(arg)) {
        this.addParametersToProcess(arg);
      }
    }
  }
  /**
   * Gets/Sets a description for the node.
   *
   * Can be used in a variety of ways:
   *
   * By default, this is a function:
   * `node.description()` - Returns the description.
   * `node.description("foo")` - Sets the description to "foo". Returns the node itself for method chaining.
   *
   * You can also "replace" the function (not supported in TypeScript!),
   * then it acts as normal property and the function is not available any longer:
   * `node.description = "foo"` - Sets the description to "foo".
   * Afterwards you can call `node.description` as normal object property.
   *
   * @param {string|undefined} description - Optional: If given, set the value.
   * @returns {string|BuilderNode}
   */


  description(description) {
    if (typeof description === 'undefined') {
      return this._description;
    } else {
      this._description = description;
      return this;
    }
  }
  /**
   * Converts the given argument into something serializable...
   *
   * @protected
   * @param {*} arg - Argument
   * @param {string} name - Parameter name
   * @returns {*}
   */


  exportArgument(arg, name) {
    const Formula = __webpack_require__(9);

    if (Utils.isObject(arg)) {
      if (arg instanceof BuilderNode || arg instanceof Parameter) {
        return arg.ref();
      } else if (arg instanceof Formula) {
        let builder = this.createBuilder(this, name);
        arg.setBuilder(builder);
        arg.generate();
        return builder.toJSON();
      } else if (arg instanceof Date) {
        return arg.toISOString();
      } else if (typeof arg.toJSON === 'function') {
        return arg.toJSON();
      } else {
        let obj = {};

        for (let key in arg) {
          if (typeof arg[key] !== 'undefined') {
            obj[key] = this.exportArgument(arg[key], name);
          }
        }

        return obj;
      }
    } else if (Array.isArray(arg)) {
      return arg.map(element => this.exportArgument(element), name);
    } // export child process graph
    else if (typeof arg === 'function') {
        return this.exportCallback(arg, name);
      } else {
        return arg;
      }
  }
  /**
   * Creates a new Builder, usually for a callback.
   *
   * @protected
   * @param {?BuilderNode} [parentNode=null]
   * @param {?string} parentParameter
   * @returns {BuilderNode}
   */


  createBuilder(parentNode = null, parentParameter = null) {
    const Builder = __webpack_require__(8);

    let builder = new Builder(this.parent.processes, this.parent);

    if (parentNode !== null && parentParameter !== null) {
      builder.setParent(parentNode, parentParameter);
    }

    return builder;
  }
  /**
   * Returns the serializable process for the callback function given.
   *
   * @protected
   * @param {Function} arg - callback function
   * @param {string} name - Parameter name
   * @returns {object.<string, *>}
   * @throws {Error}
   */


  exportCallback(arg, name) {
    let builder = this.createBuilder(this, name);
    let params = builder.getParentCallbackParameters(); // Bind builder to this, so that this.xxx can be used for processes

    let node = arg.bind(builder)(...params);

    if (node instanceof BuilderNode) {
      node.result = true;
      return builder.toJSON();
    } else {
      throw new Error("Callback must return BuilderNode");
    }
  }
  /**
   * Returns a JSON serializable representation of the data that is API compliant.
   *
   * @returns {object.<string, *>}
   */


  toJSON() {
    let obj = {
      process_id: this.spec.id,
      arguments: {}
    };

    for (let name in this.arguments) {
      if (typeof this.arguments[name] !== 'undefined') {
        obj.arguments[name] = this.exportArgument(this.arguments[name], name);
      }
    }

    if (typeof this.description !== 'function') {
      obj.description = this.description;
    } else if (typeof this._description === 'string') {
      obj.description = this._description;
    }

    if (this.result) {
      obj.result = true;
    }

    return obj;
  }
  /**
   * Returns the reference object for this node.
   *
   * @returns {FromNode}
   */


  ref() {
    return {
      from_node: this.id
    };
  }

}

module.exports = BuilderNode;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A class that represents a process parameter.
 *
 * This is used for two things:
 * 1. You can create process parameters (placeholders) with `new Parameter()`.
 * 2. This is passed to functions for the parameters of the sub-process.
 *
 * For the second case, you can access array elements referred to by the parameter
 * with a simplified notation:
 *
 * ```
 * function(data, context) {
 *     data['B1'] // Accesses the B1 element of the array by label
 *     data[1] // Accesses the second element of the array by index
 * }
 * ```
 *
 * Those array calls create corresponding `array_element` nodes in the process. So it's
 * equivalent to
 * `this.array_element(data, undefined, 'B1')` or
 * `this.array_element(data, 1)` respectively.
 *
 * Simple access to numeric labels is not supported. You need to use `array_element` directly, e.g.
 * `this.array_element(data, undefined, 1)`.
 */

class Parameter {
  /**
   * Creates a new parameter instance, but proxies calls to it
   * so that array access is possible (see class description).
   *
   * @static
   * @param {Builder} builder
   * @param {string} parameterName
   * @returns {Proxy<Parameter>}
   */
  static create(builder, parameterName) {
    let parameter = new Parameter(parameterName, null);

    if (typeof Proxy !== "undefined") {
      return new Proxy(parameter, {
        // @ts-ignore
        nodeCache: {},

        /**
         * Getter for array access (see class description).
         *
         * @ignore
         * @param {object} target
         * @param {string|number|symbol} name
         * @param {?*} receiver
         * @returns {*}
         */
        get(target, name, receiver) {
          if (!Reflect.has(target, name)) {
            // @ts-ignore
            if (!this.nodeCache[name]) {
              let args = {
                data: parameter
              };

              if (typeof name === 'string' && name.match(/^(0|[1-9]\d*)$/)) {
                args.index = parseInt(name, 10);
              } else {
                args.label = name;
              } // We assume array_element exists
              // @ts-ignore


              this.nodeCache[name] = builder.process("array_element", args);
            } // @ts-ignore


            return this.nodeCache[name];
          }

          return Reflect.get(target, name, receiver);
        },

        /**
         * Setter for array access.
         *
         * Usually fails as write access to arrays is not supported.
         *
         * @ignore
         * @param {object} target
         * @param {string|number|symbol} name
         * @param {*} value
         * @param {?*} receiver
         * @returns {boolean}
         */
        set(target, name, value, receiver) {
          if (!Reflect.has(target, name)) {
            console.warn('Simplified array access is read-only');
          }

          return Reflect.set(target, name, value, receiver);
        }

      });
    } else {
      console.warn('Simplified array access not supported, use array_element directly');
      return parameter;
    }
  }
  /**
   * Creates a new process parameter.
   *
   * @param {string} name - Name of the parameter.
   * @param {object.<string, *>|string} schema - The schema for the parameter. Can be either an object compliant to JSON Schema or a string with a JSON Schema compliant data type, e.g. `string`.
   * @param {string} description - A description for the parameter
   * @param {*} defaultValue - An optional default Value for the parameter. If set, make the parameter optional. If not set, the parameter is required. Defaults to `undefined`.
   */


  constructor(name, schema = {}, description = "", defaultValue = undefined) {
    this.name = name;
    this.spec = {
      name: name,
      schema: typeof schema === 'string' ? {
        type: schema
      } : schema,
      description: description
    }; // No support for experimental and deprecated yet

    if (typeof defaultValue !== 'undefined') {
      this.spec.optional = true;
      this.spec.default = defaultValue;
    }
  }
  /**
   * Returns a JSON serializable representation of the data that is API compliant.
   *
   * @returns {object.<string, *>}
   */


  toJSON() {
    return this.spec;
  }
  /**
   * Returns the reference object for this parameter.
   *
   * @returns {FromParameter}
   */


  ref() {
    return {
      from_parameter: this.name
    };
  }

}

module.exports = Parameter;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const Utils = __webpack_require__(0);
/**
 * Interface to loop through the logs.
 */


class Logs {
  /**
   * Creates a new Logs instance to retrieve logs from a back-end.
   *
   * @param {Connection} connection - A Connection object representing an established connection to an openEO back-end.
   * @param {string} endpoint - The relative endpoint to request the logs from, usually `/jobs/.../logs` or `/services/.../logs` with `...` being the actual job or service id.
   */
  constructor(connection, endpoint) {
    /**
     * @protected
     * @type {Connection}
     */
    this.connection = connection;
    this.endpoint = endpoint;
    this.lastId = "";
  }
  /**
   * Retrieves the next log entries since the last request.
   *
   * Retrieves log entries only.
   *
   * @async
   * @param {number} limit - The number of log entries to retrieve per request, as integer.
   * @returns {Promise<Array.<Log>>}
   */


  async nextLogs(limit = null) {
    let response = await this.next(limit);
    return Array.isArray(response.logs) ? response.logs : [];
  }
  /**
   * Retrieves the next log entries since the last request.
   *
   * Retrieves the full response compliant to the API, including log entries and links.
   *
   * @async
   * @param {number} limit - The number of log entries to retrieve per request, as integer.
   * @returns {Promise<LogsAPI>}
   */


  async next(limit = null) {
    let query = {
      offset: this.lastId
    };

    if (limit > 0) {
      query.limit = limit;
    }

    let response = await this.connection._get(this.endpoint, query);

    if (Array.isArray(response.data.logs) && response.data.logs.length > 0) {
      response.data.logs = response.data.logs.filter(log => Utils.isObject(log) && typeof log.id === 'string');
      this.lastId = response.data.logs[response.data.logs.length - 1].id;
    } else {
      response.data.logs = [];
    }

    response.data.links = Array.isArray(response.data.links) ? response.data.links : [];
    return response.data;
  }

}

module.exports = Logs;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const BuilderNode = __webpack_require__(4);

const Parameter = __webpack_require__(5);

const axios = __webpack_require__(6).default;

const Utils = __webpack_require__(0);

const ProcessUtils = __webpack_require__(25);

const PROCESS_META = ["id", "summary", "description", "categories", "parameters", "returns", "deprecated", "experimental", "exceptions", "examples", "links"];
/**
 * A class to construct processes easily.
 *
 * An example (`con` is a object of type `Connection`):
 *
 * ```
 * var builder = await con.buildProcess();
 *
 * var datacube = builder.load_collection(
 *   new Parameter("collection-id", "string", "The ID of the collection to load"), // collection-id is then a process parameter that can be specified by users.
 *   { "west": 16.1, "east": 16.6, "north": 48.6, "south": 47.2 },
 *   ["2018-01-01", "2018-02-01"],
 *   ["B02", "B04", "B08"]
 * );
 *
 * // Alternative 1 - using the Formula class
 * var eviAlgorithm = new Formula('2.5 * (($B08 - $B04) / (1 + $B08 + 6 * $B04 + -7.5 * $B02))');
 * // Alternative 2 - "by hand"
 * var eviAlgorithm = function(data) {
 *   var nir = data["B08"]; // Array access by label, accessing label "B08" here
 *   var red = data["B04"];
 *   var blue = data["B02"];
 *   return this.multiply(
 *     2.5,
 *     this.divide(
 *       this.subtract(nir, red),
 *       this.sum([
 *         1,
 *         nir,
 *         this.multiply(6, red),
 *         this.multiply(-7.5, blue)
 *       ])
 *     )
 *   );
 * };
 * datacube = builder.reduce_dimension(datacube, eviAlgorithm, "bands")
 *                   .description("Compute the EVI. Formula: 2.5 * (NIR - RED) / (1 + NIR + 6*RED + -7.5*BLUE)");
 *
 * var min = function(data) { return this.min(data); };
 * datacube = builder.reduce_dimension(datacube, min, "t");
 *
 * datacube = builder.save_result(datacube, "PNG");
 *
 * var storedProcess = await con.setUserProcess("evi", datacube);
 * ```
 */

class Builder {
  /**
   * Creates a Builder instance that can be used without connecting to a back-end.
   *
   * It requests the processes for the version specified from processes.openeo.org.
   * Requests the latest version if no version number is passed.
   *
   * @async
   * @static
   * @param {?string} version
   * @returns {Promise<Builder>}
   * @throws {Error}
   */
  static async fromVersion(version = null) {
    let url = 'https://processes.openeo.org/processes.json';

    if (typeof version === 'string') {
      url = 'https://processes.openeo.org/' + version + '/processes.json';
    }

    return await Builder.fromURL(url);
  }
  /**
   * Creates a Builder instance that can be used without connecting to a back-end.
   *
   * It requests the processes for the version specified from the given URL.
   * CORS needs to be implemented on the server-side for the URL given.
   *
   * @async
   * @static
   * @param {?string} url
   * @returns {Promise<Builder>}
   * @throws {Error}
   */


  static async fromURL(url) {
    let response = await axios(url);
    return new Builder(response.data);
  }
  /**
   * Creates a Builder instance.
   *
   * Each process passed to the constructor is made available as object method.
   *
   * @param {Array.<Process>|Processes} processes - Either an array containing processes or an object compatible with `GET /processes` of the API.
   * @param {?Builder} parent - The parent builder, usually only used by the Builder itself.
   * @param {string} id - A unique identifier for the process.
   */


  constructor(processes, parent = null, id = undefined) {
    if (Array.isArray(processes)) {
      /**
       * @type {Array.<Process>}
       */
      this.processes = processes;
    } else if (Utils.isObject(processes) && Array.isArray(processes.processes)) {
      this.processes = processes.processes;
    } else {
      throw new Error("Processes are invalid; must be array or object according to API.");
    }
    /**
     * The parent builder.
     * @type {?Builder}
     */


    this.parent = parent;
    /**
     * The parent node.
     * @type {?BuilderNode}
     */

    this.parentNode = null;
    /**
     * The parent parameter name.
     * @type {?string}
     */

    this.parentParameter = null;
    this.nodes = {};
    this.idCounter = {};
    this.callbackParameterCache = {};
    this.parameters = undefined;
    /**
     * A unique identifier for the process.
     * @public
     * @type {string}
     */

    this.id = id;

    for (let process of this.processes) {
      if (typeof this[process.id] === 'undefined') {
        /**
         * Implicitly calls the process with the given name on the back-end by adding it to the process.
         *
         * This is a shortcut for {@link Builder#process}.
         *
         * @param {...*} args - The arguments for the process.
         * @returns {BuilderNode}
         * @see Builder#process
         */
        this[process.id] = function (...args) {
          // Don't use arrow functions, they don't support the arguments keyword.
          return this.process(process.id, args);
        };
      } else {
        console.warn("Can't create function for process '" + process.id + "'. Already exists in Builder class.");
      }
    }
  }
  /**
   * Sets the parent for this Builder.
   *
   * @param {BuilderNode} node
   * @param {string} parameterName
   */


  setParent(node, parameterName) {
    this.parentNode = node;
    this.parentParameter = parameterName;
  }
  /**
   * Creates a callback parameter with the given name.
   *
   * @protected
   * @param {string} parameterName
   * @returns {Proxy<Parameter>}
   */


  createCallbackParameter(parameterName) {
    if (!this.callbackParameterCache[parameterName]) {
      this.callbackParameterCache[parameterName] = Parameter.create(this, parameterName);
    }

    return this.callbackParameterCache[parameterName];
  }
  /**
   * Gets the callback parameter specifics from the parent process.
   *
   * @returns {Array}
   * @todo Should this also pass callback parameters from parents until root is reached?
   */


  getParentCallbackParameters() {
    let callbackParams = [];

    if (this.parentNode && this.parentParameter) {
      try {
        callbackParams = ProcessUtils.getCallbackParametersForProcess(this.parentNode.spec, this.parentParameter).map(param => this.createCallbackParameter(param.name));
      } catch (error) {
        console.warn(error);
      }
    }

    return callbackParams;
  }
  /**
   * Adds a parameter to the list of process parameters.
   *
   * Doesn't add the parameter if it has the same name as a callback parameter.
   *
   * @param {object.<string, *>} parameter - The parameter spec to add, must comply to the API.
   * @param {boolean} [root=true] - Adds the parameter to the root process if set to `true`, otherwise to the process constructed by this builder. Usually you want to add it to the root.
   */


  addParameter(parameter, root = true) {
    if (this.getParentCallbackParameters().find(p => p.name === parameter.name) !== undefined) {
      return; // parameter refers to callback
    }
    /**
     * @type {Builder}
     */


    let builder = this;

    if (root) {
      while (builder.parent) {
        builder = builder.parent;
      }
    }

    if (!Array.isArray(builder.parameters)) {
      builder.parameters = [];
    }

    let existing = builder.parameters.findIndex(p => p.name === parameter.name);

    if (existing !== -1) {
      Object.assign(builder.parameters[existing], parameter); // Merge
    } else {
      builder.parameters.push(parameter); // Add
    }
  }
  /**
   * Returns the process specification for the given process identifier.
   *
   * @param {string} id
   * @returns {Process}
   */


  spec(id) {
    return this.processes.find(process => process.id === id);
  }
  /**
   * Adds a mathematical formula to the process.
   *
   * See the {@link Formula} class for more information.
   *
   * @param {string} formula
   * @returns {BuilderNode}
   * @throws {Error}
   * @see Formula
   */


  math(formula) {
    const Formula = __webpack_require__(9);

    let math = new Formula(formula);
    math.setBuilder(this);
    return math.generate(false);
  }
  /**
   * Adds another process call to the process chain.
   *
   * @param {string} processId - The id of the process to call.
   * @param {object.<string, *>|Array} args - The arguments as key-value pairs or as array. For objects, they keys must be the parameter names and the values must be the arguments. For arrays, arguments must be specified in the same order as in the corresponding process.
   * @param {?string} description - An optional description for the process call.
   * @returns {BuilderNode}
   */


  process(processId, args = {}, description = null) {
    let node = new BuilderNode(this, processId, args, description);
    this.nodes[node.id] = node;
    return node;
  }
  /**
   * Returns a JSON serializable representation of the data that is API compliant.
   *
   * @returns {Process}
   */


  toJSON() {
    let process = {
      process_graph: Utils.mapObjectValues(this.nodes, node => node.toJSON())
    };
    PROCESS_META.forEach(key => {
      if (typeof this[key] !== 'undefined') {
        process[key] = this[key];
      }
    });
    return process;
  }
  /**
   * Generates a unique identifier for the process nodes.
   *
   * A prefix can be given to make the identifiers more human-readable.
   * If the given name is empty, the id is simply an incrementing number.
   *
   * @param {string} [prefix=""]
   * @returns {string}
   */


  generateId(prefix = "") {
    prefix = prefix.replace("_", "").substr(0, 6);

    if (!this.idCounter[prefix]) {
      this.idCounter[prefix] = 1;
    } else {
      this.idCounter[prefix]++;
    }

    return prefix + this.idCounter[prefix];
  }

}

module.exports = Builder;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

const TapDigit = __webpack_require__(24);

const Parameter = __webpack_require__(5);

const BuilderNode = __webpack_require__(4);
/**
 * This converts a mathematical formula into a openEO process for you.
 *
 * Operators: - (subtract), + (add), / (divide), * (multiply), ^ (power)
 *
 * It supports all mathematical functions (i.e. expects a number and returns a number) the back-end implements, e.g. `sqrt(x)`.
 *
 * Only available if a builder is specified in the constructor:
 * You can refer to output from processes with a leading `#`, e.g. `#loadco1` if the node to refer to has the key `loadco1`.
 *
 * Only available if a parent node is set via `setNode()`:
 * Parameters can be accessed simply by name.
 * If the first parameter is a (labeled) array, the value for a specific index or label can be accessed by typing the numeric index or textual label with a $ in front, for example $B1 for the label B1 or $0 for the first element in the array. Numeric labels are not supported.
 *
 * An example that computes an EVI (assuming the labels for the bands are `NIR`, `RED` and `BLUE`): `2.5 * ($NIR - $RED) / (1 + $NIR + 6 * $RED + (-7.5 * $BLUE))`
 */


class Formula {
  /**
   * Creates a math formula object.
   *
   * @param {string} formula - A mathematical formula to parse.y
   */
  constructor(formula) {
    let parser = new TapDigit.Parser();
    /**
     * @type {object.<string, *>}
     */

    this.tree = parser.parse(formula);
    /**
     * @type {?Builder}
     */

    this.builder = null;
  }
  /**
   * The builder instance to use.
   *
   * @param {Builder} builder - The builder instance to add the formula to.
   */


  setBuilder(builder) {
    this.builder = builder;
  }
  /**
   * Generates the processes for the formula specified in the constructor.
   *
   * Returns the last node that computes the result.
   *
   * @param {boolean} setResultNode - Set the `result` flag to `true`.
   * @returns {BuilderNode}
   * @throws {Error}
   */


  generate(setResultNode = true) {
    let finalNode = this.parseTree(this.tree);

    if (!(finalNode instanceof BuilderNode)) {
      throw new Error('Invalid formula specified.');
    } // Set result node


    if (setResultNode) {
      finalNode.result = true;
    }

    return finalNode;
  }
  /**
   * Walks through the tree generated by the TapDigit parser and generates process nodes.
   *
   * @protected
   * @param {object.<string, *>} tree
   * @returns {object.<string, *>}
   * @throws {Error}
   */


  parseTree(tree) {
    let key = Object.keys(tree)[0]; // There's never more than one property so no loop required

    switch (key) {
      case 'Number':
        return parseFloat(tree.Number);

      case 'Identifier':
        return this.getRef(tree.Identifier);

      case 'Expression':
        return this.parseTree(tree.Expression);

      case 'FunctionCall':
        {
          let args = [];

          for (let i in tree.FunctionCall.args) {
            args.push(this.parseTree(tree.FunctionCall.args[i]));
          }

          return this.builder.process(tree.FunctionCall.name, args);
        }

      case 'Binary':
        return this.addOperatorProcess(tree.Binary.operator, this.parseTree(tree.Binary.left), this.parseTree(tree.Binary.right));

      case 'Unary':
        {
          let val = this.parseTree(tree.Unary.expression);

          if (tree.Unary.operator === '-') {
            if (typeof val === 'number') {
              return -val;
            } else {
              return this.addOperatorProcess('*', -1, val);
            }
          } else {
            return val;
          }
        }

      default:
        throw new Error('Operation ' + key + ' not supported.');
    }
  }
  /**
   * Gets the reference for a value, e.g. from_node or from_parameter.
   *
   * @protected
   * @param {*} value
   * @returns {*}
   */


  getRef(value) {
    // Convert native data types
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (value === 'null') {
      return null;
    } // Output of a process


    if (typeof value === 'string' && value.startsWith('#')) {
      let nodeId = value.substring(1);

      if (nodeId in this.builder.nodes) {
        return {
          from_node: nodeId
        };
      }
    }

    let callbackParams = this.builder.getParentCallbackParameters(); // Array labels / indices

    if (typeof value === 'string' && value.startsWith('$') && callbackParams.length > 0) {
      let ref = value.substring(1); // Array access always refers to the first parameter passed

      return callbackParams[0][ref];
    } // Everything else is a parameter
    else {
        let parameter = new Parameter(value); // Add new parameter if it doesn't exist

        this.builder.addParameter(parameter);
        return parameter;
      }
  }
  /**
   * Adds a process node for an operator like +, -, *, / etc.
   *
   * @param {string} operator - The operator.
   * @param {number|object.<string, *>} left - The left part for the operator.
   * @param {number|object.<string, *>} right - The right part for the operator.
   * @returns {BuilderNode}
   * @throws {Error}
   */


  addOperatorProcess(operator, left, right) {
    let processName = Formula.operatorMapping[operator];
    let process = this.builder.spec(processName);

    if (processName && process) {
      let args = {};

      if (!Array.isArray(process.parameters) || process.parameters.length < 2) {
        throw new Error("Process for operator " + operator + " must have at least two parameters");
      }

      args[process.parameters[0].name || 'x'] = left;
      args[process.parameters[1].name || 'y'] = right;
      return this.builder.process(processName, args);
    } else {
      throw new Error('Operator ' + operator + ' not supported');
    }
  }

}
/**
 * List of supported operators.
 *
 * All operators must have the parameters be name x and y.
 *
 * The key is the mathematical operator, the value is the process identifier.
 *
 * @type {object.<string, string>}
 */


Formula.operatorMapping = {
  "-": "subtract",
  "+": "add",
  "/": "divide",
  "*": "multiply",
  "^": "power"
};
module.exports = Formula;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const Environment = __webpack_require__(1);

const Utils = __webpack_require__(0);

const AuthProvider = __webpack_require__(2);
/**
 * The Authentication Provider for HTTP Basic.
 *
 * @augments AuthProvider
 */


class BasicProvider extends AuthProvider {
  /**
   * Creates a new BasicProvider instance to authenticate using HTTP Basic.
   *
   * @param {Connection} connection - A Connection object representing an established connection to an openEO back-end.
   */
  constructor(connection) {
    super("basic", connection, {
      id: null,
      title: "HTTP Basic",
      description: "Login with username and password using the method HTTP Basic."
    });
  }
  /**
   * Authenticate with HTTP Basic.
   *
   * @async
   * @param {string} username
   * @param {string} password
   * @returns {Promise<void>}
   * @throws {Error}
   */


  async login(username, password) {
    let response = await this.connection._send({
      method: 'get',
      responseType: 'json',
      url: '/credentials/basic',
      headers: {
        'Authorization': 'Basic ' + Environment.base64encode(username + ':' + password)
      }
    });

    if (!Utils.isObject(response.data) || typeof response.data.access_token !== 'string') {
      throw new Error("No access_token returned.");
    }

    this.setToken(response.data.access_token);
  }

}

module.exports = BasicProvider;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

const Utils = __webpack_require__(0);

const AuthProvider = __webpack_require__(2);

const Oidc = __webpack_require__(23); //Oidc.Log.logger = console;


const UserManagerOptions = {
  response_type: 'token id_token'
};
/**
 * The Authentication Provider for OpenID Connect.
 *
 * See the openid-connect-popup.html and openid-connect-redirect.html files in
 * the `/examples/oidc` folder for usage examples in the browser.
 *
 * If you want to implement OIDC in a non-browser environment, you can override
 * the OidcProvider or AuthProvider classes with custom behavior.
 * In this case you must provide a function that creates your new class to the
 * `Connection.setOidcProviderFactory()` method.
 *
 * @augments AuthProvider
 * @see Connection#setOidcProviderFactory
 */

class OidcProvider extends AuthProvider {
  /**
   * Creates a new OidcProvider instance to authenticate using OpenID Connect.
   *
   * @param {Connection} connection - A Connection object representing an established connection to an openEO back-end.
   * @param {OidcProviderMeta} options - OpenID Connect Provider details as returned by the API.
   */
  constructor(connection, options) {
    super("oidc", connection, options);
    this.issuer = options.issuer;
    this.scopes = options.scopes;
    this.links = options.links;
    this.manager = null;
    this.user = null;
  }
  /**
   * Checks whether the required OIDC client library `openid-client-js` is available.
   *
   * @static
   * @returns {boolean}
   */


  static isSupported() {
    return Utils.isObject(Oidc) && Boolean(Oidc.UserManager);
  }
  /**
   * Globally sets the UI method (redirect, popup) to use for OIDC authentication.
   *
   * @static
   * @param {string} method - Method how to load and show the authentication process. Either `popup` (opens a popup window) or `redirect` (HTTP redirects, default).
   */


  static setUiMethod(method) {
    OidcProvider.uiMethod = method;
  }
  /**
   * Finishes the OpenID Connect sign in (authentication) workflow.
   *
   * Must be called in the page that OpenID Connect redirects to after logging in.
   *
   * @async
   * @static
   * @param {OidcProvider} provider - A OIDC provider to assign the user to.
   * @param {object.<string, *>} [options={}] - Object with additional options.
   * @returns {Promise<Oidc.User>} For uiMethod = 'redirect' only: OIDC User (to be assigned to the Connection via setUser if no provider has been specified).
   * @throws Error
   * @see https://github.com/IdentityModel/oidc-client-js/wiki#other-optional-settings
   */


  static async signinCallback(provider = null, options = {}) {
    let oidc = new Oidc.UserManager(Object.assign({}, UserManagerOptions, options));
    let user = await oidc.signinCallback();

    if (provider && user) {
      provider.setUser(user);
    }

    return user;
  }
  /**
   * Authenticate with OpenID Connect (OIDC).
   *
   * Supported only in Browser environments.
   *
   * @param {string} client_id - Your client application's identifier as registered with the OIDC provider
   * @param {string} redirect_uri - The redirect URI of your client application to receive a response from the OIDC provider.
   * @param {object.<string, *>} [options={}] - Object with authentication options.
   * @returns {Promise<void>}
   * @throws {Error}
   * @see https://github.com/IdentityModel/oidc-client-js/wiki#other-optional-settings
   */


  async login(client_id, redirect_uri, options = {}) {
    if (!this.issuer || typeof this.issuer !== 'string') {
      throw new Error("No Issuer URL available for OpenID Connect");
    } else if (!client_id || typeof client_id !== 'string') {
      throw new Error("No Client ID specified for OpenID Connect");
    } else if (!redirect_uri || typeof redirect_uri !== 'string') {
      throw new Error("No Redirect URI specified for OpenID Connect");
    }

    this.manager = new Oidc.UserManager(Object.assign({
      client_id: client_id,
      redirect_uri: redirect_uri,
      authority: this.issuer.replace('/.well-known/openid-configuration', ''),
      scope: this.getScopes().join(' ')
    }, UserManagerOptions, options));

    if (OidcProvider.uiMethod === 'popup') {
      this.setUser(await this.manager.signinPopup());
    } else {
      await this.manager.signinRedirect();
    }
  }
  /**
   * Returns the OpenID Connect / OAuth scopes.
   *
   * @returns {Array.<string>}
   */


  getScopes() {
    return Array.isArray(this.scopes) && this.scopes.length > 0 ? this.scopes : ['openid'];
  }
  /**
   * Returns the OpenID Connect / OAuth issuer.
   *
   * @returns {string}
   */


  getIssuer() {
    return this.issuer;
  }
  /**
   * Returns the OpenID Connect user instance retrieved from the OIDC client library.
   *
   * @returns {Oidc.User}
   */


  getUser() {
    return this.user;
  }
  /**
   * Sets the OIDC User.
   *
   * @see https://github.com/IdentityModel/oidc-client-js/wiki#user
   * @param {Oidc.User} user - The OIDC User returned by OidcProvider.signinCallback(). Passing `null` resets OIDC authentication details.
   */


  setUser(user) {
    if (!user) {
      this.user = null;
      this.setToken(null);
    } else {
      this.user = user;
      this.setToken(user.access_token);
    }
  }
  /**
   * Logout from the established session.
   *
   * @async
   */


  async logout() {
    if (this.manager !== null) {
      try {
        await this.manager.signoutRedirect();
      } catch (error) {
        console.warn(error);
      }

      super.logout();
      this.manager = null;
      this.setUser(null);
    }
  }

}

OidcProvider.uiMethod = 'redirect';
module.exports = OidcProvider;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const Utils = __webpack_require__(0);
/**
 * Capabilities of a back-end.
 */


class Capabilities {
  /**
   * Creates a new Capabilities object from an API-compatible JSON response.
   *
   * @param {object.<string, *>} data - A capabilities response compatible to the API specification for `GET /`.
   * @throws {Error}
   */
  constructor(data) {
    if (!Utils.isObject(data)) {
      throw new Error("No capabilities retrieved.");
    }

    if (!data.api_version) {
      throw new Error("Invalid capabilities: No API version retrieved");
    }

    if (!Array.isArray(data.endpoints)) {
      throw new Error("Invalid capabilities: No endpoints retrieved");
    }
    /**
     * @private
     * @type {object.<string, *>}
     */


    this.data = data;
    /**
     * @private
     * @type {Array.<string>}
     */

    this.features = this.data.endpoints // Flatten features to be compatible with the feature map.
    .map(e => e.methods.map(method => (method + ' ' + e.path).toLowerCase())).reduce((flat, next) => flat.concat(next), []); // .flat(1) once browser support gets better

    /**
     * @private
     * @ignore
     * @type {object.<string, string>}
     */

    this.featureMap = {
      // Discovery
      capabilities: true,
      listFileTypes: 'get /file_formats',
      listServiceTypes: 'get /service_types',
      listUdfRuntimes: 'get /udf_runtimes',
      // Collections
      listCollections: 'get /collections',
      describeCollection: 'get /collections/{collection_id}',
      // Processes
      listProcesses: 'get /processes',
      describeProcess: 'get /processes',
      // Auth / Account
      listAuthProviders: true,
      authenticateOIDC: 'get /credentials/oidc',
      authenticateBasic: 'get /credentials/basic',
      describeAccount: 'get /me',
      // Files
      listFiles: 'get /files',
      getFile: 'get /files',
      // getFile is a virtual function and doesn't request an endpoint, but get /files should be available nevertheless.
      uploadFile: 'put /files/{path}',
      downloadFile: 'get /files/{path}',
      deleteFile: 'delete /files/{path}',
      // User-Defined Processes
      validateProcess: 'post /validation',
      listUserProcesses: 'get /process_graphs',
      describeUserProcess: 'get /process_graphs/{process_graph_id}',
      getUserProcess: 'get /process_graphs/{process_graph_id}',
      setUserProcess: 'put /process_graphs/{process_graph_id}',
      replaceUserProcess: 'put /process_graphs/{process_graph_id}',
      deleteUserProcess: 'delete /process_graphs/{process_graph_id}',
      // Processing
      computeResult: 'post /result',
      listJobs: 'get /jobs',
      createJob: 'post /jobs',
      listServices: 'get /services',
      createService: 'post /services',
      getJob: 'get /jobs/{job_id}',
      describeJob: 'get /jobs/{job_id}',
      updateJob: 'patch /jobs/{job_id}',
      deleteJob: 'delete /jobs/{job_id}',
      estimateJob: 'get /jobs/{job_id}/estimate',
      debugJob: 'get /jobs/{job_id}/logs',
      startJob: 'post /jobs/{job_id}/results',
      stopJob: 'delete /jobs/{job_id}/results',
      listResults: 'get /jobs/{job_id}/results',
      downloadResults: 'get /jobs/{job_id}/results',
      // Web services
      describeService: 'get /services/{service_id}',
      getService: 'get /services/{service_id}',
      updateService: 'patch /services/{service_id}',
      deleteService: 'delete /services/{service_id}',
      debugService: 'get /services/{service_id}/logs'
    };
  }
  /**
   * Returns the capabilities response as a JSON serializable representation of the data that is API compliant.
   *
   * @returns {object.<string, *>} - A reference to the capabilities response.
   */


  toJSON() {
    return this.data;
  }
  /**
   * Returns the openEO API version implemented by the back-end.
   *
   * @returns {string} openEO API version number.
   */


  apiVersion() {
    return this.data.api_version;
  }
  /**
   * Returns the back-end version number.
   *
   * @returns {string} openEO back-end version number.
   */


  backendVersion() {
    return this.data.backend_version;
  }
  /**
   * Returns the back-end title.
   *
   * @returns {string} Title
   */


  title() {
    return typeof this.data.title === 'string' ? this.data.title : "";
  }
  /**
   * Returns the back-end description.
   *
   * @returns {string} Description
   */


  description() {
    return typeof this.data.description === 'string' ? this.data.description : "";
  }
  /**
   * Is the back-end suitable for use in production?
   *
   * @returns {boolean} true = stable/production, false = unstable
   */


  isStable() {
    return this.data.production === true;
  }
  /**
   * Returns the links.
   *
   * @returns {Array.<Link>} Array of link objects (href, title, rel, type)
   */


  links() {
    return Array.isArray(this.data.links) ? this.data.links : [];
  }
  /**
   * Lists all supported features.
   *
   * @returns {Array.<string>} An array of supported features.
   */


  listFeatures() {
    let features = [];

    for (let feature in this.featureMap) {
      if (this.featureMap[feature] === true || this.features.includes(this.featureMap[feature])) {
        features.push(feature);
      }
    }

    return features.sort();
  }
  /**
   * Check whether a feature is supported by the back-end.
   *
   * @param {string} methodName - A feature name (corresponds to the JS client method names, see also the feature map for allowed values).
   * @returns {boolean} `true` if the feature is supported, otherwise `false`.
   */


  hasFeature(methodName) {
    return this.featureMap[methodName] === true || this.features.some(e => e === this.featureMap[methodName]);
  }
  /**
   * Get the billing currency.
   *
   * @returns {?string} The billing currency or `null` if not available.
   */


  currency() {
    return Utils.isObject(this.data.billing) && typeof this.data.billing.currency === 'string' ? this.data.billing.currency : null;
  }
  /**
   * List all billing plans.
   *
   * @returns {Array.<BillingPlan>} Billing plans
   */


  listPlans() {
    if (Utils.isObject(this.data.billing) && Array.isArray(this.data.billing.plans)) {
      let defaultPlan = typeof this.data.billing.default_plan === 'string' ? this.data.billing.default_plan.toLowerCase() : null;
      return this.data.billing.plans.map(plan => {
        let addition = {
          default: defaultPlan === plan.name.toLowerCase()
        };
        return Object.assign({}, plan, addition);
      });
    } else {
      return [];
    }
  }

}

module.exports = Capabilities;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const Utils = __webpack_require__(0);
/**
 * Manages the files types supported by the back-end.
 */


class FileTypes {
  /**
   * Creates a new FileTypes object from an API-compatible JSON response.
   *
   * @param {FileTypesAPI} data - A capabilities response compatible to the API specification for `GET /file_formats`.
   */
  constructor(data) {
    /**
     * @type {FileTypesAPI}
     */
    this.data = {
      input: {},
      output: {}
    };

    if (!Utils.isObject(data)) {
      return;
    }

    for (let io of ['input', 'output']) {
      for (let type in data[io]) {
        if (!Utils.isObject(data[io])) {
          continue;
        }

        this.data[io][type.toUpperCase()] = data[io][type];
      }
    }
  }
  /**
   * Returns the file types response as a JSON serializable representation of the data that is API compliant.
   *
   * @returns {FileTypesAPI}
   */


  toJSON() {
    return this.data;
  }
  /**
   * Returns the input file formats.
   *
   * @returns {object.<string, FileType>}
   */


  getInputTypes() {
    return this.data.input;
  }
  /**
   * Returns the output file formats.
   *
   * @returns {object.<string, FileType>}
   */


  getOutputTypes() {
    return this.data.output;
  }
  /**
   * Returns a single input file format for a given identifier.
   *
   * Returns null if no input file format was found for the given identifier.
   *
   * @param {string} type - Case-insensitive file format identifier
   * @returns {?FileType}
   */


  getInputType(type) {
    return this._findType(type, 'input');
  }
  /**
   * Returns a single output file format for a given identifier.
   *
   * Returns null if no output file format was found for the given identifier.
   *
   * @param {string} type - Case-insensitive file format identifier
   * @returns {?FileType}
   */


  getOutputType(type) {
    return this._findType(type, 'output');
  }
  /**
   * Get a file type object from the list of input or output file formats.
   *
   * @param {string} type - Identifier of the file type
   * @param {string} io - Either `input` or `output`
   * @returns {?FileType}
   * @protected
   */


  _findType(type, io) {
    type = type.toUpperCase();

    if (type in this.data[io]) {
      return this.data[io][type];
    }

    return null;
  }

}

module.exports = FileTypes;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

const Environment = __webpack_require__(1);

const BaseEntity = __webpack_require__(3);
/**
 * A File on the user workspace.
 *
 * @augments BaseEntity
 */


class UserFile extends BaseEntity {
  /**
   * Creates an object representing a file on the user workspace.
   *
   * @param {Connection} connection - A Connection object representing an established connection to an openEO back-end.
   * @param {string} path - The path to the file, relative to the user workspace and without user ID.
   */
  constructor(connection, path) {
    super(connection, ["path", "size", "modified"]);
    /**
     * Path to the file, relative to the user's directory.
     * @readonly
     * @public
     * @type {string}
     */

    this.path = path;
    /**
     * File size in bytes as integer.
     * @readonly
     * @public
     * @type {number}
     */

    this.size = undefined;
    /**
     * Date and time the file has lastly been modified, formatted as a RFC 3339 date-time.
     * @readonly
     * @public
     * @type {string}
     */

    this.modified = undefined;
  }
  /**
   * Downloads a file from the user workspace into memory.
   *
   * This method has different behaviour depending on the environment.
   * Returns a stream in a NodeJS environment or a Blob in a browser environment.
   *
   * @async
   * @returns {Promise<Stream.Readable|Blob>} - Return value depends on the target and environment, see method description for details.
   * @throws {Error}
   */


  async retrieveFile() {
    return await this.connection.download('/files/' + this.path, true);
  }
  /**
   * Downloads a file from the user workspace and saves it.
   *
   * This method has different behaviour depending on the environment.
   * In a NodeJS environment writes the downloaded file to the target location on the file system.
   * In a browser environment offers the file for downloading using the specified name (folders are not supported).
   *
   * @async
   * @param {string} target - The target, see method description for details.
   * @returns {Promise<Array.<string>|void>} - Return value depends on the target and environment, see method description for details.
   * @throws {Error}
   */


  async downloadFile(target) {
    let data = await this.connection.download('/files/' + this.path, true); // @ts-ignore

    return await Environment.saveToFile(data, target);
  }
  /**
   * A callback that is executed on upload progress updates.
   *
   * @callback uploadStatusCallback
   * @param {number} percentCompleted - The percent (0-100) completed.
   * @param {UserFile} file - The file object corresponding to the callback.
   */

  /**
   * Uploads a file to the user workspace.
   * If a file with the name exists, overwrites it.
   *
   * This method has different behaviour depending on the environment.
   * In a nodeJS environment the source must be a path to a file as string.
   * In a browser environment the source must be an object from a file upload form.
   *
   * @async
   * @param {*} source - The source, see method description for details.
   * @param {?uploadStatusCallback} statusCallback - Optionally, a callback that is executed on upload progress updates.
   * @returns {Promise<UserFile>}
   * @throws {Error}
   */


  async uploadFile(source, statusCallback = null) {
    let options = {
      method: 'put',
      url: '/files/' + this.path,
      data: Environment.dataForUpload(source),
      headers: {
        'Content-Type': 'application/octet-stream'
      }
    };

    if (typeof statusCallback === 'function') {
      options.onUploadProgress = progressEvent => {
        let percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
        statusCallback(percentCompleted, this);
      };
    }

    let response = await this.connection._send(options);
    return this.setAll(response.data);
  }
  /**
   * Deletes the file from the user workspace.
   *
   * @async
   * @throws {Error}
   */


  async deleteFile() {
    await this.connection._delete('/files/' + this.path);
  }

}

module.exports = UserFile;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

const Environment = __webpack_require__(1);

const BaseEntity = __webpack_require__(3);

const Logs = __webpack_require__(7);

const Utils = __webpack_require__(0);

const STOP_STATUS = ['finished', 'canceled', 'error'];
/**
 * A Batch Job.
 *
 * @augments BaseEntity
 */

class Job extends BaseEntity {
  /**
   * Creates an object representing a batch job stored at the back-end.
   *
   * @param {Connection} connection - A Connection object representing an established connection to an openEO back-end.
   * @param {string} jobId - The batch job ID.
   */
  constructor(connection, jobId) {
    super(connection, ["id", "title", "description", "process", "status", "progress", "created", "updated", "plan", "costs", "budget"]);
    /**
     * The identifier of the batch job.
     * @public
     * @readonly
     * @type {string}
     */

    this.id = jobId;
    /**
     * @public
     * @readonly
     * @type {?string}
     */

    this.title = undefined;
    /**
     * @public
     * @readonly
     * @type {?string}
     */

    this.description = undefined;
    /**
     * The process chain to be executed.
     * @public
     * @readonly
     * @type {Process}
     */

    this.process = undefined;
    /**
     * The current status of a batch job.
     * One of "created", "queued", "running", "canceled", "finished" or "error".
     * @public
     * @readonly
     * @type {string}
     */

    this.status = undefined;
    /**
     * Indicates the process of a running batch job in percent.
     * @public
     * @readonly
     * @type {number}
     */

    this.progress = undefined;
    /**
     * Date and time of creation, formatted as a RFC 3339 date-time.
     * @public
     * @readonly
     * @type {string}
     */

    this.created = undefined;
    /**
     * Date and time of the last status change, formatted as a RFC 3339 date-time.
     * @public
     * @readonly
     * @type {string}
     */

    this.updated = undefined;
    /**
     * The billing plan to process and charge the batch job with.
     * @public
     * @readonly
     * @type {string}
     */

    this.plan = undefined;
    /**
     * An amount of money or credits in the currency specified by the back-end.
     * @public
     * @readonly
     * @type {?number}
     */

    this.costs = undefined;
    /**
     * Maximum amount of costs the request is allowed to produce in the currency specified by the back-end.
     * @public
     * @readonly
     * @type {?number}
     */

    this.budget = undefined;
  }
  /**
   * Updates the batch job data stored in this object by requesting the metadata from the back-end.
   *
   * @async
   * @returns {Promise<Job>} The update job object (this).
   * @throws {Error}
   */


  async describeJob() {
    let response = await this.connection._get('/jobs/' + this.id);
    return this.setAll(response.data);
  }
  /**
   * Modifies the batch job at the back-end and afterwards updates this object, too.
   *
   * @async
   * @param {object} parameters - An object with properties to update, each of them is optional, but at least one of them must be specified. Additional properties can be set if the server supports them.
   * @param {Process} parameters.process - A new process.
   * @param {string} parameters.title - A new title.
   * @param {string} parameters.description - A new description.
   * @param {string} parameters.plan - A new plan.
   * @param {number} parameters.budget - A new budget.
   * @returns {Promise<Job>} The updated job object (this).
   * @throws {Error}
   */


  async updateJob(parameters) {
    await this.connection._patch('/jobs/' + this.id, this._convertToRequest(parameters));

    if (this._supports('describeJob')) {
      return await this.describeJob();
    } else {
      return this.setAll(parameters);
    }
  }
  /**
   * Deletes the batch job from the back-end.
   *
   * @async
   * @throws {Error}
   */


  async deleteJob() {
    await this.connection._delete('/jobs/' + this.id);
  }
  /**
   * Calculate an estimate (potentially time/costs/volume) for a batch job.
   *
   * @async
   * @returns {Promise<JobEstimate>} A response compatible to the API specification.
   * @throws {Error}
   */


  async estimateJob() {
    let response = await this.connection._get('/jobs/' + this.id + '/estimate');
    return response.data;
  }
  /**
   * Get logs for the batch job from the back-end.
   *
   * @returns {Logs}
   */


  debugJob() {
    return new Logs(this.connection, '/jobs/' + this.id + '/logs');
  }
  /**
   * Checks for status changes and new log entries every x seconds.
   *
   * On every status change observed or on new log entries (if supported by the
   * back-end and not disabled via `requestLogs`), the callback is executed.
   * It may also be executed once at the beginning.
   * The callback receives the updated job (this object) and the logs (array) passed.
   *
   * The monitoring stops once the job has finished, was canceled or errored out.
   *
   * This is only supported if describeJob is supported by the back-end.
   *
   * Returns a function that can be called to stop monitoring the job manually.
   *
   * @param {Function} callback
   * @param {number} [interval=60] - Interval between update requests, in seconds as integer.
   * @param {boolean} [requestLogs=true] - Enables/Disables requesting logs
   * @returns {Function}
   * @throws {Error}
   */


  monitorJob(callback, interval = 60, requestLogs = true) {
    if (typeof callback !== 'function' || interval < 1) {
      return;
    }

    let capabilities = this.connection.capabilities();

    if (!capabilities.hasFeature('describeJob')) {
      throw new Error('Monitoring Jobs not supported by the back-end.');
    }

    let lastStatus = this.status;
    let intervalId = null;
    let logIterator = null;

    if (capabilities.hasFeature('debugJob') && requestLogs) {
      logIterator = this.debugJob();
    }

    let monitorFn = async () => {
      if (this.getDataAge() > 1) {
        await this.describeJob();
      }

      let logs = logIterator ? await logIterator.nextLogs() : [];

      if (lastStatus !== this.status || logs.length > 0) {
        callback(this, logs);
      }

      lastStatus = this.status;

      if (STOP_STATUS.includes(this.status)) {
        stopFn(); // eslint-disable-line no-use-before-define
      }
    };

    setTimeout(monitorFn, 0);
    intervalId = setInterval(monitorFn, interval * 1000);

    let stopFn = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    return stopFn;
  }
  /**
   * Starts / queues the batch job for processing at the back-end.
   *
   * @async
   * @returns {Promise<Job>} The updated job object (this).
   * @throws {Error}
   */


  async startJob() {
    await this.connection._post('/jobs/' + this.id + '/results', {});

    if (this._supports('describeJob')) {
      return await this.describeJob();
    }

    return this;
  }
  /**
   * Stops / cancels the batch job processing at the back-end.
   *
   * @async
   * @returns {Promise<Job>} The updated job object (this).
   * @throws {Error}
   */


  async stopJob() {
    await this.connection._delete('/jobs/' + this.id + '/results');

    if (this._supports('describeJob')) {
      return await this.describeJob();
    }

    return this;
  }
  /**
   * Retrieves the STAC Item produced for the job results.
   *
   * @async
   * @returns {Promise<object.<string, *>>} The JSON-based response compatible to the API specification, but also including a `costs` property if present in the headers.
   * @throws {Error}
   */


  async getResultsAsItem() {
    let response = await this.connection._get('/jobs/' + this.id + '/results');
    let data = response.data;

    if (!Utils.isObject(data.properties)) {
      data.properties = {};
    }

    if (!Utils.isObject(data.assets)) {
      data.assets = {};
    }

    if (typeof response.headers['openeo-costs'] === 'number') {
      data.properties.costs = response.headers['openeo-costs'];
    }

    return data;
  }
  /**
   * Retrieves download links.
   *
   * @async
   * @returns {Promise<Array.<Link>>} A list of links (object with href, rel, title, type and roles).
   * @throws {Error}
   */


  async listResults() {
    let item = await this.getResultsAsItem();

    if (Utils.isObject(item.assets)) {
      return Object.values(item.assets);
    } else {
      return [];
    }
  }
  /**
   * Downloads the results to the specified target folder. The specified target folder must already exist!
   *
   * NOTE: This method is only supported in a NodeJS environment. In a browser environment this method throws an exception!
   *
   * @async
   * @param {string} targetFolder - A target folder to store the file to, which must already exist.
   * @returns {Promise<Array.<string>|void>} Depending on the environment: A list of file paths of the newly created files (Node), throws in Browsers.
   * @throws {Error}
   */


  async downloadResults(targetFolder) {
    let list = await this.listResults();
    return await Environment.downloadResults(this.connection, list, targetFolder);
  }

}

module.exports = Job;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

const BaseEntity = __webpack_require__(3);
/**
 * A Stored Process Graph.
 *
 * @augments BaseEntity
 */


class UserProcess extends BaseEntity {
  /**
   * Creates an object representing a process graph stored at the back-end.
   *
   * @param {Connection} connection - A Connection object representing an established connection to an openEO back-end.
   * @param {string} id - ID of a stored process graph.
   */
  constructor(connection, id) {
    super(connection, ["id", "summary", "description", "categories", "parameters", "returns", "deprecated", "experimental", "exceptions", "examples", "links", ["process_graph", "processGraph"]]);
    /**
     * The identifier of the process.
     * @public
     * @readonly
     * @type {string}
     */

    this.id = id;
    /**
     * @public
     * @readonly
     * @type {?string}
     */

    this.summary = undefined;
    /**
     * @public
     * @readonly
     * @type {?string}
     */

    this.description = undefined;
    /**
     * A list of categories.
     * @public
     * @readonly
     * @type {Array.<string>}
     */

    this.categories = undefined;
    /**
     * A list of parameters.
     *
     * @public
     * @readonly
     * @type {?Array.<object.<string, *>>}
     */

    this.parameters = undefined;
    /**
     * Description of the data that is returned by this process.
     * @public
     * @readonly
     * @type {?object.<string, *>}
     */

    this.returns = undefined;
    /**
     * Specifies that the process or parameter is deprecated with the potential to be removed in any of the next versions.
     * @public
     * @readonly
     * @type {boolean}
     */

    this.deprecated = undefined;
    /**
     * Declares the process or parameter to be experimental, which means that it is likely to change or may produce unpredictable behaviour.
     * @public
     * @readonly
     * @type {boolean}
     */

    this.experimental = undefined;
    /**
     * Declares any exceptions (errors) that might occur during execution of this process.
     * @public
     * @readonly
     * @type {object.<string, *>}
     */

    this.exceptions = undefined;
    /**
     * @public
     * @readonly
     * @type {Array.<object.<string, *>>}
     */

    this.examples = undefined;
    /**
     * Links related to this process.
     * @public
     * @readonly
     * @type {Array.<Link>}
     */

    this.links = undefined;
    /**
     * @public
     * @readonly
     * @type {object.<string, *>}
     */

    this.processGraph = undefined;
  }
  /**
   * Updates the data stored in this object by requesting the process graph metadata from the back-end.
   *
   * @async
   * @returns {Promise<UserProcess>} The updated process graph object (this).
   * @throws {Error}
   */


  async describeUserProcess() {
    let response = await this.connection._get('/process_graphs/' + this.id);
    return this.setAll(response.data);
  }
  /**
   * Modifies the stored process graph at the back-end and afterwards updates this object, too.
   *
   * @async
   * @param {object} parameters - An object with properties to update, each of them is optional, but at least one of them must be specified. Additional properties can be set if the server supports them.
   * @param {Process} parameters.process - A new process.
   * @param {string} parameters.title - A new title.
   * @param {string} parameters.description - A new description.
   * @returns {Promise<UserProcess>} The updated process graph object (this).
   * @throws {Error}
   */


  async replaceUserProcess(parameters) {
    await this.connection._put('/process_graphs/' + this.id, this._convertToRequest(parameters));

    if (this._supports('describeUserProcess')) {
      return this.describeUserProcess();
    } else {
      return this.setAll(parameters);
    }
  }
  /**
   * Deletes the stored process graph from the back-end.
   *
   * @async
   * @throws {Error}
   */


  async deleteUserProcess() {
    await this.connection._delete('/process_graphs/' + this.id);
  }

}

module.exports = UserProcess;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

const BaseEntity = __webpack_require__(3);

const Logs = __webpack_require__(7);
/**
 * A Secondary Web Service.
 *
 * @augments BaseEntity
 */


class Service extends BaseEntity {
  /**
   * Creates an object representing a secondary web service stored at the back-end.
   *
   * @param {Connection} connection - A Connection object representing an established connection to an openEO back-end.
   * @param {string} serviceId - The service ID.
   */
  constructor(connection, serviceId) {
    super(connection, ["id", "title", "description", "process", "url", "type", "enabled", "configuration", "attributes", "created", "plan", "costs", "budget"]);
    /**
     * The identifier of the service.
     * @public
     * @readonly
     * @type {string}
     */

    this.id = serviceId;
    /**
     * @public
     * @readonly
     * @type {?string}
     */

    this.title = undefined;
    /**
     * @public
     * @readonly
     * @type {?string}
     */

    this.description = undefined;
    /**
     * The process chain to be executed.
     * @public
     * @readonly
     * @type {Process}
     */

    this.process = undefined;
    /**
     * URL at which the secondary web service is accessible
     * @public
     * @readonly
     * @type {string}
     */

    this.url = undefined;
    /**
     * Web service type (protocol / standard) that is exposed.
     * @public
     * @readonly
     * @type {string}
     */

    this.type = undefined;
    /**
     * @public
     * @readonly
     * @type {boolean}
     */

    this.enabled = undefined;
    /**
     * Map of configuration settings, i.e. the setting names supported by the secondary web service combined with actual values.
     * @public
     * @readonly
     * @type {object.<string, *>}
     */

    this.configuration = undefined;
    /**
     * Additional attributes of the secondary web service, e.g. available layers for a WMS based on the bands in the underlying GeoTiff.
     * @public
     * @readonly
     * @type {object.<string, *>}
     */

    this.attributes = undefined;
    /**
     * Date and time of creation, formatted as a RFC 3339 date-time.
     * @public
     * @readonly
     * @type {string}
     */

    this.created = undefined;
    /**
     * The billing plan to process and charge the service with.
     * @public
     * @readonly
     * @type {string}
     */

    this.plan = undefined;
    /**
     * An amount of money or credits in the currency specified by the back-end.
     * @public
     * @readonly
     * @type {?number}
     */

    this.costs = undefined;
    /**
     * Maximum amount of costs the request is allowed to produce in the currency specified by the back-end.
     * @public
     * @readonly
     * @type {?number}
     */

    this.budget = undefined;
  }
  /**
   * Updates the data stored in this object by requesting the secondary web service metadata from the back-end.
   *
   * @async
   * @returns {Promise<Service>} The updates service object (this).
   * @throws {Error}
   */


  async describeService() {
    let response = await this.connection._get('/services/' + this.id);
    return this.setAll(response.data);
  }
  /**
   * Modifies the secondary web service at the back-end and afterwards updates this object, too.
   *
   * @async
   * @param {object} parameters - An object with properties to update, each of them is optional, but at least one of them must be specified. Additional properties can be set if the server supports them.
   * @param {Process} parameters.process - A new process.
   * @param {string} parameters.title - A new title.
   * @param {string} parameters.description - A new description.
   * @param {boolean} parameters.enabled - Enables (`true`) or disables (`false`) the service.
   * @param {object.<string, *>} parameters.configuration - A new set of configuration parameters to set for the service.
   * @param {string} parameters.plan - A new plan.
   * @param {number} parameters.budget - A new budget.
   * @returns {Promise<Service>} The updated service object (this).
   * @throws {Error}
   */


  async updateService(parameters) {
    await this.connection._patch('/services/' + this.id, this._convertToRequest(parameters));

    if (this._supports('describeService')) {
      return await this.describeService();
    } else {
      return this.setAll(parameters);
    }
  }
  /**
   * Deletes the secondary web service from the back-end.
   *
   * @async
   * @throws {Error}
   */


  async deleteService() {
    await this.connection._delete('/services/' + this.id);
  }
  /**
   * Get logs for the secondary web service from the back-end.
   *
   * @returns {Logs}
   */


  debugService() {
    return new Logs(this.connection, '/services/' + this.id + '/logs');
  }
  /**
   * Checks for new log entries every x seconds.
   *
   * On every status change (enabled/disabled) observed or on new log entries
   * (if supported by the back-end and not disabled via `requestLogs`), the
   * callback is executed. It may also be executed once at the beginning.
   * The callback receives the updated service (this object) and the logs (array) passed.
   *
   * Returns a function that can be called to stop monitoring the service manually.
   * The monitoring must be stopped manually, otherwise it runs forever.
   *
   * This is only supported if describeService is supported by the back-end.
   *
   * @param {Function} callback
   * @param {number} [interval=60] - Interval between update requests, in seconds as integer.
   * @param {boolean} [requestLogs=true] - Enables/Disables requesting logs
   * @returns {Function}
   * @throws {Error}
   */


  monitorService(callback, interval = 60, requestLogs = true) {
    if (typeof callback !== 'function' || interval < 1) {
      return;
    }

    let capabilities = this.connection.capabilities();

    if (!capabilities.hasFeature('describeService')) {
      throw new Error('Monitoring Services not supported by the back-end.');
    }

    let wasEnabled = this.enabled;
    let intervalId = null;
    let logIterator = null;

    if (capabilities.hasFeature('debugService') && requestLogs) {
      logIterator = this.debugService();
    }

    let monitorFn = async () => {
      if (this.getDataAge() > 1) {
        await this.describeService();
      }

      let logs = logIterator ? await logIterator.nextLogs() : [];

      if (wasEnabled !== this.enabled || logs.length > 0) {
        callback(this, logs);
      }

      wasEnabled = this.enabled;
    };

    setTimeout(monitorFn, 0);
    intervalId = setInterval(monitorFn, interval * 1000);

    let stopFn = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    return stopFn;
  }

}

module.exports = Service;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

const axios = __webpack_require__(6).default;

const Utils = __webpack_require__(0);

const Versions = __webpack_require__(20); // API wrapper


const Connection = __webpack_require__(22);

const Job = __webpack_require__(15);

const Logs = __webpack_require__(7);

const UserFile = __webpack_require__(14);

const UserProcess = __webpack_require__(16);

const Service = __webpack_require__(17); // Auth Providers


const AuthProvider = __webpack_require__(2);

const BasicProvider = __webpack_require__(10);

const OidcProvider = __webpack_require__(11); // Response wrapper


const Capabilities = __webpack_require__(12);

const FileTypes = __webpack_require__(13); // Builder


const Builder = __webpack_require__(8);

const BuilderNode = __webpack_require__(4);

const Parameter = __webpack_require__(5);

const Formula = __webpack_require__(9);

const MIN_API_VERSION = '1.0.0-rc.2';
const MAX_API_VERSION = '1.x.x';
/**
 * Main class to start with openEO. Allows to connect to a server.
 *
 * @hideconstructor
 */

class OpenEO {
  /**
   * Connect to a back-end with version discovery (recommended).
   *
   * Includes version discovery (request to `GET /well-known/openeo`) and connects to the most suitable version compatible to this JS client version.
   * Requests the capabilities and authenticates where required.
   *
   * @async
   * @param {string} url - The server URL to connect to.
   * @returns {Promise<Connection>}
   * @throws {Error}
   * @static
   */
  static async connect(url) {
    let wellKnownUrl = Utils.normalizeUrl(url, '/.well-known/openeo');
    let response = null;

    try {
      response = await axios.get(wellKnownUrl);

      if (!Utils.isObject(response.data) || !Array.isArray(response.data.versions)) {
        throw new Error("Well-Known Document doesn't list any versions.");
      }
    } catch (error) {
      console.warn("Can't read well-known document, connecting directly to the specified URL as fallback mechanism. Reason: " + error.message);
    }

    if (Utils.isObject(response)) {
      let version = Versions.findLatest(response.data.versions, true, MIN_API_VERSION, MAX_API_VERSION);

      if (version !== null) {
        url = version.url;
      } else {
        throw new Error("Server not supported. Client only supports the API versions between " + MIN_API_VERSION + " and " + MAX_API_VERSION);
      }
    }

    return await OpenEO.connectDirect(url);
  }
  /**
   * Connects directly to a back-end instance, without version discovery (NOT recommended).
   *
   * Doesn't do version discovery, therefore a URL of a versioned API must be specified. Requests the capabilities and authenticates where required.
   *
   * @async
   * @param {string} versionedUrl - The server URL to connect to.
   * @returns {Promise<Connection>}
   * @throws {Error}
   * @static
   */


  static async connectDirect(versionedUrl) {
    let connection = new Connection(versionedUrl); // Check whether back-end is accessible and supports a compatible version.

    let capabilities = await connection.init();

    if (Versions.compare(capabilities.apiVersion(), MIN_API_VERSION, "<") || Versions.compare(capabilities.apiVersion(), MAX_API_VERSION, ">")) {
      throw new Error("Client only supports the API versions between " + MIN_API_VERSION + " and " + MAX_API_VERSION);
    }

    return connection;
  }
  /**
   * Returns the version number of the client.
   *
   * Not to confuse with the API version(s) supported by the client.
   *
   * @returns {string} Version number (according to SemVer).
   */


  static clientVersion() {
    return "1.0.2";
  }

}

OpenEO.Environment = __webpack_require__(1);
module.exports = {
  AuthProvider,
  BasicProvider,
  Capabilities,
  Connection,
  FileTypes,
  Job,
  Logs,
  OidcProvider,
  OpenEO,
  Service,
  UserFile,
  UserProcess,
  Builder,
  BuilderNode,
  Parameter,
  Formula
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst


  var envHasBigInt64Array = typeof BigInt64Array !== 'undefined';


module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

const VersionCompare = __webpack_require__(21);

/** Version Number related methods */
class Versions {

  /**
   * Compare [semver](https://semver.org/) version strings.
   *
   * @param {string} firstVersion First version to compare
   * @param {string} secondVersion Second version to compare
   * @param {string|null} operator Optional; Arithmetic operator to use (>, >=, =, <=, <, !=). Defaults to `null`.
   * @returns {boolean|integer} If operator is not `null`: true` if the comparison between the firstVersion and the secondVersion satisfies the operator, `false` otherwise. If operator is `null`: Numeric value compatible with the [Array.sort(fn) interface](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Parameters).
   * ```
   */
    static compare(v1, v2, operator = null) {
		if (operator !== null) {
			return VersionCompare.compare(v1, v2, operator);
		}
		else {
			return VersionCompare(v1, v2);
		}
	}

  /**
   * Validate [semver](https://semver.org/) version strings.
   *
   * @param {*} version - Version number to validate
   * @returns - `true` if the version number is a valid semver version number, `false` otherwise.
   */
	static validate(version) {
		return VersionCompare.validate(version);
	}

	/**
	 * Tries to determine the most suitable version from a well-known discovery document that software is compatible to.
	 *
	 * @static
	 * @param {array} wkVersions - A well-known discovery document compliant to the API specification.
	 * @param {boolean} preferProduction - Set to `false` to make no difference between production and non-production versions.
	 * @param {string|null} minVersion - The minimum version that should be returned.
	 * @param {string|null} maxVersion - The maximum version that should be returned.
	 * @returns {object[]} - Gives a list that lists all compatible versions (as still API compliant objects) ordered from the most suitable to the least suitable.
	 */
	static findCompatible(wkVersions, preferProduction = true, minVersion = null, maxVersion = null) {
		if (!Array.isArray(wkVersions) || wkVersions.length === 0) {
			return [];
		}

		let compatible = wkVersions.filter(c => {
			if (typeof c.url === 'string' && Versions.validate(c.api_version)) {
				let hasMinVer = Versions.validate(minVersion);
				let hasMaxVer = Versions.validate(maxVersion);
				if (hasMinVer && hasMaxVer) {
					return Versions.compare(c.api_version, minVersion, ">=") && Versions.compare(c.api_version, maxVersion, "<=");
				}
				else if (hasMinVer) {
					return Versions.compare(c.api_version, minVersion, ">=");
				}
				else if (hasMaxVer) {
					return Versions.compare(c.api_version, maxVersion, "<=");
				}
				else {
					return true;
				}
			}
			return false;
		 });
		if (compatible.length === 0) {
			return [];
		}

		return compatible.sort((c1, c2) => {
			let p1 = c1.production === true;
			let p2 = c2.production === true;
			if (!preferProduction || p1 === p2) {
				return Versions.compare(c1.api_version, c2.api_version) * -1; // `* -1` to sort in descending order.
			}
			else if (p1) {
				return -1;
			}
			else {
				return 1;
			}
		});
	}

	/**
	 * Find the latest version from well-known discovery that applies to the specified rules.
	 *
	 * This is basically the same as calling `findCompatible` and using the first element from the result.
	 *
	 * @param {array} wkVersions - A well-known discovery document compliant to the API specification.
	 * @param {boolean} preferProduction - Set to `false` to make no difference between production and non-production versions.
	 * @param {string|null} minVersion - The minimum version that should be returned.
	 * @param {string|null} maxVersion - The maximum version that should be returned.
	 * @returns {object|null}
	 */
	static findLatest(wkVersions, preferProduction = true, minVersion = null, maxVersion = null) {
		let versions = Versions.findCompatible(wkVersions, preferProduction, minVersion, maxVersion);
		if (versions.length > 0) {
			return versions[0];
		}
		else {
			return null;
		}
	}

}

module.exports = Versions;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global define */
(function (root, factory) {
  /* istanbul ignore next */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {

  var semver = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

  function indexOrEnd(str, q) {
    return str.indexOf(q) === -1 ? str.length : str.indexOf(q);
  }

  function split(v) {
    var c = v.replace(/^v/, '').replace(/\+.*$/, '');
    var patchIndex = indexOrEnd(c, '-');
    var arr = c.substring(0, patchIndex).split('.');
    arr.push(c.substring(patchIndex + 1));
    return arr;
  }

  function tryParse(v) {
    return isNaN(Number(v)) ? v : Number(v);
  }

  function validate(version) {
    if (typeof version !== 'string') {
      throw new TypeError('Invalid argument expected string');
    }
    if (!semver.test(version)) {
      throw new Error('Invalid argument not valid semver (\''+version+'\' received)');
    }
  }

  function compareVersions(v1, v2) {
    [v1, v2].forEach(validate);

    var s1 = split(v1);
    var s2 = split(v2);

    for (var i = 0; i < Math.max(s1.length - 1, s2.length - 1); i++) {
      var n1 = parseInt(s1[i] || 0, 10);
      var n2 = parseInt(s2[i] || 0, 10);

      if (n1 > n2) return 1;
      if (n2 > n1) return -1;
    }

    var sp1 = s1[s1.length - 1];
    var sp2 = s2[s2.length - 1];

    if (sp1 && sp2) {
      var p1 = sp1.split('.').map(tryParse);
      var p2 = sp2.split('.').map(tryParse);

      for (i = 0; i < Math.max(p1.length, p2.length); i++) {
        if (p1[i] === undefined || typeof p2[i] === 'string' && typeof p1[i] === 'number') return -1;
        if (p2[i] === undefined || typeof p1[i] === 'string' && typeof p2[i] === 'number') return 1;

        if (p1[i] > p2[i]) return 1;
        if (p2[i] > p1[i]) return -1;
      }
    } else if (sp1 || sp2) {
      return sp1 ? -1 : 1;
    }

    return 0;
  };

  var allowedOperators = [
    '>',
    '>=',
    '=',
    '<',
    '<='
  ];

  var operatorResMap = {
    '>': [1],
    '>=': [0, 1],
    '=': [0],
    '<=': [-1, 0],
    '<': [-1]
  };

  function validateOperator(op) {
    if (typeof op !== 'string') {
      throw new TypeError('Invalid operator type, expected string but got ' + typeof op);
    }
    if (allowedOperators.indexOf(op) === -1) {
      throw new TypeError('Invalid operator, expected one of ' + allowedOperators.join('|'));
    }
  }

  compareVersions.validate = function(version) {
    return typeof version === 'string' && semver.test(version);
  }

  compareVersions.compare = function (v1, v2, operator) {
    // Validate operator
    validateOperator(operator);

    // since result of compareVersions can only be -1 or 0 or 1
    // a simple map can be used to replace switch
    var res = compareVersions(v1, v2);
    return operatorResMap[operator].indexOf(res) > -1;
  }

  return compareVersions;
}));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

const Environment = __webpack_require__(1);

const Utils = __webpack_require__(0);

const axios = __webpack_require__(6).default;

const AuthProvider = __webpack_require__(2);

const BasicProvider = __webpack_require__(10);

const OidcProvider = __webpack_require__(11);

const Capabilities = __webpack_require__(12);

const FileTypes = __webpack_require__(13);

const UserFile = __webpack_require__(14);

const Job = __webpack_require__(15);

const UserProcess = __webpack_require__(16);

const Service = __webpack_require__(17);

const Builder = __webpack_require__(8);

const BuilderNode = __webpack_require__(4);
/**
 * A connection to a back-end.
 */


class Connection {
  /**
   * Creates a new Connection.
   *
   * @param {string} baseUrl - URL to the back-end
   */
  constructor(baseUrl) {
    /**
     * @type {string}
     */
    this.baseUrl = Utils.normalizeUrl(baseUrl);
    /**
     * @type {?Array.<AuthProvider>}
     */

    this.authProviderList = null;
    /**
     * @type {?AuthProvider}
     */

    this.authProvider = null;
    /**
     * @type {?Capabilities}
     */

    this.capabilitiesObject = null;
    this.processes = null;
  }
  /**
   * Initializes the connection by requesting the capabilities.
   *
   * @async
   * @returns {Promise<Capabilities>} Capabilities
   */


  async init() {
    let response = await this._get('/');
    this.capabilitiesObject = new Capabilities(response.data);
    return this.capabilitiesObject;
  }
  /**
   * Returns the URL of the back-end currently connected to.
   *
   * @returns {string} The URL or the back-end.
   */


  getBaseUrl() {
    return this.baseUrl;
  }
  /**
   * Returns the capabilities of the back-end.
   *
   * @returns {Capabilities} Capabilities
   */


  capabilities() {
    return this.capabilitiesObject;
  }
  /**
   * List the supported output file formats.
   *
   * @async
   * @returns {Promise<FileTypes>} A response compatible to the API specification.
   * @throws {Error}
   */


  async listFileTypes() {
    let response = await this._get('/file_formats');
    return new FileTypes(response.data);
  }
  /**
   * List the supported secondary service types.
   *
   * @async
   * @returns {Promise<object.<string, ServiceType>>} A response compatible to the API specification.
   * @throws {Error}
   */


  async listServiceTypes() {
    let response = await this._get('/service_types');
    return response.data;
  }
  /**
   * List the supported UDF runtimes.
   *
   * @async
   * @returns {Promise<object.<string, UdfRuntime>>} A response compatible to the API specification.
   * @throws {Error}
   */


  async listUdfRuntimes() {
    let response = await this._get('/udf_runtimes');
    return response.data;
  }
  /**
   * List all collections available on the back-end.
   *
   * @async
   * @returns {Promise<Collections>} A response compatible to the API specification.
   * @throws {Error}
   */


  async listCollections() {
    let response = await this._get('/collections');
    return response.data;
  }
  /**
   * Get further information about a single collection.
   *
   * @async
   * @param {string} collectionId - Collection ID to request further metadata for.
   * @returns {Promise<Collection>} - A response compatible to the API specification.
   * @throws {Error}
   */


  async describeCollection(collectionId) {
    let response = await this._get('/collections/' + collectionId);
    return response.data;
  }
  /**
   * List all processes available on the back-end.
   *
   * Data is cached in memory.
   *
   * @async
   * @returns {Promise<Processes>} - A response compatible to the API specification.
   * @throws {Error}
   */


  async listProcesses() {
    if (this.processes === null) {
      let response = await this._get('/processes');
      this.processes = response.data;
    }

    return this.processes;
  }
  /**
   * Get information about a single process.
   *
   * @async
   * @param {string} processId - Collection ID to request further metadata for.
   * @returns {Promise<?Process>} - A single process as object, or `null` if none is found.
   * @throws {Error}
   * @see Connection#listProcesses
   */


  async describeProcess(processId) {
    let response = await this.listProcesses();

    if (Array.isArray(response.processes)) {
      let processes = response.processes.filter(process => process.id === processId);

      if (processes.length > 0) {
        return processes[0];
      }
    }

    return null;
  }
  /**
   * Returns an object to simply build user-defined processes.
   *
   * @async
   * @param {string} id - A name for the process.
   * @returns {Promise<Builder>}
   * @throws {Error}
   * @see Connection#listProcesses
   */


  async buildProcess(id) {
    let response = await this.listProcesses();
    return new Builder(response.processes, null, id);
  }
  /**
   * List all authentication methods supported by the back-end.
   *
   * @async
   * @returns {Promise<Array.<AuthProvider>>} An array containing all supported AuthProviders (including all OIDC providers and HTTP Basic).
   * @throws {Error}
   * @see AuthProvider
   */


  async listAuthProviders() {
    if (this.authProviderList !== null) {
      return this.authProviderList;
    }

    this.authProviderList = [];
    let cap = this.capabilities(); // Add OIDC providers

    if (cap.hasFeature('authenticateOIDC')) {
      let res = await this._get('/credentials/oidc');
      let oidcFactory = this.getOidcProviderFactory();

      if (Utils.isObject(res.data) && Array.isArray(res.data.providers) && typeof oidcFactory === 'function') {
        for (let i in res.data.providers) {
          let obj = oidcFactory(res.data.providers[i]);

          if (obj instanceof AuthProvider) {
            this.authProviderList.push(obj);
          }
        }
      }
    } // Add Basic provider


    if (cap.hasFeature('authenticateBasic')) {
      this.authProviderList.push(new BasicProvider(this));
    }

    return this.authProviderList;
  }
  /**
   * This function is meant to create the OIDC providers used for authentication.
   *
   * The function gets passed a single argument that contains the
   * provider information as provided by the API, e.g. having the properties
   * `id`, `issuer`, `title` etc.
   *
   * The function must return an instance of AuthProvider or any derived class.
   * May return `null` if the instance can't be created.
   *
   * @callback oidcProviderFactoryFunction
   * @param {object.<string, *>} providerInfo - The provider information as provided by the API, having the properties `id`, `issuer`, `title` etc.
   * @returns {?AuthProvider}
   */

  /**
   * Sets a factory function that creates custom OpenID Connect provider instances.
   *
   * You only need to call this if you have implemented a new AuthProvider based
   * on the AuthProvider interface (or OIDCProvider class), e.g. to use a
   * OIDC library other than oidc-client-js.
   *
   * @param {?oidcProviderFactoryFunction} providerFactoryFunc
   * @see AuthProvider
   */


  setOidcProviderFactory(providerFactoryFunc) {
    this.oidcProviderFactory = providerFactoryFunc;
  }
  /**
   * Get the OpenID Connect provider factory.
   *
   * Returns `null` if OIDC is not supported by the client or an instance
   * can't be created for whatever reason.
   *
   * @returns {?oidcProviderFactoryFunction}
   * @see AuthProvider
   */


  getOidcProviderFactory() {
    if (typeof this.oidcProviderFactory === 'function') {
      return this.oidcProviderFactory;
    } else {
      if (OidcProvider.isSupported()) {
        return providerInfo => new OidcProvider(this, providerInfo);
      } else {
        return null;
      }
    }
  }
  /**
   * Authenticates with username and password against a back-end supporting HTTP Basic Authentication.
   *
   * DEPRECATED in favor of using `listAuthProviders` and `BasicProvider`.
   *
   * @async
   * @deprecated
   * @param {string} username
   * @param {string} password
   * @see BasicProvider
   * @see Connection#listAuthProviders
   */


  async authenticateBasic(username, password) {
    let basic = new BasicProvider(this);
    await basic.login(username, password);
  }
  /**
   * Returns whether the user is authenticated (logged in) at the back-end or not.
   *
   * @returns {boolean} `true` if authenticated, `false` if not.
   */


  isAuthenticated() {
    return this.authProvider !== null;
  }
  /**
   * Returns the AuthProvider.
   *
   * @returns {?AuthProvider}
   */


  getAuthProvider() {
    return this.authProvider;
  }
  /**
   * Sets the AuthProvider.
   *
   * The provider must have a token set.
   *
   * @param {AuthProvider} provider
   * @throws {Error}
   */


  setAuthProvider(provider) {
    if (provider instanceof AuthProvider && provider.getToken() !== null) {
      this.authProvider = provider;
    } else {
      throw new Error("Invalid auth provider given or no token set.");
    }
  }
  /**
   * Sets the authentication token for the connection.
   *
   * This creates a new custom `AuthProvider` with the given details and returns it.
   * After calling this function you can make requests against the API.
   *
   * This is NOT recommended to use. Only use if you know what you are doing.
   * It is recommended to authenticate through `listAuthProviders` or related functions.
   *
   * @param {string} type - The authentication type, e.g. `basic` or `oidc`.
   * @param {string} providerId - The provider identifier. For OIDC the `id` of the provider.
   * @param {string} token - The actual access token as given by the authentication method during the login process.
   * @returns {AuthProvider}
   */


  setAuthToken(type, providerId, token) {
    this.authProvider = new AuthProvider(type, this, {
      id: providerId,
      title: "Custom",
      description: ""
    });
    this.authProvider.setToken(token);
    return this.authProvider;
  }
  /**
   * Get information about the authenticated user.
   *
   * Updates the User ID if available.
   *
   * @async
   * @returns {Promise<UserAccount>} A response compatible to the API specification.
   * @throws {Error}
   */


  async describeAccount() {
    let response = await this._get('/me');
    return response.data;
  }
  /**
   * Lists all files from the user workspace.
   *
   * @async
   * @returns {Promise<Array.<UserFile>>} A list of files.
   * @throws {Error}
   */


  async listFiles() {
    let response = await this._get('/files');
    return response.data.files.map(f => new UserFile(this, f.path).setAll(f));
  }
  /**
   * A callback that is executed on upload progress updates.
   *
   * @callback uploadStatusCallback
   * @param {number} percentCompleted - The percent (0-100) completed.
   */

  /**
   * Uploads a file to the user workspace.
   * If a file with the name exists, overwrites it.
   *
   * This method has different behaviour depending on the environment.
   * In a nodeJS environment the source must be a path to a file as string.
   * In a browser environment the source must be an object from a file upload form.
   *
   * @async
   * @param {*} source - The source, see method description for details.
   * @param {?string} [targetPath=null] - The target path on the server, relative to the user workspace. Defaults to the file name of the source file.
   * @param {?uploadStatusCallback} [statusCallback=null] - Optionally, a callback that is executed on upload progress updates.
   * @returns {Promise<UserFile>}
   * @throws {Error}
   */


  async uploadFile(source, targetPath = null, statusCallback = null) {
    if (targetPath === null) {
      targetPath = Environment.fileNameForUpload(source);
    }

    let file = await this.getFile(targetPath);
    return await file.uploadFile(source, statusCallback);
  }
  /**
   * Opens a (existing or non-existing) file without reading any information or creating a new file at the back-end.
   *
   * @async
   * @param {string} path - Path to the file, relative to the user workspace.
   * @returns {Promise<UserFile>} A file.
   * @throws {Error}
   */


  async getFile(path) {
    return new UserFile(this, path);
  }
  /**
   * Takes a UserProcess, BuilderNode or a plain object containing process nodes
   * and converts it to an API compliant object.
   *
   * @param {UserProcess|BuilderNode|object.<string, *>} process - Process to be normalized.
   * @param {object.<string, *>} additional - Additional properties to be merged with the resulting object.
   * @returns {object.<string, *>}
   * @protected
   */


  _normalizeUserProcess(process, additional = {}) {
    if (process instanceof UserProcess) {
      process = process.toJSON();
    } else if (process instanceof BuilderNode) {
      process.result = true;
      process = process.parent.toJSON();
    } else if (Utils.isObject(process) && !Utils.isObject(process.process_graph)) {
      process = {
        process_graph: process
      };
    }

    return Object.assign({}, additional, {
      process: process
    });
  }
  /**
   * Validates a user-defined process at the back-end.
   *
   * @async
   * @param {Process} process - User-defined process to validate.
   * @returns {Promise<Array.<ApiError>>} errors - A list of API compatible error objects. A valid process returns an empty list.
   * @throws {Error}
   */


  async validateProcess(process) {
    let response = await this._post('/validation', this._normalizeUserProcess(process).process);

    if (Array.isArray(response.data.errors)) {
      return response.data.errors;
    } else {
      throw new Error("Invalid validation response received.");
    }
  }
  /**
   * Lists all user-defined processes of the authenticated user.
   *
   * @async
   * @returns {Promise<Array.<UserProcess>>} A list of user-defined processes.
   * @throws {Error}
   */


  async listUserProcesses() {
    let response = await this._get('/process_graphs');
    return response.data.processes.map(pg => new UserProcess(this, pg.id).setAll(pg));
  }
  /**
   * Creates a new stored user-defined process at the back-end.
   *
   * @async
   * @param {string} id - Unique identifier for the process.
   * @param {Process} process - A user-defined process.
   * @returns {Promise<UserProcess>} The new user-defined process.
   * @throws {Error}
   */


  async setUserProcess(id, process) {
    let pg = new UserProcess(this, id);
    return await pg.replaceUserProcess(process);
  }
  /**
   * Get all information about a user-defined process.
   *
   * @async
   * @param {string} id - Identifier of the user-defined process.
   * @returns {Promise<UserProcess>} The user-defined process.
   * @throws {Error}
   */


  async getUserProcess(id) {
    let pg = new UserProcess(this, id);
    return await pg.describeUserProcess();
  }
  /**
   * Executes a process synchronously and returns the result as the response.
   *
   * Please note that requests can take a very long time of several minutes or even hours.
   *
   * @async
   * @param {Process} process - A user-defined process.
   * @param {?string} [plan=null] - The billing plan to use for this computation.
   * @param {?number} [budget=null] - The maximum budget allowed to spend for this computation.
   * @returns {Promise<SyncResult>} - An object with the data and some metadata.
   */


  async computeResult(process, plan = null, budget = null) {
    let requestBody = this._normalizeUserProcess(process, {
      plan: plan,
      budget: budget
    });

    let response = await this._post('/result', requestBody, Environment.getResponseType());
    let syncResult = {
      data: response.data,
      costs: null,
      type: null,
      logs: []
    };

    if (typeof response.headers['openeo-costs'] === 'number') {
      syncResult.costs = response.headers['openeo-costs'];
    }

    if (typeof response.headers['content-type'] === 'string') {
      syncResult.type = response.headers['content-type'];
    }

    let links = Array.isArray(response.headers.link) ? response.headers.link : [response.headers.link];

    for (let link of links) {
      if (typeof link !== 'string') {
        continue;
      }

      let logs = link.match(/^<([^>]+)>;\s?rel="monitor"/i);

      if (Array.isArray(logs) && logs.length > 1) {
        try {
          let logsResponse = await this._get(logs[1]);

          if (Utils.isObject(logsResponse.data) && Array.isArray(logsResponse.data.logs)) {
            syncResult.logs = logsResponse.data.logs;
          }
        } catch (error) {
          console.warn(error);
        }
      }
    }

    return syncResult;
  }
  /**
   * Executes a process synchronously and downloads to result the given path.
   *
   * Please note that requests can take a very long time of several minutes or even hours.
   *
   * This method has different behaviour depending on the environment.
   * If a NodeJs environment, writes the downloaded file to the target location on the file system.
   * In a browser environment, offers the file for downloading using the specified name (folders are not supported).
   *
   * @async
   * @param {Process} process - A user-defined process.
   * @param {string} targetPath - The target, see method description for details.
   * @param {?string} [plan=null] - The billing plan to use for this computation.
   * @param {?number} [budget=null] - The maximum budget allowed to spend for this computation.
   * @throws {Error}
   */


  async downloadResult(process, targetPath, plan = null, budget = null) {
    let response = await this.computeResult(process, plan, budget); // @ts-ignore

    await Environment.saveToFile(response.data, targetPath);
  }
  /**
   * Lists all batch jobs of the authenticated user.
   *
   * @async
   * @returns {Promise<Array.<Job>>} A list of jobs.
   * @throws {Error}
   */


  async listJobs() {
    let response = await this._get('/jobs');
    return response.data.jobs.map(j => new Job(this, j.id).setAll(j));
  }
  /**
   * Creates a new batch job at the back-end.
   *
   * @async
   * @param {Process} process - A user-define process to execute.
   * @param {?string} [title=null] - A title for the batch job.
   * @param {?string} [description=null] - A description for the batch job.
   * @param {?string} [plan=null] - The billing plan to use for this batch job.
   * @param {?number} [budget=null] - The maximum budget allowed to spend for this batch job.
   * @param {object.<string, *>} [additional={}] - Proprietary parameters to pass for the batch job.
   * @returns {Promise<Job>} The stored batch job.
   * @throws {Error}
   */


  async createJob(process, title = null, description = null, plan = null, budget = null, additional = {}) {
    additional = Object.assign({}, additional, {
      title: title,
      description: description,
      plan: plan,
      budget: budget
    });

    let requestBody = this._normalizeUserProcess(process, additional);

    let response = await this._post('/jobs', requestBody);

    if (typeof response.headers['openeo-identifier'] !== 'string') {
      throw new Error("Response did not contain a Job ID. Job has likely been created, but may not show up yet.");
    }

    let job = new Job(this, response.headers['openeo-identifier']).setAll(requestBody);

    if (this.capabilitiesObject.hasFeature('describeJob')) {
      return await job.describeJob();
    } else {
      return job;
    }
  }
  /**
   * Get all information about a batch job.
   *
   * @async
   * @param {string} id - Batch Job ID.
   * @returns {Promise<Job>} The batch job.
   * @throws {Error}
   */


  async getJob(id) {
    let job = new Job(this, id);
    return await job.describeJob();
  }
  /**
   * Lists all secondary web services of the authenticated user.
   *
   * @async
   * @returns {Promise<Array.<Job>>} A list of services.
   * @throws {Error}
   */


  async listServices() {
    let response = await this._get('/services');
    return response.data.services.map(s => new Service(this, s.id).setAll(s));
  }
  /**
   * Creates a new secondary web service at the back-end.
   *
   * @async
   * @param {Process} process - A user-defined process.
   * @param {string} type - The type of service to be created (see `Connection.listServiceTypes()`).
   * @param {?string} [title=null] - A title for the service.
   * @param {?string} [description=null] - A description for the service.
   * @param {boolean} [enabled=true] - Enable the service (`true`, default) or not (`false`).
   * @param {object.<string, *>} [configuration={}] - Configuration parameters to pass to the service.
   * @param {?string} [plan=null] - The billing plan to use for this service.
   * @param {?number} [budget=null] - The maximum budget allowed to spend for this service.
   * @param {object.<string, *>} [additional={}] - Proprietary parameters to pass for the batch job.
   * @returns {Promise<Service>} The stored service.
   * @throws {Error}
   */


  async createService(process, type, title = null, description = null, enabled = true, configuration = {}, plan = null, budget = null, additional = {}) {
    let requestBody = this._normalizeUserProcess(process, Object.assign({
      title: title,
      description: description,
      type: type,
      enabled: enabled,
      configuration: configuration,
      plan: plan,
      budget: budget
    }, additional));

    let response = await this._post('/services', requestBody);

    if (typeof response.headers['openeo-identifier'] !== 'string') {
      throw new Error("Response did not contain a Service ID. Service has likely been created, but may not show up yet.");
    }

    let service = new Service(this, response.headers['openeo-identifier']).setAll(requestBody);

    if (this.capabilitiesObject.hasFeature('describeService')) {
      return service.describeService();
    } else {
      return service;
    }
  }
  /**
   * Get all information about a secondary web service.
   *
   * @async
   * @param {string} id - Service ID.
   * @returns {Promise<Service>} The service.
   * @throws {Error}
   */


  async getService(id) {
    let service = new Service(this, id);
    return await service.describeService();
  }
  /**
   * Sends a GET request.
   *
   * @async
   * @param {string} path
   * @param {object.<string, *>} query
   * @param {string} responseType - Response type according to axios, defaults to `json`.
   * @returns {Promise<AxiosResponse>}
   * @throws {Error}
   * @see https://github.com/axios/axios#request-config
   */


  async _get(path, query, responseType) {
    return await this._send({
      method: 'get',
      responseType: responseType,
      url: path,
      // Timeout for capabilities requests as they are used for a quick first discovery to check whether the server is a openEO back-end.
      // Without timeout connecting with a wrong server url may take forever.
      timeout: path === '/' ? 3000 : 0,
      params: query
    });
  }
  /**
   * Sends a POST request.
   *
   * @async
   * @param {string} path
   * @param {*} body
   * @param {string} responseType - Response type according to axios, defaults to `json`.
   * @returns {Promise<AxiosResponse>}
   * @throws {Error}
   * @see https://github.com/axios/axios#request-config
   */


  async _post(path, body, responseType) {
    return await this._send({
      method: 'post',
      responseType: responseType,
      url: path,
      data: body
    });
  }
  /**
   * Sends a PUT request.
   *
   * @async
   * @param {string} path
   * @param {*} body
   * @returns {Promise<AxiosResponse>}
   * @throws {Error}
   */


  async _put(path, body) {
    return await this._send({
      method: 'put',
      url: path,
      data: body
    });
  }
  /**
   * Sends a PATCH request.
   *
   * @async
   * @param {string} path
   * @param {*} body
   * @returns {Promise<AxiosResponse>}
   * @throws {Error}
   */


  async _patch(path, body) {
    return await this._send({
      method: 'patch',
      url: path,
      data: body
    });
  }
  /**
   * Sends a DELETE request.
   *
   * @async
   * @param {string} path
   * @returns {Promise<AxiosResponse>}
   * @throws {Error}
   */


  async _delete(path) {
    return await this._send({
      method: 'delete',
      url: path
    });
  }
  /**
   * Downloads data from a URL.
   *
   * May include authorization details where required.
   *
   * @param {string} url - An absolute or relative URL to download data from.
   * @param {boolean} authorize - Send authorization details (`true`) or not (`false`).
   * @returns {Promise<Stream.Readable|Blob>} - Returns the data as `Stream` in NodeJS environments or as `Blob` in browsers
   * @throws {Error}
   */


  async download(url, authorize) {
    let result = await this._send({
      method: 'get',
      responseType: Environment.getResponseType(),
      url: url,
      authorization: authorize
    });
    return result.data;
  }
  /**
   * Sends a HTTP request.
   *
   * Options mostly conform to axios,
   * see {@link https://github.com/axios/axios#request-config}.
   *
   * Automatically sets a baseUrl and the authorization information.
   * Default responseType is `json`.
   *
   * Tries to smoothly handle error responses by providing an object for all response types,
   * instead of Streams or Blobs for non-JSON response types.
   *
   * @async
   * @param {object.<string, *>} options
   * @returns {Promise<AxiosResponse>}
   * @throws {Error}
   * @see https://github.com/axios/axios
   */


  async _send(options) {
    options.baseURL = this.baseUrl;

    if (this.isAuthenticated() && (typeof options.authorization === 'undefined' || options.authorization === true)) {
      if (!options.headers) {
        options.headers = {};
      }

      options.headers.Authorization = 'Bearer ' + this.authProvider.getToken();
    }

    if (!options.responseType) {
      options.responseType = 'json';
    }

    try {
      return await axios(options);
    } catch (error) {
      if (Utils.isObject(error.response) && Utils.isObject(error.response.data) && (typeof error.response.data.type === 'string' && error.response.data.type.indexOf('/json') !== -1 || Utils.isObject(error.response.data.headers) && typeof error.response.data.headers['content-type'] === 'string' && error.response.data.headers['content-type'].indexOf('/json') !== -1)) {
        if (options.responseType === Environment.getResponseType()) {
          // JSON error responses are Blobs and streams if responseType is set as such, so convert to JSON if required.
          // See: https://github.com/axios/axios/issues/815
          return Environment.handleErrorResponse(error);
        }
      } // Re-throw error if it was not handled yet.


      throw error;
    }
  }

}

module.exports = Connection;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

/*
  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2010 Ariya Hidayat <ariya.hidayat@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the <organization> nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/* eslint-disable jsdoc/require-jsdoc */

/**
 * @ignore
 */
let TapDigit = {
  Token: {
    Operator: 'Operator',
    Identifier: 'Identifier',
    Number: 'Number'
  }
};
const SUP_MAPPING = {
  '⁰': 0,
  '¹': 1,
  '²': 2,
  '³': 3,
  '⁴': 4,
  '⁵': 5,
  '⁶': 6,
  '⁷': 7,
  '⁸': 8,
  '⁹': 9
};
const SUP_STRING = Object.keys(SUP_MAPPING).join('');

TapDigit.Lexer = function () {
  let expression = '',
      length = 0,
      index = 0,
      marker = 0,
      T = TapDigit.Token;

  function peekNextChar() {
    let idx = index;
    return idx < length ? expression.charAt(idx) : '\x00';
  }

  function getNextChar() {
    let ch = '\x00',
        idx = index;

    if (idx < length) {
      ch = expression.charAt(idx);
      index += 1;
    }

    return ch;
  }

  function isWhiteSpace(ch) {
    return ch === '\u0009' || ch === ' ' || ch === '\u00A0';
  }

  function isLetter(ch) {
    return ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z';
  }

  function isDecimalDigit(ch) {
    return ch >= '0' && ch <= '9';
  }

  function createToken(type, value) {
    return {
      type: type,
      value: value,
      start: marker,
      end: index - 1
    };
  }

  function skipSpaces() {
    let ch;

    while (index < length) {
      ch = peekNextChar();

      if (!isWhiteSpace(ch)) {
        break;
      }

      getNextChar();
    }
  }

  function scanOperator() {
    let ch = peekNextChar();

    if (('+-*/()^,' + SUP_STRING).indexOf(ch) >= 0) {
      return createToken(T.Operator, getNextChar());
    }

    return undefined;
  }

  function isIdentifierStart(ch) {
    return ch === '_' || ch === '#' || ch === '$' || isLetter(ch);
  }

  function isIdentifierPart(ch) {
    return ch === '_' || isLetter(ch) || isDecimalDigit(ch);
  }

  function scanIdentifier() {
    let ch;
    let id;
    ch = peekNextChar();

    if (!isIdentifierStart(ch)) {
      return undefined;
    }

    id = getNextChar();

    while (true) {
      ch = peekNextChar();

      if (!isIdentifierPart(ch)) {
        break;
      }

      id += getNextChar();
    }

    return createToken(T.Identifier, id);
  }

  function scanNumber() {
    let ch;
    let number;
    ch = peekNextChar();

    if (!isDecimalDigit(ch) && ch !== '.') {
      return undefined;
    }

    number = '';

    if (ch !== '.') {
      number = getNextChar();

      while (true) {
        ch = peekNextChar();

        if (!isDecimalDigit(ch)) {
          break;
        }

        number += getNextChar();
      }
    }

    if (ch === '.') {
      number += getNextChar();

      while (true) {
        ch = peekNextChar();

        if (!isDecimalDigit(ch)) {
          break;
        }

        number += getNextChar();
      }
    }

    if (ch === 'e' || ch === 'E') {
      number += getNextChar();
      ch = peekNextChar();

      if (ch === '+' || ch === '-' || isDecimalDigit(ch)) {
        number += getNextChar();

        while (true) {
          ch = peekNextChar();

          if (!isDecimalDigit(ch)) {
            break;
          }

          number += getNextChar();
        }
      } else {
        ch = 'character ' + ch;

        if (index >= length) {
          ch = '<end>';
        }

        throw new SyntaxError('Unexpected ' + ch + ' after the exponent sign');
      }
    }

    if (number === '.') {
      throw new SyntaxError('Expecting decimal digits after the dot sign');
    }

    return createToken(T.Number, number);
  }

  function reset(str) {
    expression = str;
    length = str.length;
    index = 0;
  }

  function next() {
    let token;
    skipSpaces();

    if (index >= length) {
      return undefined;
    }

    marker = index;
    token = scanNumber();

    if (typeof token !== 'undefined') {
      return token;
    }

    token = scanOperator();

    if (typeof token !== 'undefined') {
      return token;
    }

    token = scanIdentifier();

    if (typeof token !== 'undefined') {
      return token;
    }

    throw new SyntaxError('Unknown token from character ' + peekNextChar());
  }

  function peek() {
    let token;
    let idx = index;

    try {
      token = next();
      delete token.start;
      delete token.end;
    } catch (e) {
      token = undefined;
    }

    index = idx;
    return token;
  }

  return {
    reset: reset,
    next: next,
    peek: peek
  };
};

TapDigit.Parser = function () {
  let lexer = new TapDigit.Lexer(),
      T = TapDigit.Token;

  function matchOp(token, op) {
    return typeof token !== 'undefined' && token.type === T.Operator && op.includes(token.value);
  } // ArgumentList := Expression |
  //                 Expression ',' ArgumentList


  function parseArgumentList() {
    let token;
    let expr;
    let args = [];

    while (true) {
      expr = parseExpression();

      if (typeof expr === 'undefined') {
        // @todo maybe throw exception?
        break;
      }

      args.push(expr);
      token = lexer.peek();

      if (!matchOp(token, ',')) {
        break;
      }

      lexer.next();
    }

    return args;
  } // FunctionCall ::= Identifier '(' ')' ||
  //                  Identifier '(' ArgumentList ')'


  function parseFunctionCall(name) {
    let args = [];
    let token = lexer.next();

    if (!matchOp(token, '(')) {
      throw new SyntaxError('Expecting ( in a function call "' + name + '"');
    }

    token = lexer.peek();

    if (!matchOp(token, ')')) {
      args = parseArgumentList();
    }

    token = lexer.next();

    if (!matchOp(token, ')')) {
      throw new SyntaxError('Expecting ) in a function call "' + name + '"');
    }

    return {
      'FunctionCall': {
        'name': name,
        'args': args
      }
    };
  } // Primary ::= Identifier |
  //             Number |
  //             '(' Expression ')' |
  //             FunctionCall


  function parsePrimary() {
    let expr;
    let token = lexer.peek();

    if (typeof token === 'undefined') {
      throw new SyntaxError('Unexpected termination of expression');
    }

    if (token.type === T.Identifier) {
      token = lexer.next();

      if (matchOp(lexer.peek(), '(')) {
        return parseFunctionCall(token.value);
      } else {
        return {
          'Identifier': token.value
        };
      }
    }

    if (token.type === T.Number) {
      token = lexer.next();
      return {
        'Number': token.value
      };
    }

    if (matchOp(token, '(')) {
      lexer.next();
      expr = parseExpression();
      token = lexer.next();

      if (!matchOp(token, ')')) {
        throw new SyntaxError('Expecting )');
      }

      return {
        'Expression': expr
      };
    }

    throw new SyntaxError('Parse error, can not process token ' + token.value);
  } // Unary ::= Primary |
  //           '-' Unary


  function parseUnary() {
    let expr;
    let token = lexer.peek();

    if (matchOp(token, '-+')) {
      token = lexer.next();
      expr = parseUnary();
      return {
        'Unary': {
          operator: token.value,
          expression: expr
        }
      };
    }

    return parsePrimary();
  }

  function parseSuperscript(ch) {
    if (typeof SUP_MAPPING[ch] === 'number') {
      return {
        'Number': SUP_MAPPING[ch]
      };
    }

    return null;
  } // Power ::= Unary |
  //           Power '^' Unary |
  //           Power⁰¹²³⁴⁵⁶⁷⁸⁹


  function parsePower() {
    let expr = parseUnary();
    let token = lexer.peek();

    while (matchOp(token, '^' + SUP_STRING)) {
      token = lexer.next();
      expr = {
        'Binary': {
          operator: '^',
          left: expr,
          right: token.value !== '^' ? parseSuperscript(token.value) : parseUnary()
        }
      };
      token = lexer.peek();
    }

    return expr;
  } // Multiplicative ::= Power |
  //                    Multiplicative '*' Power |
  //                    Multiplicative '/' Power |


  function parseMultiplicative() {
    let expr = parsePower();
    let token = lexer.peek();

    while (matchOp(token, '*/')) {
      token = lexer.next();
      expr = {
        'Binary': {
          operator: token.value,
          left: expr,
          right: parsePower()
        }
      };
      token = lexer.peek();
    }

    return expr;
  } // Additive ::= Multiplicative |
  //              Additive '+' Multiplicative |
  //              Additive '-' Multiplicative


  function parseAdditive() {
    let expr = parseMultiplicative();
    let token = lexer.peek();

    while (matchOp(token, '+-')) {
      token = lexer.next();
      expr = {
        'Binary': {
          operator: token.value,
          left: expr,
          right: parseMultiplicative()
        }
      };
      token = lexer.peek();
    }

    return expr;
  } // Expression ::= Additive


  function parseExpression() {
    return parseAdditive();
  }

  function parse(expression) {
    lexer.reset(expression);
    let expr = parseExpression();
    let token = lexer.next();

    if (typeof token !== 'undefined') {
      throw new SyntaxError('Unexpected token ' + token.value);
    }

    return {
      'Expression': expr
    };
  }

  return {
    parse: parse
  };
};

module.exports = TapDigit;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

const Utils = __webpack_require__(0);

/**
 * Utilities to parse process specs and JSON schemas.
 *
 * @class
 */
class ProcessUtils {

	/**
	 * From a "complex" JSON Schema with allOf/anyOf/oneOf, make separate schemas.
	 *
	 * So afterwards each schema has it's own array entry.
	 * It merges allOf, resolves anyOf/oneOf into separate schemas.
	 * May also split the JSON Schema type arrays into separate entries by setting `splitTypes` to `true`.
	 *
	 * @param {object|array} schemas - The JSON Schema(s) to convert
	 * @returns {array}
	 */
	static normalizeJsonSchema(schemas, splitTypes = false) {
		// Make schemas always an array
		if (Utils.isObject(schemas)) {
			schemas = [schemas];
		}
		else if (Array.isArray(schemas)) {
			schemas = schemas;
		}
		else {
			schemas = [];
		}

		// Merge allOf, resolve anyOf/oneOf into separate schemas
		let normalized = [];
		for(let schema of schemas) {
			if (Array.isArray(schema.allOf)) {
				normalized.push(Object.assign({}, ...schema.allOf));
			}
			else if (Array.isArray(schema.oneOf) || Array.isArray(schema.anyOf)) {
				let copy = Utils.omitFromObject(schema, ['oneOf', 'anyOf']);
				let subSchemas = schema.oneOf || schema.anyOf;
				for(let subSchema of subSchemas) {
					normalized.push(Object.assign({}, copy, subSchema));
				}
			}
			else {
				normalized.push(schema);
			}
		}

		if (!splitTypes) {
			return normalized;
		}

		// Split type field into separate schemas
		schemas = [];
		for(let schema of normalized) {
			if (Array.isArray(schema.type)) {
				/* jshint ignore:start */
				schemas = schemas.concat(schema.type.map(type => Object.assign({}, schema, {type: type})));
				/* jshint ignore:end */
			}
			else {
				schemas.push(schema);
			}
		}

		return schemas;
	}

	/**
	 * Returns the callback parameters for a given process parameter.
	 *
	 * @param {object} processParameter - The process parameter spec to parse.
	 * @returns {array}
	 * @throws {Error}
	 */
	static getCallbackParameters(processParameter, keyPath = []) {
		if (!Utils.isObject(processParameter) || !processParameter.schema) {
			return [];
		}

		let schemas = ProcessUtils.normalizeJsonSchema(processParameter.schema);
		let key;
		while(key = keyPath.shift()) { // jshint ignore:line
			schemas = schemas.map(schema => ProcessUtils.normalizeJsonSchema(ProcessUtils.getElementJsonSchema(schema, key))); // jshint ignore:line
			schemas = schemas.concat(...schemas);
		}


		let cbParams = [];
		for(let schema of schemas) {
			if (Array.isArray(schema.parameters)) {
				if (cbParams.length > 0 && !Utils.equals(cbParams, schema.parameters)) {
					throw new Error("Multiple schemas with different callback parameters found.");
				}
				cbParams = schema.parameters;
			}
		}

		return cbParams;
	}

	/**
	 * Returns the callback parameters for a given process parameter from a full process spec.
	 *
	 * @param {object} process - The process to parse.
	 * @param {string} parameterName - The name of the parameter to get the callback parameters for.
	 * @returns {array}
	 * @throws {Error}
	 */
	static getCallbackParametersForProcess(process, parameterName, path = []) {
		if (!Utils.isObject(process) || !Array.isArray(process.parameters)) {
			return [];
		}

		let param = process.parameters.find(p => p.name === parameterName);
		return ProcessUtils.getCallbackParameters(param, path);
	}

	/**
	 * Returns *all* the native JSON data types allowed for the schema.
	 *
	 * @param {object} schema
	 * @param {boolean} anyIsEmpty
	 * @returns {array}
	 */
	static getNativeTypesForJsonSchema(schema, anyIsEmpty = false) {
		if (Utils.isObject(schema) && Array.isArray(schema.type)) {
			// Remove duplicate and invalid types
			let validTypes = Utils.unique(schema.type).filter(type => ProcessUtils.JSON_SCHEMA_TYPES.includes(type));
			if (validTypes.length > 0 && validTypes.length < ProcessUtils.JSON_SCHEMA_TYPES.length) {
				return validTypes;
			}
			else {
				return anyIsEmpty ? [] : ProcessUtils.JSON_SCHEMA_TYPES;
			}
		}
		else if (Utils.isObject(schema) && typeof schema.type === 'string' && ProcessUtils.JSON_SCHEMA_TYPES.includes(schema.type)) {
			return [schema.type];
		}
		else {
			return anyIsEmpty ? [] : ProcessUtils.JSON_SCHEMA_TYPES;
		}
	}

	/**
	 * Returns the schema for a property of an object or an element of an array.
	 *
	 * If you want to retrieve the schema for a specific key, use the parameter `key`.
	 *
	 * @param {object} schema - The JSON schema to parse.
	 * @param {string|integer|null} key - If you want to retrieve the schema for a specific key, otherwise null.
	 * @returns {object} - JSON Schema
	 */
	static getElementJsonSchema(schema, key = null) {
		let types = ProcessUtils.getNativeTypesForJsonSchema(schema);
		if (Utils.isObject(schema) && types.includes('array') && typeof key !== 'string') {
			if (Utils.isObject(schema.items)) {
				// Array with one schema for all items: https://json-schema.org/understanding-json-schema/reference/array.html#id5
				return schema.items;
			}
			else if (Array.isArray(schema.items)) {
				// Tuple validation: https://json-schema.org/understanding-json-schema/reference/array.html#id6
				if (key !== null && Utils.isObject(schema.items[key])) {
					return schema.items[key];
				}
				else if (Utils.isObject(schema.additionalItems)) {
					return schema.additionalItems;
				}
			}
		}
		if (Utils.isObject(schema) && types.includes('object')) {
			if (key !== null && Utils.isObject(schema.properties) && Utils.isObject(schema.properties[key])) {
				return schema.properties[key];
			}
			else if (Utils.isObject(schema.additionalProperties)) {
				return schema.additionalProperties;
			}
			// ToDo: No support for patternProperties yet
		}

		return {};
	}

}

/**
 * A list of all allowed JSON Schema type values.
 *
 * @type {array}
 */
ProcessUtils.JSON_SCHEMA_TYPES = ['string', 'number', 'integer', 'boolean', 'array', 'object', 'null'];

module.exports = ProcessUtils;

/***/ })
/******/ ]);
});
