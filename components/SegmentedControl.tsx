
import React, { useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { colors } from '@/styles/commonStyles';

const { width: screenWidth } = Dimensions.get('window');

export interface SegmentOption {
  label: string;
  value: string;
}

interface SegmentedControlProps {
  options: SegmentOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  containerWidth?: number;
}

export default function SegmentedControl({
  options,
  selectedValue,
  onValueChange,
  containerWidth = screenWidth - 40,
}: SegmentedControlProps) {
  const animatedValue = useSharedValue(0);

  React.useEffect(() => {
    const selectedIndex = options.findIndex((opt) => opt.value === selectedValue);
    if (selectedIndex >= 0) {
      animatedValue.value = withSpring(selectedIndex, {
        damping: 20,
        stiffness: 180,
        mass: 0.8,
      });
    }
  }, [selectedValue, options, animatedValue]);

  const segmentWidth = containerWidth / options.length;

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: animatedValue.value * segmentWidth,
        },
      ],
    };
  });

  return (
    <View style={[styles.container, { width: containerWidth }]}>
      <View style={styles.background}>
        <Animated.View
          style={[
            styles.indicator,
            indicatorStyle,
            { width: segmentWidth },
          ]}
        />
        <View style={styles.segmentsContainer}>
          {options.map((option, index) => {
            const isSelected = option.value === selectedValue;
            return (
              <React.Fragment key={index}>
                <TouchableOpacity
                  style={[styles.segment, { width: segmentWidth }]}
                  onPress={() => onValueChange(option.value)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.segmentText,
                      isSelected && styles.segmentTextSelected,
                    ]}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              </React.Fragment>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginVertical: 12,
  },
  background: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 4,
    position: 'relative',
    borderWidth: 1,
    borderColor: colors.secondary + '30',
  },
  indicator: {
    position: 'absolute',
    top: 4,
    left: 4,
    bottom: 4,
    backgroundColor: colors.primary,
    borderRadius: 10,
    boxShadow: '0px 2px 8px rgba(0, 123, 255, 0.3)',
    elevation: 4,
  },
  segmentsContainer: {
    flexDirection: 'row',
    position: 'relative',
    zIndex: 1,
  },
  segment: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textSecondary,
    transition: 'color 0.2s ease',
  },
  segmentTextSelected: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
