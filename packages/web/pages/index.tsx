import React from "react";
import App from "components/src/App";
import { getBanners } from "components/src/actions/city";
import { getAllCategories } from "components/src/actions/category";
import { getProductsFromCategory, getProductsFromCategoryInBatch } from "components/src/actions/product";

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
            return { custom: 'custom' }; // you can pass some custom props to component from here
        });

    }

    render() {
        return (
            <App {...this.props} />
        );
    }
}

export default Home;
