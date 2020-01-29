import React from 'react';
import ReactNative, {View, Text, StyleSheet, Platform, NativeModules, findNodeHandle } from 'react-native';

import CategoryListicles from './helpPageCategoryListics';
import Link from '../../atoms/common/Link';

const MAX_ELEMENTS_VISIBLE = 5;

const getListicleCategoryElements = (data, openListicleAction) => {
	const listicles = data.map(({ NAME, SRC }, index) => {
		onClick = null;
		href = null;
		if (Platform.OS === 'ios' || Platform.OS === 'android') {
			onClick = () => {
				openListicleAction(SRC, NAME);
			}
		} else {
			href = SRC;
		}
		return (
			<Link style={styles.listicle} key={index} href={href} onClick={onClick}>
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

const getListicleCategory = (data, openListicleAction) => {
	const listicles = data.map(({ HEADING, OPTIONS }, index) => {
		return (
			<View key={index} style={styles.listicleCategory}>
				<Text style={styles.h2}>{HEADING}</Text>
				{getListicleCategoryElements(OPTIONS, openListicleAction)}
			</View>
		);
	});
	return listicles;
};

const Listicles = ({ data, openListicleAction }) => {
	return <View style={styles.listicleWrapper}>{getListicleCategory(data, openListicleAction)}</View>;
};

const styles = StyleSheet.create({
    listicleWrapper:{},
    listicleCategory:{
        marginTop: 48
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
