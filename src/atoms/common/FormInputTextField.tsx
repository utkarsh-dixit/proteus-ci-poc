import React from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions, ReturnKeyTypeOptions } from 'react-native';

interface IProps {
    title: string,
    subTitle: string,
    value: string,
    placeholder: string,
    keyboardType: KeyboardTypeOptions,
    autoCapitalize: 'none' | 'sentences' | 'words' | 'characters',
    returnKeyType: ReturnKeyTypeOptions,
    onChangeText: (text: string) => void,
    errorText: string,
    style: any
}

export default class FormInputTextField extends React.PureComponent<IProps, {}> {
    render() {
        const {
            title,
            subTitle,
            value,
            placeholder,
            keyboardType,
            autoCapitalize,
            returnKeyType,
            onChangeText,
            errorText,
            style
        } = this.props;
        return (
            <View style={style}>
                <Text style={styles.titleLabel}>{title}</Text>
                {subTitle ? <Text style={styles.subTitleLabel}>{subTitle || ''}</Text> : null}
                <TextInput
                    style={errorText ? styles.errorInput : styles.input}
                    value={value}
                    autoCorrect={false}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    returnKeyType={returnKeyType}
                    onChangeText={onChangeText}>
                </TextInput>
                {errorText ? <Text style={styles.errorLabel}>{errorText}</Text> : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleLabel: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        color: "#545454",
        paddingBottom: 8
    },
    subTitleLabel: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        color: "#545454",
        paddingBottom: 8
    },
    errorLabel: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        color: "#ec1943",
        paddingTop: 8
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 16,
        height: 48,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#dadada",
        borderRadius: 2
    },
    errorInput: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 15,
        height: 48,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#ec1943",
        borderRadius: 2
    },
    inputContainer: {
        marginTop: 24
    }
});