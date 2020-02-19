export let BASE_API_URL;
export let HEADOUT_CHATBOT_GROUP;
if (__DEV__) {
    BASE_API_URL = "https://www.test-headout.com/";
    HEADOUT_CHATBOT_GROUP = "14";
} else {
    BASE_API_URL = "https://www.headout.com/";
    HEADOUT_CHATBOT_GROUP = "15";
}
