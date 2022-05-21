import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="cute kitten"
        height="160"
        src="http://placekitten.com/200/400"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Exercise explanation
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Video</Button>
        <Button size="small">Variation</Button>
      </CardActions>
    </Card>
  );
}
