import React from 'react'
import { Pressable, Text, View, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import IconFA from 'react-native-vector-icons/FontAwesome'

export default function UsuariosPage() {
	const items = [
		{
			id: '1',
			nombre: 'Luis Antonio',
			email: 'anotonio@gmail.com',
			rol: 'usuario',
		},
		{
			id: '2',
			nombre: 'Luis Marcos',
			email: 'marcos@gmail.com',
			rol: 'usuario',
		},
	]

	return (
		<ScrollView className='flex-1'>
			<View className='p-2'>
				<View className='bg-gray-900 rounded-md flex-row justify-between mb-5 p-2'>
					<Pressable className='bg-orange-600 rounded-md p-4 my-3 mx-2 flex-row items-center justify-center'>
						<Icon name='add-user' color='white' size={20} />
						<Text className='text-white ml-2'>Add</Text>
					</Pressable>

					<Pressable className='bg-orange-600 rounded-md p-4 my-3 mx-2 flex-row items-center justify-center'>
						<IconFA name='refresh' color='white' size={20} />
						<Text className='text-white ml-2'>Refresh</Text>
					</Pressable>
				</View>

				<ScrollView horizontal className='mb-4'>
					<View className='flex-1'>
						<View className='flex-row items-center bg-gray-800'>
							<Text className='flex-1 text-white font-bold p-2'>Id</Text>
							<Text className='flex-1 text-white font-bold p-2'>Nombre</Text>
							<Text className='flex-1 text-white font-bold p-2'>Email</Text>
							<Text className='flex-1 text-white font-bold p-2'>Rol</Text>
							<Text className='flex-1 text-white font-bold p-2'>Acciones</Text>
						</View>
						{items.map(item => (
							<View
								key={item.id}
								className='flex-row items-center bg-gray-700 border-b border-gray-600'
							>
								<Text className='flex-1 text-white p-2 text-xs'>{item.id}</Text>
								<Text className='flex-1 text-white p-2 text-xs'>
									{item.nombre}
								</Text>
								<Text className='flex-1 text-white p-2 text-xs'>
									{item.email}
								</Text>
								<Text className='flex-1 text-white p-2 text-xs'>
									{item.rol}
								</Text>
								<View className='flex-1 flex-row justify-around p-2'>
									<Pressable
										onPress={() => console.log('Edit Pressed')}
										className='mx-1'
									>
										<Icon name='edit' color='#57993a' size={20} />
									</Pressable>
									<Pressable
										onPress={() => console.log('Delete Pressed')}
										className='mx-1'
									>
										<Icon name='trash' color='red' size={20} />
									</Pressable>
								</View>
							</View>
						))}
					</View>
				</ScrollView>
			</View>
		</ScrollView>
	)
}
