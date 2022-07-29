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
			const response = await fetch('https://videogamesapi.herokuapp.com/api/games', {mode:'no-cors'})
			const data = await response.json();
			console.log('Games data from API...', data)
		}catch(err){
			console.log(err)
		}
	}
  return (
	 <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
		 <Typography 
		 	variant='h4' 
			align='center'
			sx={{
				fontFamily:'Bungee Outline',
				fontWeight:'bold',
				color:'yellow',
				backgroundColor:'blue',
				width:'35%',
				borderRadius:'8px'
			}}
		 >
			Platzi Retro Arcade
		 </Typography>
		 <Box sx={{display:'flex'}}>
			<MainCard />
			<MainCard />
			<MainCard />
			<MainCard />
		 </Box>
	 </div>
  )
}
