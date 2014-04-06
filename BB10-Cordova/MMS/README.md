# MMS Plugin for BB10 Cordova / Webworks

The purpose of this Cordova/Webworks plugin is to allow developers to send an MMS from within a Cordova/Webworks project for BlackBerry 10. 
This plugin differs from [invoke](https://developer.blackberry.com/html5/documentation/beta/text_messages.html) 
because the Cordova app itself can send the MMS, where as the invoke feature will launch the MMS app. 

The sample code for this application is Open Source under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.html).

**Author** 

* [HyunJun Jung](http://github.com/hjung)
* [Shikhir Singh](http://code.shikhir.com/)
* [Martin Woolley](https://github.com/mdwoolley)


**Release History**

* **V1.0.0** - Initial release

**Dependencies**

1. Minimal requirement for BlackBerry 10 Device Software is **10.0.9**
2. Minimal requirement for BlackBerry 10 Native SDK is **10.0.9**
3. Minimal requirement for BlackBerry 10 Webworks is **2.0**


**How to install this extension**

1. In command prompt while in your project directory, type: cordova plugin add <path to the /plugin/ directory>
2. Copy the bbMMS.js file into your project (file is located at MMSPlugin-DemoApp/www/js/)
3. Make sure you remember to include it in your index.html file for your app
4. In the config.xml of your project add the following permissions (see the config.xml in www for an example)

```
	<rim:permissions>
	    <rim:permit>access_pimdomain_messages</rim:permit>
	    <rim:permit>access_sms_mms</rim:permit>
	    <rim:permit>access_phone</rim:permit>
	</rim:permissions>
```

**Usage**

bbMMS.send(phonenumber, message, person<optional>);


Example:
```
 
var result=bbMMS.send("2021234567", "What's up Barack?", "Barack Obama" );
if(result===false){
	console.log('MMS Plugin is not installed. You need to run the command : cordova plugin add ../plugin');
}
else{
	if(result.success==false){
	// did you forget a parameter?
		console.log(result.result);
	}
	else{
		console.log('MMS has been sent!');
	}
}
```
 
**How to Build the MMS Plugin for BB10 Cordova**

Assumption: You have installed the BlackBerry Native SDK 2.0+

- Simply import the plugin/src/blackberry10/native directory into a workspace in your NDK. Build the project.


**How to test the MMS Plugin using the demo app provided**

Assumption: You have installed the BlackBerry WebWorks 2.0+ or Cordova 3.3+. If you are using WebWorks instead of Cordova, simply use the command webworks instead of cordova below.

1. Create a Cordova Project : 
```
$ cordova create MMSPlugin-DemoApp community.MMSPlugin.demo MMSPlugin-DemoApp
```

2. If you are using cordova, type you will need to add the BlackBerry platform. If you are using WebWorks 2.0+, ignore this step. 
```
$ cd MMSPlugin-DemoApp
$ cordova platform add blackberry10
```


3. Go to the MMSPlugin-DemoApp directory which was just created, then add the plugin using the following command: 
```
$ cordova plugin add /path/To/plugin/folder
```

4. Delete the folder MMSPlugin-DemoApp/www and replace it with the www folder provided

5. Now you can build the project using: 
```
$ cordova build --release --keystorepass YOUR_PASSWORD_GOES_HERE -buildId 1 
```

**How can I know that this plugin actually works without building it all myself!**

If you don't want to build this sample application yourself we've included a pre-built and signed BAR file. 
You can find it in the folder /build folder. 


**License**

Apache 2.0

**Tested on**

1. Z30 running v10.2
2. Q10 running v10.1


**Known Issues**

None! 


## Contributing Changes

Please see the [README](https://github.com/blackberry/BB10-WebWorks-Community-Samples) of the BB10-WebWorks-Community-Samples repository for instructions on how to add new Samples or make modifications to existing Samples.



## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE 
AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR 
ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR 
OTHER DEALINGS IN THE SOFTWARE.
