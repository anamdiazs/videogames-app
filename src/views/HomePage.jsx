import {useState, useEffect, React} from 'react'
import { Typography, Box } from '@mui/material';
import MainCard from '../components/MainCard'

export default function HomePage() {
	const [gamesData, setGamesData] = useState([])

	useEffect(() => {
		getVideogames()
	}, [])
	

	const getVideogames = async() => {
		try{
			const response = await fetch('https://api.rawg.io/api/games?key=fc6b1ab84240461ba3482f37fee0dd16')
			const data = await response.json();
			setGamesData(data.results)
			// console.log('Games data from API...', gamesData)
		}catch(err){
			console.log(err)
		}
	}
  return (
	 <div style={{display:'flex', flexDirection:'column', backgroundColor:'#161616', alignContent:'center', justifyContent:'center'}}>
		 <Typography 
		 	variant='h4' 
			align='center'
			sx={{
				fontFamily:'Bungee Outline',
				fontWeight:'bold',
				color:'yellow',
				width:'35%',
				borderRadius:'8px'
			}}
		 >
			Platzi Gaming Arcade
		 </Typography>
		 <Box sx={{display:'flex', flexWrap:'wrap'}}>
			 {gamesData.map((el) =>{
				 return <MainCard name={el.name} image={el.background_image} rating={el.rating}/>
			 })}
		 </Box>
	 </div>
  )
}
