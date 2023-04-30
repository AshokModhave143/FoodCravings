import React from 'react';
import {Avatar, Card, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {color} from '../../../theme';
import {MessageFormat, UserType} from '../OpenaiConfiguration';

export const UserIcon = (_props: any) => (
  <Avatar.Image source={require('../../../../assets/user.png')} size={24} />
);

export const AIBotIcon = (_props: any) => (
  <Avatar.Icon icon={'robot'} size={24} />
);

export interface MessageCardProps {
  message: MessageFormat;
}
export const MessageCard: React.FC<MessageCardProps> = ({message}) => {
  const icon = message.userType === UserType.me ? UserIcon : AIBotIcon;

  return (
    <Card style={styles.messageCard} mode="elevated" key={message.id}>
      <Card.Title
        title={message.userType}
        left={icon}
        style={{
          backgroundColor: color.palette.lighterGrey,
        }}
      />
      <Card.Content>
        <Text variant="bodyMedium">{message.choices[0].text?.toString()}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  messageCard: {
    margin: 8,
  },
});
