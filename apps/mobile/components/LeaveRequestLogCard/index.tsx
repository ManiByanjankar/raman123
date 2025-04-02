import { Ionicons } from '@expo/vector-icons';
import { HStack, Text, VStack } from '../ui';
import { Box } from '../ui/box';

interface DateInfo {
  date: string;
  type: string;
}

interface LeaveRequestCardProps {
  type: string;
  status: string;
  dates: DateInfo[];
  reason: string;
}

export default function LeaveRequestCard({
  type,
  status,
  dates,
  reason,
}: LeaveRequestCardProps) {
  const statusColor = status === 'Approved' ? '#4CAF50' : '#FF5252';
  const statusBgColor = status === 'Approved' ? '#E8F5E9' : '#FFEBEE';

  return (
    <Box className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <HStack className="justify-between items-center mb-4">
        <Text size="lg" className="font-bold text-gray-800">
          {type}
        </Text>
        <Box
          className="px-3 py-1 rounded-full"
          style={{ backgroundColor: statusBgColor }}
        >
          <Text style={{ color: statusColor }} className="text-bold">
            {status}
          </Text>
        </Box>
      </HStack>

      <VStack space="sm">
        {dates.map((dateInfo, index) => (
          <HStack key={index} space="sm" className="items-center">
            <Ionicons name="calendar-outline" size={20} color="#666" />
            <Text className="text-gray-700">
              {dateInfo.date} - {dateInfo.type}
            </Text>
          </HStack>
        ))}
      </VStack>

      <Text className="mt-3 text-gray-600">{reason}</Text>
    </Box>
  );
}
