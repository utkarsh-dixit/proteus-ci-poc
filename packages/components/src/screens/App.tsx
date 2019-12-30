
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ToastAndroid,
  FlatList,
  ScrollView,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import ImageSlider from "../molecules/slider/image_slider";
import CompactList from "../molecules/list/compact_list";
import HeadBar from "../molecules/headbar";
import { getAllCategories } from "../actions/category";
import { getProductsFromCategory, getProductsFromCategoryInBatch } from "../actions/product";
import SearchBar from "../atoms/search_bar/index";
import CategoryList from "../molecules/list/category_list";
import { shadowgiver } from "../util/helpers";
import FeedSeperator from "../atoms/feed_seperator";
import { calendar, camera, collections, account, explore } from "../assets/icons";
import { bindActionCreators } from 'redux';
import StyledLink from '../atoms/styled_link';
import CollectionList from '../molecules/list/collection_list';
import Footer from "../molecules/footer";
import { getBanners } from "../actions/city";
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview';

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
  itemToRender: number,
  extendedState: any,
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

  footerNav: Array<{ id: string, icon: any, text: string }>;
  links: Array<{ icon: any, text: string }>
  dataProvider: DataProvider;
  // static whyDidYouRender = true

  constructor(props: any) {
    super(props);
    this.state = {
      slides: [],
      categories: [],
      top_experiences: require("../data/top_experiences.json"),
      collections: require("../data/collections.json"),
      itemToRender: 2,
      extendedState: [],
      search: ""
    };
    this.dataProvider = new DataProvider((a, b) => {
      return a.name + "_" + a.id !== b.name + "_" + b.id;
    });
    this.footerNav = [{ id: "1", icon: explore, text: "Explore" }, { id: "2", icon: collections, text: "Collections" }, { id: "3", icon: account, text: "Account" }];
    this.links = [{ icon: camera, text: "Top 10 Experiences" }, { icon: calendar, text: "This Week Only" }];
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.onSelected = this.onSelected.bind(this);
  }


  componentDidMount() {
    if (!this.props.misc.ssr) {
      this.props.getBanners();
      this.props.getAllCategories((items: any) => {
        if (Object.keys(this.props.product_items).length === 0) {
          const ids = [];
          items.slice(0, 9).map((category: any) => {
            ids.push(category.id);
            this.props.getProductsFromCategory(category.id);
          });
          // this.props.getProductsFromCategoryInBatch(ids);
        }
      });
    }
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
      const title = value.title.replace(" ", "_").toUpperCase();
      const id = value.imageUrl.split("/").slice(-1);
      return {
        "code": `${title}_${id}`,
        "name": value.title,
        "image": value.imageUrl + `?auto=compress&fm=pjpg&w=${Dimensions.get('window').width}&crop=faces&fit=min`
      }
    }) : [];
  }

  getCategories() {
    if (this.props.category_schema && this.props.category_schema.categories) {
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

  getItems(product: any) {
    return product.pageData.items.length > 0 ? product.pageData.items.map((current, index) => {
      return {
        id: current.id,
        name: current.name,
        image: current.imageUrl + "?auto=compress&fm=pjpg&w=291&h=182&crop=faces&fit=min",
        category: {
          id: current.primaryCategory.id,
          name: current.primaryCategory.displayName
        },
        ratings: { avg: current.averageRating, total: current.reviewCount },
        pricing: current.listingPrice.finalPrice,
        currencyCode: current.listingPrice.currencyCode
      }
    }) : [];
  }

  _getProductsInCategory(id, limit = 10) {
    const record = this.props.product_items[id];
    return record ? record.map((product: any) => {
      return {
        id: product.id,
        name: product.name,
        image: product.image.url + "?auto=compress&fm=pjpg&w=291&h=182&crop=faces&fit=min",
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

  getListOfCagegories(categories) {

    const renderListContainer = ({ item, index }) => {
      // if (index + 1 <= this.state.itemToRender || Platform.OS == "web") {
      // No infinte looad for web
      const data = this._getProductsInCategory(item.id, 10);
      return data.length > 0 ? (<CompactList style={styles.cListAbs} itemCallback={this.handle_item_click} title={item.name} key={`cat_${item.id}`} items={data}></CompactList>) : null;
      // }
    };

    const d = this.dataProvider.cloneWithRows(categories);

    const layoutProvider = new LayoutProvider(
      index => {
        return 0;
      },
      (type, dimension) => {
        dimension.height = 400;
        dimension.width = Dimensions.get('window').width;
      }
    );

    return (
      <FlatList
        data={categories}
        renderItem={renderListContainer}
        removeClippedSubviews={true}
        initialNumToRender={2}
        keyExtractor={(item) => { return `cat_${item.id}`; }}
        scrollEventThrottle={50}
        windowSize={3}
      // legacyImplementation={Platform.OS !== "web" ? true : false}
      />
      // <RecyclerListView extendedState={this.state.extendedState} style={{ flex: 1, height: 400 * categories.length}} layoutProvider={layoutProvider} dataProvider={d} rowRenderer={renderListContainer} />
    )

  }

  render() {
    const banners = this.getBanners();
    const categories = this.getCategories();
    return (
      <SafeAreaView style={styles.container} >
        <HeadBar />
        <ScrollView style={styles.scrollView} scrollEventThrottle={50} removeClippedSubviews={true} onMomentumScrollEnd={(e) => {
          const scrollPosition = e.nativeEvent.contentOffset.y;
          const scrolViewHeight = e.nativeEvent.layoutMeasurement.height;
          const contentHeight = e.nativeEvent.contentSize.height;
          const isScrolledToBottom = scrolViewHeight + scrollPosition
          // check if scrollView is scrolled to bottom and limit itemToRender to data length
          if (isScrolledToBottom >= (contentHeight - 50) && this.state.itemToRender <= categories.length) {
            this.setState({ itemToRender: this.state.itemToRender + 2 })
          }
        }}>
          <View style={styles.header}>
            <ImageSlider height={288} slides={banners} callback={this.onSelected} />
            <View style={styles.searchContainer}>
              <SearchBar placeholder="Search for experiences" value={this.state.search} style={styles.search_bar} callback={this.updateSearchValue} />
            </View>
          </View>
          <View style={styles.mainContainer}>
            <CategoryList items={categories} />
            <FeedSeperator />
            <CompactList items={this.getItems(this.state.top_experiences)} title="Top Experiences in New York" desc="Handpicked curated activities just for you" style={styles.cList}></CompactList>
            <View style={styles.linkContainer}>
              <StyledLink
                links={this.links} style={styles.link} /></View>
          </View>
          <CollectionList items={this.state.collections} title="Collections" style={styles.collection} desc="Discover experiences based on these themes" />
          <View style={styles.listContainer}>
            {this.getListOfCagegories(categories)}
          </View>
        </ScrollView>
        <Footer items={this.footerNav} active={"1"} >

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
  },
  searchContainer: {
    position: "relative",
    alignItems: "center",
    flex: 1,
    top: -20
  },
  header: {
    position: "relative"
  },
  search_bar: {
    alignSelf: 'stretch',
    height: 50,
    marginLeft: 20,
    borderRadius: 5,
    paddingLeft: 14.98,
    paddingRight: 55,
    backgroundColor: "#fff",
    marginRight: 20,
    borderColor: "transparent",
    ...shadowgiver(4, "#000", 5, 25),
    fontFamily: "Avenir"
    // fontWeight: this.state.search.length == 0 ? 'bold' : 'normal'
  },
  cList: {
    marginLeft: 10
  },
  link: {
    flex: 1
  },
  linkContainer: {
    marginLeft: 10, marginTop: 10, marginRight: 10
  },
  cListAbs: {
    marginBottom: 7, marginLeft: 20
  },
  listContainer: {
    marginTop: 10
  },
  collection: {
    marginLeft: 20
  }
});


const mapStateToProps = ({ category, product, city, misc }: any) => ({
  category_schema: category.schema,
  banners: city.banners,
  product_items: product.products,
  misc
});
const mapDispatchToProps = {
  getAllCategories,
  getProductsFromCategory,
  getProductsFromCategoryInBatch,
  getBanners
}

export default connect(mapStateToProps, mapDispatchToProps)(App)