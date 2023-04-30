import React, {useRef, useState} from 'react';
import {Alert, FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {AuthNavigationProp} from '../../navigators/AuthNavigator';
import {Screens} from '../../navigators/ScreenList';
import {
  MessageFormat,
  UserType,
  generateMessageResponseObject,
  getResponse,
} from './OpenaiConfiguration';
import {InputPromptSection} from './elements/InputPromptSection';
import {color} from '../../theme';
import {MessageCard} from './elements/MessageCard';

export interface ChatScreenProps {
  navigation: AuthNavigationProp;
}
export const ChatScreen: React.FC<ChatScreenProps> = ({navigation}) => {
  const [messages, setMessages] = useState<MessageFormat[]>([]);
  const messageListRef = useRef(null);

  const goToHome = () => navigation.navigate(Screens.home);

  const scrollToEndOfList = () => {
    if (messages.length) {
      messageListRef.current?.scrollToEnd({animated: true});
    }
  };

  const onSend = async (inputTextPrompt: string) => {
    try {
      if (inputTextPrompt && inputTextPrompt.length > 1) {
        setMessages(prevMessages => [
          ...prevMessages,
          generateMessageResponseObject(UserType.me, inputTextPrompt),
        ]);
        scrollToEndOfList();
      }
      const response = await getResponse(inputTextPrompt);
      if (response) {
        setMessages(prevMessages => [
          ...prevMessages,
          generateMessageResponseObject(UserType.ai, response),
        ]);
      }
    } catch (err) {
      Alert.alert('Error in processing');
    }
  };

  return (
    <View style={styles.chatContainer}>
      <View style={styles.headerContainer}>
        <Button
          mode="text"
          onPress={goToHome}
          style={styles.gotoHomeButton}
          icon="home">
          Go Home
        </Button>
      </View>
      <SafeAreaView style={styles.messagesContainer}>
        <FlatList
          ref={messageListRef}
          data={messages}
          renderItem={({item}) => <MessageCard message={item} />}
          keyExtractor={item => item.id}
          onContentSizeChange={() => scrollToEndOfList()}
        />
      </SafeAreaView>
      <View>
        <InputPromptSection onSend={onSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  headerContainer: {
    height: 40,
    backgroundColor: color.palette.orange,
  },
  messagesContainer: {
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    // overflow: 'scroll',
    flex: 1,
  },
  gotoHomeButton: {
    width: 100,
  },
});
