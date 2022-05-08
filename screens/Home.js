import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'

export default function Home({ navigation }) {
	return (
		<Animatable.View style={styles.container} animation='fadeIn'>
			<Animatable.Image
				animation='bounceInDown'
				style={styles.mainImg}
				source={require('../assets/home_sett.png')}
			/>

			<Animatable.Text style={styles.topText} animation='bounceInDown'>
				SLUŽBY
			</Animatable.Text>

			<View style={styles.box}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate('Senzors')
					}}
				>
					<Animatable.Image
						animation='bounceInLeft'
						style={styles.iconImg}
						source={require('../assets/senzory.png')}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate('Rampa')
					}}
				>
					<Animatable.Image
						animation='bounceInLeft'
						style={styles.iconImg}
						source={require('../assets/rampa.png')}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate('Battery')
					}}
				>
					<Animatable.Image
						animation='bounceInRight'
						style={styles.iconImg}
						source={require('../assets/rolety.png')}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate('LightsIMG')
					}}
				>
					<Animatable.Image
						animation='bounceInRight'
						style={styles.iconImg}
						source={require('../assets/osvetlenie.png')}
					/>
				</TouchableOpacity>
			</View>
		</Animatable.View>
	)
}
const styles = StyleSheet.create({
	container: {
		padding: 30,
		paddingTop: 100,
		flex: 1,
	},
	box: {
		flexDirection: 'row',
		alignItems: 'stretch',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		justifyContent: 'space-evenly',
	},
	button: {
		width: 125,
		height: 125,
		marginBottom: 20,
	},
	mainImg: {
		alignSelf: 'center',
	},
	topText: {
		color: '#3F3D56',
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 20,
		marginLeft: 15,
		marginBottom: 20,
	},
	iconImg: {
		width: 125,
		height: 125,
	},
})
