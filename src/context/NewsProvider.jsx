import axios from "axios";
import { useEffect, useState, createContext } from "react";

const NewsContext = createContext()

const NewsProvider = ({ children }) => {

    const [category, setCategory] = useState('general')
    const [news, setNews] = useState([])
    const [country, setCountry] = useState('ar')
    const [page, setPage] = useState(1)
    const [totalNews, setTotalNews] = useState(0)

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }
    const handleChangeCountry = e => {
        setCountry(e.target.value)
    }
    const handleChangePage = (e, valor) => {
        setPage(valor)
    }

    useEffect(() => {
        const consultAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNews(data.articles)
            setTotalNews(data.totalResults)
            setPage(1)
        }
        consultAPI()
    }, [category, country])

    useEffect(() => {
        const consultAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNews(data.articles)
            setTotalNews(data.totalResults)

        }
        consultAPI()
    }, [page])

    return (
        <NewsContext.Provider
            value={{
                category,
                handleChangeCategory,
                handleChangeCountry,
                handleChangePage,
                news,
                totalNews,
                page
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}
export { NewsProvider }
export default NewsContext