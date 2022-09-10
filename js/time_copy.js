/*
	========================================================================
	The 2022 /r/place Atlas

	An atlas of Reddit's 2022 /r/place, with information to each
	artwork	of the canvas provided by the community.

	Copyright (c) 2017 Roland Rytz <roland@draemm.li>
	Copyright (c) 2022 Place Atlas contributors

	Licensed under the GNU Affero General Public License Version 3
	https://place-atlas.stefanocoding.me/license.txt
	========================================================================
*/

const variationsConfig = PLACEHOLDER_TIME
	//,
	//tfc: {
	//	name: "The Final Clean",
	//	code: "T",
	//	default: 0,
	//	drawablePeriods: [0, 0],
	//	versions: [
	//		{
	//			timestamp: "Final",
	//			url: "./img/canvas/tfc/final.png",
	//		},
	//	],
	//	icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192" aria-hidden="true"><defs><style>.a{fill-rule:evenodd;}</style></defs><path class="a" d="M69.79,83.55c-.47,.65-.59,1.35-.59,1.35-.26,1.47,.76,2.72,.92,3.12,2.84,7.1,4.49,13.93,3.97,16.39-.47,2.18-5.6,5.65-12.36,8.33-3.63,1.44-6.11,2.99-8.04,5.01-7.17,7.51-10.24,17.86-7.14,24.05,3.93,7.84,18.38,5.86,28.05-3.85,2.09-2.1,3.15-3.83,6.63-10.77,2.97-5.93,4.26-8.05,5.47-8.95,2.04-1.52,9.82,.1,17.41,3.64,1.71,.8,2.31,1.04,2.78,.98,0,0,.22-.05,.43-.14,1.31-.59,17.43-17,25.58-25.34-1.79,.09-3.57,.18-5.36,.28-2.84,2.63-5.68,5.27-8.52,7.9-10.85-10.85-21.7-21.71-32.55-32.56,1.73-1.8,3.46-3.6,5.18-5.4-.29-1.56-.57-3.12-.86-4.69-1.34,1.27-19.42,18.45-21.01,20.66Zm-10.45,44.57c2.5,0,4.53,2.03,4.53,4.53s-2.03,4.53-4.53,4.53-4.53-2.03-4.53-4.53,2.03-4.53,4.53-4.53Z"/><path class="f" d="M132.9,97.36c-.88,.22-7.88,1.92-9.91-1.04-1.11-1.62-1.05-4.71-.52-6.57,.74-2.59,.9-4.06,.25-4.73-.73-.76-2.03-.31-3.73-.18-3.4,.27-8.08-.86-9.6-3.16-2.77-4.21,4.48-13.03,2.31-14.69-.17-.13-.34-.16-.67-.22-4.24-.73-6.79,4.71-11.66,5.1-2.93,.24-6.21-1.39-7.72-4.02-1.11-1.94-1-3.96-.86-4.95h0s7.38-7.39,17.6-17.52c12.75,12.73,25.51,25.47,38.26,38.2l-13.75,13.79Z"/><polygon points="154 0 154 38 39 38 39 192 0 192 0 0"/><polygon points="192 38 192 192 77 192 77 153 154 153 154 38"/></svg>'
	//}
	// },
	// streamerless: {
	// 	name: "Streamerless",
	// 	code: "S",
	// 	default: 0,
	// 	drawablePeriods: [0, 0],
	// 	versions: [
	// 		{
	// 			timestamp: "Streamerless",
	// 			url: "./img/canvas/streamerless/streamerless.png",
	// 		},
	// 	],
	// 	icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192" aria-hidden="true"><path d="M-.07,0V192H191.93V38h-38V117.2l-28.5,28.8h-29.6l-24.89,25.2v-25.2H38.93V38h115V0H-.07Z"/><path d="M72.56,73.7l-7.64,7.64,7.87,7.87-7.87,7.87,7.64,7.64,7.87-7.87,7.87,7.87,7.63-7.64-7.87-7.87,7.87-7.87-7.63-7.64-7.87,7.87-7.87-7.87Z"/><path d="M137.39,73.7l-7.87,7.87-7.87-7.87-7.63,7.63,7.87,7.87-7.87,7.87,7.64,7.64,7.87-7.87,7.87,7.87,7.64-7.64-7.87-7.87,7.87-7.87-7.64-7.64Z"/></svg>'
	// }

const codeReference = {}
const imageCache = {}

const variantsEl = document.getElementById("variants")

for (const variation in variationsConfig) {
	codeReference[variationsConfig[variation].code] = variation
	const optionEl = document.createElement('option')
	optionEl.value = variation
	optionEl.textContent = variationsConfig[variation].name
	variantsEl.appendChild(optionEl)
}

