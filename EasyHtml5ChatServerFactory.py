import json
import uuid

try:
    import asyncio
except ImportError:
    ## Trollius >= 0.3 was renamed
    import trollius as asyncio

from autobahn.asyncio.websocket import WebSocketServerFactory

from EasyHtml5ChatLobby import EasyHtml5ChatLobby
from EasyHtml5ChatUser import EasyHtml5ChatUser

class EasyHtml5ChatServer():
    def __init__(self):
        self.Users = []
        self.Lobbies = []