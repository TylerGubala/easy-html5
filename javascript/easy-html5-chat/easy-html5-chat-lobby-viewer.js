class EasyHtml5ChatLobbyViewer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(React.createElement('table', {className: 'easy-html5-chat-lobby'}, 
                                   React.createElement('thead', {}, 
                                                       React.createElement('tr', {}, 
                                                                           React.createElement('td', {}, 
                                                                                               React.createElement('input', {value: this.state.expanded, onChange: this.onExpandedChange, type: 'checkbox'})
                                                                                              ),
                                                                           React.createElement('td', {}, 
                                                                                               this.props.name
                                                                                              )
                                                                          )
                                                      ),
                                   React.createElement('tbody', {className: (this.state.expanded ? '' : 'collapsed')}, 
                                                       React.createElement('tr', {}, 
                                                                           React.createElement('td', {}, 
                                                                                               'Users:'
                                                                                              ),
                                                                           React.createElement('td', {}, 
                                                                                               this.props.users
                                                                                              )
                                                                          ),
                                                       React.createElement('tr', {}, 
                                                                           React.createElement('td', {}, 
                                                                                               React.createElement('input', {value: this.props.locked, type: 'checkbox'})
                                                                                              ),
                                                                           React.createElement('td', {}, 
                                                                                               React.createElement('button', {onClick: this.onJoinClick}, 'Join')
                                                                                              )
                                                                          )
                                                      )
                                  )
               )
    }
    onJoinClick(event){
        this.props.joinLobby(this.props.uuid);
    }
}