const timelineSlider = document.getElementById("timeControlsSlider")
const timelineList = document.getElementById("timeControlsList")
const tooltip = document.getElementById("timeControlsTooltip")
const image = document.getElementById("image")
let abortController = new AbortController()
let currentUpdateIndex = 0
let updateTimeout = setTimeout(null, 0)
let tooltipDelayHide = setTimeout(null, 0)

let currentVariation = "default"
const defaultPeriod = variationsConfig[currentVariation].default
const defaultVariation = currentVariation
let currentPeriod = defaultPeriod
window.currentPeriod = currentPeriod
window.currentVariation = currentVariation

// SETUP
timelineSlider.max = variationsConfig[currentVariation].versions.length - 1
timelineSlider.value = currentPeriod
timelineList.children[0].value = defaultPeriod

timelineSlider.addEventListener("input", (e) => timelineParser(e.target.value))

timelineSlider.addEventListener("wheel", function (e) {
	if (e.deltaY < 0) {
		this.valueAsNumber += 1;
		timelineParser(this.value)
	} else {
		this.value -= 1;
		timelineParser(this.value)
	}
	e.stopPropagation();
}, { passive: true })

function timelineParser(value) {
	updateTooltip(parseInt(value), currentVariation)
	clearTimeout(updateTimeout)
	updateTimeout = setTimeout(() => {
		updateTime(parseInt(timelineSlider.value), currentVariation)
		setTimeout(() => {
			if (timelineSlider.value != currentPeriod && abortController.signal.aborted) {
				updateTime(parseInt(timelineSlider.value), currentVariation)
			}
		}, 50)
	}, 25)
}

variantsEl.addEventListener("input", (event) => {
	updateTime(-1, event.target.value)
})

const dispatchTimeUpdateEvent = (period = timelineSlider.value, atlas = atlas) => {
	const timeUpdateEvent = new CustomEvent('timeupdate', {
		detail: {
			period: period,
			atlas: atlas
		}
	})
	document.dispatchEvent(timeUpdateEvent)
}

async function updateBackground(newPeriod = currentPeriod, newVariation = currentVariation) {
	abortController.abort()
	abortController = new AbortController()
	currentUpdateIndex++
	const myUpdateIndex = currentUpdateIndex
	const variationConfig = variationsConfig[newVariation]

	variantsEl.value = currentVariation
	if (variationConfig.icon) {
		variantsEl.previousElementSibling.innerHTML = variationConfig.icon
		variantsEl.previousElementSibling.classList.remove('d-none')
		variantsEl.parentElement.classList.add('input-group')
	} else {
		variantsEl.previousElementSibling.innerHTML = ""
		variantsEl.previousElementSibling.classList.add('d-none')
		variantsEl.parentElement.classList.remove('input-group')
	}

	const configObject = variationConfig.versions[currentPeriod]
	if (typeof configObject.url === "string") {
		if (imageCache[configObject.url] === undefined) {
			const fetchResult = await fetch(configObject.url, {
				signal: abortController.signal
			})
			if (currentUpdateIndex !== myUpdateIndex) {
				return [configObject, newPeriod, newVariation]
			}
			const imageBlob = await fetchResult.blob()
			imageCache[configObject.url] = URL.createObjectURL(imageBlob)
			console.log(fetchResult)
		}
		image.src = imageCache[configObject.url]
	} else {
		const canvas = document.createElement('canvas')
		const context = canvas.getContext('2d')
		context.canvas.width = 700
		context.canvas.height = 700
		await Promise.all(configObject.url.map(async url => {
			if (imageCache[url] === undefined) {
				const fetchResult = await fetch(url, {
					signal: abortController.signal
				})
				if (currentUpdateIndex !== myUpdateIndex) {
					return
				}
				const imageBlob = await fetchResult.blob()
				imageCache[url] = URL.createObjectURL(imageBlob)
			}
		}))
		for await (const url of configObject.url) {
			const imageLayer = new Image()
			await new Promise(resolve => {
				imageLayer.onload = () => {
					context.drawImage(imageLayer, 0, 0)
					resolve()
				}
				imageLayer.src = imageCache[url]
			})
		}

		if (currentUpdateIndex !== myUpdateIndex) return [configObject, newPeriod, newVariation]
		const blob = await new Promise(resolve => canvas.toBlob(resolve))
		image.src = URL.createObjectURL(blob)
	}
}

