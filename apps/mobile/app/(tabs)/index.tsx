import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { CopyIcon, Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import * as Clipboard from 'expo-clipboard';
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg from 'react-native-svg';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const qrData = 'https://rumsan.com/';
  const userName = 'Dummy Dummy';
  const [qrCodeSvg, setQrCodeSvg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      generateQRCode();
    }, 1000);
  }, []);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(qrData);
  };

  const generateQRCode = async () => {
    try {
      const svgString = await QRCode.toString(qrData, { type: 'svg' });
      setQrCodeSvg(svgString);
      setLoading(false);
    } catch (error) {
      console.error('QR Code Generation Error:', error);
      setLoading(false);
    }
  };

  return (
    <Box
      className={`flex-1 bg-gray-100 p-5`}
      style={{ paddingTop: insets.top + 20 }}
    >
      <VStack className="space-y-4">
        {/* Greeting */}
        <Text className="text-xl font-semibold text-gray-800">
          Hello, {userName}
        </Text>
        <Text className="text-xl font-bold text-gray-900">
          Welcome To Your Dashboard
        </Text>

        {/* QR Code Card */}
        <VStack className="bg-white rounded-2xl p-6 items-center shadow-md space-y-4">
          {loading ? (
            <Text>Loading QR Code...</Text>
          ) : (
            <Svg
              viewBox="0 0 256 256"
              width="392"
              height="392"
              dangerouslySetInnerHTML={{ __html: qrCodeSvg }}
            />
          )}

          <Text className="text-xl font-semibold text-gray-900">
            {userName}
          </Text>

          {/* Address & Copy Button */}
          <Box className="flex-row items-center space-x-2">
            <Text className="text-base text-gray-500">{qrData}</Text>
            <Pressable onPress={copyToClipboard} className="p-2">
              <Icon as={CopyIcon} size="lg" />
            </Pressable>
          </Box>

          {/* Scan Button */}
          <Button className="bg-blue-500 py-3 px-6 rounded-md w-full items-center">
            <Text className="text-white text-lg font-semibold">Scan</Text>
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}
