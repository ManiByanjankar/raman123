import { Button, HStack, Text, VStack } from '@/components/ui';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, TouchableOpacity } from 'react-native';

interface LeaveRequestDetailProps {
  status: string;
}

const LeaveRequestCard = ({ status }: LeaveRequestDetailProps) => {
  const statusColor = status === 'Approved' ? '#4CAF50' : '#FF5252';
  const statusBgColor = status === 'Approved' ? '#E8F5E9' : '#FFEBEE';

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Box className="flex-1 bg-white">
        <Box className="px-4 py-4 bg-white">
          <HStack className="space-x-4 items-center">
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Heading size="lg">Leave Request Log</Heading>
          </HStack>
        </Box>

        <Box className="flex-1 px-4 py-2">
          <VStack className="flex-1 space-y-4">
            <Box className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <HStack className="justify-between items-center mb-4">
                <Text size="lg" className="font-bold text-gray-800">
                  Sick Leave
                </Text>
                <Box
                  className="px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#FFEBEE' }}
                >
                  <Text style={{ color: '#FF5252' }} className="text-bold">
                    Pending
                  </Text>
                </Box>
              </HStack>

              <VStack space="sm">
                <HStack space="sm" className="items-center">
                  <Ionicons name="calendar-outline" size={20} color="#666" />
                  <Text className="text-gray-700">21 July, 2024 FULL DAY</Text>
                </HStack>
                <HStack space="sm" className="items-center">
                  <Ionicons name="calendar-outline" size={20} color="#666" />
                  <Text className="text-gray-700">21 July, 2024 FULL DAY</Text>
                </HStack>
              </VStack>

              <Text className="mt-3 text-gray-600">
                This is a leave reason part. Jorem ipsum dolor sit amet,
                consectetur adipiscing elit Jorem ipsum dolor sit amet,
                consectetur adipiscing elitJorem ipsum dolor sit amet,
                consectetur adipiscing elit
              </Text>
            </Box>
          </VStack>

          <VStack className="space-y-2 w-full mb-4">
            <Button
              variant="outline"
              className="border-red-500 py-7 px-4 rounded"
              onPress={() => console.log('Cancel request')}
            >
              <Text className="text-red-500">Cancel Leave Request</Text>
            </Button>
          </VStack>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default LeaveRequestCard;
