import React from 'react';
import { View, Text, StyleSheet, KeyboardTypeOptions, ReturnKeyTypeOptions, Platform, ViewStyle } from 'react-native';
import { Input } from "@headout/aer";

interface IProps {
    title: string;
    subTitle?: string;
    value?: string;
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    autoCapitalize: 'none' | 'sentences' | 'words' | 'characters';
    returnKeyType: ReturnKeyTypeOptions;
    onChangeText: (text: string) => void;
    errorText: string;
    style: ViewStyle;
}

export const FormInputTextField = (props: IProps) => {
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
    } = props;
    return (
        <View style={style}>
            <Text style={styles.titleLabel}>{title}</Text>
            {subTitle ? <Text style={styles.subTitleLabel}>{subTitle || ''}</Text> : null}
            <Input
                style={errorText ? styles.errorInput : styles.input}
                value={value}
                autoCorrect={false}
                placeholder={placeholder}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                returnKeyType={returnKeyType}
                onChangeText={onChangeText}>
            </Input>
            {errorText ? <Text style={styles.errorLabel}>{errorText}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    titleLabel: {
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 16,
        color: '#444444',
        paddingBottom: 8,
        fontFamily: 'avenir-medium',
        ...Platform.select({
            android: {
                fontFamily: 'Avenir-Medium'
            }
        })
    },
    subTitleLabel: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        color: '#666666',
        paddingBottom: 8,
        letterSpacing: 0.2,
        fontFamily: 'avenir-medium',
        ...Platform.select({
            android: {
                fontFamily: 'Avenir-Medium'
            }
        })
    },
    errorLabel: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        color: '#EF0404',
        paddingTop: 8,
        fontFamily: 'avenir-roman',
        letterSpacing: 0.2,
        ...Platform.select({
            android: {
                fontFamily: 'Avenir-regular'
            }
        })
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 16,
        height: 48,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#dadada',
        borderRadius: 2,
        ...Platform.select({
            web: {
                padding: 16
            }
        })
    },
    errorInput: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 16,
        height: 48,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ec1943',
        borderRadius: 2,
        ...Platform.select({
            web: {
                padding: 16
            }
        })
    },
    inputContainer: {
        marginTop: 24
    }
});
