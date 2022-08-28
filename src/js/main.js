const timeframes = document.querySelectorAll('.main-panel--timeframe-global-btn')
const workTitle = document.querySelector('.work-title')
const workTime = document.querySelector('.work-time')
const workLastTime = document.querySelector('.work-last-time')
const playTitle = document.querySelector('.play-title')
const playTime = document.querySelector('.play-time')
const playLastTime = document.querySelector('.play-last-time')
const studyTitle = document.querySelector('.study-title')
const studyTime = document.querySelector('.study-time')
const studyLastTime = document.querySelector('.study-last-time')
const exerciseTitle = document.querySelector('.exercise-title')
const exerciseTime = document.querySelector('.exercise-time')
const exerciseLastTime = document.querySelector('.exercise-last-time')
const socialTitle = document.querySelector('.social-title')
const socialTime = document.querySelector('.social-time')
const socialLastTime = document.querySelector('.social-last-time')
const selfCareTitle = document.querySelector('.self-care-title')
const selfCareTime = document.querySelector('.self-care-time')
const selfCareLastTime = document.querySelector('.self-care-last-time')
const btns = document.querySelectorAll('.main-panel--timeframe-global-btn')
let activeBtn = document.getElementsByClassName('btn-active')

const hoursPostfix = 'hrs'
const dayPrefix = 'yesterday - '
const weekPrefix = 'last week - '
const monthPrefix = 'last month - '

let reportData

//functions
const fetchData = () => {
	fetch('data.json')
		.then(response => response.json())
		.then(data => {
			reportData = data
			loadData()
		})
}

function getTimeFrame(target) {
	if (target.textContent === 'Daily') {
		return 0
	} else if (target.textContent === 'Weekly') {
		return 1
	} else {
		return 2
	}
}

const loadData = () => {
	let tf = getTimeFrame(activeBtn[0])
	loadWork(tf)
	loadPlay(tf)
	loadStudy(tf)
	loadExercise(tf)
	loadSocial(tf)
	loadSelfCare(tf)
}

const reloadData = e => {
	let tf = getTimeFrame(e.target)
	activeBtn[0].classList.remove('btn-active')
	e.target.classList.add('btn-active')
	loadWork(tf)
	loadPlay(tf)
	loadStudy(tf)
	loadExercise(tf)
	loadSocial(tf)
	loadSelfCare(tf)
}

const loadWork = tf => {
	workTitle.textContent = reportData[0].title
	let timeFrame = reportData[0].timeframes
	if (tf === 0) {
		workTime.textContent = timeFrame.daily.current.toString().concat(hoursPostfix)
		workLastTime.textContent = dayPrefix.concat(reportData[0].timeframes.daily.previous.toString(), hoursPostfix)
	} else if (tf === 1) {
		workTime.textContent = timeFrame.weekly.current.toString().concat(hoursPostfix)
		workLastTime.textContent = weekPrefix.concat(reportData[0].timeframes.weekly.previous.toString(), hoursPostfix)
	} else {
		workTime.textContent = timeFrame.monthly.current.toString().concat(hoursPostfix)
		workLastTime.textContent = monthPrefix.concat(reportData[0].timeframes.monthly.previous.toString(), hoursPostfix)
	}
}

const loadPlay = tf => {
	playTitle.textContent = reportData[1].title
	let timeFrame = reportData[1].timeframes
	if (tf === 0) {
		playTime.textContent = timeFrame.daily.current.toString().concat(hoursPostfix)
		playLastTime.textContent = dayPrefix.concat(reportData[1].timeframes.daily.previous.toString(), hoursPostfix)
	} else if (tf === 1) {
		playTime.textContent = timeFrame.weekly.current.toString().concat(hoursPostfix)
		playLastTime.textContent = weekPrefix.concat(reportData[1].timeframes.weekly.previous.toString(), hoursPostfix)
	} else {
		playTime.textContent = timeFrame.monthly.current.toString().concat(hoursPostfix)
		playLastTime.textContent = monthPrefix.concat(reportData[1].timeframes.monthly.previous.toString(), hoursPostfix)
	}
}

