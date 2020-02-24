import { Platform} from 'react-native';

let BASE_API_URL, HEADOUT_CHATBOT_GROUP;

let dev = Platform.OS === "web" ? process.env.DEV : __DEV__;

if (dev) {
    BASE_API_URL = "https://www.test-headout.com/";
    HEADOUT_CHATBOT_GROUP = "14";
} else {
    BASE_API_URL = "https://www.headout.com/";
    HEADOUT_CHATBOT_GROUP = "15";
}
export { BASE_API_URL, HEADOUT_CHATBOT_GROUP};