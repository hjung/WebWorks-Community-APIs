/*
 * Copyright 2014 BlackBerry Limited.
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
 
 
var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
		// un-sandbox file system to access shared folder
    	blackberry.io.sandbox = false;
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
	},
	sendSMS: function(){
		app.removeResults();
		var phoneNumber = document.getElementById('phoneNumber').value;
		var textMsg = document.getElementById('textMsg').value;
		var subject = document.getElementById('subject').value;
		var mmsAttachmentFilePath = document.getElementById('MMSAttachment').getAttribute('data-logical-path');
		console.log('This is the MMSAttachmentPath for C++ ' + mmsAttachmentFilePath);
		var personName = "";	
		if(phoneNumber.length<3 || textMsg.length==0){
			document.getElementById("results").innerHTML="Error: Both the Phone Number and the Text Message needs to be entered";
			return;
		}
		
		
		console.log("Phone Number:"+phoneNumber);
		console.log("Message:"+textMsg);

		
		bbMMS.sendAsync(app.smsCallback, phoneNumber, textMsg, personName, mmsAttachmentFilePath, subject); // <----- THIS Calls bbSMS.js file. Include bbSMS.js in your project. 
		
	},
	smsCallback: function(output){
		if(output===false){
			document.getElementById("results").innerHTML="Error: Could find the SMSPlugin. Re-Check your installation";
			return;
		}
		app.displayResult(output);
		
	},
	displayResult: function(result){
	
		document.getElementById("results").innerHTML=			 "<br><b>Success:</b> "+result.success	
																+"<br><b>Account ID:</b> "+result.smsAccountID
																+"<br><b>Recipient Address:</b> "+result.recipientAddress
																+"<br><b>Conversation ID:</b> "+result.conversationId				
																+"<br><b>Message ID:</b> "+result.messageId
																+"<br><b>Message:</b> "+result.message
																+"<br><b>Message:</b> "+result.subject;
	},
	removeResults: function(){
		document.getElementById("results").innerHTML="Attempting to Send...";
	},
	openFilePicker: function() {
		console.log('about to invoke the file picker for pictures only.');
		
	// filepicker options
	var details = {
		mode: blackberry.invoke.card.FILEPICKER_MODE_PICKER,
		viewMode: blackberry.invoke.card.FILEPICKER_VIEWER_MODE_GRID,
		sortBy: blackberry.invoke.card.FILEPICKER_SORT_BY_NAME,
		sortOrder: blackberry.invoke.card.FILEPICKER_SORT_ORDER_DESCENDING,
		filter: ["*.jpg", "*.png", "*.jpeg", "*.bmp"]
	};

	blackberry.invoke.card.invokeFilePicker(details, function(path) {
		
		console.log('this is the file path! ' + path);
		document.getElementById('MMSThumbnail').innerHTML = '<img id="MMSAttachment" class="resize" src="file://' + path + '" data-logical-path="' + path + '"/>';
	},

	// cancel callback
	function(reason) {
		console.log("The user cancelled the file picker selection card " + reason);
	},

	// error callback
	function(error) {
		if(error) {
			alert("Invocation error occured. Please check the logs in debug mode " + error);
		} else {
			console.log("invoke success ");
		}
	});
	},
	// display a simple toast message
showToast: function showToast(msg) {
	blackberry.ui.toast.show(msg, {});
}
};