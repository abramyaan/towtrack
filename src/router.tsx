import { QueryClient } from "@tanstack/react-query";
import { createRouter, createHashHistory } from "@tanstack/react-router";
// 1. Исправили путь импорта на .gen
import { routeTree } from "./routeTree.gen.ts"; 

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    // 2. Привели к any, чтобы обойти ошибку несоответствия типов при перегенерации
    routeTree: routeTree as any, 
    history: createHashHistory(),
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};