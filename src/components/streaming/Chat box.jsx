import React from 'react';
import styled from 'styled-components';
import { IoMdSend } from 'react-icons/io';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: rgba(13, 2, 33, 0.7);
  border-radius: 15px;
  border: 1px solid #26175C;
`;

const Header = styled.div`
  padding: 1rem;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  border-bottom: 1px solid #26175C;
  font-size: 1.2rem;
`;

const MessagesList = styled.div`
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  
  &.premium .username {
    color: #FFD700; // Emas untuk user premium
  }
`;

const Username = styled.span`
  font-weight: 600;
  color: #00C4FF;
  font-size: 0.9rem;
`;

const MessageBody = styled.p`
  background: #26175C;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  max-width: 90%;
  word-wrap: break-word;
`;

const ChatInputWrapper = styled.form`
  display: flex;
  padding: 1rem;
  border-top: 1px solid #26175C;
`;

const ChatInput = styled.input`
  flex-grow: 1;
  background: rgba(15, 8, 75, 0.8);
  border: 1px solid #26175C;
  color: #f0f0f0;
  padding: 0.8rem;
  border-radius: 20px 0 0 20px;
  &:focus {
    outline: none;
    border-color: #00C4FF;
  }
`;

const SendButton = styled.button`
  background: #00C4FF;
  border: none;
  color: #0D0221;
  padding: 0 1.2rem;
  border-radius: 0 20px 20px 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ChatBox = () => {
    // Placeholder Data
    const messages = [
        {user: 'Sultan', text: 'Keren banget stream nya!', type: 'premium'},
        {user: 'Nabila', text: 'Halo semua! Selamat datang!'},
        {user: 'Gemini', text: 'Jangan lupa kirim gift ya! 😜'},
    ];
  return (
    <ChatContainer>
        <Header>Live Chat</Header>
        <MessagesList>
            {messages.map((msg, index) => (
                <Message key={index} className={msg.type}>
                    <Username>{msg.user}</Username>
                    <MessageBody>{msg.text}</MessageBody>
                </Message>
            ))}
        </MessagesList>
        <ChatInputWrapper>
            <ChatInput placeholder="Send a message..." />
            <SendButton type="submit"><IoMdSend /></SendButton>
        </ChatInputWrapper>
    </ChatContainer>
  );
};

export default ChatBox;
