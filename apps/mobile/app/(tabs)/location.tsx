import { Button, ButtonText, HStack, Text, VStack } from '@/components/ui';
import { Alert, AlertIcon, AlertText } from '@/components/ui/alert';
import { Box } from '@/components/ui/box';
import { AlertCircleIcon } from '@/components/ui/icon';
import React from 'react';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type LeaveStatus = {
  type: 'Personal Leave' | 'Sick Leave';
  used: number;
  total: number;
};

export default function HomeScreen() {
  const leaveStatus: LeaveStatus[] = [
    { type: 'Personal Leave', used: 7, total: 12 },
    { type: 'Sick Leave', used: 6, total: 7 },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Box className="px-4 py-4 flex-1">
        <VStack space="md" className="flex-1">
          <Text size="xl" className="font-bold">
            Leave Requests
          </Text>

          <VStack space="sm">
            <Text size="lg" className="text-gray-600">
              Your Leave Status
            </Text>
            <Text size="sm" className="text-gray-500">
              Overview of leave requests
            </Text>

            <Box className="bg-white p-6 rounded-lg shadow-md mb-4">
              <HStack space="md" className="mb-4">
                {leaveStatus.map((status, index) => (
                  <React.Fragment key={index}>
                    <Box className="flex-1 rounded-lg justify-center items-center">
                      <Text className="text-4xl text-blue-500 font-bold">
                        {status.used}
                        <Text className="text-lg text-gray-500">
                          /{status.total}
                        </Text>
                      </Text>
                      <Text className="text-sm text-gray-600 mt-2">
                        {status.type}
                      </Text>
                    </Box>
                    {index < leaveStatus.length - 1 && (
                      <Box className="w-px bg-gray-300 mx-2" />
                    )}
                  </React.Fragment>
                ))}
              </HStack>
              <Alert
                action="error"
                variant="solid"
                className="bg-red-100 rounded-lg"
              >
                <AlertIcon as={AlertCircleIcon} className="text-red-500" />
                <AlertText className="text-red-500 text-md">
                  You have exceeded the number of paid leaves this year.
                </AlertText>
              </Alert>
            </Box>
          </VStack>

          <VStack space="sm" className="mt-4">
            <HStack className="justify-between items-center">
              <Text size="lg" className="text-gray-600">
                Leave Request Log
              </Text>
              <Pressable>
                <Text className="text-blue-500 font-semibold">View All</Text>
              </Pressable>
            </HStack>

            <Text size="sm" className="text-gray-500">
              History of your leave requests
            </Text>

            <Box className="bg-white p-4 rounded-lg shadow-md">
              <HStack className="justify-between items-center">
                <VStack>
                  <Text className="font-semibold">Sick Leave</Text>
                  <Text className="text-sm text-gray-500">
                    21 July, 2024 - 21 July, 2024
                  </Text>
                </VStack>
                <Text className="text-orange-500">Pending</Text>
              </HStack>
            </Box>
          </VStack>
        </VStack>

        <Button className="bg-blue-500 text-white font-bold py-7 px-4 rounded">
          <ButtonText className="text-[1rem]">Request Leave</ButtonText>
        </Button>
      </Box>
    </SafeAreaView>
  );
}
