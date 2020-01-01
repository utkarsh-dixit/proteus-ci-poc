import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    Image,
    ToastAndroid,
    FlatList,
    ScrollView,
    Button,
    Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import HeadBar from "../molecules/headbar";
import Footer from "../molecules/footer";
import ContactsBackground from "../packages/Contacts";
import { calendar, camera, collections, account, explore } from "../assets/icons";
import { NativeEventEmitter, NativeModules } from 'react-native';
import {handleOnContactsSyncComplete} from "../services/background";
import {clearAllContacts} from "../actions/contacts";
import {requestContactsPermission} from "../services/permissions";

class Contacts extends React.Component<any, any>{
    footerNav: any;

    constructor(props) {
        super(props);
        this.footerNav = [{ id: "1", icon: explore, text: "Explore" }, { id: "2", icon: collections, text: "Collections" }, { id: "3", icon: account, text: "Account" }];
    }

    componentDidMount() {

        const eventEmitter = new NativeEventEmitter(ContactsBackground);
        console.log(eventEmitter);
        eventEmitter.addListener('onContactsSyncComplete', handleOnContactsSyncComplete.bind(null, this.props.store));
        const epochSeconds = Date.now() / 1000;
        const timeDiff = this.props.lastSync - epochSeconds;
        if (timeDiff < 5 * 60 || this.props.contactList.length > 0) {
            // Sync Again using Services
        }
    }
    

    extractKey({ item, index }) {
        if(item){
        const name = item.name ? item.name : "";
        const phone = item.phone ? item.phone : "";
        const id = name+phone;
        return id;
        }
    }

    getAllContacts(){
        console.log("Started sync", Date.now());
        ContactsBackground.getAllContacts();
    }

    clearAllContacts(){
        this.props.clearAllContacts();
    }

    renderContact({ item, index }) {
        return (
            <View style={styles.item}>
                <Image style={styles.profilePic} source={{ uri: item.profilePic }} />
                <View style={styles.item_detail}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.phone}>{item.phone}</Text>
                </View>
            </View>
        )
    }

    getList() {
        if (Platform.OS === "web") {
            return (<Text style={styles.centerText}>Contacts syncing is not available on web.</Text>);
        }
        return (
            <FlatList data={this.props.contactList} renderItem={this.renderContact} keyExtractor={this.extractKey} />
        )
    }

    render() {
        // console.log(this.props);
        return (
            <SafeAreaView style={styles.container} >
                <HeadBar />
                <ScrollView>

                    <View style={styles.container}>
                        {this.getList()}
                    </View>
                    <Button  title="Delete All" onPress={this.clearAllContacts.bind(this)}/>
                    <Button title="Get All" onPress={this.getAllContacts}></Button>
                </ScrollView>
                <Footer items={this.footerNav} active={"1"} ></Footer>


            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    item: {

    },
    centerText: {
        flex: 1,
        textAlign: "center",
        alignSelf: "center"
    },
    item_detail: {

    },
    name: {

    },
    phone: {

    },
    profilePic: {

    }
});

const mapStateToProps = ({ contacts }: any) => ({
    contactList: contacts.list,
    lastSync: contacts.lastSync
});

const mapDispatchToProps = {
    clearAllContacts
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)