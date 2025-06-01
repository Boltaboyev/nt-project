import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "..";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const navigate = useNavigate()
export const useLoginMutation = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data) =>
      request
        .post("/auth", {
          ...data,
        })
        .then((res) => res.data.data),
    onSuccess(data) {
      cookie.set("token", data.token);
      cookie.set("user", JSON.stringify(data));
      toast.success("Tizimga kirdingiz");
      navigate("/")
    },
    onError(err) {
      toast.error(`Xatolik ${err?.response?.data?.message}`);
    },
  });
};

// Managerlarni backendan  olish uchun mutation
export const useLogOutMutation = () => {
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => {
      return ((resolve) => {
        cookie.remove("token");
        cookie.remove("user");
        resolve();
      });
    },
    onSuccess() {
      toast.success("Tizimdan chiqdingiz");
      navigate("login");
    },
    onError(err) {
      toast.error(`Xatolik ${err?.response?.data?.message}`);
    },
  });
};