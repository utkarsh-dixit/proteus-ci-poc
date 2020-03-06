import { Platform } from 'react-native';

let BASE_API_URL, HEADOUT_CHATBOT_GROUP, SENTRY_DSN;

const dev = Platform.OS === "web" ? process.env.DEV : __DEV__;

if (dev) {
    BASE_API_URL = "https://www.test-headout.com/";
    HEADOUT_CHATBOT_GROUP = "14";
    SENTRY_DSN = 'https://43e6055371754efd961cec48b0b0cfe8@sentry.io/3806304';
} else {
    BASE_API_URL = "https://www.headout.com/";
    HEADOUT_CHATBOT_GROUP = "15";
    SENTRY_DSN = 'https://443aa6bd1e994cdfa692b13ac38224e2@sentry.io/3807081';
}
export { BASE_API_URL, HEADOUT_CHATBOT_GROUP, SENTRY_DSN };
