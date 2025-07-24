import React, { useState } from 'react';
import { Text, Box, Transform } from 'ink';

export default function Graphics() {

	return (
		<Box flexDirection="column">
			<Text color="cyan">Esse é o texto ciano</Text>
			<Text backgroundColor="blue" color="white">Esse é o texto com fundo azul</Text>
			<Text color="rgb(232, 131, 136)">Esse é o texto com suporte pra RGB personalizado</Text>
			<Text bold="true">Esse é o texto em negrito</Text>
			<Text underline="true">Esse é o texto sublinhado</Text>
			<Text italic="true">Esse é o texto itálico</Text>
			<Text strikethrough="true">Esse é o texto riscado</Text>

			<Box flexDirection="row">
				<Box borderStyle="singleDouble" marginRight={2}>
					<Text>Box com borda simples</Text>
				</Box>

				<Box borderStyle="doubleSingle" marginRight={2}>
					<Text>Box com borda dupla</Text>
				</Box>

				<Box borderStyle="classic">
					<Text>Box com borda clássica</Text>
				</Box>

				<Box borderStyle="round" borderColor="green">
					<Text>Box com borda verde arredondada</Text>
				</Box>
			</Box>

			<Transform transform={output => output.toUpperCase()}>
				<Text>Hello World</Text>
			</Transform>

			
		</Box>
	);
}
