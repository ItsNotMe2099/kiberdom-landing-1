interface Props {
  className?: string
}

export default function XSvg(props: Props) {
  return (
    <svg className={props.className} width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.980255 6.58496L2.24341 3.52496L1.02236 0.584961H1.78026L2.79078 3.04496H3.16973L4.18025 0.584961H4.93815L3.7171 3.52496L4.98026 6.58496H4.22236L3.16973 3.94496H2.79078L1.73815 6.58496H0.980255Z" fill="white" />
    </svg>
  )
}

