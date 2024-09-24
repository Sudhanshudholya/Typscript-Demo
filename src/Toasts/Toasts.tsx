import { toast } from "react-toastify";

interface toasts {
  successMsg: (msg: string) => void;
  errorMsg: (msg: string) => void;
}

const toasts: toasts = {
  successMsg: (msg: string) => {
    toast.success(msg);
  },
  errorMsg: (msg: string) => {
    toast.error(msg);
  },
};

export default toasts;
