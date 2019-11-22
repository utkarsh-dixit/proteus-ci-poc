
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ToastAndroid,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import ImageSlider from "./molecules/slider/image_slider";
import CompactList from "./molecules/list/compact_list";
import HeadBar from "./molecules/headbar";
import { getAllCategories } from "../src/actions/category";
import { getProductsFromCategory } from "./actions/product";

import { bindActionCreators } from 'redux';

type Props = {};

interface product {
  id: string;
  name: string;
  image: string;
  ratings: { avg: number, total: number };
  pricing: number;
};

type State = {
  slides: Array<{ code: string, name: string, image: string }>
  products: Array<product>;
}
class App extends Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      slides: [

        {
          "code": "SEVILLE",
          "name": "Seville",
          "image": "https://cdn-imgix-open.headout.com/flaps/city-specific/new-york/android/New-York-2505-Christmas+Spectacular-Android-1.png?auto=compress&fm=pjpg&w=1080&h=756&crop=faces&fit=min"        },
        {
          "code": "GRANADA",
          "name": "Granada",
          "image": "https://cdn-imgix.headout.com/tour/721/image/GossipGirls.PCP.jpg"
        },
      ]
    };
  }


  componentWillMount() {
    this.props.getAllCategories((items: any) => {
      items.map((category: any, index: number) => {
        this.props.getProductsFromCategory(category.id);
        return category;
      })
    });
  }

  onSelected() {
    if (Platform.OS == "ios" || Platform.OS == "android") {
      ToastAndroid.show("Clicked", ToastAndroid.LONG);
    } else {
      console.log("Clicked");
    }
  }

  handle_item_click(id: any) {
    if (Platform.OS == "ios" || Platform.OS == "android") {
      ToastAndroid.show("Clicked", ToastAndroid.LONG);
    } else {
      console.log("Clicked");
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <HeadBar/>
          <ImageSlider height={288} slides={this.state.slides} callback={this.onSelected.bind(this)} />
          <View style={styles.mainContainer}>
            {this.props.categories.map((category: any, index: number) => {
              const record = this.props.product_items[category.id];
              const data = record ? record.map((product: any, index: number) => {
                return {
                  id: product.id,
                  name: product.name,
                  image: product.image.url,
                  ratings: { avg: product.ratingCumulative.avg, total: product.ratingCumulative.count },
                  pricing: product.pricing.minimumPrice.finalPrice,
                  currencyCode: product.pricing.currencyCode
                }
              }) : [];
              return data.length > 0 ? (<CompactList style={{ marginBottom: 7 }} itemCallback={this.handle_item_click} title={category.name} key={category.id} items={data}></CompactList>) : null;
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  mainContainer: {
    flex: 1,
    paddingLeft: 10
  }

});


const mapStateToProps = ({ category, product }: any) => ({
  categories: category.list,
  product_items: product.products
});
const mapDispatchToProps = (dispatch: any) => ({
  getAllCategories: (callback: any) => getAllCategories(callback)(dispatch),
  getProductsFromCategory: (category_id: string) => getProductsFromCategory(category_id)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App)