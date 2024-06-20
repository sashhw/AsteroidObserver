import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';

const CustomDatePicker = ({ selectedDate, onDateChange }) => {
  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      const selectedDate = dayjs(date).format('YYYY-MM-DD');
      onDateChange(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Date:</Text>
      <DateTimePicker
        value={new Date(dayjs(selectedDate).toDate())}
        mode="date"
        display={'spinner'} 
        onChange={handleDateChange}
        maximumDate={new Date()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default CustomDatePicker;
