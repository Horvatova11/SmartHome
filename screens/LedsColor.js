import React, { useState, useContext, useEffect } from 'react'
import _ from 'lodash'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import { ColorPicker, toHsv } from 'react-native-color-picker'
import { Context } from '../components/Context'
import * as Animatable from 'react-native-animatable'

const LedsColor = ({ room, resetRoom, navigation }) => {
	// FUNCTIONS THAT CONVERTS RGB FROM DB TO HEX
	const componentToHex = (c) => {
		var hex = c.toString(16)
		return hex.length == 1 ? '0' + hex : hex
	}

	const rgbToHex = (r, g, b) => {
		return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
	}

	// SETING STATE AND GETTING CONTEXT VALUE
	const [color, setColor] = useState(
		rgbToHex(_.values(room)[0], _.values(room)[1], _.values(room)[2])
	)
	const { data, updateData } = useContext(Context)
	
	// HANDLING COLOR CHANGE
	const onColorChange = (color) => {
		setColor(color)
	}

	// CONVERTING HEX BACK TO RGB
	const hexToRgbA = (hex) => {
		var c
		if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
			c = hex.substring(1).split('')
			if (c.length == 3) {
				c = [c[0], c[0], c[1], c[1], c[2], c[2]]
			}
			c = '0x' + c.join('')
			return [(c >> 16) & 255, (c >> 8) & 255, c & 255]
		}
		throw new Error('Bad Hex')
	}


	return (
		<Animatable.View animation='bounceInDown' style={styles.container}>
			<TouchableOpacity onPress={(e) => resetRoom()}>
				<Image source={require('../assets/back.png')}/>
			</TouchableOpacity>
			<Text style={styles.topText}>COLOR PICKER</Text>
			<ColorPicker
				style={styles.colorPicker}
				color={color}
				onColorChange={onColorChange}
				onColorSelected={(color) =>
					updateData({
						...data,
						[Object.keys(room)[0]]: hexToRgbA(color)[0],
						[Object.keys(room)[1]]: hexToRgbA(color)[1],
						[Object.keys(room)[2]]: hexToRgbA(color)[2],
					})
				}
			/>
		</Animatable.View>
	)
}

export default LedsColor

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 45,
	},
	topText: {
		color: '#3F3D56',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 20,
	},
	colorPicker: {
		flex: 1,
	},
})
