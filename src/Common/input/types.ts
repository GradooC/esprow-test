type NumberInput = { defaultValue: number; type: 'number' };
type EmailInput = { defaultValue: string; type: 'email' };
type TextInput = { defaultValue: string; type: 'text' };

export type InputType = NumberInput | EmailInput | TextInput;
