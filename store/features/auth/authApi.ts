import { LoginPayload, LoginResponseData } from "@/schema/auth";
import { baseApi } from "@/store/api/baseApi";


export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponseData, LoginPayload>({
            query: (payload) => ({
                url: "/auth/login",
                method: "POST",
                body: payload
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;