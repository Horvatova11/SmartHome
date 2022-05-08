import * as React from 'react'
import {
	Easing,
	TextInput,
	Animated,
	Text,
	View,
	StyleSheet,
} from 'react-native'

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

export default function Temp({
	temperature = 75,
	radius = 40,
	strokeWidth = 10,
	duration = 500,
	color = 'tomato',
	delay = 0,
	textColor,
	max = 100,
}) {
	const animated = React.useRef(new Animated.Value(0)).current
	const inputRef = React.useRef()

	const animation = (toValue) => {
		return Animated.timing(animated, {
			delay: 1500,
			toValue,
			duration,
			useNativeDriver: true,
			easing: Easing.out(Easing.ease),
		}).start(() => {
			animation(temperature)
		})
	}

	React.useEffect(() => {
		animation(temperature)
		animated.addListener(
			(v) => {
				const maxPerc = (100 * v.value) / max

				if (inputRef?.current) {
					inputRef.current.setNativeProps({
						text: `${Math.round(v.value)} °C`,
					})
				}
			},
			[max, temperature]
		)

		return () => {
			animated.removeAllListeners()
		}
	})

	return (
		<View style={{ width: radius * 4, height: radius * 2.8 }}>
			<AnimatedTextInput
				ref={inputRef}
				underlineColorAndroid='transparent'
				editable={false}
				defaultValue='0'
				style={[
					StyleSheet.absoluteFillObject,
					{ fontSize: radius * 1, color: textColor ?? color },
					styles.text,
				]}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	text: { fontWeight: '900', textAlign: 'center' },
})
