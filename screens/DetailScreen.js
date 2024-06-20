import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import ActionButton from '../components/ActionButton';
import dayjs from 'dayjs';

const DetailScreen = ({ neo, onClose }) => {
  const isHazardous = neo.is_potentially_hazardous_asteroid;
  const date = neo.close_approach_data[0].close_approach_date;
console.log(neo)
  return (
    <View style={styles.container}>
         <StatusBar
        barStyle="dark-content" 
        backgroundColor="#f0f0f0" 
      />
      <View style={styles.dateContainer}>
      <Text style={styles.neoDate}>
          {dayjs(date).format('MMMM D, YYYY')}
        </Text>
      </View>
      <View style={styles.neoContainer}>
        <Text style={styles.neoName}>{neo.name}</Text>
        <Text style={styles.neoText}>
          Diameter: {neo.estimated_diameter.feet.estimated_diameter_min.toFixed(2)} - {neo.estimated_diameter.feet.estimated_diameter_max.toFixed(2)} feet
        </Text>
        <Text style={styles.neoText}>
          Velocity: {neo.close_approach_data[0].relative_velocity.miles_per_hour} mph
        </Text>
        <Text style={styles.neoText}>
          Miss Distance: {neo.close_approach_data[0].miss_distance.miles} miles
        </Text>
        <Text style={styles.neoText}>
          Potentially Hazardous: {' '}
          <Text style={{ color: isHazardous ? 'red' : 'green', fontWeight: '700' }}>
            {isHazardous ? 'Yes' : 'No'}
          </Text>
        </Text>
        <View style={styles.buttonContainer}>
          <ActionButton title="CLOSE" onPress={onClose} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40, 
    backgroundColor: '#f0f0f0',
  },
  dateContainer: {
    maxWidth: 400, 
    padding: 15,
    marginTop: 40, 
    backgroundColor: 'white',
    borderRadius: 8, 
    shadowOpacity: 0.25, 
    shadowRadius: 3, 
    alignItems: 'center', 
    elevation: 5
  },
  neoContainer: {
    width: '100%',
    maxWidth: 400, 
    padding: 15,
    marginTop: 20, 
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3, 
    elevation: 5
  },
  neoDate: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  neoName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50, 
    textAlign: 'center', 
  },
  neoText: {
    fontSize: 18,
    marginBottom: 24,
  },
  buttonContainer: {
    marginTop: 20, 
    marginHorizontal: 50
  },
});

export default DetailScreen;
