import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";
import { statusCodesT } from "./statusCode.types";

export interface NetworkFeedbackI {
    success: boolean,
    statusCode: statusCodesT,
    response: any,
}

export interface NetworkI {
    [url: string]: boolean | NetworkFeedbackI,
}

export interface SecondaryNetworksI {
    [url: string]: NetworkI,
}

export interface NetworkPropsI {
    axiosInstance: AxiosConfigT,
    secondaryAxiosInstances?: AxiosConfigT[],
}

export interface networkContextI  {
    network: NetworkI, 
    setNetwork: Dispatch<SetStateAction<NetworkI>>,
    numberOfPendingRequests: number,
    secondaryNetworks: SecondaryNetworksI,
    setSecondaryNetworks: Dispatch<SetStateAction<SecondaryNetworksI>>,
}

export type AxiosConfigT = AxiosInstance | AxiosInstanceI

export interface AxiosInstanceI {
    instance: AxiosInstance,
    onConfig?: (config: AxiosRequestConfig<any>) => AxiosRequestConfig<any>, 
    onConfigError?: (error: any) => any,
    onResponse?: (response: AxiosResponse<any, any>) => AxiosResponse<any, any>,
    onResponseError?: (error: any) => any,
}