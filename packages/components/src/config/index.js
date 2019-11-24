import {Platform} from "react-native";
export const BASE_API_URL = Platform.OS === "web" ? "http://localhost:8010/proxy/" : "https://test-headout.com/";
