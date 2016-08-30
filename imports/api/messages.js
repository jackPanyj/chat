import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Messages = new Mongo.Collection('messages')

Meteor.methods({
  'insert/message': function (username, avatar_url, msg) {
    let message = {
      avatar_url,
      owner: username,
      content: msg,
      createAt: new Date()
    }
    Messages.insert(message)
  }
})

if (Meteor.isServer) {
  Meteor.publish('messages', function () {
    return Messages.find()
  })
}
