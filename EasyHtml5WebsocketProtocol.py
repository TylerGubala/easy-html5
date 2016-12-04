from autobahn.asyncio.websocket import WebSocketServerProtocol
class EasyHtml5Websocket(WebSocketServerProtocol):
    def onMessage(self, payload, isBinary):
        #Message Logic, fired when a message is recieved by the server
    def onConnect(self, request):
        #Connection Logic, fired when a client wishes to connect
    def onOpen(self):
        #Open Logic, fired when the connection between client and server has been fully realized