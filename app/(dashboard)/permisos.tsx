import { Pressable, Text, View } from 'react-native'
import { DataTable, IconButton } from 'react-native-paper'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconEntypos from 'react-native-vector-icons/FontAwesome'
import IconActinos from 'react-native-vector-icons/MaterialCommunityIcons'
export default function PermisosPage() {
	const items = [
		{
			id: '1',
			nombre: 'teo',
			email: 'teo@gmail.com',
			rol: 'usuario',
		},
		{
			id: '2',
			nombre: 'teo',
			email: 'teo@gmail.com',
			rol: 'usuario',
		},
	]

	return (
		<View className='p-2 place-self-center'>
			<View className='bg-gray-900 w-auto rounded-md flex-row justify-between mb-5 p-2'>
				<Pressable className='w-auto bg-orange-600 rounded-md p-4 my-3 mx-2 flex-row items-center justify-center'>
					<IconEntypo name='add-user' color={'white'} size={20} />
					<Text className='text-white ml-2'>Add</Text>
				</Pressable>

				<Pressable className='w-auto bg-orange-600 rounded-md p-4 my-3 mx-2 flex-row items-center justify-center'>
					<IconEntypos name='refresh' color={'white'} size={20} />
					<Text className='text-white ml-2'>Refresh</Text>
				</Pressable>
			</View>
			<View className=''>
				<DataTable>
					<DataTable.Header className='bg-gray-800'>
						<DataTable.Title> Id</DataTable.Title>
						<DataTable.Title> Nombre</DataTable.Title>
						<DataTable.Title> Email</DataTable.Title>
						<DataTable.Title> Rol</DataTable.Title>
						<DataTable.Title> Acciones</DataTable.Title>
					</DataTable.Header>
					{items.map(item => (
						<DataTable.Row key={item.id} className='bg-gray-700'>
							<DataTable.Cell>{item.id}</DataTable.Cell>
							<DataTable.Cell>{item.nombre}</DataTable.Cell>
							<DataTable.Cell>{item.email}</DataTable.Cell>
							<DataTable.Cell>{item.rol}</DataTable.Cell>
							<DataTable.Cell>
								<Pressable className='p-1' onPress={() => console.log('Edit')}>
									<IconActinos
										name='account-edit'
										color={'#57993a'}
										size={25}
									/>
								</Pressable>
								<Pressable className='p-1' onPress={() => console.log('edit')}>
									<IconActinos name='delete' color={'red'} size={25} />
								</Pressable>
							</DataTable.Cell>
						</DataTable.Row>
					))}
				</DataTable>
			</View>
		</View>
	)
}
