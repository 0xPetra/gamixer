// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");
const home = require('./home.js');

const app = new App({
  token: 'xoxb-363206332737-848974909814-buayNalG7GDzHHRIXWZ9c6vU', //process.env.SLACK_BOT_TOKEN,
  signingSecret: '8cce5bfb5bc8c4f9cfeea5fa02c33bea' //process.env.SLACK_SIGNING_SECRET
});

  // All the room in the world for your code
  home(app);


// Listen for a button invocation with action_id `button_abc` (assume it's inside of a modal)
app.action('button_abc', ({ ack, body, context }) => {
  // Acknowledge the button request
  ack();
  try {
    console.log('try worked', body);
  }
  catch (error) {
    console.log('======>', error);
  }
});

(async () => {
  await app.start(process.env.PORT || 3000)
  console.log('The value of PORT is:', process.env.PORT);
  console.log('⚡️ GaMixer is running!');
})();
