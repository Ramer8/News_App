import { Container, Grid, Typography } from '@mui/material'
import Form from './components/Form.jsx'
import NewsList from './components/NewsList.jsx'
import { NewsProvider } from './context/NewsProvider'
function App() {

  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} fontWeight={"bold"} component='h1' variant='h3' color={"primary"}>
            News App
          </Typography>
        </header>

        <Grid container
          direcction="row"
          justifyContent="center"
          alignItems="center">

          <Grid item md={6} xs={12} lg={4}>
            <Form />
          </Grid>
        </Grid>
        <NewsList />
      </Container>
    </NewsProvider>
  )
}

export default App
