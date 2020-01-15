import React from "react";
import { getBanners } from "../../components/src/actions/city";
import { getAllCategories } from "../../components/src/actions/category";
import { getProductsFromCategory, getProductsFromCategoryInBatch } from "../../components/src/actions/product";
import dynamic from "next/dynamic";
const App = dynamic(import("../../components/src/screens/App"));

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    static getInitialProps({ store, isServer, pathname, query }) {
        return getBanners()(store.dispatch).then(async () => {
            await getAllCategories(async(items: any) => {
                const ids = [];
                for (let i = 0; i < 9 && i < items.length; i++) {
                    const category = items[i];
                    ids.push(category.id);
                    await getProductsFromCategory(category.id)(store.dispatch);
                };
            })(store.dispatch);
            return { };
        });

    }

    render() {
        return (
            <App {...this.props} />
        );
    }
}

export default Home;
