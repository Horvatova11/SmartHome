import React, { useContext, useState } from 'react'
import { Text, StatusBar, View, StyleSheet, Image } from 'react-native'

import { Context } from '../components/Context'
import * as Animatable from 'react-native-animatable'

import Constants from 'expo-constants'
import Donut from './Donut'
import Temp from './Temp'

export default function Senzors() {
	const { data } = useContext(Context)

	return (
		<View style={styles.container}>
			<Animatable.Image
				animation='bounceInDown'
				style={styles.mainImg}
				source={require('../assets/percentage.png')}
			/>
			<StatusBar hidden />
			<Animatable.Text animation='bounceInLeft' style={styles.topText}>
				TEPLOTA
			</Animatable.Text>
			<Animatable.View animation='bounceInRight' style={styles.aroundCirc}>
				<Temp temperature={data.temp} color='#828282' />
			</Animatable.View>

			<Animatable.Text animation='bounceInLeft' style={styles.topText}>
				VLHKOSŤ
			</Animatable.Text>
			<Animatable.View animation='bounceInRight' style={styles.aroundCirc}>
				<Donut percentage={data.hum} color='#10DA7C' max={100} />
			</Animatable.View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'column',
		paddingTop: Constants.statusBarHeight,
		padding: 45,
	},
	aroundCirc: {
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
	},
	topText: {
		color: '#3F3D56',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 5,
	},
	mainImg: {
		alignSelf: 'center',
		marginBottom: 25,
	},
})
