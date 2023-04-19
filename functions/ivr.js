exports.handler = function (context, event, callback) {
  console.log(`🐞 ivr started.`);
  // console.dir(event);
  const ncco = [
    {
      action: 'talk',
      text: 'SMSを送信するには1を、電話を転送するには2を押して、最後にシャープを押してください。',
      style: 0,
      language: 'ja-JP',
      bargeIn: true,
    },
    {
      action: 'input',
      eventUrl: [`https://${context.DOMAIN_NAME}/ivr-input`],
      maxDigits: 1,
      timeOut: 10,
      submitOnHash: true,
    },
  ];
  callback(null, ncco);
};
