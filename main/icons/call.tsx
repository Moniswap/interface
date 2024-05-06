import { Icon } from "@/components/common";
import { IconProps } from "@/components/common/icon/types";

export const CallIcon = (props: IconProps) => (
  <Icon viewBox="0 0 16 16" {...props}>
    <g filter="url(#filter0_dd_1_5238)">
      <path
        d="M1.30126 5.15238C1.77485 2.86915 3.23203 1.59747 5.50498 1.2133C7.18522 0.929373 8.86608 0.925778 10.5435 1.22127C12.8838 1.63352 14.2907 2.97936 14.7389 5.29711C15.0852 7.08835 15.0906 8.89868 14.7335 10.6882C14.2544 12.9556 12.7596 14.3553 10.495 14.738C8.8148 15.0219 7.13394 15.0255 5.45652 14.73C3.11619 14.3178 1.70303 12.9047 1.25486 10.587C0.890924 8.78397 0.925942 6.96219 1.30126 5.15235V5.15238Z"
        fill="black"
      />
    </g>
    <path
      d="M1.30126 5.15238C1.77485 2.86915 3.23203 1.59747 5.50498 1.2133C7.18522 0.929373 8.86608 0.925778 10.5435 1.22127C12.8838 1.63352 14.2907 2.97936 14.7389 5.29711C15.0852 7.08835 15.0906 8.89868 14.7335 10.6882C14.2544 12.9556 12.7596 14.3553 10.495 14.738C8.8148 15.0219 7.13394 15.0255 5.45652 14.73C3.11619 14.3178 1.70303 12.9047 1.25486 10.587C0.890924 8.78397 0.925942 6.96219 1.30126 5.15235V5.15238Z"
      fill="currentColor"
    />
    <defs>
      <filter
        id="filter0_dd_1_5238"
        x="0.656073"
        y="0.781138"
        width="14.6879"
        height="14.6393"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="0.15633" />
        <feGaussianBlur stdDeviation="0.125064" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.078125 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_5238"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="0.125064" />
        <feGaussianBlur stdDeviation="0.171963" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.210824 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_1_5238"
          result="effect2_dropShadow_1_5238"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_1_5238"
          result="shape"
        />
      </filter>
    </defs>
  </Icon>
);
