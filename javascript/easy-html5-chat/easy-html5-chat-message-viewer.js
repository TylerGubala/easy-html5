class EasyHtml5ChatMessageViewer extends React.Component{
    render(){
        return(React.createElement('div', {}, 
                                   getMessage()
                                  )
              )
    }
    getMessage(){
        if (!this.props.html){
            return $(newProps.message).text();
        }
        if (!this.props.xss){
            return $(this.props.message).find('script').remove();
        }
        return this.props.message;
    }
}