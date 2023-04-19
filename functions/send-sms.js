const { Vonage } = require('@vonage/server-sdk');
exports.handler = async function (context, event, callback) {
  console.log(`🐞 send-sms started.`);
  // Vonage APIを呼び出す
  const vonage = new Vonage({
    apiKey: context.VONAGE_API_KEY,
    apiSecret: context.VONAGE_API_SECRET,
  });
  const { from } = event.payload;

  // SMSを送信する
  try {
    const text = 'お電話ありがとうございました。';
    const response = await vonage.sms.send({
      from: context.BRAND_NAME,
      to: from,
      type: 'unicode',
      text,
    });
    console.log(`🐞 response: ${response}`);
    callback(null, {});
  } catch (err) {
    console.error(err);
    callback(err);
  }
};
