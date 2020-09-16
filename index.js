const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
client.on('ready', () => {
	//A função e ativada quando o bot e iniciado
    console.log('Iniciando sistema')
    console.log('Sistema iniciado')
})
client.on('guildMemberAdd', async member => {
    let canal = client.channels.cache.get('')// id do canal da mensagem
    canal.send(`@${member.user.username}, Entrou no ${config.name}, seja bem-vindo(a)`)
})
client.on('guildMemberRemove', async member => {
	// A função e acionada quando um menbro sai do servidor
    let canal = client.channels.cache.get('')// id do canal da mensagem
    canal.send(`@${member.user.username}, Saiu do ${config.name}, adeus`)
})
client.on('message', async message => {
    if(message.author.bot) return
    if(message.channel.type === 'dm') return
    if(!message.content.startsWith(config.prefix)) return
    const args = message.content.slice(config.prefix.length).trim().split(/ + /g)
    const comand = args.shift().toLowerCase()
    // Insira seu comando aqui
	if(comand === 'ping') { 
		const m = await message.reply('Ping!') // Mensagem ativado pelo comando !ping
		m.edit = 'Pong!' // Edicão da mensagem da constante m
	}
})
// Atenção para o bot funcionar abra o config.json e coloque o token do bot
client.login(config.token) // comando para logar o bot