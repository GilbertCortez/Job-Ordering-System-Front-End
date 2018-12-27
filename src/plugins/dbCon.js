import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import auth from '@feathersjs/authentication-client'
import socketio from '@feathersjs/socketio-client'
import wings from 'wings-feathers'
 
const socket = io('http://localhost:3030') // IP and port of the server
const app = feathers()
 
app
  .configure(socketio(socket))
  .configure(auth({
    storage: window.localStorage // Passing a WebStorage-compatible object to enable automatic storage on the client.
  }))
 
const wingsJS = wings(app)
app.serve('joborders') // Name of the Service or Collection
export default ({ app, router, Vue }) => {
  Vue.prototype.$dbCon=wingsJS;
}
