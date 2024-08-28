/*
	========================================================================
	The 2022 r/place Atlas

	An atlas of Reddit's 2022 r/place, with information to each
	artwork	of the canvas provided by the community.

	Copyright (c) 2017 Roland Rytz <roland@draemm.li>
	Copyright (c) 2022 Place Atlas contributors

	Licensed under the GNU Affero General Public License Version 3
	https://place-atlas.stefanocoding.me/license.txt
	========================================================================
*/

let years = ["2022","2024"]

years.forEach(year => {
	const discordWrapperEl = document.querySelector(`#discord-contributors-wrapper-${year}`)
	fetch(`all-authors-${year}.txt`)
		.then(response => response.text())
		.then(text => text.trim().split(', ').sort())
		.then(contributors => {
			if(contributors != ""){
				document.querySelector(`#discord-contributors-count-${year}`).textContent = contributors.length
			}
			const userEl = document.createElement('p')
			for (const index in contributors) {
				contributor = contributors[index]
				if(userEl.innerText.length > 0) {
					userEl.innerText = userEl.innerText+', '+contributor
				}
				else {
					userEl.innerText = contributor
				}
			}
			discordWrapperEl.appendChild(userEl)
			discordWrapperEl.appendChild(document.createTextNode(' '))
		})
})