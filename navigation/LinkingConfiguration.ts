import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              HomeScreen: "one",
            },
          },
          TabTwo: {
            screens: {
              SearchScreen: "two",
            },
          },
          TabThree: {
            screens: {
              LibaryScreen: "three",
            },
          },
          TabFour: {
            screens: {
              PremuimScreen: "four",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
