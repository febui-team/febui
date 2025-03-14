
import React from "react"
import { FIcon } from "#/base/icon/FIcon"
import { FebProps } from "@/types/component"

type Props = FebProps

export const FIconSettingOne = (props: Props) => {
  const path = {
    d: 'M598.248 87.055c7.008-13.274 22.329-19.91 36.834-15.895 70.935 19.638 135.858 56.15 189.558 106.088a32 32 0 0 1 6.91 37.582l-0.382 0.785c-6.187 12.846-9.443 26.95-9.443 41.584 0 53 42.96 95.964 95.95 95.964 0.447 0 0.894-0.003 1.338-0.01l0.433-0.003A32 32 0 0 1 950 375.562c13.867 44.152 21 90.398 21 137.566 0 31.276-3.135 62.165-9.307 92.342-3.284 16.057-18.17 27.038-34.48 25.435l-1.187-0.11a97.49 97.49 0 0 0-8.351-0.358c-52.99 0-95.95 42.965-95.95 95.965 0 22.986 8.066 44.643 22.572 61.837l0.314 0.377c10.24 12.518 9.535 30.754-1.714 42.445C788.107 888 719.492 930.05 643.53 952.669c-16.7 4.973-34.308-4.33-39.613-20.926l-0.385-1.179C590.584 891.79 554.12 865.04 512.5 865.04c-42.04 0-78.82 27.293-91.417 66.704l-0.163 0.496c-5.494 16.285-22.918 25.353-39.45 20.43C305.508 930.051 236.893 888 182.103 831.061c-11.364-11.81-11.968-30.296-1.4-42.823 14.505-17.193 22.572-38.85 22.572-61.836 0-53-42.96-95.965-95.95-95.965-3.196 0-6.377 0.157-9.538 0.468l-0.489 0.044c-16.118 1.338-30.74-9.582-33.991-25.48C57.135 575.294 54 544.405 54 513.129c0-47.17 7.133-93.415 21-137.566a32 32 0 0 1 30.986-22.408l0.669 0.007 0.67 0.002c52.99 0 95.95-42.964 95.95-95.964 0-14.932-3.39-29.314-9.826-42.37l-0.198-0.409a32 32 0 0 1 7.109-37.172c53.7-49.938 118.623-86.45 189.558-106.088 14.652-4.056 30.135 2.756 37.044 16.3l0.493 0.953c16.447 31.378 48.945 51.477 85.045 51.477 36.465 0 69.254-20.507 85.538-52.43z m42.294 52.764l-0.536 0.716c-29.722 39.224-76.471 63.355-127.506 63.355s-97.784-24.131-127.506-63.355l-0.537-0.716-0.975 0.335c-44.678 15.457-86.139 38.868-122.49 68.991l-0.849 0.706 0.074 0.237c4.543 14.76 6.945 30.216 7.054 45.984l0.004 1.127c0 80.394-59.301 146.937-136.545 158.264l-0.578 0.079-0.135 0.53c-7.81 30.884-11.873 62.818-12.017 95.314v1.742c0 17.557 1.145 34.958 3.409 52.13l0.243 1.817 1.381 0.124c80.105 7.81 142.894 74.713 144.22 156.558l0.022 2.645c0 27.91-7.193 54.757-20.479 78.367l0.409 0.374c36.616 33.299 79.17 59.486 125.483 77.047l0.478 0.179 0.837-1.463c27.673-47.828 78.96-79.108 136.397-79.853l2.1-0.014c58.867 0 111.529 32.088 139.328 81.322l0.005 0.008 0.479-0.179c46.313-17.56 88.867-43.748 125.483-77.047l0.409-0.375c-13.104-23.286-20.28-49.721-20.475-77.22l-0.004-1.146c0-83.044 63.276-151.31 144.242-159.203l1.379-0.124 0.245-1.818A399.207 399.207 0 0 0 907 515.008v-1.88c0-33.096-4.068-65.62-12.017-97.056l-0.136-0.53-0.577-0.08c-76.395-11.201-135.24-76.413-136.524-155.618l-0.021-2.645c0-16.158 2.407-32 7.058-47.111l0.073-0.237-0.848-0.706c-36.351-30.123-77.812-53.534-122.49-68.99l-0.976-0.336zM512.5 331.834c100.116 0 181.275 81.168 181.275 181.292S612.616 694.418 512.5 694.418 331.225 613.25 331.225 513.126 412.384 331.834 512.5 331.834z m0 64c-64.769 0-117.275 52.512-117.275 117.292S447.731 630.418 512.5 630.418s117.275-52.513 117.275-117.292c0-64.78-52.506-117.292-117.275-117.292z'
  }
  return (<FIcon name="setting-one" {...props} path={path}></FIcon>)
}