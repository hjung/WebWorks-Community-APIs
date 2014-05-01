/*
* Copyright (c) 2013 BlackBerry Limited
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// Raw API
var _self = {},
	_ID = "com.blackberry.community.extractZipFile",
	exec = cordova.require("cordova/exec");


_self.extract = function (options, callback) {

	var wrapped_callback = function (data, response) {
			callback(JSON.parse(data));
		};
	exec(wrapped_callback, wrapped_callback, _ID, "extract", [options]);
};

_self.compress = function (options, callback) {

	var wrapped_callback = function (data, response) {
			callback(JSON.parse(data));
		};
	exec(wrapped_callback, wrapped_callback, _ID, "compress", [options]);
};

module.exports = _self;
