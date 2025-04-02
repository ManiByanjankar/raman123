import {
  Button,
  ButtonText,
  HStack,
  Textarea,
  TextareaInput,
  VStack,
} from '@/components/ui';
import { Box } from '@/components/ui/box';
import { CalendarDaysIcon, CircleIcon, Icon } from '@/components/ui/icon';
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '@/components/ui/radio';
import React, { useEffect, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DateType } from 'react-native-ui-datepicker';
import DatePickerComponent from './DatePickerComponent';

export default function Calendar() {
  const [selectedStartDate, setSelectedStartDate] = useState<DateType>();
  const [selectedEndDate, setSelectedEndDate] = useState<DateType>();
  const [isStartPickerVisible, setStartPickerVisible] = useState(false);
  const [isEndPickerVisible, setEndPickerVisible] = useState(false);

  const startPickerRef = useRef<HTMLDivElement>(null);
  const endPickerRef = useRef<HTMLDivElement>(null);

  const toggleStartPicker = () => setStartPickerVisible(!isStartPickerVisible);
  const toggleEndPicker = () => setEndPickerVisible(!isEndPickerVisible);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      startPickerRef.current &&
      !startPickerRef.current.contains(event.target as Node)
    ) {
      setStartPickerVisible(false);
    }
    if (
      endPickerRef.current &&
      !endPickerRef.current.contains(event.target as Node)
    ) {
      setEndPickerVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Box className="px-4 py-4 flex-1">
            <VStack className="flex-1">
              <Text className="font-bold text-lg">Request Leave</Text>
              <VStack>
                <Text className="text-gray-600 font-bold mt-4">Leave Type</Text>
                <Text className="text-gray-500 mt-2">
                  Select the type of leave you’re requesting
                </Text>
              </VStack>
              <VStack space="sm" className="mt-4">
                <Box className="border border-gray-300 rounded-md p-3">
                  <RadioGroup>
                    <Radio
                      value="change"
                      size="lg"
                      isInvalid={false}
                      isDisabled={false}
                    >
                      <RadioIndicator>
                        <RadioIcon as={CircleIcon} />
                      </RadioIndicator>
                      <RadioLabel className="text-md">Sick Leave</RadioLabel>
                    </Radio>
                  </RadioGroup>
                </Box>
                <Box className="border border-gray-300 rounded-md p-3">
                  <RadioGroup>
                    <Radio
                      value="change"
                      size="lg"
                      isInvalid={false}
                      isDisabled={false}
                    >
                      <RadioIndicator>
                        <RadioIcon as={CircleIcon} />
                      </RadioIndicator>
                      <RadioLabel className="text-md">Sick Leave</RadioLabel>
                    </Radio>
                  </RadioGroup>
                </Box>
                <Box className="border border-gray-300 rounded-md p-3">
                  <RadioGroup>
                    <Radio
                      value="change"
                      size="lg"
                      isInvalid={false}
                      isDisabled={false}
                    >
                      <RadioIndicator>
                        <RadioIcon as={CircleIcon} />
                      </RadioIndicator>
                      <RadioLabel className="text-md">Sick Leave</RadioLabel>
                    </Radio>
                  </RadioGroup>
                </Box>
              </VStack>
              <VStack>
                <Text className="text-gray-600 font-bold mt-4">
                  Leave Dates
                </Text>
                <Text className="text-gray-500 mt-1">
                  Select the start and end dates for your leave
                </Text>
                <Box className="mt-2">
                  <Textarea
                    size="md"
                    isReadOnly={false}
                    isInvalid={false}
                    isDisabled={false}
                    className="w-full"
                  >
                    <TextareaInput placeholder="Your text goes here..." />
                  </Textarea>
                </Box>
              </VStack>
              <VStack>
                <Text className="text-gray-600 font-bold mt-4">
                  Select Dates
                </Text>
                <Text className="text-gray-500 mt-1">
                  Select the start and end dates for your leave
                </Text>
                <Box
                  ref={startPickerRef}
                  className="border border-gray-300 rounded-md p-4 bg-white mt-2"
                >
                  <TouchableOpacity onPress={toggleStartPicker}>
                    <View className="flex-row justify-between items-center">
                      <Box>
                        {!isStartPickerVisible && (
                          <Text className="text-black">
                            {selectedStartDate
                              ? selectedStartDate.toDateString()
                              : 'Pick a Start Date'}
                          </Text>
                        )}
                      </Box>
                      {!isStartPickerVisible && (
                        <Icon as={CalendarDaysIcon} size="md" />
                      )}
                    </View>
                  </TouchableOpacity>
                  {isStartPickerVisible && (
                    <DatePickerComponent
                      visible={isStartPickerVisible}
                      selectedDate={selectedStartDate}
                      onDateChange={(date) => {
                        setSelectedStartDate(date);
                        setStartPickerVisible(false);
                      }}
                    />
                  )}
                </Box>
                <Box
                  ref={endPickerRef}
                  className="border border-gray-300 rounded-md p-4 bg-white mt-2"
                >
                  <TouchableOpacity onPress={toggleEndPicker}>
                    <View className="flex-row justify-between items-center">
                      <Box>
                        {!isEndPickerVisible && (
                          <Text className="text-black">
                            {selectedEndDate
                              ? selectedEndDate.toDateString()
                              : 'Pick an End Date'}
                          </Text>
                        )}
                      </Box>
                      {!isEndPickerVisible && (
                        <Icon as={CalendarDaysIcon} size="md" />
                      )}
                    </View>
                  </TouchableOpacity>
                  {isEndPickerVisible && (
                    <DatePickerComponent
                      visible={isEndPickerVisible}
                      selectedDate={selectedEndDate}
                      onDateChange={(date) => {
                        setSelectedEndDate(date);
                        setEndPickerVisible(false);
                      }}
                    />
                  )}
                </Box>
              </VStack>
            </VStack>
            <HStack className="space-x-4 mt-4">
              <Button
                variant="outline"
                className="text-gray-200 py-7 flex-1 rounded-md"
              >
                <ButtonText className="text-[1rem]">Cancel</ButtonText>
              </Button>
              <Button className="bg-blue-500 text-white font-bold py-7 flex-1 rounded-md">
                <ButtonText className="text-[1rem]">Next</ButtonText>
              </Button>
            </HStack>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
