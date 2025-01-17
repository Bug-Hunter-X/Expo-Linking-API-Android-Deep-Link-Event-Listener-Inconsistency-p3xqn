// bugSolution.js
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleDeepLink = async (event) => {
      console.log('Deep link event:', event.url);
      // Process the deep link
    };
    Linking.addEventListener('url', handleDeepLink);

    const getInitialUrl = async () => {
      const url = await Linking.getInitialURLAsync();
      if (url) {
        setInitialUrl(url);
        console.log('Initial URL:', url);
        // Process the initial URL
      }
    };
    getInitialUrl();

    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  return (
    <View>
      {initialUrl && <Text>Initial URL: {initialUrl}</Text>}
    </View>
  );
}

export default App;