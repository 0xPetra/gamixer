// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");
const home = require('./home.js');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

  // All the room in the world for your code
  home(app);

  app.command('/newgame', async ({ command, ack, say }) => {
    // Acknowledge command request
    // console.log('command', command)
    ack();
    say(`${command.text}`);
  });


  // When a user joins the team, send a message in a predefined channel asking them to introduce themselves
app.event('app_mention', async ({ event, context }) => {
  console.log('gameMixer was mentioned', event, '##################', context)
  try {
    const result = await app.client.chat.postMessage({
      token: context.botToken,
      channel: event.channel,
      text: `Hey there, you need help? Here are some commands to ger started :rocket: :`
      // TODO: Add workspace
    });
    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
});


(async () => {
  await app.start(process.env.PORT || 3000)
  console.log('The value of PORT is:', process.env.PORT);
  console.log('⚡️ GaMixer is running!');
})();
