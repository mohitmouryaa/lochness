import { memo } from "react";

export default memo(function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-7xl">PAGE NOT FOUND</div>
    </div>
  );
});
