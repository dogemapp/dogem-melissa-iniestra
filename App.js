import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView,TextInput, Image, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//HomeScreen has a parameter of 'navigation' in order to go from screen to screen
function HomeScreen({ navigation }) {
  return (
  // Styling for the first View affects the entire screen layout (TopLeft) -> (Center)
    <View style = {styles.overview_screen}>
      {/* The purpose of SafeAreaView is to render content within the safe area boundaries of a device. 
      It is currently only applicable to iOS devices with iOS version 11 or later. */}
      <SafeAreaView> 
        <Image 
        style={{ width: 300, height: 300 }}
        source={require("./assets/DogEm_Logo.png")} 
        /> 
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </SafeAreaView>
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={styles.overview_screen}>
      <SafeAreaView>
        <Text style = {styles.TextField}>   Username: *</Text>
          <TextInput
              style={styles.input}
              placeholder = 'Username'
            />
        <Text style = {styles.TextField}>   Password: *</Text>
          <TextInput
              style={styles.input}
              placeholder = 'Password'
            />
        <View style = {{alignItems: 'flex-end'}}> 
        <Button
            title="Sign In"
            onPress={() => navigation.navigate('UserAccess')}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

function RegisterScreen ({ navigation }) {
  return(
    <View style={styles.overview_screen}> 
      <SafeAreaView>
      <Text style = {styles.TextField}>   First Name: *</Text>
          <TextInput
              style={styles.input}
              placeholder = 'First Name'
            />
        <Text style = {styles.TextField}>   Last Name: *</Text>
          <TextInput
              style={styles.input}
              placeholder = 'Last Name'
            />
        <Text style = {styles.TextField}>   Email: *</Text>
          <TextInput
              style={styles.input}
              placeholder = 'Example@email.com'
            />
        <Text style = {styles.TextField}>   Username: *</Text>
          <TextInput
              style={styles.input}
              placeholder = 'Username'
            />
        <Text style = {styles.TextField}>   Password: *</Text>
          <TextInput
              style={styles.input}
              placeholder = 'Password'
            />
        <View style = {{alignItems: 'flex-end'}}> 
        <Button
            title="Sign Up"
            onPress={() => Alert.alert('Registration Success')}
          />
          </View>
      </SafeAreaView>
    </View>
  );
}


// Welcome Screen
function UserAccessScreen ({ navigation }){
  return(
    <View style = {styles.overview_screen}>
      <SafeAreaView >
        <Text>List View of Contacts</Text>
          <Button
            title="DogEm"
            onPress={() => navigation.navigate('DogEm')}
          />
      </SafeAreaView>
    </View>
  );
}

function ContactsScreen ({ navigation }){
  return(
    <View style = {styles.overview_screen}>
      <SafeAreaView>
        <Text>Edit Contacts Page</Text>
      </SafeAreaView>
    </View>
  );
}

function DogEmScreen ({ navigation }){
  return(
    <View style = {styles.overview_screen}>
      <SafeAreaView>
        <Text style = {styles.title}>Contact Overview</Text>
        <Text style = {styles.TextField}>   Message: *</Text>
          <TextInput style = {styles.input}
              placeholder = 'Example: Please answer ASAP!'
            />
            <View style = {{alignItems: 'flex-end'}}>
              <Button
              title="Send"
              onPress={() => Alert.alert('Message Sent')}
              />
            </View>
      </SafeAreaView>
    </View>
  );
}


function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
        // Commented out until decided on whether we want to change the header background color or not
        //   options={{
        //     headerStyle: {
        //       backgroundColor: '',
        //     }}}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="UserAccess" component={UserAccessScreen} 
           options={({navigation}) => ({
            title:'Welcome',
            headerStyle: {
              backgroundColor: '',
            },
            headerRight: () => (
              <View style={{marginHorizontal: -10, flexDirection: "row"}}>
               <Button
                 title="Logout" //Header Button for a more neat look
                 onPress={() => navigation.navigate('Login')}   
              />
               <Button
                 title="+" //Header Button for a more neat look
                 onPress={() => navigation.navigate('Contacts')}
               />
              </View>
            )  
           })}
        />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="DogEm" component={DogEmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles to apply to components (e.g TextInput, Button)
const styles = StyleSheet.create({
  overview_screen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'white' // Affects the overall color of each screen (default is gray)
  },
  title: {
    textAlign: 'center',
    marginVertical: 8, // > # seems to increase only the surrounding elements
                        // when an Input Textbox is involved
                        // See 'DogEm Page' for changes
  },
  //Styles the Field names shown above the Input Textboxes
  TextField: {
    textAlign: 'left',
  },
  //Styling for TextInput boxes where users will type their designated fields
  input: {
    height: 40,
    width: 275, 
    margin: 12, //Length apart of other Fields around it
    borderWidth: 1,
    padding: 10, //Padding of placeholder
  },
  //FitToText styles buttons based on the length of the title. It requires a new view 
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;