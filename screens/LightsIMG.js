import React, { useState, useContext } from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'

import LedsColor from './LedsColor'
import { Context } from '../components/Context'
import * as Animatable from 'react-native-animatable'

const LightsIMG = () => {
	const [room, setRoom] = useState(null)
	const { data } = useContext(Context)

	const chooseRoom = (type) => {
		if (type === 0) {
			setRoom({
				led0r: data.led0r,
				led0g: data.led0g,
				led0b: data.led0b,
			})
		} else if (type === 1) {
			setRoom({
				led1r: data.led1r,
				led1g: data.led1g,
				led1b: data.led1b,
			})
		} else {
			setRoom({
				led2r: data.led2r,
				led2g: data.led2g,
				led2b: data.led2b,
			})
		}
	}

	const resetRoom = () => {
		setRoom(null)
	}

	if (room !== null) {
		return <LedsColor resetRoom={resetRoom} room={room} />
	} else {
		return (
			<View style={styles.container}>
				<Animatable.Text animation='bounceInDown' style={styles.topText}>
					MIESTNOSTI
				</Animatable.Text>

				<TouchableOpacity style={styles.button} onPress={(e) => chooseRoom(0)}>
					<Animatable.Image
						animation='bounceInDown'
						style={styles.iconImg}
						source={require('../assets/livingroom.png')}
					/>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={(e) => chooseRoom(1)}>
					<Animatable.Image
						animation='bounceInLeft'
						style={styles.iconImg}
						source={require('../assets/kitchen.png')}
					/>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={(e) => chooseRoom(2)}>
					<Animatable.Image
						animation='bounceInRight'
						style={styles.iconImg}
						source={require('../assets/bedroom.png')}
					/>
				</TouchableOpacity>
			</View>
		)
	}
}

export default LightsIMG

const styles = StyleSheet.create({
	container: {
		padding: 30,
		paddingTop: 20,
		flex: 1,
	},
	topText: {
		color: '#3F3D56',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 20,
	},
	iconImg: {
		alignSelf: 'center',
	},
	button: {
		margin: 10,
	},
})
