import { ListGroup } from "react-bootstrap"
import { useConversations } from "../contexts/ConversationsProvider";

const Conversations = () => {
   const { conversations, selectedConversationIndex } = useConversations()

   return (
      <ListGroup variant="flush">
         {conversations.map((conversation, i) => (
            <ListGroup.Item key={i} action onClick={() => selectedConversationIndex(i)} active={conversation.selected}>
               {conversation.recipients.map(r => r.name).join(', ')}
            </ListGroup.Item>
         ))}
      </ListGroup>
   )
}
 
export default Conversations;