import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Link from '../../../atoms/common/Link';
import HelpTopic from './HelpTopic';

const MAX_VISIBLE_TOPIC_COUNT = 4

export default class HelpCategoryList extends React.PureComponent {

    constructor(props){
        super(props)
        this.state = {
            isExpanded: false
        }
    }

    getListView = () => {
        const {
            topics,
            onLinkClicked
        } = this.props;
        console.log(topics);
        if (this.state.isExpanded) {
            // return all the topics in that category
            return topics.map((topic) => {
                return <HelpTopic title={topic.NAME} 
                            sourceLink={topic.SRC} 
                            onClick={(title, sourceLink) => {
                                onLinkClicked(title, sourceLink);
                            }
                        }/>
            })
        } else {
            // return a maximum of 4 topics
            countOfTopicsToBeShown = Math.min(topics.length, MAX_VISIBLE_TOPIC_COUNT);
            console.log(`Showing ${countOfTopicsToBeShown} for ${this.props.header} for total of ${topics}`);
            views = [];
            for (i=0; i<countOfTopicsToBeShown; i++) {
                topic = topics[i];
                views.push(<HelpTopic title={topic.NAME} 
                                sourceLink={topic.SRC} 
                                onClick={(title, sourceLink) => {
                                    onLinkClicked(title, sourceLink);
                                }
                            }/>)
            }
            if (topics.length > MAX_VISIBLE_TOPIC_COUNT) {
                // Need to show a show all button
                views.push(<Link textStyle={styles.showAllButton} title={"Show all"} onClick={() => {
                    this.setState({isExpanded: true});
                }}/>)
            }
            return views
        }
        
    }

    render() {
        const {
            style,
            header
        } = this.props;
        return (
            <View style={style}>
                <Text style={styles.heading}>{header}</Text>
                {
                    this.getListView()
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    heading: {
        fontWeight:"600",
        fontSize:24,
        color:"#545454",
        paddingTop:12,
        paddingBottom:12
    },
    showAllButton: {
        fontWeight:"400",
        fontSize:16,
        color:"#24a1b2",
        paddingTop:12,
        paddingBottom:12
    }
})