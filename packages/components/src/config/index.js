import {Platform} from "react-native";
export const API_SERVER = Platform.OS === "web" ? "http://localhost:8010/proxy/api/public/v1/" : "https://test-headout.com/api/public/v1/";