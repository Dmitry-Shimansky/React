const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = [];

employers.forEach((employer) => {
	if (employer.length > 0 && employer.trim() !== '') {
		let elem = employer.toLowerCase().trim();
		command.push(elem[0].toUpperCase() + elem.slice(1));
	}
})

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

calcCash = (own, everyCash) => {
	own = own || 0;
	let total = own;
	everyCash.forEach((every) => {
		total += every;
	})
	return total;
}

const lesson = calcCash(null, data.cash);

makeBusiness = (director, teacher, allModule, gang, course) => {
	teacher = teacher || 'Максим';
	const sumTech = data.react.concat(data.add, 'и другие');
	console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.` + `\nКоманда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим: ');
	console.log(...sumTech);

}

makeBusiness(...['Артем', null, lesson, command, nameCourse]);
