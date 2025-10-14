import { Toaster } from "react-hot-toast";

const Notification = () => {
  return (
    <Toaster
      position="top-right"
      containerStyle={{
        top: "80px",
        right: "16px",
        fontSize: "1rem",
      }}
      toastOptions={{
        duration: 4000,
        style: {
          background: "white",
          color: "#374151",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
        },
        success: {
          style: {
            color: "#059669",
            border: "1px solid #a7f3d0",
          },
        },
        error: {
          style: {
            color: "#dc2626",
            border: "1px solid #fecaca",
          },
        },
      }}
    />
  );
};

export default Notification;