const loadStudy = tf => {
	studyTitle.textContent = reportData[2].title
	let timeFrame = reportData[2].timeframes
	if (tf === 0) {
		studyTime.textContent = timeFrame.daily.current.toString().concat(hoursPostfix)
		studyLastTime.textContent = dayPrefix.concat(reportData[2].timeframes.daily.previous.toString(), hoursPostfix)
	} else if (tf === 1) {
		studyTime.textContent = timeFrame.weekly.current.toString().concat(hoursPostfix)
		studyLastTime.textContent = weekPrefix.concat(reportData[2].timeframes.weekly.previous.toString(), hoursPostfix)
	} else {
		studyTime.textContent = timeFrame.monthly.current.toString().concat(hoursPostfix)
		studyLastTime.textContent = monthPrefix.concat(reportData[2].timeframes.monthly.previous.toString(), hoursPostfix)
	}
}

const loadExercise = tf => {
	exerciseTitle.textContent = reportData[3].title
	let timeFrame = reportData[3].timeframes
	if (tf === 0) {
		exerciseTime.textContent = timeFrame.daily.current.toString().concat(hoursPostfix)
		exerciseLastTime.textContent = dayPrefix.concat(reportData[3].timeframes.daily.previous.toString(), hoursPostfix)
	} else if (tf === 1) {
		exerciseTime.textContent = timeFrame.weekly.current.toString().concat(hoursPostfix)
		exerciseLastTime.textContent = weekPrefix.concat(reportData[3].timeframes.weekly.previous.toString(), hoursPostfix)
	} else {
		exerciseTime.textContent = timeFrame.monthly.current.toString().concat(hoursPostfix)
		exerciseLastTime.textContent = monthPrefix.concat(
			reportData[3].timeframes.monthly.previous.toString(),
			hoursPostfix
		)
	}
}

const loadSocial = tf => {
	socialTitle.textContent = reportData[4].title
	let timeFrame = reportData[4].timeframes
	if (tf === 0) {
		socialTime.textContent = timeFrame.daily.current.toString().concat(hoursPostfix)
		socialLastTime.textContent = dayPrefix.concat(reportData[4].timeframes.daily.previous.toString(), hoursPostfix)
	} else if (tf === 1) {
		socialTime.textContent = timeFrame.weekly.current.toString().concat(hoursPostfix)
		socialLastTime.textContent = weekPrefix.concat(reportData[4].timeframes.weekly.previous.toString(), hoursPostfix)
	} else {
		socialTime.textContent = timeFrame.monthly.current.toString().concat(hoursPostfix)
		socialLastTime.textContent = monthPrefix.concat(reportData[4].timeframes.monthly.previous.toString(), hoursPostfix)
	}
}

const loadSelfCare = tf => {
	selfCareTitle.textContent = reportData[5].title
	let timeFrame = reportData[5].timeframes
	if (tf === 0) {
		selfCareTime.textContent = timeFrame.daily.current.toString().concat(hoursPostfix)
		selfCareLastTime.textContent = dayPrefix.concat(reportData[5].timeframes.daily.previous.toString(), hoursPostfix)
	} else if (tf === 1) {
		selfCareTime.textContent = timeFrame.weekly.current.toString().concat(hoursPostfix)
		selfCareLastTime.textContent = weekPrefix.concat(reportData[5].timeframes.weekly.previous.toString(), hoursPostfix)
	} else {
		selfCareTime.textContent = timeFrame.monthly.current.toString().concat(hoursPostfix)
		selfCareLastTime.textContent = monthPrefix.concat(
			reportData[5].timeframes.monthly.previous.toString(),
			hoursPostfix
		)
	}
}

//listeners
document.addEventListener('DOMContentLoaded', fetchData)
btns.forEach(btn => {
	btn.addEventListener('click', reloadData)
})
