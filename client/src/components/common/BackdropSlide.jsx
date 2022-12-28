import { Box } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import tmdbconfig from "../../api/config/tmdb.config";
import NavigationSwiper from "./NavigationSwiper";

const BackdropSlide = ({ backdrops }) => {
  return (
    <NavigationSwiper>
      {[...backdrops].splice(0, 10).map((item, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              paddingTop: "60%",
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundImage: `url(${tmdbconfig.backdropPath(
                item.file_path
              )})`,
            }}
          />
        </SwiperSlide>
      ))}
    </NavigationSwiper>
  );
};

export default BackdropSlide;
