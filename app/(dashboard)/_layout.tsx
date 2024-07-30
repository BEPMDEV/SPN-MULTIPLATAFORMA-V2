import React, { useState } from 'react'
import {
	View,
	Platform,
	StatusBar as StatusBarNative,
	Pressable,
	ScrollView,
	Text,
	Image,
	TouchableWithoutFeedback,
	SafeAreaView,
} from 'react-native'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconFeather from 'react-native-vector-icons/Feather'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import { StatusBar } from 'expo-status-bar'
import { Slot, useRouter } from 'expo-router'
import useAdaptiveFont from '@/hooks/useAdaptativeFont'
import useResponsiveLayout from '@/hooks/useResponsiveLayout'
import Sidebar from '@/components/dashboard/sidebar'
import sidebarData from '@/components/dashboard/sidebar/sidebarData'
import TextHover from '@/components/dashboard/sidebar/TextHover'
import ViewHover from '@/components/dashboard/sidebar/ViewHover'

import {
	SafeAreaProvider,
	useSafeAreaInsets,
} from 'react-native-safe-area-context'

interface PropsCustomBar {
	backgroundColor: any
	barStyle?: any
}

const CustomStatusBar = ({
	backgroundColor,
	barStyle = 'ligth-content',
}: PropsCustomBar) => {
	const insets = useSafeAreaInsets()
	return (
		<View style={{ height: insets.top, backgroundColor }}>
			<StatusBarNative
				animated={true}
				backgroundColor={backgroundColor}
				barStyle={barStyle}
			/>
		</View>
	)
}

const isMobile = Platform.OS === 'android'

