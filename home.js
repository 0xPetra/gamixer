function home(app) {
  app.event('app_home_opened', async ({ event, context }) => {
    try {
      /* view.publish is the method that your app uses to push a view to the Home tab */
      const result = await app.client.views.publish({
        /* retrieves your xoxb token from context */
        token: context.botToken,

        /* the user that opened your app's app home */
        user_id: event.user,

        /* the view payload that appears in the app home*/
        view: {
          type: 'home',
          callback_id: 'home_view',

          /* body of the view */
          blocks: [
            {
              "type": "section",
              "text": {
                "type": "mrkdwn",
                "text": "*Welcome to Game Mixer Bot* :tada:"
              }
            },
            {
              "type": "divider"
            },
            {
              "type": "section",
              "text": {
                "type": "mrkdwn",
                "text": "You will be able to create matches and play against other users. Here are some usebut tips:"
              }
            },
            	{
                "type": "section",
                "text": {
                  "type": "mrkdwn",
                  "text": "*/newgame*\n<fakelink.toUrl.com|PR Strategy 2019> posts new tasks, comments, and project updates to <fakelink.toChannel.com|#public-relations>"
                },
                "accessory": {
                  "type": "button",
                  "text": {
                    "type": "plain_text",
                    "text": "Edit",
                    "emoji": true
                  },
                  "value": "public-relations"
                }
              },
                        	{
                "type": "section",
                "text": {
                  "type": "mrkdwn",
                  "text": "*/leaderboard*\n<fakelink.toUrl.com|PR Strategy 2019> posts new tasks, comments, and project updates to <fakelink.toChannel.com|#public-relations>"
                },
                "accessory": {
                  "type": "button",
                  "text": {
                    "type": "plain_text",
                    "text": "Edit",
                    "emoji": true
                  },
                  "value": "public-relations"
                }
              },
            {
              "type": "actions",
              "elements": [
                {
                  "type": "button",
                  "text": {
                    "type": "plain_text",
                    "text": "Click me!"                                                                                                           
                  },
                  action_id: 'button_abc'
                }
              ]
            }
          ]
        }
      });
    }
    catch (error) {
      console.error(error);
    }
  })
}

module.exports =  home;