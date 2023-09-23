import ErrorCodePage from "@/components/ErrorCodePage";

export default function NotFound() {
  const errorCodePageConfig = {
    errorCode: "404",
    errorText: "抱歉，你访问的页面不存在",
    homeUrl: "/home",
  };
  return <ErrorCodePage {...errorCodePageConfig} />;
}
