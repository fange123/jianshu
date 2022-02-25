// codes from https://react.docschina.org

//https://juejin.cn/post/6844903760028762125

import { lazy, Suspense } from "react";
const ShowComponent = lazy(() => import("./indexLazy"));

const Detail = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShowComponent />
    </Suspense>
  );
};

export default Detail;
