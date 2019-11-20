import { AppRegistry } from 'react-native'

import App from 'components/src/index'

AppRegistry.registerComponent('myprojectname', () => App)
AppRegistry.runApplication('myprojectname', {
  rootTag: document.getElementById('root'),
})