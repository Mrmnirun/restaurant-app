import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ProgressViewIOS
} from "react-native";
import Logo from "../../../assets/logo.jpg";

export default LandingPage = ({navigation}) => {
  // const navigation = useNavigation();
  const pressHandler = () => {
    //navigation.navigate('Bill');
    navigation.navigate('MenuItems');
  }
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h1}>Cloud Hotel</Text>
          <Text style={styles.h2}>
            Providing cajun bacon recipes since 1987.
          </Text>
          <Text style={styles.h2}>
            enjoy your meals !
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <Image source={Logo} style={styles.image} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="LET'S START"
              onPress={pressHandler}
              style={styles.button}
            />
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000',
        alignItems: 'center',
        width: '100%',
      },
      h1: {
        color: '#008F68',
        fontSize: 40,
      },
      h2: {
        color: '#FAE042',
        fontSize: 18,
        marginTop: 8,
      },
    topContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
      },
      middleContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      bottomContainer: {
        justifyContent: 'flex-end',
        width: '90%',
        margin: 20,
        padding: 10,
      },
      buttonContainer: {
        backgroundColor: '#008F68',
        borderRadius: 5,
        padding: 8,
        margin: 8,
        color: 'black'
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      image: {
        width: 300,
        height: 260,
        justifyContent: 'center',
      },

})