import { StatusBar } from "expo-status-bar";
import {client} from "./src/index";
import React, { useState } from "react";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PlayerWidget } from "./components/PlayerWidget/PlayerWidget";
import useCachedResources from "./hooks/useCachedResources";
import { ApolloProvider } from "@apollo/client";
import {AppContext} from './AppContext';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [songId,setSongId]=useState<string|null>(null)

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ApolloProvider client={client}>
        <AppContext.Provider value={{
          songId,
          setSongId:(id:string)=>setSongId(id)
        }}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <PlayerWidget />
        </AppContext.Provider>
        </ApolloProvider>
      </SafeAreaProvider>
    );
  }
}
