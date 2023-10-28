import { useNavigate } from 'react-router-dom';

interface Props {
  width?: number | string;
  height?: number | string;
  color?: string;
}

// TODO - Validar
export default function Logo({ width, height, color }: Props) {
  const widthNotNullable = width ?? '192';
  const heightNotNullable = height ?? '34';
  const colorNotNullable = color ?? '#000000';
  const navigate = useNavigate();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={widthNotNullable}
      height={heightNotNullable}
      fill="none"
      viewBox="0 0 192 34"
      onClick={() => navigate(`/home`)}
    >
      <path
        fill={colorNotNullable}
        fillRule="evenodd"
        d="M0 16.946V33.89h17.548V20.54h22.71V33.891h18.58V0h-18.58v12.324h-22.71V0H0v16.946zm66.58-15.76c-4.11 2.237-4.645 4.001-4.645 15.358 0 6.06.29 11.765.642 12.68 1.562 4.05 5.497 4.667 29.758 4.667h23.278V27.73H99.181c-9.037 0-17.166-.28-18.064-.623-.968-.37-1.633-1.833-1.633-3.595v-2.97H115.613V12.323H79.347l.327-2.824L80 6.676l17.806-.282 17.807-.28V0L92.129.03c-14.995.021-24.23.438-25.548 1.156zm53.162 13.546c0 20.02-2.116 18.558 27.461 18.957l23.12.311v-6.271h-15.794c-10.908 0-16.176-.38-17.032-1.232-.829-.825-1.239-5.41-1.239-13.865V0h-16.516v14.732zm54.71 2.214V33.89H192V0h-17.548v16.946z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
