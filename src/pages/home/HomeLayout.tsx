import { memo } from "react";

export default memo(function HomeLayout() {
  return (
    <div className="p-4">
      <div className="text-2xl font-bold mb-4">HOME LAYOUT</div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Click me!</button>
    </div>
  );
});
