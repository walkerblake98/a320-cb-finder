
import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { colors } from '@/styles/commonStyles';

interface DisclaimerModalProps {
  visible: boolean;
  onAcknowledge: () => void;
}

export default function DisclaimerModal({ visible, onAcknowledge }: DisclaimerModalProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const dynamicStyles = {
    modalBackground: {
      backgroundColor: isDark ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: isDark ? '#1C1C1E' : '#FFFFFF',
    },
    titleText: {
      color: isDark ? '#FFFFFF' : '#000000',
    },
    messageText: {
      color: isDark ? '#E5E5E7' : '#333333',
    },
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onAcknowledge}
    >
      <View style={[styles.modalOverlay, dynamicStyles.modalBackground]}>
        <View style={[styles.modalContent, dynamicStyles.modalContent]}>
          <Text style={[styles.modalTitle, dynamicStyles.titleText]}>
            Disclaimer
          </Text>
          <Text style={[styles.modalMessage, dynamicStyles.messageText]}>
            This app should only be used to locate circuit breakers. Only pull/reset CB&apos;s in accordance with your SOP&apos;s or under the direction of maintenance control!
          </Text>
          <TouchableOpacity
            style={styles.acknowledgeButton}
            onPress={onAcknowledge}
            activeOpacity={0.7}
          >
            <Text style={styles.acknowledgeButtonText}>Acknowledge</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 16,
    padding: 24,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    elevation: 8,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  modalMessage: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  acknowledgeButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acknowledgeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
