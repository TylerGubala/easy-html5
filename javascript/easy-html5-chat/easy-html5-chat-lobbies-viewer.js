class EasyHtml5ChatLobbiesViewer extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {lobbies: []};
        
        
    }
    render(){
        return(
            React.createElement('div', {id: 'easy-html5-chat-lobbies-viewer'},
                                React.createElement('button', {onClick: this.onNewLobbyClick}, 'New Lobby'),
                                this.state.lobbies.map(function(lobby){return(React.createElement(EasyHtml5LobbyViewer, {uuid: lobby.uuid, name: lobby.name, locked: lobby.locked, key:lobby.uuid}))})
                               )
        )
    }
    addLobby(name, password){
        this.props.sendMessage();
    }
}