const DashboardLayout: React.FC = () => {
	const { height } = useResponsiveLayout()
	const { title, text, small, parrafo } = useAdaptiveFont()

	const router = useRouter()

	const [sidebarOpen, setSidebarOpen] = useState(false)
	const [perfilOpen, setPerfilOpen] = useState(false)
	const [notificationOpen, setNotificationOpen] = useState(false)

	return (
		<View>
			<CustomStatusBar backgroundColor='rgb(17 24 39)' />

			<View className='lg:flex-row'>
				<Sidebar
					data={sidebarData}
					styles={{ height, title, text, small, parrafo }}
					sidebarOpen={sidebarOpen}
					setSidebarOpen={setSidebarOpen}
				/>

				<Pressable
					android_disableSound
					style={{ cursor: 'auto' }}
					disabled={perfilOpen || notificationOpen ? false : true}
					className='lg:w-3/4 xl:w-4/5'
					onPress={() => {
						setPerfilOpen(false)
						setNotificationOpen(false)
					}}
				>
					<View>
						<View className='bg-gray-900 h-20 px-4 w-full z-[1] flex-row items-center lg:flex-row-reverse justify-between absolute lg:relative'>
							<Pressable
								className='w-[50px] lg:hidden'
								onPress={() => {
									setSidebarOpen(true)
									setPerfilOpen(false)
									setNotificationOpen(false)
								}}
								style={{ cursor: 'pointer' }}
							>
								<IconEntypo name='menu' size={50} color={'white'} />
							</Pressable>

							<View className='flex-row items-center gap-8'>
								<Pressable
									onPress={() => {
										setNotificationOpen(!notificationOpen)
										setPerfilOpen(false)
									}}
								>
									<View className='p-2 bg-gray-800 rounded-full'>
										<IconIonicons
											name='notifications'
											color={'white'}
											size={20}
										/>
									</View>
								</Pressable>

								<View className='flex-row'>
									<View className='hidden sm:flex self-center mr-3'>
										<Text
											style={{ fontSize: 14 }}
											className='text-white font-semiBold'
										>
											Andy Bekham
										</Text>
										<Text
											style={{ fontSize: 12 }}
											className='text-gray-400 text-right font-regular'
										>
											Doctor
										</Text>
									</View>

									<Pressable
										onPress={() => {
											setPerfilOpen(!perfilOpen)
											setNotificationOpen(false)
										}}
										className='flex-row self-center items-center gap-3'
									>
										<Image
											className='w-12 h-12 rounded-full'
											source={require('@/assets/images/dashboard/perfil.jpg')}
										/>
										<View className={`${!perfilOpen && 'rotate-180'}`}>
											<IconEntypo
												name='chevron-down'
												color={'white'}
												size={25}
											/>
										</View>
									</Pressable>
								</View>
							</View>
						</View>

						<Pressable
							disabled={notificationOpen ? false : true}
							style={{ cursor: 'auto' }}
							android_disableSound
							className={`bg-gray-900 w-72 h-96 absolute z-[1] right-7 lg:right-60 top-20 rounded-sm border border-gray-800 ${
								!notificationOpen && 'hidden'
							}`}
							onPress={() => {
								setNotificationOpen(true)
							}}
						>
							<View className='px-5 py-4'>
								<Text style={{ fontSize: 16 }} className='text-gray-500'>
									Notificaciones
								</Text>
							</View>

							<View
								style={{ borderBottomWidth: 1 }}
								className='w-full border-gray-800'
							></View>

							<ScrollView>
								<ViewHover
									onHoverInColor='bg-gray-800'
									active={false}
									className='px-5 py-4'
								>
									<Text className='text-white font-semiBold'>
										Notificación de Parto
									</Text>
									<Text className=' text-gray-400 mb-2'>
										La señora Maria debería estar dando a luz ahora.
									</Text>
									<Text style={{ fontSize: 12 }} className=' text-gray-400'>
										12 May, 2024
									</Text>
								</ViewHover>

								<View
									style={{ borderBottomWidth: 1 }}
									className='w-full border-gray-800'
								></View>

								<ViewHover
									onHoverInColor='bg-gray-800'
									active={false}
									className='px-5 py-4'
								>
									<Text className='text-white font-semiBold'>
										Notificación de Parto
									</Text>
									<Text className=' text-gray-400 mb-2'>
										La señora Maria debería estar dando a luz ahora.
									</Text>
									<Text style={{ fontSize: 12 }} className=' text-gray-400'>
										12 May, 2024
									</Text>
								</ViewHover>

								<View
									style={{ borderBottomWidth: 1 }}
									className='w-full border-gray-800'
								></View>

								<ViewHover
									onHoverInColor='bg-gray-800'
									active={false}
									className='px-5 py-4'
								>
									<Text className='text-white font-semiBold'>
										Notificación de Parto
									</Text>
									<Text className=' text-gray-400 mb-2'>
										La señora Maria debería estar dando a luz ahora.
									</Text>
									<Text style={{ fontSize: 12 }} className=' text-gray-400'>
										12 May, 2024
									</Text>
								</ViewHover>

								<View
									style={{ borderBottomWidth: 1 }}
									className='w-full border-gray-800'
								></View>

								<ViewHover
									onHoverInColor='bg-gray-800'
									active={false}
									className='px-5 py-4'
								>
									<Text className='text-white font-semiBold'>
										Notificación de Parto
									</Text>
									<Text className=' text-gray-400 mb-2'>
										La señora Maria debería estar dando a luz ahora.
									</Text>
									<Text style={{ fontSize: 12 }} className=' text-gray-400'>
										12 May, 2024
									</Text>
								</ViewHover>

								<View
									style={{ borderBottomWidth: 1 }}
									className='w-full border-gray-800'
								></View>

								<ViewHover
									onHoverInColor='bg-gray-800'
									active={false}
									className='px-5 py-4'
								>
									<Text className='text-white font-semiBold'>
										Notificación de Parto
									</Text>
									<Text className=' text-gray-400 mb-2'>
										La señora Maria debería estar dando a luz ahora.
									</Text>
									<Text style={{ fontSize: 12 }} className=' text-gray-400'>
										12 May, 2024
									</Text>
								</ViewHover>

								<View
									style={{ borderBottomWidth: 1 }}
									className='w-full border-gray-800'
								></View>

								<ViewHover
									onHoverInColor='bg-gray-800'
									active={false}
									className='px-5 py-4'
								>
									<Text className='text-white font-semiBold'>
										Notificación de Parto
									</Text>
									<Text className=' text-gray-400 mb-2'>
										La señora Maria debería estar dando a luz ahora.
									</Text>
									<Text style={{ fontSize: 12 }} className=' text-gray-400'>
										12 May, 2024
									</Text>
								</ViewHover>
							</ScrollView>
						</Pressable>

						<Pressable
							style={{ cursor: 'auto' }}
							android_disableSound
							onPress={() => {
								setPerfilOpen(true)
							}}
							className={`bg-gray-900 w-64 absolute z-[1] right-7 top-20 rounded-sm border border-gray-800 ${
								!perfilOpen && 'hidden'
							}`}
						>
							<View className='px-6 py-7'>
								<TextHover
									Icon={IconFeather}
									name='settings'
									className='flex-row items-center max-w-full'
								>
									Ajustes
								</TextHover>
							</View>

							<View
								style={{ borderBottomWidth: 1 }}
								className='w-full border-gray-800'
							></View>

							<View className='px-6 py-4'>
								<TextHover
									onPress={() => router.replace('/login')}
									Icon={IconMaterialIcons}
									name='logout'
									className='flex-row items-center max-w-full'
								>
									Log Out
								</TextHover>
							</View>
						</Pressable>

						<Pressable
							android_disableSound
							style={{ cursor: 'auto' }}
							onPress={() => setSidebarOpen(false)}
							className={`absolute bg-black z-[1] w-full h-full opacity-50 lg:hidden ${
								!sidebarOpen && 'hidden'
							}`}
						></Pressable>

						<ScrollView className='h-full bg-gray-950'>
							<View
								style={{ height: isMobile ? 'auto' : height - 80 }}
								className='mt-20 lg:m-0 px-4 py-3'
							>
								<Slot />
							</View>
						</ScrollView>
					</View>
				</Pressable>
			</View>
		</View>
	)
}

export default DashboardLayout
