import { Button, Text, VStack } from '@/components/ui';
import { Box } from '@/components/ui/box';
import { CheckIcon, Icon } from '@/components/ui/icon';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@/components/ui/modal';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';

export default function LeaveSuccessScreen() {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Box className="flex-1 bg-white px-4">
        <VStack
          className="space-y-6 items-center w-full mt-[5rem] flex-1"
          space="md"
        >
          {/* Success Icon */}
          <Box className="bg-green-200 p-2 rounded-full">
            <Icon as={CheckIcon} size="lg" />
          </Box>

          {/* Success Message */}
          <VStack className="space-y-2 items-center">
            <Text className="text-xl font-semibold text-center">
              Your leave has been requested successfully
            </Text>
          </VStack>

          {/* Leave Details Card */}
          <Box className="bg-gray-50 w-full p-4 rounded-lg">
            <Text className="text-lg font-semibold mb-2">Sick Leave</Text>

            <VStack className="space-y-1">
              <Box className="flex-row items-center">
                <Ionicons name="calendar-outline" size={20} color="#666" />
                <Text className="ml-2 text-gray-700">
                  21 July, 2024 - FULL DAY
                </Text>
              </Box>

              <Box className="flex-row items-center">
                <Ionicons name="calendar-outline" size={20} color="#666" />
                <Text className="ml-2 text-gray-700">
                  22 July, 2024 - 1ST HALF
                </Text>
              </Box>

              <Text className="mt-2 text-gray-600">
                This is a leave reason part. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit
              </Text>
            </VStack>
          </Box>
        </VStack>

        {/* Action Buttons */}
        <VStack className="space-y-2 w-full mb-[3rem]">
          <Button
            variant="outline"
            className="border-red-500 py-7 px-4 rounded"
            onPress={() => setShowModal(true)}
          >
            <Text className="text-red-500">Cancel Leave Request</Text>
          </Button>

          <Button
            className="bg-blue-500 py-7 px-4 rounded"
            onPress={() => console.log('Go back')}
          >
            <Box className="flex-row items-center ">
              <Ionicons name="arrow-back" size={30} color="white" />
              <Text className="text-white ml-2">Go back to home</Text>
            </Box>
          </Button>
        </VStack>
      </Box>

      {/* Confirmation Modal */}
      <Modal size="lg" isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalContent>
          <ModalHeader>
            <Text className="text-lg font-semibold">Cancel Leave Request</Text>
          </ModalHeader>
          <ModalBody>
            <Text className="text-gray-700">
              Are you sure you want to cancel your leave request?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              className="bg-red-500 py-4 rounded"
              onPress={() => {
                console.log('Leave request canceled');
                setShowModal(false);
              }}
            >
              <Text className="text-white">Yes, Cancel</Text>
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 py-4 rounded ml-2"
              onPress={() => setShowModal(false)}
            >
              <Text className="text-gray-700">No, Go Back</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </SafeAreaView>
  );
}
