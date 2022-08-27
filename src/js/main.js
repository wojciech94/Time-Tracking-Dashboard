let data
// data
//     --title
//     --timeframes
//                 --daily
//                        --current
//                        --previous
//                 --weekly
//                         --current
//                         --previous
//                 --monthly
//                          --current
//                          --previous
fetch('data.json')
	.then(response => response.json())
	.then(datas => {
		data = datas
		console.log(data[0].title)
		console.log(data[0].timeframes.daily.current)
	})
