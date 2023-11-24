import {InitialState} from '../Types';
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";


const initialState: InitialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: [],
  };


  
const YoutubeSlice = createSlice({
    name: "youtubeApp",
    initialState,
    reducers: {
      clearVideos: (state) => {
        state.videos = [];
        state.nextPageToken = null;
      },
      changeSearchTerm: (state, action: PayloadAction<string>) => {
        state.searchTerm = action.payload;
      },
      clearSearchTerm: (state) => {
        state.searchTerm = "";
      }, 
    }})


    export const store = configureStore({
        reducer: {
          youtubeApp: YoutubeSlice.reducer,
        },
      });



      export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;