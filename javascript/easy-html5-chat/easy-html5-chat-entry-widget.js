class EasyHtml5ChatEntryWidget extends React.Component{
    constructor(props){
        super(props);
        
        this.state={value: ''};
        
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    render(){
        return(
            React.createElement('div', {id: 'easy-html5-chat-entry-widget'}, 
                                React.createElement('textarea', {onChange: this.onChange, value: this.state.value}), 
                                React.createElement('button', {onClick: this.onClick}, 
                                                    'Send'
                                                   )
                               )
        )
    }
    onChange(event){
        this.setState({value: event.target.value});
    }
    onClick(event){
        this.props.sendMessage(this.state.value);
        this.setState({value: ''});
    }
}