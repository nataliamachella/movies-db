import React from "react";
import HeroSlide from "../components/common/HeroSlide";
import tmdbconfig from "../api/config/tmdb.config";
import { Box } from "@mui/material";
import uiconfig from "../config/ui.config";
import Container from "../components/common/Container";
import MediaSlide from "../components/common/MediaSlide";

const HomePage = () => {
  return (
    <>
      <HeroSlide
        mediaType={tmdbconfig.mediaType.movie}
        mediaCategory={tmdbconfig.mediaCategory.popular}
      />

      <Box marginTop="-4rem" sx={{ ...uiconfig.style.mainContent }}>
        <Container header="popular movies">
          <MediaSlide
            mediaType={tmdbconfig.mediaType.movie}
            mediaCategory={tmdbconfig.mediaCategory.popular}
          />
        </Container>

        <Container header="popular series">
          <MediaSlide
            mediaType={tmdbconfig.mediaType.tv}
            mediaCategory={tmdbconfig.mediaCategory.popular}
          />
        </Container>

        <Container header="top rated movies">
          <MediaSlide
            mediaType={tmdbconfig.mediaType.movie}
            mediaCategory={tmdbconfig.mediaCategory.top_rated}
          />
        </Container>

        <Container header="top rated series">
          <MediaSlide
            mediaType={tmdbconfig.mediaType.tv}
            mediaCategory={tmdbconfig.mediaCategory.top_rated}
          />
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
