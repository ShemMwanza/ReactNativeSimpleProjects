import { DefaultTheme } from 'react-native-paper';

export const Font = {
    ...DefaultTheme,
    fonts: {
        regular: {
            fontFamily: 'Poppins-Regular',
            fontWeight: '400',
        },
        medium: {
            fontFamily: 'Poppins-Medium',
            fontWeight: '500',
        },
        light: {
            fontFamily: 'Poppins-Light',
            fontWeight: '300',
        },
        thin: {
            fontFamily: 'Poppins-Thin',
            fontWeight: '200',
        },
    },
};