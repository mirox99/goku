import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Confirm from './pages/auth/Confirm';
import Index from './pages/dashboard';

const Stack = createStackNavigator();

export default function AppStackNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Confirm" component={Confirm}/>
        <Stack.Screen name="Dashboard" component={Index} options={{
          headerLeft: () => null,
          headerShown: false
        }}/>
      </Stack.Navigator>
  );
}
