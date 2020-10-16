import React from "react";
import { useQuery } from "@apollo/client";
export function useLazyQuery1(query, options) {
  const ref = React.useRef();

  const [variables, runQuery] = React.useState(false);

  ref.current = useQuery(query, {
    ...options,
    variables,
    skip: !variables,
  });

  const runner = (variables) => {
    runQuery(variables);
  };

  return [runner, ref.current];
}
