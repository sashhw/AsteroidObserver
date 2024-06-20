import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import ActionButton from '../components/ActionButton';
import DatePickerModal from '../components/DatePickerModal';
import { fetchNEOs } from '../Api';
import ItemData from '../components/ItemData';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import DateTimePickerModal from "react-native-modal-datetime-picker";

dayjs.extend(localizedFormat);

const NeoScreen = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [neoList, setNeoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  useEffect(() => {
    fetchNeoData(selectedDate);
  }, [selectedDate]);

  const fetchNeoData = async (date) => {
    setLoading(true);
    try {
      const neoData = await fetchNEOs(date);
      setNeoList(neoData);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error('Error fetching NEO data:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  const renderNeoItem = ({ item }) => (
    <ItemData neo={item} />
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
      />
      <View style={styles.buttonDateContainer}>
        <Text style={styles.selectedDateText}>
          {dayjs(selectedDate).format('MMMM D, YYYY')}
        </Text>
        <ActionButton onPress={() => setDatePickerVisible(true)} title="CHANGE" />
      </View>
      {Platform.OS === 'ios' ? (
        <DatePickerModal
          visible={isDatePickerVisible}
          onClose={() => setDatePickerVisible(false)}
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
        />
      ) : (
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={new Date(selectedDate)}
        onConfirm={(date) => {
              setSelectedDate(dayjs(date).format('YYYY-MM-DD'));
              setDatePickerVisible(false);
            }}
        onCancel={() => setDatePickerVisible(false)}
      />
      )}
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text style={styles.errorText}>Error: {error}</Text>
      ) : neoList.length === 0 ? (
        <Text>No NEOs found for this date.</Text>
      ) : (
        <FlatList
          data={neoList}
          renderItem={renderNeoItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%'
  },
  selectedDateText: {
    fontSize: 24,
    marginVertical: 10,
    fontWeight: '500'
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  buttonDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  datePicker: {
    marginTop: 20,
  },
});

export default NeoScreen;
