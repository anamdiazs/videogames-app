import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MainCard() {
  return (
	  <>
		<Card sx={{maxWidth: 345, margin:'20px'}}>
			<CardMedia
					component="img"
					height="140"
					image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-zYZUZklyHQY%2FXYVx7Ee8sFI%2FAAAAAAAAb0o%2FmRt0LxKa6Jc8wlzRUeEIkH-MsRbg7p-jQCLcBGAsYHQ%2Fs2560%2FMiles-Morales-4k-2880x11600.jpg&f=1&nofb=1"
					alt="spiderman"
				/>
			<CardContent>
				<Typography variant='subtitle1'>
					Spiderman: Miles-Morales
				</Typography>
				<Typography variant='body2'>
					Spiderman Miles Morales se lleva a cabo en NYC
				</Typography>
			</CardContent>
		</Card>
	  </>
	  
  )
}
