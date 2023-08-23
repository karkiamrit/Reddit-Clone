import {useQuery, gql} from '@apollo/client';
import React from "react";
import {
    Container
} from "shards-react";

const GET_MESSAGES=gql`
query{
  messages {
    id
    user
    content
    
  }
}
`;

const Messages = ({user}) => {
    const {data}=useQuery(GET_MESSAGES);
    if(!data){
        return null;
    }
    return(
        <>
       
            {data.messages.map(({id,user:messageUser,content})=>(
                <div style={{
                    display:'flex',
                    justifyContent:user===messageUser?'flex-end':'flex-start',
                    paddingBottom:'1em'
                }} key={id}>
                    <div style={{
                         background:user===messageUser? "#58bf56":"#e5e6ea",
                         color:user===messageUser ?"white":"black", 
                         padding:'1em',
                         borderRadius:'1em',
                         maxWidth:'60%',
                         }}>
                                {content}
                    </div>
                </div>)  
            )}
        </>
    )}

const Chat = () => {
    return (
        <Container>
        <Messages user="Ram" />
        </Container>
    )
}
export default Chat;