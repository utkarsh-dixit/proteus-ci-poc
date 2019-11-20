
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
          "code": "GRANADA",
          "name": "Granada",
          "image": "https://cdn-imgix.headout.com/cities/granada/images/mobile/morning.jpg"
        },
        {
          "code": "SEVILLE",
          "name": "Seville",
          "image": "https://cdn-imgix.headout.com/cities/seville/images/mobile/morning.jpg"
        },
      ],
      products: [
        {
          id: "INR",
          name: "Aladdin",
          image: "https://cdn-imgix.headout.com/cities/granada/images/mobile/morning.jpg",
          ratings: { avg: 4.5, total: 322 },
          pricing: 3297
        },
        {
          id: "INR",
          name: "Aladdina",
          image: "https://cdn-imgix.headout.com/cities/granada/images/mobile/morning.jpg",
          ratings: { avg: 4.5, total: 322 },
          pricing: 3297
        }
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

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <ImageSlider height={260} slides={this.state.slides} callback={this.onSelected.bind(this)} />
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
              return data.length > 0 ? (<CompactList style={{ marginBottom: 7 }} title={category.name} key={category.id} items={data}></CompactList>) : null;
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