async function updateTime(newPeriod = currentPeriod, newVariation = currentVariation, forcePeriod = false) {
	document.body.dataset.canvasLoading = ""

	if (!variationsConfig[newVariation]) newVariation = defaultVariation
	const variationConfig = variationsConfig[newVariation]

	if (newPeriod < 0) newPeriod = 0
	else if (newPeriod > variationConfig.versions.length - 1) newPeriod = variationConfig.versions.length - 1

	currentPeriod = newPeriod
	if (currentVariation !== newVariation) {
		currentVariation = newVariation
		timelineSlider.max = variationConfig.versions.length - 1
		if (!forcePeriod) {
			currentPeriod = variationConfig.default
			newPeriod = currentPeriod
		}
		if (variationConfig.versions.length === 1) bottomBar.classList.add('no-time-slider')
		else bottomBar.classList.remove('no-time-slider')
	}
	timelineSlider.value = currentPeriod
	updateTooltip(newPeriod, newVariation)

	await updateBackground(newPeriod, newVariation)

	atlas = []
	for (const atlasIndex in atlasAll) {
		let chosenIndex

		const validPeriods2 = Object.keys(atlasAll[atlasIndex].path)

		for (const i in validPeriods2) {
			const validPeriods = validPeriods2[i].split(', ')
			for (const j in validPeriods) {
				const [start, end, variation] = parsePeriod(validPeriods[j])
				if (isOnPeriod(start, end, variation, newPeriod, newVariation)) {
					chosenIndex = i
					break
				}
			}
			if (chosenIndex !== undefined) break
		}

		if (chosenIndex === undefined) continue
		const pathChosen = Object.values(atlasAll[atlasIndex].path)[chosenIndex]
		const centerChosen = Object.values(atlasAll[atlasIndex].center)[chosenIndex]

		if (pathChosen === undefined) continue

		atlas.push({
			...atlasAll[atlasIndex],
			path: pathChosen,
			center: centerChosen,
		})
	}

	dispatchTimeUpdateEvent(newPeriod, atlas)
	delete document.body.dataset.canvasLoading
	tooltip.dataset.forceVisible = ""
	clearTimeout(tooltipDelayHide)
	tooltipDelayHide = setTimeout(() => {
		delete tooltip.dataset.forceVisible
	}, 1000)

}

function updateTooltip(newPeriod, newVariation) {
	const configObject = variationsConfig[newVariation].versions[newPeriod]

	// If timestap is a number return a UTC formatted date otherwise use exact timestap label
	if (typeof configObject.timestamp === "number") tooltip.querySelector('div').textContent = new Date(configObject.timestamp * 1000).toString()
	else tooltip.querySelector('div').textContent = configObject.timestamp

	// Clamps position of tooltip to prevent from going off screen
	const timelineSliderRect = timelineSlider.getBoundingClientRect()
	let min = -timelineSliderRect.left + 12
	let max = (window.innerWidth - tooltip.offsetWidth) - timelineSliderRect.left + 4
	tooltip.style.left = Math.min(Math.max((timelineSlider.offsetWidth) * (timelineSlider.value) / (timelineSlider.max) - tooltip.offsetWidth / 2, min), max) + "px"
}

tooltip.parentElement.addEventListener('mouseenter', () => updateTooltip(parseInt(timelineSlider.value), currentVariation))

window.addEventListener('resize', () => updateTooltip(parseInt(timelineSlider.value), currentVariation))

function isOnPeriod(start, end, variation, currentPeriod, currentVariation) {
	if (start > end) [start, end] = [end, start]
	return currentPeriod >= start && currentPeriod <= end && variation === currentVariation
}

function parsePeriod(periodString) {
	let variation = defaultVariation
	periodString = periodString + ""
	if (periodString.split(':').length > 1) {
		const split = periodString.split(':')
		variation = codeReference[split[0]]
		periodString = split[1]
	}
	if (periodString.search('-') + 1) {
		let [start, end] = periodString.split('-').map(i => parseInt(i))
		if (start > end) [start, end] = [end, start]
		return [start, end, variation]
	} else if (codeReference[periodString]) {
		variation = codeReference[periodString]
		const defaultPeriod = variationsConfig[variation].default
		return [defaultPeriod, defaultPeriod, variation]
	} else {
		const periodNew = parseInt(periodString)
		return [periodNew, periodNew, variation]
	}
}

function formatPeriod(start, end, variation) {
	let periodString, variationString
	variationString = variationsConfig[variation].code
	if (start > end) [start, end] = [end, start]
	if (start === end) {
		if (start === variationsConfig[variation].default && variation !== defaultVariation) {
			periodString = ""
		}
		else periodString = start
	}
	else periodString = start + "-" + end
	if (periodString && variationString) return variationsConfig[variation].code + ":" + periodString
	if (variationString) return variationString
	return periodString
}