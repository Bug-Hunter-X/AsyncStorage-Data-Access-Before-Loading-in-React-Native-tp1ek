import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('@my_key');
        if (value !== null) {
          setData(JSON.parse(value));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (data === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{data.name}</Text>
      {/* Access other data properties here */}
    </View>
  );
};

export default MyComponent;