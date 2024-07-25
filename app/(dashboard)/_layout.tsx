import * as React from 'react'
import { Appbar, Menu, Provider, Drawer } from 'react-native-paper'
import { View, Text, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { Slot } from 'expo-router'

export default function HomePage() {
	const [visible, setVisible] = React.useState(false)
	const navigation = useRouter()
	const [active, setActive] = React.useState('')

	const openMenu = () => setVisible(true)
	const closeMenu = () => setVisible(false)

	return (
		<>
			<Slot />
			<Provider>
				<View style={styles.container}>
					<Appbar.Header style={styles.appbarHeader}>
						<Menu
							visible={visible}
							onDismiss={closeMenu}
							anchor={
								<Appbar.Action icon='menu' color='white' onPress={openMenu} />
							}
							style={styles.menu}
						>
							<Drawer.Section
								title='Dashboard              '
								style={styles.drawerSection}
							>
								<Drawer.Item
									label='Login'
									icon='login'
									active={active === 'first'}
									onPress={() => {
										setActive('first')
										closeMenu()
										navigation.push('/login')
									}}
									style={[
										styles.drawerItem,
										active === 'first' && styles.activeDrawerItem,
									]}
								/>
								<Drawer.Item
									label='Home'
									icon='home'
									active={active === 'second'}
									onPress={() => {
										setActive('second')
										closeMenu()
										navigation.push('/home')
									}}
									style={[
										styles.drawerItem,
										active === 'second' && styles.activeDrawerItem,
									]}
								/>
							</Drawer.Section>
						</Menu>
						<Appbar.Content
							title='Bienvenidos a la Principal'
							titleStyle={styles.appbarContentTitle}
						/>
					</Appbar.Header>
				</View>
			</Provider>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	appbarHeader: {
		backgroundColor: '#ffcc99',
	},
	menu: {
		marginTop: 80,
		backgroundColor: 'white',
	},
	drawerSection: {
		backgroundColor: 'white',
	},
	drawerItem: {
		borderColor: '#ffffff',
		borderWidth: 1,
		marginVertical: 4,
	},
	activeDrawerItem: {
		backgroundColor: '#ffcc99',
	},
	appbarContentTitle: {
		color: 'white',
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
})
