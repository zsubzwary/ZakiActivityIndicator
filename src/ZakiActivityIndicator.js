import React from 'react';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';

export default (ZakiActivityIndicator = (props) => {
	const { loading, ...attributes } = props;

	return (
		<Modal
			transparent={true}
			animationType={'none'}
			visible={loading}
			onRequestClose={() => {
				console.log('ZAKIActivityIndicator: Close modal, of loading animation');
			}}
		>
			<View style={styles.modalBackground}>
				<View style={styles.activityIndicatorWrapper}>
					<ActivityIndicator animating={loading} size="large" />
				</View>
			</View>
		</Modal>
	);
});

const styles = StyleSheet.create({
	modalBackground: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-around',
		backgroundColor: '#00000095'
	},
	activityIndicatorWrapper: {
		backgroundColor: '#FFFFFF',
		height: 100,
		width: 100,
		borderRadius: 20,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around'
	}
});
