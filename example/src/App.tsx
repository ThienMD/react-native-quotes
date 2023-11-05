import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import {
  multiply,
  generateEnglishQuote,
  generateVietnamQuote,
} from 'react-native-quotes';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [quote, setQuote] = React.useState({ vietnam: '', english: '' });
  React.useEffect(() => {
    multiply(3, 7).then(setResult);
    getQuotes();
  }, []);

  const getQuotes = async () => {
    try {
      const vietnam = await generateVietnamQuote();
      const english = await generateEnglishQuote();
      console.log('vietnam', vietnam);
      setQuote({
        vietnam,
        english,
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text>Vietnam Quote: {quote.vietnam}</Text>
      <Text>English Quote: {quote.english}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
