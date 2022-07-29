import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MainCard(props) {
	const { name,image,rating } = props
  return (
	  <>
		<Card sx={{width: 345, margin:'20px'}}>
			<CardMedia
					component="img"
					height="140"
					image={image}
					alt="videogame image"
				/>
			<CardContent>
				<Typography variant='subtitle1' sx={{fontWeight:'bold'}}>
					{name}
				</Typography>
				<Typography variant='body2'>
					{rating}
				</Typography>
			</CardContent>
		</Card>
	  </>
	  
  )
}
