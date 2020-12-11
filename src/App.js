import React from "react";
import { Prisma } from "./Prisma";
import { code2 } from "./utility";
const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`;
export const App = () => {
  return <Prisma code={code2} language="js" plugins={["line-numbers"]} />;
};
