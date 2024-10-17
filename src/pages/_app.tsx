import React from 'react';
import { Chatbot, ChatbotWindow, ChatInput, Message, SparkEngineProvider } from '../index';
import '@mantine/core/styles.css';

const HomePage: React.FC = () => {
  return (
    <SparkEngineProvider>
      <Chatbot
        projectId="adbfd15b-1499-4a7a-8cdc-416e8630c33c"
        chatApiRoute="/api/chatbot"
        sparkEngineApiRoute="/api/complete"
        callSparkEngineWhen="Collect user's favorite color, favorite food, and workplace skills"
        width="90%"
        height="90vh"
        position="center"
        offsetY="5vh"
        conversationHistoryLength={10}
        responseIndices={[0]}
        initialBackgroundColor="#fcfcfc"
        title="Blue Themed Chatbot"
        description="Talk to our blue-themed chatbot!"
        logo="https://sparkengine.ai/logo.png"
      >
        <ChatbotWindow
          backgroundColor="#fcfcfc"
          scrollbarSize={6}
          borderRadius="10px"
          boxShadow="0 2px 10px rgba(0,0,0,0.1)"
          px="20px"
        >
          <Message
            userColor="#007bff"
            botColor="#333"
            userBackground="#e6f2ff"
            botBackground="#ffffff"
            userFontSize="1rem"
            botFontSize="1rem"
            px="16px"
            py="8px"
            userBorderRadius="20px 20px 0 20px"
            botBorderRadius="20px 20px 20px 0"
            userBorder="2px solid #007bff"
            botBorder="1px solid #ccc"
            m="10px 0"
            my="15px"
            mx="10px"
          />
        </ChatbotWindow>
        <ChatInput />
      </Chatbot>
    </SparkEngineProvider>
  );
};

export default HomePage;
