import React from 'react'
import { Grid, Typography, Pagination, Stack } from '@mui/material'
import useNews from '../hooks/useNews'
import News from './News'

const NewsList = () => {
    const { news, totalNews, handleChangePage, page } = useNews()
    const totalPages = Math.ceil(totalNews / 20)
    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant='h3'
                component='h2'
                fontWeight={'bold'}
                color={"secondary"}>
                Latest News
            </Typography>
            <Grid container spacing={2}
            >
                {news.map(notice => (
                    <News
                        key={notice.url}
                        news={notice}
                    />
                )
                )}
            </Grid>
            <Stack
                sx={{
                    marginY: 5
                }}
                spacing={2}
                direction={"row"}
                justifyContent='center'
                alignItems={"center"}>
                <Pagination
                    count={totalPages}
                    color="primary"
                    onChange={handleChangePage}
                    page={page} />
            </Stack>


        </>
    )
}

export default NewsList