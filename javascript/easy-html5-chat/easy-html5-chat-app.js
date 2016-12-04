class EasyHtml5ChatApp extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {html: false, xss: false, lobbies:[], messages: []};
        
        this.websocket = new WebSocket('ws://127.0.0.1:9999');
        
        this.onHtmlChange = this.onHtmlChange.bind(this);
        this.onXssChange = this.onXssChange.bind(this);
        
        this.sendMessage = this.sendMessage.bind(this);
        this.onMessage = this.onMessage.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onError = this.onError.bind(this);
        
        this.websocket.onmessage = this.onMessage;
        this.websocket.onopen = this.onOpen;
        this.websocket.onclose = this.onClose;
        this.websocket.onerror = this.onError;
    }
    render(){
        return(
            React.createElement('div', {id: 'easy-html5-chat-app'}, 
                                React.createElement('input', {value: this.state.html, onChange: this.onHtmlChange, type: 'checkbox'}),
                                React.createElement('input', {value: this.state.xss, onChange: this.onXssChange, type: 'checkbox'}),
                                React.createElement('div', {}, 
                                                    React.createElement(EasyHtml5ChatLobbiesViewer, {sendMessage: this.sendMessage, ref: 'lobbies'}),
                                                    React.createElement(EasyHtml5ChatMessagesViewer, {html: this.state.html, xss: this.state.xss, ref: 'messages'}), 
                                                    React.createElement(EasyHtml5ChatEntryWidget, {sendMessage: this.sendMessage})
                                                   )
                               )
        )
    }
    onHtmlChange(event){
        this.setState({html: event.target.checked});
    }
    onXssChange(event){
        this.setState({xss: event.target.checked});
    }
    addLobby(lobby){
        var lobbies = this.state.lobbies;
        lobbies.push(lobby);
        this.setState({lobbies: lobbies});
    }
    addMessage(message){
        var messages = this.state.messages;
        messages.push(message);
        this.setState({messages: messages});
    }
    sendMessage(message){
        this.websocket.send(message);
    }
    onMessage(event){
        var data = JSON.parse(event.data);
        switch(data.type){
            case 'MESSAGE':
                this.refs.messages.addItem()
        }
    }
    onOpen(){
        console.log('The chat session is open');
    }
    onClose(){
        console.log('Closing the chat session')
    }
    onError(){
        console.log('An unknown error occured');
    }
}