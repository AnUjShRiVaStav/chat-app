const TheirMessage = ({lastmessage, message}) => {
    const isfirstMessageByUser = !lastmessage || lastmessage.sender.username  !== message.sender.username;

    return(
        <div className='message-row'>
          
          {isfirstMessageByUser && (
              <div 
                  className='message-avatar'
                  style= { {backgroundImage: message.sender && `url(${message.sender.avatar})` }}
              />
          )}


          
              
              {message.attachments && message.attachments.length > 0
             ?  (
                 <img
              src = {message.attachments[0].file}
              alt='message.attachment' 
              className='message-image'
              style={ {marginLeft: isfirstMessageByUser ? '4px' : '48px' }}

             />
            
            ) : (
                <div className='message' style= { {float:'left', color: 'white', backgroundColor:'black', marginLeft: isfirstMessageByUser ? '4px' : '48px'}}>
               
             {message.text}
             </div>
      )}

       </div>
    )
}

export default TheirMessage;

  