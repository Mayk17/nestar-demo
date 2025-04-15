import { Box, Stack } from "@mui/material";
import { useState } from "react"
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper } from "swiper/types";



const TrendProperties = () => {
    const [TrendProperties, setTrendProperties] = useState<number[]>([
        1, 2, 3, 4, 5, 6, 7,
    ]);

    return (
        <Stack className={"trend-properties"}>
            <Stack className={"container"}>
                <Stack className={"info-box"}>
                    <Box className= {"left"}>
                        <span>Trend Properties</span>
                        <p> Trend is based on likes</p>
                    </Box>
                    <Box className= {"right"}>
                        <div className={"pagination-box"}>
                            <WestIcon className={"swiper-trend-prev"} />
                            <div className={"swiper-trend-pagination"}></div>
                            <EastIcon className= {"swiper-trend-next"} />
                        </div>
                    </Box>
                </Stack>
                <Stack className={"card-box"}>
                    {TrendProperties.length === 0 ? (
                        <Box className={"empty-list"}>Trends Empty</Box>
                    ):(
                        <Swiper
                            className

                    )}

                </Stack>
            </Stack>
        </Stack>
    )
}