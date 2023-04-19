exports.handler = function (context, event, callback) {
  console.log(`🐞 ivr-input started.`);
  console.dir(event);
  const { dtmf } = event;
  const ncco = [];
  switch (dtmf) {
    case '1': // dtmf is 1
      console.log(`🐞 dtmf is 1.`);
      ncco.push({
        action: 'talk',
        text: 'SMSを送信します。',
        style: 0,
        language: 'ja-JP',
      });
      ncco.push({
        action: 'notify',
        payload: {
          from: event.from,
        },
        eventUrl: [`https://${context.DOMAIN_NAME}/send-sms`],
      });
      break;
    case '2': // dtmf is 2
      console.log(`🐞 dtmf is 2.`);
      ncco.push({
        action: 'talk',
        text: '電話を転送します。',
        style: 0,
        language: 'ja-JP',
      });
      ncco.push({
        action: 'connect',
        from: context.FROM_NUMBER,
        endpoint: [
          {
            type: 'phone',
            number: context.TO_NUMBER,
          },
        ],
      });
      break;
    default: // dtmf is not 1 or 2
      console.log(`🐞 dtmf is not 1 or 2.`);
      ncco.push({
        action: 'notify',
        payload: {
          dtmf,
        },
        eventUrl: [`https://${context.DOMAIN_NAME}/ivr`],
      });
      break;
  }
  callback(null, ncco);
};
