/*
* Copyright 2013 Research In Motion Limited.
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

var _self = {},
	_ID = require("./manifest.json").namespace;

	// These methods are called by your App's JavaScript
	// They make WebWorks function calls to the methods
	// in the index.js of the Extension

	// Simple Synchronous test function to get a string
	_self.discover = function (timeout, devtype) {
		if(typeof timeout == 'undefined') {
			timeout = 1000;
			}
		if(typeof devtype == 'undefined') {
			devtype = "upnp:rootdevice";
			}
		return window.webworks.execSync(_ID, "discover", { timeout: timeout, devtype: devtype });
	};

module.exports = _self;
