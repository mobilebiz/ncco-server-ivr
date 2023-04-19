exports.handler = function (context, event, callback) {
  console.log(`🐞 event started.`);
  console.log(` status: ${event.status}`);
  callback(null, {});
};
