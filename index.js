const { VK } = require('vk-io');


const vk = new VK({
	token: 'a798c96cd3fe2e19d8dac8cae0caa52235a534a214c967fa376d676404a88070e2c88e25bbcbba18ee162'
});



// 
vk.updates.hear('привет', async (context) => {
	await context.reply(`Привет ${firstName}
        
    Что бы получить дубликат вашего сообщения напишите: '/эхо и ваше сообщение'

    Что бы оставить заявку на редактора напиши '/red'`);
});

// дублирование сообщения
vk.updates.hear(/эхо (.+)/i, async (context) => {
	context.send(`${context.$match[1]}`);
});

// Callback validation12
vk.updates.hear(
	value => (
		value && value.includes('Хочу быть редактором')
	),
	async (context) => {
		await context.send('пошёл в пизду');
	}
);

// Callback validation with context
vk.updates.hear(
	(value, context) => {
		const messagePayload = context.messagePayload || {};

		return messagePayload.command === 'start';
	},
	async (context) => {
        await context.send(`Привет <юзер>
        
        получить эхо сообщение /exo ваше сообщение

        Что бы оставить заявку на редактора напиши '/red'`);
	}
);


vk.updates.start().catch(console.error);