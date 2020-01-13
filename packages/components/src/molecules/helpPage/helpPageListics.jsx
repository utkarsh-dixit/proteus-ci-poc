import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CategoryListicles from './helpPageCategoryListics';
import Link from '../../atoms/Link';

const MAX_ELEMENTS_VISIBLE = 5;

const getListicleCategoryElements = data => {
	const listicles = data.map(({ NAME, SRC }, index) => {
		return (
			<Link style={styles.listicle} key={index} href={SRC}>
				<Text style={styles.listicleText}>{NAME}</Text>
			</Link>
		);
	});
	return (
		<CategoryListicles
			maxElementsVisible={MAX_ELEMENTS_VISIBLE}
			listicles={listicles}
		/>
	);
};

const getListicleCategory = data => {
	const listicles = data.map(({ HEADING, OPTIONS }, index) => {
		return (
			<View key={index} style={styles.listicleCategory}>
				<Text style={styles.h2}>{HEADING}</Text>
				{getListicleCategoryElements(OPTIONS)}
			</View>
		);
	});
	return listicles;
};

const Listicles = ({ data }) => {
	return <View style={styles.listicleWrapper}>{getListicleCategory(data)}</View>;
};

const styles = StyleSheet.create({
    listicleWrapper:{},
    listicleCategory:{
        marginTop: 71.18
    },
    listicle: {
        marginTop: 24
    },
    h2: {
        fontSize: 23,
        fontWeight: "600",
        color: "#545454"
    },
    listicleText:{
        fontSize: 15,
        color: "#545454",
        fontWeight: "400"
    }
    
});

export default Listicles;
