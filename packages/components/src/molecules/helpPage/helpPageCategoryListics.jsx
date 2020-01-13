
import React from 'react';
import Link from '../../atoms/Link';
import {View, Text, StyleSheet} from "react-native";

const ShowAllElement = props => (
	<Link style={[styles.listicle]} onClick={props.showAllListicles}>
		<Text style={[styles.listicleText, styles.active]}>Show all</Text>
	</Link>
);

export default class ExpandableCategoryListicle extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			listicles: [],
		};
	}

	componentDidMount() {
		const { listicles, maxElementsVisible } = this.props;
		if (listicles.length < maxElementsVisible) {
			this.setState({ listicles });
		} else {
			let newListicles = listicles.slice(0, maxElementsVisible - 1);
			newListicles = [
				...newListicles,
				<ShowAllElement showAllListicles={this.showAllListicles} />,
			];
			this.setState({ listicles: newListicles });
		}
	}

	showAllListicles = () => {
		const { listicles } = this.props;
		this.setState({ listicles });
	};

	render() {
		const { listicles } = this.state;
		return <>{listicles}</>;
	}
}

const styles = StyleSheet.create({
    listicle: {
        marginTop: 24
    },
    active: {
        color: "#24a1b2"
    },
    listicleText: {
        fontSize: 15
    }
});