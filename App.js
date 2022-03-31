import * as React from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Button,
} from 'react-native';
import { ItemList } from './ItemList';
import { ItemListLoader } from './ItemListLoader';

const App = () => {
  const [hasLoaded, setHasLoaded] = React.useState(false);

  React.useEffect(() => {
    wait(2000).then(() => setHasLoaded(true));
  }, []);

  const handleLoadAgain = React.useCallback(() => {
      setHasLoaded(false);
      wait(2000).then(() => setHasLoaded(true));
  }, [hasLoaded]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden />
      <Button onPress={handleLoadAgain} title="Load again!" disabled={!hasLoaded} />
      {hasLoaded ? <ItemList /> : <ItemListLoader />}
    </SafeAreaView>
  );
};

export default App;

const wait = numMs =>
  new Promise(res => setTimeout(() => res(), numMs));

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
