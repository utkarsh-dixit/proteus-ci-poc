import {PermissionsAndroid} from "react-native";

export async function requestContactsPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'React Native One Contacts Permission',
          message:
            'React Native One needs access to your contacts ' +
            'so you can use this awesome app.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
          console.log(granted);
        return false
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  }