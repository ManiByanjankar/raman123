import LeaveRequestCard from '@/components/LeaveRequestLogCard';
import { HStack, VStack } from '@/components/ui';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Ionicons } from '@expo/vector-icons';

import { ScrollView, TouchableOpacity } from 'react-native';

const leaveRequests = [
  {
    type: 'Sick Leave',
    status: 'Pending',
    dates: [
      { date: '21 July, 2024', type: 'FULL DAY' },
      { date: '22 July, 2024', type: '1ST HALF' },
    ],
    reason:
      'This is a leave reason part. Jorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    type: 'Personal Leave',
    status: 'Approved',
    dates: [
      { date: '21 July, 2024', type: 'FULL DAY' },
      { date: '22 July, 2024', type: '1ST HALF' },
    ],
    reason:
      'This is a leave reason part. Jorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    type: 'Sick Leave',
    status: 'Pending',
    dates: [
      { date: '21 July, 2024', type: 'FULL DAY' },
      { date: '22 July, 2024', type: '1ST HALF' },
    ],
    reason:
      'This is a leave reason part. Jorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

export default function HomeScreen() {
  return (
    <Box className="bg-white flex-1">
      <Box className="px-4 py-4 bg-white">
        <HStack className="space-x-4 items-center">
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Heading size="lg">Leave Request Log</Heading>
        </HStack>
      </Box>

      <ScrollView className="flex-1 px-4 py-2">
        <VStack className="space-y-4">
          {leaveRequests.map((request, index) => (
            <LeaveRequestCard key={index} {...request} />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
}
