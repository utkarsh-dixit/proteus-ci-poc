
import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Image,
    Platform,
    TouchableWithoutFeedback
} from 'react-native';
import {shadowgiver} from "../../util/helpers";

interface product {
    id: string;
    name: string;
    image: string;
    ratings: { avg: number, total: number };
    pricing: number;
    currencyCode: string;
};

type Props = {
    width: number;
    callback?: any;
    data: product;
};
type State = {};

export default class ProductCard extends React.PureComponent<Props, State> {

    render() {
        const { data } = this.props;

        return (
            <TouchableWithoutFeedback onPress={this.props.callback}>
                <View style={{
                    flex: 1, width: this.props.width, ...shadowgiver(3, "#000",5, 10), marginTop: 3,
                    marginLeft: 3, marginBottom:5, backgroundColor: "white", marginRight: 10, ...styles.container
                }}>
                    <Image source={{ uri: this.props.data.image.replace(/^(\/\/\.*?)/i, "https://") }} style={{ height: 200, backgroundColor: "rgb(199,199, 205)" }} />
                    <View style={{
                        flex: 1, backgroundColor: "white",
                        padding: 5,
                        paddingRight: 7
                    }}>
                        <Text style={styles.item_name}>{data.name.substr(0, 30)}</Text>
                        <View style={styles.ratingContainer}>
                            <Text style={styles.rating_avg}>{data.ratings.avg}</Text>
                            <Text style={styles.total_rating_text}>{data.ratings.total} ratings</Text>
                        </View>
                        <View style={styles.product_status_container}>
                            <View style={{ alignSelf: "flex-end" }}>
                                <Text style={styles.booking_text}>9 bookings in last 2 hours</Text>
                            </View>
                            <View style={styles.booking_price_container}>
                                <Text style={styles.booking_price_desc}>from</Text>
                                <Text style={styles.booking_price}>{data.currencyCode === "USD" ? "$" : data.currencyCode}{data.pricing}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 0.3
    },
    item_name: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 5
    },
    ratingContainer: {
        marginTop: 5,
        marginLeft: 5,
        flexDirection: "row"
    },
    rating_avg: {
        fontSize: 14,
        // fontWeight:"bold",
        color: "#fac13c"
    },
    total_rating_text: {
        fontSize: 14,
        color: "#d8d8d8",
        marginLeft: 12
    },
    booking_text: {
        fontSize: 14,
        color: "#d8d8d8",
    },
    booking_price_container: {
        alignSelf: "flex-end"
    },
    booking_price_desc: {
        fontSize: 12,
        alignSelf: "flex-end",
        color: "#d8d8d8",
    },
    booking_price: {
        fontSize: 15,
        marginTop: 2,
        textAlign: "right",
        color: "#444444",
        fontWeight: "bold"
    },
    product_status_container: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 5,
        position: "relative",
        top: -5,
        justifyContent: "space-between"
    },
    container: {
        backgroundColor: "white",
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 5
    }
});