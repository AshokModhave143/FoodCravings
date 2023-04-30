import {Configuration, OpenAIApi, CreateCompletionResponse} from 'openai';

export const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

export const openAiInstance = new OpenAIApi(configuration);

export const getResponse = async (inputTextPrompt: string) => {
  try {
    const completion = await openAiInstance.createCompletion({
      model: 'text-davinci-003',
      prompt: inputTextPrompt,
      temperature: 0.6,
      max_tokens: 100,
    });

    console.log(JSON.stringify(completion.data));
    return completion.data;
  } catch (err) {
    console.log('Error in processing', err);
  }
};

export enum UserType {
  me = 'Me',
  ai = 'AI',
}

export interface MessageFormat extends CreateCompletionResponse {
  userType: UserType;
}
export const generateMessageResponseObject = (
  userType: UserType,
  data: string | CreateCompletionResponse,
): MessageFormat => {
  switch (userType) {
    case 'Me':
      return {
        userType,
        id: new Date().toUTCString(),
        choices: [{text: data?.toString()}],
        created: new Date().getUTCDate(),
        model: '',
        object: '',
      };
    case 'AI':
      return {...(data as CreateCompletionResponse), userType};
    default:
      throw new Error('Invalid user type');
  }
};
