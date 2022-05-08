import React, { useContext, useEffect, useState } from 'react'
import { Text, StatusBar, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { Context } from '../components/Context'
import * as Animatable from 'react-native-animatable'

import Constants from 'expo-constants'
import Donut from './Donut'

export default function Baterry() {
	const { data, updateData } = useContext(Context)

	const handleClick = (type) => {
		if (type === 'close') {
			updateData({ ...data, curtain: 0 })
		} else {
			updateData({ ...data, curtain: 1 })
		}
	}

	return (
		<View style={styles.container}>
			<Animatable.Image
				animation='bounceInDown'
				style={styles.mainImg}
				source={require('../assets/window.png')}
			/>
			<Animatable.Text animation='bounceInDown' style={styles.mainTxt}>
				ROLETY
			</Animatable.Text>
			<TouchableOpacity
				style={{
					...styles.buttonOut,
					backgroundColor: data.curtain === 0 ? '#CCCCCC' : '#10DA7C',
				}}
				onPress={(e) => handleClick('close')}
			>
				<Animatable.Text
					animation='bounceInLeft'
					style={{
						...styles.textOff,
						color: data.curtain === 0 ? '#3F3D56' : '#FFFFFF',
					}}
				>
					ZATVORIŤ
				</Animatable.Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={{
					...styles.buttonIn,
					backgroundColor: data.curtain === 1 ? '#CCCCCC' : '#10DA7C',
				}}
				onPress={(e) => handleClick('open')}
			>
				<Animatable.Text
					animation='bounceInRight'
					style={{
						...styles.textOn,
						color: data.curtain === 1 ? '#3F3D56' : '#FFFFFF',
					}}
				>
					OTVORIŤ
				</Animatable.Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 30,
		paddingTop: 100,
		flex: 1,
	},
	mainImg: {
		alignSelf: 'center',
	},
	mainTxt: {
		color: '#3F3D56',
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 20,
		marginLeft: 15,
		marginBottom: 20,
	},
	buttonOut: {
		//backgroundColor: '#CCCCCC',
		borderRadius: 35,
		margin: 20,
		marginTop: 50,
		elevation: 5,
	},
	textOff: {
		//color: '#3F3D56',
		fontSize: 20,
		fontWeight: 'bold',
		margin: 20,
		textAlign: 'center',
	},
	buttonIn: {
		//backgroundColor: '#10DA7C',
		borderRadius: 35,
		margin: 20,
		elevation: 5,
	},
	textOn: {
		//color: '#FFFFFF',
		fontSize: 20,
		fontWeight: 'bold',
		margin: 20,
		textAlign: 'center',
	},
})
