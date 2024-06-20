import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import DetailScreen from '../screens/DetailScreen';
import ActionButton from '../components/ActionButton';

const ItemData = ({ neo }) => {
  const isHazardous = neo.is_potentially_hazardous_asteroid;
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.neoContainer}>
      <View style={styles.header}>
        <Text style={styles.neoName}>{neo.name}</Text>
        <ActionButton title="EXPAND" onPress={toggleModal} />
      </View>
      <Text style={styles.neoText}>
        Potentially Hazardous: {' '}
        <Text style={{ color: isHazardous ? 'red' : 'green', fontWeight: '700' }}>
          {isHazardous ? 'Yes' : 'No'}
        </Text>
      </Text>

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <DetailScreen neo={neo} onClose={toggleModal} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  neoContainer: {
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    borderRadius: 10, 
    backgroundColor: '#f0f0f0', 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3, 
    elevation: 5

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  neoName: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
  },
  neoText: {
    fontSize: 16,
    marginBottom: 3,
  },
});

export default ItemData;
