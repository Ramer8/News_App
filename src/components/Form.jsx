import { FormControl, InputLabel, Select, MenuItem, Box, Grid } from '@mui/material'
import useNews from '../hooks/useNews'

const CATEGORIAS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertaiment' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' },
]

const COUNTRY = [
    { value: "ar", label: 'Argentina' },
    { value: "us", label: 'United States' },
    { value: "mx", label: 'Mexico' },
    { value: "br", label: 'Brazil' },
    { value: "co", label: 'Colombia' },
    { value: "it", label: 'Italy' },
]
const Form = () => {
    const { category, handleChangeCategory, country, handleChangeCountry } = useNews()

    return (
        <form>
            <Grid >
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                        label="Category"
                        onChange={handleChangeCategory}
                        value={category}>

                        {CATEGORIAS.map(category => (
                            <MenuItem
                                key={category.value}
                                value={category.value}>
                                {category.label}
                            </MenuItem>
                        ))}
                    </Select>

                </FormControl>
                <Grid>
                    <Box sx={{ marginTop: 2 }}></Box>
                    <FormControl fullWidth>
                        <InputLabel>Country</InputLabel>
                        <Select
                            label="Country"
                            onChange={handleChangeCountry}
                            value={country}>
                            {COUNTRY.map(country => (
                                <MenuItem
                                    key={country.value}
                                    value={country.value}>
                                    {country.label}
                                </MenuItem>
                            ))}
                        </Select>

                    </FormControl>
                </Grid>

            </Grid>

        </form>
    )
}

export default Form