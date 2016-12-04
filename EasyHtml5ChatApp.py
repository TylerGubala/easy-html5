from EasyHtml5ChatServer import EasyHtml5ChatServer
from EasyHtml5ChatInterface import EasyHtml5ChatInterface
class EasyHtml5ChatApp():
    def __init__(self):
        self.Server = EasyHtml5ChatServer()
        self.Interface = EasyHtml5ChatInterface()
        
if __name__ == '__main__':
    myChatApp = EasyHtml5ChatApp()