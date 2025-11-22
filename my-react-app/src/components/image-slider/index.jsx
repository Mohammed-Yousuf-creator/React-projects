import { useState, useEffect } from "react"
import 'C:\\Users\\Mohammed Yousuf\\Desktop\\Website\\my-react-app\\src\\components\\image-slider\\styles.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [Images, setImages] = useState([]);
    const [CurrentSlide, setCurrentSlide] = useState(0);
    const [ErrorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(GetUrl) {
        try {
            setLoading(true)
            const response = await fetch(`${GetUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImages(data)
                setLoading(false)
            }
        }
        catch (e) {
            setErrorMsg(e.message);
            setLoading(false)
        }

    }
    useEffect(() => {
        if (url != "") fetchImages(url)
    },[url])
    function handleprevious() {
        setCurrentSlide(CurrentSlide === 0 ? Images.length - 1 : CurrentSlide - 1)
    }
    function handlenext() {
        setCurrentSlide(CurrentSlide === Images.length - 1 ? 0 : CurrentSlide + 1)
    }
    if (loading) {
        return <div>Loading data</div>
    }
    if (ErrorMsg) {
        return <div>Error occured ! {ErrorMsg.message}</div>
    }


    return <div className="container">
        <BsArrowLeftCircleFill onClick={handleprevious} className="arrow arrow-left" />
        {
            Images && Images.length !== 0 ? Images.map((ImageItem, index) => (
                <img
                    key={ImageItem.id}
                    alt={ImageItem.download_url}
                    src={ImageItem.download_url}
                    className={CurrentSlide === index ? "current-image" : "current-image hide-current-image"}
                />
            )) : null
        }
        <BsArrowRightCircleFill onClick={handlenext} className="arrow arrow-right" />
        <span className="circle-indicators">
            {
                Images && Images.length ? Images.map((_, index) =>
                    <button
                        onClick={()=>setCurrentSlide(index)}
                        key={index}
                        className={CurrentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}>
                    </button>) : null
            }
        </span>
    </div>
}