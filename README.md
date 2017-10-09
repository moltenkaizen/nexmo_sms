# nexmo_sms


* `npm install`
* Add a `config.js`
<pre>
const config = {
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
  number: your-number
}

module.exports = config
</pre>

* `npm start`
* fire up Postman or some similar API tool and send a POST request to /send with a raw JSON body
<pre>
{
	"toNumber": "1234567890",
	"message": "Hello World"
}
</pre>

References:
* https://www.nexmo.com/blog/2016/10/19/how-to-send-sms-messages-with-node-js-and-express-dr/
