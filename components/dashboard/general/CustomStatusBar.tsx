
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
	StatusBar as StatusBarNative,
    View,
} from 'react-native';

interface PropsCustomBar {
	backgroundColor: any;
	barStyle?: any;
}

export const CustomStatusBar = ({
	backgroundColor,
	barStyle = 'light-content',
}: PropsCustomBar) => {
	const insets = useSafeAreaInsets();
	return (
		<View style={{ height: insets.top, backgroundColor }}>
			<StatusBarNative
				animated={true}
				backgroundColor={backgroundColor}
				barStyle={barStyle}
			/>
		</View>
	);
};