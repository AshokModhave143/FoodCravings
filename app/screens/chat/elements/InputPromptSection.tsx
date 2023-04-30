import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {color} from '../../../theme';
import {Seperator} from '../../../components/seperator';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export interface InputPromptSectionProps {
  onSend: (input: string) => void;
}
export const InputPromptSection: React.FC<InputPromptSectionProps> = ({
  onSend,
}) => {
  const {control, handleSubmit, reset} = useForm({
    values: {
      inputPrompt: '',
    },
  });

  const onSubmit = (data: any) => {
    if (!data) {
      return null;
    }

    onSend(data.inputPrompt);
    reset();
  };
  return (
    <View>
      <Seperator />
      <View style={styles.inputPromptContainer}>
        <Controller
          name="inputPrompt"
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Search message"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              style={styles.inputPrompt}
            />
          )}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSubmit(onSubmit)}>
          <FontAwesome5Icon
            name="telegram"
            size={24}
            color={color.palette.orangeDarker}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputPromptContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    bottom: 0,
    width: '100%',
    padding: 10,
  },
  inputPrompt: {
    flex: 1,
    height: 40,
    borderWidth: 0.5,
    borderColor: color.palette.lightGrey,
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 8,
  },
  sendButton: {
    justifyContent: 'center',
    color: color.palette.orange,
  },
});
