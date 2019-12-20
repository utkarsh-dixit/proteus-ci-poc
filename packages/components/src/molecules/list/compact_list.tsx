
import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    ScrollView,
    Dimensions,
    Text,
    Platform
} from 'react-native';
import ProductCard from "../../atoms/card/product_card";
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import mainStyle from "../../styles/app.css";

interface product {
    id: string;
    name: string;
    image: string;
    category?: { id: number, name: string };
    ratings: { avg: number, total: number };
    pricing: number;
    currencyCode: string;
};

type Props = {
    title: string;
    desc?: string;
    items: Array<product>;
    style?: any;
    itemCallback?: any;
};
type State = {
    dataProvider: any;
    extendedState: any;
};

export default class CompactList extends React.Component<Props, State> {

    ref: any;
    dataProvider: DataProvider;
    layoutProvider: LayoutProvider;
    _rowRenderer: any;

    static whyDidYouRender = true

    shouldComponentUpdate(newProps) {
        if (JSON.stringify(newProps.items) == JSON.stringify(this.props.items)) {
            return false;
        }
        return true;
    }

    constructor(props: Props) {
        super(props);
        this.dataProvider = new DataProvider((a, b) => {
            return a !== b;
        }, (index) => { return `id_${props.items[index].id}`; });
        this.layoutProvider = new LayoutProvider(
            index => {
                return 0;
            },
            (type, dimension) => {
                dimension.height = 331;
                dimension.width = 303;
            }
        );
        this._rowRenderer = this._prepareItem.bind(this);

        //Since component should always render once data has changed, make data provider part of the state
        this.state = {
            dataProvider: this.dataProvider.cloneWithRows(this.props.items),
            extendedState: {
                ids: [] //array of ids
            }
        };
    }

    _prepareItem(index, data) {
        return (
            // <View style={styles.itemContainer}>

            <ProductCard data={data} style={styles.itemContainer} width={291} height={311} callback={this.props.itemCallback}>
            </ProductCard>
            // </View>

        );
    }


    extractKey(item) {
        return item.id.toString();
    }

    getItemLayout(data: any, index) {
        return { length: 291, offset: (304) * index, index }
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={styles.heading}>
                    <View style={{ flexDirection: "row" }}>
                        <Text className={mainStyle.test} style={styles.heading_text}>{this.props.title}</Text>
                        <Text style={styles.viewAll}>View All</Text>
                    </View>
                    {this.props.desc && (<Text style={styles.desc}>{this.props.desc}</Text>)}
                </View>
                <RecyclerListView forceNonDeterministicRendering={true} extendedState={this.state.extendedState} isHorizontal={true} style={{ flex: 1, minHeight: 331 }} layoutProvider={this.layoutProvider} dataProvider={this.state.dataProvider} rowRenderer={this._rowRenderer} />
                {/* <FlatList
                    data={this.props.items}
                    horizontal={true}
                    style={{ marginLeft: -4, flexGrow: 0 }}
                    // contentContainerStyle={{    alignItems: "baseline"}}
                    getItemLayout={this.getItemLayout}
                    renderItem={this._rowRenderer}
                    removeClippedSubviews={true}
                    keyExtractor={this.extractKey}
                    initialNumToRender={4}
                    // initialScrollIndex={0}
                    legacyImplementation={Platform.OS !== "web" ? true : false}
                    scrollEventThrottle={16}
                /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 400,
        paddingBottom: 10
    },
    heading: {
        marginTop: 24,
        marginBottom: 20
    },
    itemContainer: {
        // alignContent: "space-around",
        justifyContent: "flex-start",
        flex: 1,
        height: 331,
        backgroundColor: "#0000"

    },
    desc: {
        color: "rgb(84,84,84)",
        fontSize: 16,
        marginTop: 12,
        fontWeight: "300",
        fontFamily: "Avenir",
    },
    viewAll: {
        textAlign: "right",
        flex: 1,
        paddingRight: 28,
        color: "rgb(79, 195, 247)",
        fontWeight: "400",
        fontFamily: "Avenir",
    },
    heading_text: {
        fontSize: 18,
        fontWeight: "600",
        color: "rgb(84,84,84)",
        lineHeight: 28,
        fontFamily: "Avenir",
    }
});