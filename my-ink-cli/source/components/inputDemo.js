import React from 'react';
import { Text, useInput } from 'ink';

const InputDemo = () => {
	useInput((input, key) => {
		if (key.leftArrow) console.log('⬅️ esquerda');
		if (key.return) console.log('🔘 enter');
		if (input === 'q') console.log('Saindo...');
	});

	return <Text>Pressione alguma tecla (veja o console)</Text>;
};

export default InputDemo;