import React from 'react'
import { Image, View } from 'react-native'
import * as Animatable from 'react-native-animatable'

const Loader = () => {
	return (
		<Animatable.View
			animation='fadeIn'
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		>
			<Image
				style={{ flex: 1, resizeMode: 'contain' }}
				source={require('../assets/loader.png')}
			/>
		</Animatable.View>
	)
}

export default Loader
