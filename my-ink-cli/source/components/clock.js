import React, { useEffect, useState } from 'react';
import { Text } from 'ink';

const Clock = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(timer);
	}, []);

	return <Text color="cyan">🕒 {time.toLocaleTimeString()}</Text>;
};

export default Clock;
