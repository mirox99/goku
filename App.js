import { StyleSheet, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './AppStackNavigator';
import { Amplify } from "aws-amplify";
import aws_exports from './src/aws-exports';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

Amplify.configure(aws_exports);

const theme = {
    ...DefaultTheme, colors: {
        ...DefaultTheme.colors, primary: 'black', secondary: 'white',
    },
};

export default function App() {

    return (<PaperProvider theme={ theme }>
        <NavigationContainer>
            <View style={ styles.container }>
                <AppStackNavigator/>
            </View>
        </NavigationContainer>
    </PaperProvider>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff',
    }
});
