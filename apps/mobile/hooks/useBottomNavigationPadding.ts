import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useBottomPadding = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();
  return Platform.select({
    ios: tabBarHeight + insets.bottom - 60,
    android: tabBarHeight + insets.bottom - 20,
  });
};
