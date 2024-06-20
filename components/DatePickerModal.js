import React, { useState } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import CustomDatePicker from './CustomDatePicker';
import ActionButton from './ActionButton';

const DatePickerModal = ({ visible, onClose, selectedDate, onDateChange }) => {
  const [tempDate, setTempDate] = useState(selectedDate);

  const handleConfirm = () => {
    onDateChange(tempDate);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <CustomDatePicker
            selectedDate={tempDate}
            onDateChange={(date) => setTempDate(date)}
          />
          <View style={styles.buttonContainer}>
            <ActionButton title="CANCEL" onPress={onClose} />
            <ActionButton title="CONFIRM" onPress={handleConfirm} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)', 
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default DatePickerModal;
