import {
  Button,
  ButtonText,
  HStack,
  Input,
  InputField,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Textarea,
  TextareaInput,
  VStack,
} from '@/components/ui';
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { useBottomPadding } from '@/hooks/useBottomNavigationPadding';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default function ReceiptHistory() {
  const bottomPadding = useBottomPadding();

  // Use react-hook-form for validation
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dropdown: '',
      numberInput: '',
      textInput: '',
      textArea: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
    reset();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: bottomPadding }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <VStack className="w-full p-4">
          <FormControl isInvalid={!!errors.dropdown}>
            <FormControlLabel>
              <FormControlLabelText>Select an Option</FormControlLabelText>
            </FormControlLabel>
            <Controller
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field: { onChange, value } }) => (
                <Select onValueChange={onChange}>
                  <SelectTrigger variant="outline">
                    <SelectInput placeholder="Select an option" value={value} />
                    <SelectIcon />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectItem label="Option 1" value="option1" />
                      <SelectItem label="Option 2" value="option2" />
                      <SelectItem label="Option 3" value="option3" />
                    </SelectContent>
                  </SelectPortal>
                </Select>
              )}
              name="dropdown"
            />
            {errors.dropdown && (
              <FormControlError>
                <FormControlErrorText>
                  {errors.dropdown.message}
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.numberInput} className="mt-4">
            <FormControlLabel>
              <FormControlLabelText>Enter a Number</FormControlLabelText>
            </FormControlLabel>
            <Controller
              control={control}
              rules={{
                required: 'Number is required',
                pattern: { value: /^[0-9]+$/, message: 'Enter a valid number' },
              }}
              render={({ field: { onChange, value } }) => (
                <Input variant="outline">
                  <InputField
                    placeholder="Enter number..."
                    value={value}
                    keyboardType="numeric"
                    onChangeText={onChange}
                  />
                </Input>
              )}
              name="numberInput"
            />
            {errors.numberInput && (
              <FormControlError>
                <FormControlErrorText>
                  {errors.numberInput.message}
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.textInput} className="mt-4">
            <FormControlLabel>
              <FormControlLabelText>Text Input</FormControlLabelText>
            </FormControlLabel>
            <Controller
              control={control}
              rules={{
                required: 'Text is required',
                minLength: { value: 3, message: 'At least 3 characters' },
              }}
              render={({ field: { onChange, value } }) => (
                <Input variant="outline">
                  <InputField
                    placeholder="Enter text..."
                    value={value}
                    onChangeText={onChange}
                  />
                </Input>
              )}
              name="textInput"
            />
            {errors.textInput && (
              <FormControlError>
                <FormControlErrorText>
                  {errors.textInput.message}
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.textArea} className="mt-4">
            <FormControlLabel>
              <FormControlLabelText>Description</FormControlLabelText>
            </FormControlLabel>
            <Controller
              control={control}
              rules={{ required: 'This field cannot be empty' }}
              render={({ field: { onChange, value } }) => (
                <Textarea size="md" className="w-full">
                  <TextareaInput
                    placeholder="Enter details..."
                    value={value}
                    onChangeText={onChange}
                  />
                </Textarea>
              )}
              name="textArea"
            />
            {errors.textArea && (
              <FormControlError>
                <FormControlErrorText>
                  {errors.textArea.message}
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>

          {/* Buttons */}
          <HStack className="mt-6 w-full">
            <Button
              size="lg"
              variant="outline"
              className="flex-1"
              onPress={() => reset()}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              className="ml-2 flex-1"
              size="lg"
              variant="solid"
              onPress={handleSubmit(onSubmit)}
            >
              <ButtonText className="text-white">Submit</ButtonText>
            </Button>
          </HStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 16,
  },
});
