export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  首页: undefined;
  探索: undefined;
  乐库: undefined;
  我的: undefined;
};

export type TabOneParamList = {
  HomeScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  SearchScreen: undefined;
};

export type TabThreeParamList = {
  LibraryScreen: undefined;
};

export type TabFourParamList = {
  PremiumScreen: undefined;
};

export type Album = {
  id: string;
  imageUri: string;
  artistHeadline: string;
  name: string;
  by: string;
  numberOfLikes: number;
};

export type Song = {
  id: string;
  imageUri: string;
  title: string;
  artist: string;
  uri: string;
};
