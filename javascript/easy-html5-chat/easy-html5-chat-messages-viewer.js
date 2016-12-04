class EasyHtml5ChatMessagesViewer extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            messages: []
        };
        
        this.addMessage = this.addMessage.bind(this);
    }
    render(){
        return(React.createElement('div', {id: 'easy-html5-chat-messages-viewer'}, 
                                   this.state.messages.map(function(message, index){return(React.createElement(EasyHtml5MChatMessageViewer, {message: message, html: this.props.html, xss: this.props.xss, key: index}))})
                                  )
              )
    }
    addMessage(message){
        var messages = this.state.messages;
        messages.push(message);
        this.setState({messages: messages});
    }
}