import React from 'react'
import {render} from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {renderRoutes} from '../imports/startup/client/routes.jsx'
import injectTabEventPlugin from 'react-tap-event-plugin'

Meteor.startup(() => {
  injectTabEventPlugin()
  render(renderRoutes(), document.getElementById('app-container'))
})
