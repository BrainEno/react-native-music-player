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
              TabTwoScreen: "two",
            },
          },
          TabThree: {
            screens: {
              TabTwoScreen: "three",
            },
          },
          TabFour: {
            screens: {
              TabTwoScreen: "four",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
