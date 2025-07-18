import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions, Platform } from 'react-native';

// Function to convert width pixels to percentage
const wpx = (pixels: number) => wp((pixels / 375) * 100); // Assuming 375 is the base width

// Function to convert height pixels to percentage
const hpx = (pixels: number) => hp((pixels / 812) * 100); // Assuming 812 is the base height

const getFontSize = (size: number) => {
  return RFValue(size, 780); // This uses a reference scale
  // return size;
};

const fontFamily = {
  inter_bold: Platform.OS === 'android' ? 'InterBold' : 'Inter-Bold',
  inter_extra_bold:
    Platform.OS === 'android' ? 'InterExtraBold' : 'Inter-ExtraBold',
  inter_semi_bold:
    Platform.OS === 'android' ? 'InterSemiBold' : 'Inter-SemiBold',
  inter_medium: Platform.OS === 'android' ? 'InterMedium' : 'Inter-Medium',
  inter_regular: Platform.OS === 'android' ? 'InterRegular' : 'Inter-Regular',
  inter_Light: Platform.OS === 'android' ? 'InterLight' : 'Inter-Light',
};

export { wpx, hpx, getFontSize, fontFamily, wp, hp };

export const Full_Height = Dimensions.get('window').height;
export const Full_Width = Dimensions.get('window').width;


export const spacing = {
  micro: 2,
  nano: 4,
  mini: 6,
  small: 8,
  semiSmall: 10,
  base: 12,
  md: 16,
  exMd: 18,
  semiLg: 20,
  lg: 24,
  xl: 32,
  xxl: 45,
  xxxl: 72,
};
