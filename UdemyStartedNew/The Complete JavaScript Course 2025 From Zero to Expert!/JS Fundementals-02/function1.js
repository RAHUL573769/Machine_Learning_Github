/* Write your code below. Good luck! 🙂 */

const checkWinner = (avgDolphins, avgKoalas) => {
	if (avgKoalas >= 2(avgDolphins)) {
		console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
	} else if (avgDolphins === 2(avgKoalas)) {
		console.log(` Dolphin win (${avgDolphins} vs.${avgKoalas} )`);
	} else {
		console.log("No team wins...");
	}
};

const calcAverage = (score1, score2, score3) => {
	const average = (score1 + score2 + score3) / 3;

	return average;
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const avgDolphins = calcAverage(44, 23, 71);

const avgKoalas = calcAverage(44, 23, 71);
