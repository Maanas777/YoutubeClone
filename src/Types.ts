

export interface InitialState {
    videos: HomePageVideos[];
    currentPlaying: CurrentPlaying | null;
    searchTerm: string;
    searchResults: [];
    nextPageToken: string | null;
    recommendedVideos: RecommendedVideos[];
  }