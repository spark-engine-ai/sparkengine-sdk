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
        callSparkEngineWhen="Collect user's favorite color, favorite food, and workplace skills" // Task condition
        width="90%"
        height="90vh"
        position="center"
        offsetY="5vh"
        conversationHistoryLength={10}
        responseIndices={[0]}
        initialBackgroundColor="#e5ddd5"
        title="WhatsApp-style Chatbot"
        description="Talk to our WhatsApp-inspired chatbot!"
        logo="https://sparkengine.ai/logo.png"
      >
        <ChatbotWindow
          backgroundColor="#e5ddd5"
          scrollbarSize={6}
          height="70vh"
          borderRadius="10px"
          boxShadow="0 2px 10px rgba(0,0,0,0.1)"
          px="20px"
        >
          <Message
            userColor="#fff"
            botColor="#333"
            userBackground="#25d366"
            botBackground="#ffffff"
            userFontSize="1rem"
            botFontSize="1rem"
            px="12px"
            py="8px"
            userBorderRadius="20px 20px 0 20px"
            botBorderRadius="20px 20px 20px 0"
            userBorder="none"
            botBorder="1px solid #ccc"
            m="10px 0"
            my="15px"
            mx="10px"
          />
        </ChatbotWindow>

        <ChatInput
          inputBackground="#ffffff"
          inputTextColor="#333"
          inputBorderColor="#ccc"
          inputFontSize="1.2rem"
          px="20px"
          py="10px"
          buttonColor="green"
        />
      </Chatbot>
    </SparkEngineProvider>
  );
};

export default HomePage;
