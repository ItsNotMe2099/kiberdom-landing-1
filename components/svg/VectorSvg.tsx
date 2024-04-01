interface Props {
  className?: string
}

export default function VectorSvg(props: Props) {
  return (
    <svg className={props.className} width="296" height="6" viewBox="0 0 296 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.834518 3.00003L3.72127 5.88678L6.60802 3.00003L3.72127 0.113275L0.834518 3.00003ZM3.72127 3.50003L295.249 3.49998L295.249 2.49998L3.72127 2.50003L3.72127 3.50003Z" fill="#1B1B1B" />
    </svg>
  )
}

