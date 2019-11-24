
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
import { getProductsFromCategory, getProductsFromCategoryInBatch } from "./actions/product";
import SearchBar from "./atoms/search_bar/index";
import CategoryList from "./molecules/list/category_list";
import { shadowgiver } from "./util/helpers";
import FeedSeperator from "./atoms/feed_seperator";
import { calendar, camera, collections, account, explore } from "./assets/icons";
import { bindActionCreators } from 'redux';
import StyledLink from './atoms/styled_link';
import CollectionList from './molecules/list/collection_list';
import Footer from "./molecules/footer";
import { getBanners } from "./actions/city";

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
  categories: Array<{ name: string, image: string, id: string }>
  top_experiences: Array<any>,
  collections: Array<{ id: number, name: string, image: string }>,
  search: string;
}

interface product {
  id: string;
  name: string;
  image: string;
  category?: { id: number, name: string };
  ratings: { avg: number, total: number };
  pricing: number;
  currencyCode: string;
};

class App extends Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      slides: [],
      categories: [],
      top_experiences: require("./data/top_experiences.json"),
      collections: require("./data/collections.json"),
      search: ""
    };
  }


  componentDidMount() {
    this.props.getBanners();
    this.props.getAllCategories((items: any) => {
      if (Object.keys(this.props.product_items).length === 0) {
        items.slice(0, 10).map((category: any) => {
          this.props.getProductsFromCategory(category.id);
          return category;
        })
      }
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

  updateSearchValue(value: string) {
    this.setState({ search: value });
  }

  getBanners() {
    return this.props.banners ? this.props.banners.map((value, index) => {
      return {
        "code": `${index + 1}`,
        "name": value.title,
        "image": value.imageUrl
      }
    }) : [];
  }

  getCategories() {
    if(this.props.category_schema && this.props.category_schema.categories){
      return this.props.category_schema.categories.map((current, index) => {
        return {
          "id": current.id,
          "name": current.displayName,
          "image": current.cardImageUrl + "?auto=compress&fm=pjpg&w=60&h=60&crop=faces&fit=min"
        };
      }) 
    } else {
      return [];
    }
  }

  getItems(product: Array<{ id: number, name: string, tourType: string, imageUrl: string, listingPrice: { currencyCode: string, bestDiscount: number, originalPrice: number, finalPrice: number }, primaryCategory: { id: number, name: string, displayName: string }, reviewCount: number, averageRating: number, callToAction: string }>) {
    return product.map((current, index) => {
      return {
        id: current.id,
        name: current.name,
        image: current.imageUrl,
        category: {
          id: current.primaryCategory.id,
          name: current.primaryCategory.displayName
        },
        ratings: { avg: current.averageRating, total: current.reviewCount },
        pricing: current.listingPrice.finalPrice,
        currencyCode: current.listingPrice.currencyCode
      }
    }, []).slice(0, 10);
  }

  _getProductsInCategory(id, limit = 10) {
    const record = this.props.product_items[id];
    return record ? record.map((product: any) => {
      return {
        id: product.id,
        name: product.name,
        image: product.image.url,
        category: {
          id: product.primaryCategory.id,
          name: product.primaryCategory.name
        },
        ratings: { avg: product.ratingCumulative.avg, total: product.ratingCumulative.count },
        pricing: product.pricing.minimumPrice.finalPrice,
        currencyCode: product.currency.code
      }
    }, []).slice(0, limit) : [];
  }

  render() {
    const banners = this.getBanners();
    const categories = this.getCategories();
    return (
      <SafeAreaView style={styles.container} >
        <HeadBar />

        <ScrollView style={styles.scrollView}>
          <View style={{ position: "relative" }}>
            <ImageSlider height={288} slides={banners} callback={this.onSelected.bind(this)} />
            <View style={{ position: "relative", alignItems: "center", flex: 1, top: -20 }}>
              <SearchBar placeholder="Search for experiences" value={this.state.search} style={{ alignSelf: 'stretch', height: 50, marginLeft: 20, borderRadius: 5, paddingLeft: 14.98, paddingRight: 55, backgroundColor: "#fff", marginRight: 20, borderColor: "transparent", ...shadowgiver(4, "#000", 5, 25), fontFamily: "Avenir", fontWeight: this.state.search.length == 0 ? 'bold' : 'normal' }} callback={this.updateSearchValue.bind(this)} />
            </View>
          </View>
          <View style={styles.mainContainer}>
            <CategoryList items={categories} />
            <FeedSeperator />
            <CompactList items={this.getItems(this.state.top_experiences)} title="Top Experiences in New York" desc="Handpicked curated activities just for you" style={{ marginLeft: 10 }}></CompactList>
            <View style={{ marginLeft: 10, marginTop: 10, marginRight: 10 }}>
              <StyledLink
                links={[{ icon: camera, text: "Top 10 Experiences" }, { icon: calendar, text: "This Week Only" }]} style={{ flex: 1 }} /></View>
          </View>
          <CollectionList items={this.state.collections} title="Collections" style={{ marginLeft: 20 }} desc="Discover experiences based on these themes" />
          <View style={{ marginTop: 10 }}>
            {categories.map((category: any, index: number) => {
              const data = this._getProductsInCategory(category.id);
              return data.length > 0 ? (<CompactList style={{ marginBottom: 7, marginLeft: 20 }} itemCallback={this.handle_item_click} title={category.name} key={category.id} items={data}></CompactList>) : null;
            })}
          </View>
        </ScrollView>
        <Footer items={[{ id: "1", icon: explore, text: "Explore" }, { id: "2", icon: collections, text: "Collections" }, { id: "3", icon: account, text: "Account" }]} active={"1"} >

        </Footer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    // paddingTop: 50,
    backgroundColor: "#f7f7f7"
  },
  mainContainer: {
    flex: 1,
    paddingLeft: 10
  }

});


const mapStateToProps = ({ category, product, city }: any) => ({
  category_schema: category.schema,
  banners: city.banners,
  product_items: product.products
});
const mapDispatchToProps = {
  getAllCategories,
  getProductsFromCategory,
  getProductsFromCategoryInBatch,
  getBanners
}

export default connect(mapStateToProps, mapDispatchToProps)(App)