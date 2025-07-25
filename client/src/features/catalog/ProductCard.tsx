import React from 'react'
import type { Product } from '../../app/models/product';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
    product: Product;
}
export default function ProductCard({product}: Props) {
  return (
    <Card elevation={3} sx={{width: 280, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>

        <CardMedia 
            sx={{height: 240, backgroundSize: 'cover'}}
            image={product.pictureUrl}
            title={product.name}    
        />

        <CardContent>
            <Typography gutterBottom sx={{textTransform: 'uppercase'}} variant='subtitle2'>{product.name}</Typography>
            <Typography gutterBottom sx={{color: 'secondary.main'}} variant='h6'>${(product.price / 100).toFixed(2)}</Typography>

        </CardContent>

        <CardActions sx={{justifyContent: 'space-between'}}>
            <Button>Add to Card</Button>
            <Button component={Link} to={`/catalog/${product.id}`}>View</Button>
        </CardActions>

    </Card>
  )
}
