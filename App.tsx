/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import {
	SafeAreaProvider,
	useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
	const isDarkMode = useColorScheme() === 'dark';

	return (
		<SafeAreaProvider>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<AppContent />
		</SafeAreaProvider>
	);
}

function AppContent() {
	const safeAreaInsets = useSafeAreaInsets();

	return (
		<View style={styles.container}>
			{/* <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      /> */}
			<Text style={styles.text}>Hello World Pradeep !</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3a3737',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#ece3e3',
		fontSize: 20,
		fontWeight: 'bold',
	},
});

export default App;
