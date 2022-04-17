type NumberInput = { defaultValue: number; type: 'number' };
type EmailInput = { defaultValue: string; type: 'email' };
type TextInput = { defaultValue?: string; type: 'text' };
type DateInput = { defaultValue: string; type: 'date' };

export type InputType = NumberInput | EmailInput | TextInput | DateInput;
