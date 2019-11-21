
import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Image,
    Platform
} from 'react-native';

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
    data: product;
};
type State = {};

function shadowgiver(elevation, color) {
    const shadowOffset = { width: 0, height: 0.5 * elevation };
    const shadowOpacity = 0.3;
    const shadowRadius = 0.8 * elevation;
    const shadowColor = color || 'black';
    console.log(`${shadowOffset.width}px ${shadowOffset.height}px ${shadowRadius}px ${shadowColor}`);
    return Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOpacity,
        shadowRadius,
        shadowOffset,
      },
      android: {
        elevation,
      },
      web: {
        boxShadow: `${shadowOffset.width}px ${shadowOffset.height}px ${shadowRadius}px ${shadowColor}`,
      },
    });
  }

export default class ProductCard extends Component<Props, State> {

    render() {
        const { data } = this.props;

        return (
            <View style={{ flex: 1, width: this.props.width, marginRight: 10, ...styles.container }}>
                <Image source={{ uri: this.props.data.image }} style={{ height: 200, backgroundColor: "yellow" }} />
                <View style={{flex: 1}}>
                    <Text style={styles.item_name}>{data.name.substr(0,30)}</Text>
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
                            <Text style={styles.booking_price}>{data.currencyCode === "USD" ? "$" : data.currencyCode} {data.pricing}</Text>
                        </View>
                    </View>
                </View>
            </View>
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
        fontSize: 14,
        marginTop: 2,
        textAlign: "right",
        color: "#444444"
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
        ...shadowgiver(3, "#000")
    }
});