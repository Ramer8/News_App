import { Card, CardActions, CardContent, CardMedia, Link, Grid, Typography } from '@mui/material'

const News = ({ news }) => {

    const { urlToImage, url, title, description, source } = news
    return (

        <Grid item md={6} lg={4}>

            <Card>
                {urlToImage && (
                    <CardMedia
                        component='img'
                        alt={`Notice Image ${title}`}
                        image={urlToImage}
                        height={'250'}
                    />
                )}
                <CardContent>
                    <Typography vairant='body1' color='error'>
                        {source.name}
                    </Typography>
                    <Typography vairant='h5' fontWeight="bold" component="div">
                        {title}
                    </Typography>
                    <Typography vairant='body2' fontSize={12}>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href={url}
                        target="_blank"
                        variant='button'
                        width={'100%'}
                        fontWeight={"extrabold"}
                        sx={{
                            textDecoration: 'none'
                        }}
                    >
                        Read Notice</Link>
                </CardActions>
            </Card>

        </Grid>

    )
}

export default News